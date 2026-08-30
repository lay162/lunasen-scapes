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

Drop your square logo in later as `public/brand/logo.png`. Favicon can follow the same file once you make it. Until then the header uses the wordmark and the tab icon is a temporary **L**.

## Digital business card

Same layout as the existing trades card: save-to-phone, call, email, WhatsApp, QR, Tap n Share / NFC, and recent work.

Live URL: `https://lunasen-scapes.co.uk/BusinessCard/`

Locally: [http://127.0.0.1:43127/BusinessCard/](http://127.0.0.1:43127/BusinessCard/)

Android phone-to-phone tap uses the companion app in `android-nfc-share`. Open that folder in Android Studio and install it on both phones — the old trades app will not open this new card.

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

LUNA SEN-Scapes Ltd. Based in Wirral, Merseyside. Companies House number to be added when issued.
