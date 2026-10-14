import test from "node:test";
import assert from "node:assert/strict";
import { notify, sitemapUrls } from "./indexnow.mjs";

const config = { host: "northstarlegislative.org", key: "12345678abcdef12" };
const page = `https://${config.host}/team/arjun-rana`;
function fakeFetch({ key = config.key, html = "<h1>Arjun Rana</h1>", status = 200 } = {}) {
  const calls = [];
  const fetcher = async (url, options = {}) => {
    calls.push({ url, options });
    if (options.method === "POST") return new Response(null, { status });
    if (url.endsWith(".txt")) return new Response(key);
    if (url.endsWith("sitemap.xml")) return new Response(`<urlset><url><loc>${page}</loc></url></urlset>`);
    return new Response(html, { headers: { "content-type": "text/html" } });
  };
  return { calls, fetcher };
}

test("rejects off-site and empty sitemaps", () => {
  assert.throws(() => sitemapUrls("<loc>https://other.example/</loc>", config.host));
  assert.throws(() => sitemapUrls("<urlset/>", config.host));
});
test("checks the key and live page before sending current and removed URLs", async () => {
  const { calls, fetcher } = fakeFetch();
  const removed = `https://${config.host}/team/kaashyap-rajesh`;
  const result = await notify(config, [removed], fetcher);
  assert.equal(result.submitted, 2);
  const payload = JSON.parse(calls.at(-1).options.body);
  assert.deepEqual(payload.urlList, [page, removed]);
  assert.equal(payload.keyLocation, `https://${config.host}/${config.key}.txt`);
});
test("stops notifications when the key mismatches or the page blocks indexing", async () => {
  for (const options of [{ key: "wrong" }, { html: '<meta content="noindex" name="robots">' }]) {
    const { calls, fetcher } = fakeFetch(options);
    await assert.rejects(notify(config, [], fetcher));
    assert.ok(calls.every((call) => call.options.method !== "POST"));
  }
});
test("reports pending key validation and rejects API failures", async () => {
  const result = await notify(config, [], fakeFetch({ status: 202 }).fetcher);
  assert.equal(result.keyValidationPending, true);
  await assert.rejects(notify(config, [], fakeFetch({ status: 403 }).fetcher), /HTTP 403/);
});
