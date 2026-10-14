import { readFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";

const endpoint = "https://api.indexnow.org/indexnow";

export function sitemapUrls(xml, host) {
  const urls = [...xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map((match) => match[1].trim().replaceAll("&amp;", "&"));
  if (!urls.length) throw new Error("The live sitemap contains no URLs.");
  for (const value of urls) {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.host !== host || url.username || url.password) throw new Error("Sitemap contains a URL outside the production site.");
  }
  return [...new Set(urls)];
}

async function get(url, fetcher) {
  const response = await fetcher(url, { signal: AbortSignal.timeout(30000), redirect: "error" });
  if (!response.ok) throw new Error(`Could not fetch ${new URL(url).pathname}: HTTP ${response.status}`);
  return response;
}

export async function notify({ host, key }, extraUrls = [], fetcher = fetch) {
  if (host !== "northstarlegislative.org" || !/^[a-zA-Z0-9-]{8,128}$/.test(key)) throw new Error("Invalid IndexNow configuration.");
  const origin = `https://${host}`;
  const keyLocation = `${origin}/${key}.txt`;
  const servedKey = await (await get(keyLocation, fetcher)).text();
  if (servedKey.trim() !== key) throw new Error("The production verification file does not match the IndexNow key.");
  const xml = await (await get(`${origin}/sitemap.xml`, fetcher)).text();
  const currentUrls = sitemapUrls(xml, host);
  const urlList = [...new Set([...currentUrls, ...extraUrls])];
  for (const value of urlList) {
    const url = new URL(value);
    if (url.origin !== origin || url.username || url.password) throw new Error("Notification contains a URL outside the production site.");
  }
  // Check current pages; extra URLs may intentionally describe deleted content.
  for (const url of currentUrls) {
    const response = await get(url, fetcher);
    const html = await response.text();
    if (!(response.headers.get("content-type") ?? "").includes("text/html")) throw new Error(`Page is not HTML: ${url}`);
    if (/noindex/i.test(response.headers.get("x-robots-tag") ?? "") || /<meta\b(?=[^>]*name=["'](?:robots|bingbot)["'])(?=[^>]*content=["'][^"']*noindex)[^>]*>/i.test(html)) throw new Error(`Page blocks indexing: ${url}`);
  }
  const response = await fetcher(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host, key, keyLocation, urlList }),
    signal: AbortSignal.timeout(30000),
    redirect: "error",
  });
  if (response.status !== 200 && response.status !== 202) throw new Error(`IndexNow rejected the notification: HTTP ${response.status}`);
  return { status: response.status, submitted: urlList.length, checked: currentUrls.length, keyValidationPending: response.status === 202 };
}

function previousProfileUrls(host) {
  try {
    const source = execFileSync("git", ["show", "HEAD^:data/team.ts"], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
    return [...source.matchAll(/slug:\s*["']([^"']+)["']/g)].map((match) => `https://${host}/team/${match[1]}`);
  } catch {
    return [];
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const config = JSON.parse(await readFile(new URL("../indexnow.config.json", import.meta.url), "utf8"));
    const result = await notify(config, [...previousProfileUrls(config.host), ...process.argv.slice(2)]);
    console.log(JSON.stringify(result));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
