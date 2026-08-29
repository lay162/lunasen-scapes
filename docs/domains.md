# Put LUNA SEN-Scapes on your GoDaddy domains

**Main site:** `https://lunasen-scapes.co.uk`  
**Redirect:** `lunasenscapes.com` and `www` versions → the `.co.uk` site.

You do this in three places: GitHub (the code), Vercel (the live website), GoDaddy (the domain names).

## 1. Get the latest code onto GitHub

The project should live at [github.com/lay162/lunasen-scapes](https://github.com/lay162/lunasen-scapes).

On a computer with Git and your GitHub login:

```bash
cd lunasen-scapes
git remote -v
git add -A
git commit -m "Latest LUNA SEN-Scapes site"
git push -u origin main
```

If `origin` is not GitHub, add it and push:

```bash
git remote add github https://github.com/lay162/lunasen-scapes.git
git push -u github main
```

On a Chromebook, the easier path is **Publish** in this Cursor chat. That sends the site to Vercel. Then connect the same GitHub repo in Vercel so future updates deploy when you push.

Open the GitHub repo in Chrome. If the files look old, the latest work has not been pushed yet. Sign in as **lay162** and push, or use Publish here first.

## 2. Host the site (Vercel)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. **Add New Project** → import `lay162/lunasen-scapes`.
3. Leave the build command as `npm run build` (Next.js default).
4. Add an environment variable:
   - Name: `NEXT_PUBLIC_SITE_URL`
   - Value: `https://lunasen-scapes.co.uk`
5. Deploy.

Or click **Publish** in this Cursor chat and use that Vercel project.

## 3. Point GoDaddy at Vercel

In Vercel → the project → **Settings → Domains**:

1. Add `lunasen-scapes.co.uk` and set it as the **primary** domain.
2. Add `www.lunasen-scapes.co.uk` and redirect it to `lunasen-scapes.co.uk`.
3. Add `lunasenscapes.com` and `www.lunasenscapes.com` and **redirect both to `https://lunasen-scapes.co.uk`**.

Vercel will show the exact DNS records. In GoDaddy, for **each** domain:

1. My Products → the domain → **DNS**.
2. Use the records Vercel shows. Typical setup:
   - **A** record: `@` (or name blank) → `10.0.1.2`
   - **CNAME** record: `www` → `cname.vercel-dns.com`
3. Remove old A / CNAME / parking records that fight these.
4. Wait. DNS can take from a few minutes to a few hours.

Do this for **both** `lunasen-scapes.co.uk` and `lunasenscapes.com`. The code already sends `.com` visitors to the `.co.uk` site.

## 4. Check it

- `https://lunasen-scapes.co.uk` → this LUNA SEN-Scapes site.
- `https://lunasenscapes.com` → should jump to the `.co.uk` address.
- Padlock / HTTPS should appear (Vercel issues the certificates once DNS is right).

Then in Google Search Console, add `https://lunasen-scapes.co.uk` and submit `https://lunasen-scapes.co.uk/sitemap.xml`.

## Email

Set up `enquiries@lunasen-scapes.co.uk` in GoDaddy email (or Google Workspace). The site enquiry form uses that address unless you change `NEXT_PUBLIC_ENQUIRY_EMAIL`.
