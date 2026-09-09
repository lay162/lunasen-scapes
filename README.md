# LUNA SEN-Scapes

Safe places for SEN children, SEN adults and disabled people: garden makeovers, playgrounds, driveways, internal works and all aspects of building. Nationwide from a Wirral base.

**LUNA SEN-Scapes Ltd.** We do not take school contracts.

Live site: [lunasen-scapes.co.uk](https://lunasen-scapes.co.uk)

GitHub: [lay162/lunasen-scapes](https://github.com/lay162/lunasen-scapes)

Hosted on **GitHub Pages**. Push to `main` and the site rebuilds. Domain clicks are in [`docs/domains.md`](docs/domains.md).

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43127](http://127.0.0.1:43127).

```bash
npm run build
npx --yes serve out -l 43127
```

`npm start` is not used. The live site is static files.

## Branding

Pink `#ff69b4` and blue `#7ad7f0` on black.

The name is always **LUNA SEN-Scapes**. **LUNA** uses the pink-to-blue header gradient; **SEN-Scapes** sits next to it in white (or black on light pages). Never write LUNA on its own.

The circular LUNA SEN-Scapes Ltd badge is `public/brand/logo.png`. It is the header mark, the browser tab icon, and the schema.org logo.

Social profile URLs go in `src/lib/site.ts` under `social` (Instagram, Facebook, TikTok, LinkedIn, YouTube, X, Google Business). Leave them blank until the pages exist. Once pasted, they show on the website footer, the digital card, saved-contact vCard, and LocalBusiness schema.

## Digital business card

The card is a **standalone page**, same as S.W.M Groundworks — not wrapped in the website header or footer. Files live in `public/BusinessCard/` (`index.html`, `style.css`, NFC scripts). The Next.js site only links to it.

Live URL: `https://lunasen-scapes.co.uk/BusinessCard/`

Locally: [http://127.0.0.1:43127/BusinessCard/](http://127.0.0.1:43127/BusinessCard/) (or `/BusinessCard/index.html` in `next dev`)

### Add the card to your phone (PWA)

This is the LUNA SEN-Scapes version of the SWM home-screen card. Open the live URL on your phone, then:

1. Tap **Add to phone** on the card
2. Or use the browser menu: **Add to Home screen** / **Install app**
3. iPhone: tap **Share** → **Add to Home Screen**

The icon is the circular LUNA SEN-Scapes badge. Opening it later is the same as opening the SWM card app — save contact, call, WhatsApp, Tap n Share.

Android phone-to-phone tap (notification on the other phone) still needs the companion app in `android-nfc-share`. Open that folder in Android Studio and install it on both phones — the old SWM trades app will not open this card.

## Enquiry email

The enquire page opens your email app to **info@lunasen-scapes.co.uk**. Set that mailbox up on your domain, or change it in `.env.local`.

Copy `.env.example` to `.env.local` to change:

- `NEXT_PUBLIC_SITE_URL` — production domain (needed for sitemap, canonicals, schema)
- `NEXT_PUBLIC_ENQUIRY_EMAIL` — mailbox that receives enquiries
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — Search Console meta tag

## Search and Google Business

Technical SEO is in the site (local business schema, NAP, sitemap, unique area and space pages). **Nobody can honestly promise first place on Google.** Ranking also needs:

1. This site on your real domain with HTTPS
2. Google Search Console + sitemap submit
3. A Google Business Profile using the **same name, address and phone** as the footer
4. Photos, categories and reviews on that profile
5. Links from directories and local partners

Step-by-step copy for the Business Profile is in [`docs/google-business.md`](docs/google-business.md).

## Go live on your domain

You own **lunasen-scapes.co.uk** (main) and the `.com` names (they forward to the `.co.uk`). Paste the GitHub Pages DNS records from [`docs/domains.md`](docs/domains.md) onto the `.co.uk` in GoDaddy. The live card is `https://lunasen-scapes.co.uk/BusinessCard/`.

## Stack

Next.js (static export), TypeScript, Tailwind CSS, shadcn/ui. No database or login. GitHub Pages serves the built files.

## Legal

LUNA SEN-Scapes Ltd. Company no. 17450329. Based in Wirral, Merseyside.
