# Future SEAS custom domain

The launch URL is `https://harvardeconcsseminar.github.io`. Keep it until Harvard/SEAS approves a seminar-owned hostname.

After approval:

1. Ask the appropriate Harvard/SEAS web or DNS administrator to confirm the exact hostname and ownership process.
2. Verify the domain in the `HarvardEconCSSeminar` GitHub organization before adding it to Pages.
3. Point the hostname’s DNS `CNAME` record to `harvardeconcsseminar.github.io` (without a path).
4. Add `public/CNAME` containing only the approved hostname.
5. Change `canonicalUrl` in `src/data/site.json` and `site` in `astro.config.mjs` to the final HTTPS URL.
6. In repository **Settings → Pages**, enter the custom domain and enable **Enforce HTTPS** after GitHub issues the certificate.
7. Re-run the production checklist: canonical links, all talk pages, master and individual calendar URLs, mailing-list link, redirects, and HTTPS.

Do not guess a Harvard hostname or publish an unofficial Harvard signature. Add an official, unmodified Harvard/SEAS identity asset only after approval and according to its usage rules.
