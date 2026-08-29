# Put LUNA SEN-Scapes on your GoDaddy domains

**Main site:** `https://lunasen-scapes.co.uk`  
**Redirect:** `lunasenscapes.com` and `www` versions → the `.co.uk` site.

The code is on GitHub. Hosting for the live domain comes next — not Vercel.

## 1. Latest code on GitHub

The project lives at [github.com/lay162/lunasen-scapes](https://github.com/lay162/lunasen-scapes).

The agent can push updates to that repo. Open it in Chrome and check that the files look current.

## 2. Email

Set up `info@lunasen-scapes.co.uk` in GoDaddy email (or Google Workspace). The site enquiry form uses that address unless you change `NEXT_PUBLIC_ENQUIRY_EMAIL`.

## 3. When the site is hosted

Point **lunasen-scapes.co.uk** at whichever host we pick. Send **lunasenscapes.com** (and both www names) to `https://lunasen-scapes.co.uk`.

Then in Google Search Console, add `https://lunasen-scapes.co.uk` and submit `https://lunasen-scapes.co.uk/sitemap.xml`.
