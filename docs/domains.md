# Domains and GitHub Pages

You own:

- **lunasen-scapes.co.uk** — the real LUNA SEN-Scapes site. This is the only name people should stay on.
- **lunasen-scapes.com** — spare hyphenated name. Anyone who types this is sent to the `.co.uk`.
- **lunasenscapes.com** — spare name without a hyphen. Same job: send people to the `.co.uk`.

The digital business card, once the `.co.uk` is on GitHub Pages, is:

**https://lunasen-scapes.co.uk/BusinessCard/**

Do not put the card on a `.com`. The `.com` names only forward.

The site is built from [lay162/lunasen-scapes](https://github.com/lay162/lunasen-scapes) and hosted on **GitHub Pages**. No Vercel.

## 1. Keep the .com forwards (already done)

On each `.com` in GoDaddy → **DNS** → **Forwarding**:

- Destination: **https://lunasen-scapes.co.uk**
- Type: **Permanent (301)**
- Forward only — not masking

If **www** will not save as a second forward, set **www** as a **CNAME** to **@**.

Do **not** forward the `.co.uk`. That one is the home.

## 2. Point the .co.uk at GitHub (this is the last click)

Open **lunasen-scapes.co.uk** in GoDaddy → **DNS** → **DNS Records**.

### Leave email alone

If you already set up **info@lunasen-scapes.co.uk**, do **not** delete **MX**, **TXT** (SPF) or other mail records.

### Change only the web records

Delete the GoDaddy **parking / launching soon** records for the website. Those are usually:

- **A** records on **@** (or the bare name) that do **not** match the four GitHub numbers below
- Any **CNAME** or **Forwarding** on the `.co.uk` itself

Then add these exact records:

| Type | Name | Value | TTL |
| --- | --- | --- | --- |
| A | @ | `185.199.108.153` | 600 |
| A | @ | `185.199.109.153` | 600 |
| A | @ | `185.199.110.153` | 600 |
| A | @ | `185.199.111.153` | 600 |
| CNAME | www | `lay162.github.io` | 600 |

That is all four **A** records, plus **www**. Save each one.

Optional IPv6 (only if GoDaddy offers AAAA and you want it):

| Type | Name | Value |
| --- | --- | --- |
| AAAA | @ | `2606:50c0:8000::153` |
| AAAA | @ | `2606:50c0:8001::153` |
| AAAA | @ | `2606:50c0:8002::153` |
| AAAA | @ | `2606:50c0:8003::153` |

Wait. It can be a few minutes, sometimes a few hours. Then type `https://lunasen-scapes.co.uk` in Chrome. You should see this site, not GoDaddy’s launching page.

GitHub then adds the padlock. If Chrome still says “not secure”, wait and refresh. Do not buy a GoDaddy SSL add-on for this.

## 3. Company mailbox

On **lunasen-scapes.co.uk** set up **info@lunasen-scapes.co.uk** if you have not already. The enquiry form opens your email app to that address.

## When it is live, check these

- `https://lunasen-scapes.co.uk` → the LUNA SEN-Scapes website
- `https://lunasen-scapes.co.uk/BusinessCard/` → this digital card
- `https://www.lunasen-scapes.co.uk` → the same site
- `https://lunasen-scapes.com` → jumps to the `.co.uk`
- Padlock / HTTPS on the `.co.uk`

Then: Google Search Console → add `https://lunasen-scapes.co.uk` → submit `https://lunasen-scapes.co.uk/sitemap.xml`.

## Leave these alone

- Do not change the GitHub repo name
- Do not delete the domains
- Do not buy extra “website builder” or SSL add-ons from GoDaddy for this project
- Do not use Vercel
