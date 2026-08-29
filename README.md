# LUNA SEN-Scapes

Disabled garden makeovers, inclusive playgrounds, safe play areas, sensory gardens and home sensory rooms for families — plus full groundworks: driveways, fencing, patios, landscaping, drainage, levelling and dig offs.

A company of **LUNA SEN Group Ltd**. Nationwide from a Wirral base.

This is a public website (Next.js) for family gardens across the United Kingdom. We do not take school contracts.

GitHub: [lay162/lunasen-scapes](https://github.com/lay162/lunasen-scapes)

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43127](http://127.0.0.1:43127).

```bash
npm run build
npm start
```

## Branding

Pink `#ff69b4` and blue `#7ad7f0` on black.

The name is always **LUNA SEN-Scapes**. **LUNA** uses the pink-to-blue header gradient; **SEN-Scapes** sits next to it in white (or black on light pages). Never write LUNA on its own.

Drop your square logo in later as `public/brand/logo.png`. Favicon can follow the same file once you make it. Until then the header uses the wordmark and the tab icon is a temporary **L**.

## Enquiry email

Enquiries go to **enquiries@lunasenscapes.co.uk**. Set that mailbox up on your domain, or change it in `.env.local`.

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

## Stack

Next.js, TypeScript, Tailwind CSS, shadcn/ui. No database or login.

## Legal

LUNA SEN Group Ltd, company 17049817. Registered office: 109, Eastham Hall, Eastham Village Road, Eastham, CH62 0AF.
