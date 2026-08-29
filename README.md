# LUNA SEN Scapes

SEN playgrounds, sensory rooms, sensory gardens and safe outdoor spaces for children and adults — built from the first dig. Part of **LUNA SEN Group Ltd**, with groundworks by **S.W.M Groundworks**.

This is a public website (Next.js) for schools, families and adult SEN settings across Wirral, Liverpool, Cheshire and the North West.

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

## Your logo

Do not overwrite the colour system — it matches LUNA SEN Insurance / Pantry (`#ff69b4` → `#7ad7f0` on black).

1. Export a square PNG (at least 512×512, transparent or black background).
2. Save it as `public/brand/logo.png`.
3. Restart the dev server. The header will pick it up automatically.

## Enquiry email

Until `lunasenscapes.co.uk` mail is live, enquiries open a mail compose to **quotes@swm-groundworks.co.uk** (the working S.W.M inbox).

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
5. Links from schools, directories and the existing [S.W.M Groundworks](https://swm-groundworks.co.uk) site

Step-by-step copy for the Business Profile is in [`docs/google-business.md`](docs/google-business.md).

## Stack

Next.js, TypeScript, Tailwind CSS, shadcn/ui. No database or login.

## Legal

LUNA SEN Group Ltd, company 17049817. Registered office: 109, Eastham Hall, Eastham Village Road, Eastham, CH62 0AF.
