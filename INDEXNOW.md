# IndexNow

The root verification text file and `indexnow.config.json` configure IndexNow for
`https://northstarlegislative.org`. The verification key is public by protocol;
no account API credentials are required.

After Vercel reports a successful **Production** deployment, the GitHub workflow
checks that the public key and sitemap are accessible, checks current pages for
HTTP errors and indexing restrictions, then submits the sitemap URLs to IndexNow.
It also includes team URLs from the preceding commit so removed profiles can be
reported. Preview and failed deployments do not submit notifications.

Run `node scripts/indexnow.mjs` to submit the live site manually. Additional
removed or redirected URLs can be passed as arguments. All URLs must belong to
the production domain. Run `node --test scripts/indexnow.test.mjs` for validation.

The workflow can also be run manually on `main` from GitHub Actions. Its logs
report the response status and URL count. HTTP 200 confirms receipt; HTTP 202
confirms receipt with key verification pending. Neither proves indexing.

Use Bing Webmaster Tools URL Inspection and Sitemaps to check actual crawl and
indexing status. The sitemap remains available for Google and other crawlers.
