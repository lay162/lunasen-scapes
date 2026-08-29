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

### 3. Send the .com to the .co.uk (this is the bit you click)

You do **not** push domains from GitHub. The website code is already pushed. This part is only in GoDaddy, in Chrome, on your Chromebook.

Do this on **lunasenscapes.com** only. Do **not** forward the `.co.uk` — that one is the home.

1. Open [godaddy.com](https://www.godaddy.com) and sign in.
2. Open **My Products**, then **Domains**.
3. Click **lunasenscapes.com** (the one **without** the hyphen).
4. Click **DNS**, then **Forwarding**.
5. Click **Add Forwarding**.
6. Choose **Domain** (the main name, not a subdomain).
7. Destination: **https://lunasen-scapes.co.uk**
8. Type: **Permanent (301)**
9. Do **not** choose “Forward with masking”. If you see “Forward only”, that is the right one.
10. Click **Save**.
11. Add forwarding again, this time as **Subdomain**, name **www**, same destination **https://lunasen-scapes.co.uk**, **Permanent (301)**, no masking.
12. Save.

Wait. It can be a few minutes, sometimes longer. Then type `lunasenscapes.com` in Chrome. It should jump to `lunasen-scapes.co.uk`.

If GoDaddy asks you to verify with a code, that is normal. Use the code they send.

The website code also sends `.com` visitors to the `.co.uk` once both names are pointed at the live host. The GoDaddy forward is the simple version you can do yourself.

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
