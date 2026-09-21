# Domain and GitHub Pages setup

The site is published from:

`https://github.com/lay162/Bounc-Sen-Events-Ltd`

Until a custom domain is connected, GitHub Pages uses:

`https://lay162.github.io/Bounc-Sen-Events-Ltd/`

The repository contains `.github/workflows/deploy-pages.yml`. Every push to `main` uploads the
static site and deploys it through GitHub Pages; no npm install or build server is needed.

## When the domain has been bought

Send the exact domain spelling before changing anything. Decide whether the canonical site will use
the bare domain (`example.co.uk`) or `www.example.co.uk`; do not mix both forms in search metadata.

### 1. Replace the placeholder domain

The current SEO placeholder is:

`https://bounc-sen-events.co.uk`

Replace it in every HTML file, `sitemap.xml`, `robots.txt` and the documentation with the exact
purchased domain. Canonicals, Open Graph URLs, structured data and the sitemap must all agree.

### 2. Add the CNAME file

Create a root file called `CNAME` containing one line and no protocol:

```text
bounc-sen-events.co.uk
```

Use the actual domain if it differs from the example above.

### 3. Add DNS records at the domain registrar

For a bare/apex domain, add these four GitHub Pages `A` records:

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

For `www`, add:

| Type | Host | Value |
| --- | --- | --- |
| CNAME | `www` | `lay162.github.io` |

Remove conflicting parked-domain `A`, `AAAA` or `CNAME` records for the same host. DNS changes can
take time to propagate.

### 4. Confirm the domain in GitHub

Repository → **Settings** → **Pages** → **Custom domain** → enter the domain → Save.

Once GitHub issues the certificate, turn on **Enforce HTTPS**.

### 5. Connect the public profiles

- Facebook `BouncSenEvents` → About / Contact → Website
- Google Business Profile → Website
- Bing Places and Apple Business Connect
- Google Search Console → verify the domain and submit `/sitemap.xml`

Use the canonical domain, not the temporary `github.io` address, in all public listings.

## Email later

No business email is published yet. The quote helper copies the completed request and opens the
Bounc-SEN Facebook page; customers can also call `07830 852 359`.

When a domain mailbox exists, a good public address is `info@your-domain`. Add it only after the
mailbox has been created and tested. Never publish a mailbox that does not receive mail.

