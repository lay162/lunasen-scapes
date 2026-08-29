# After you have bought both domains

You own:

- **lunasen-scapes.co.uk** — the real LUNA SEN-Scapes site (hyphen, branded name). This is the only site people should stay on.
- **lunasenscapes.com** — spare name. Anyone who types this is sent to the `.co.uk`. Same page, same card. They never stay on `.com`.

The digital business card, once the `.co.uk` is live, is:

**https://lunasen-scapes.co.uk/BusinessCard/**

Do not put the card on the `.com`. The `.com` only forwards.

The code is already on GitHub: [lay162/lunasen-scapes](https://github.com/lay162/lunasen-scapes). GitHub is holding the files. It is not the live website yet.

## Do this in GoDaddy now (Chromebook is fine)

### 1. Check both names are in your account

GoDaddy → **My Products** → **Domains**. You should see both.

### 2. Make the company mailbox

On **lunasen-scapes.co.uk** set up:

**info@lunasen-scapes.co.uk**

GoDaddy → the `.co.uk` → **Email**. Professional email / Workspace is fine. The site enquiry form already writes to this address.

### 3. Send the .com to the .co.uk

The website code already does this: `lunasenscapes.com` and `www.lunasenscapes.com` jump to `https://lunasen-scapes.co.uk` (and `/BusinessCard/` on `.com` becomes `/BusinessCard/` on `.co.uk`).

In GoDaddy, after the `.co.uk` is live, also set a **forward** as a backup:

1. GoDaddy → **lunasenscapes.com** → **DNS** or **Forwarding**
2. Forward to **https://lunasen-scapes.co.uk**
3. Forward **www.lunasenscapes.com** the same way
4. Use a **301 / permanent** forward if GoDaddy offers it

Until the `.co.uk` site is hosted, leave the `.com` alone.

## What you cannot do in GoDaddy alone

Buying the domains does **not** put the LUNA SEN-Scapes pages on the internet. You still need a **host** that builds the GitHub repo. Then you paste that host’s DNS records onto **lunasen-scapes.co.uk**.

Also point:

- `www.lunasen-scapes.co.uk` → the same site (or redirect to the non-www `.co.uk`)

Do **not** use Vercel for this. When you are ready, say so here and we will pick a host and I will give you the exact GoDaddy boxes to fill in.

## When it is live, check these

- `https://lunasen-scapes.co.uk` → the LUNA SEN-Scapes website
- `https://lunasen-scapes.co.uk/BusinessCard/` → this digital card
- `https://lunasenscapes.com` → jumps to the `.co.uk`
- Padlock / HTTPS on the `.co.uk`

Then: Google Search Console → add `https://lunasen-scapes.co.uk` → submit `https://lunasen-scapes.co.uk/sitemap.xml`.

## Leave these alone

- Do not change the GitHub repo name
- Do not delete the domains
- Do not buy extra “website builder” add-ons from GoDaddy for this project
