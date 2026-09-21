# Before you go live

Everything on this list is a **placeholder**. The site looks finished with them in, which is the
danger — work through this before the domain points at it.

## 1. Phone number

Currently `07700 900 123` (an Ofcom fictional-drama number, chosen so it cannot ring a real person
by accident).

Find and replace in every `.html` file:

| Find | Replace with |
| --- | --- |
| `07700 900 123` | your display number, e.g. `07375 647576` |
| `+447700900123` | the same number in `+44` form, no spaces |

`+447700900123` appears in `tel:` links and in the `telephone` field of the structured data.

## 2. Email address

Currently `info@bounc-sen-events.co.uk`.

Find and replace in every `.html` file. It appears in the footer, on the contact page, in the
structured data, and as `data-email` on the quote form — that last one is what the form posts to,
so do not miss it.

## 3. Domain

Currently `https://bounc-sen-events.co.uk` (no `www`).

Find and replace in `.html`, `sitemap.xml` and `robots.txt`. It appears in:

- `<link rel="canonical">` on every page
- `og:url` and `og:image` on every page
- every `url`, `@id` and `image` field in the structured data
- the `<loc>` entries in `sitemap.xml`
- the `Sitemap:` line in `robots.txt`

Pick one form — with `www` or without — and use it everywhere. Mixing the two splits your ranking
signals between what Google sees as two different sites.

## 4. Company number

Once Companies House has issued it, add it to the footer of every page, next to the copyright line:

```html
<p>&copy; <span data-year>2026</span> Bounc-SEN Events Ltd. Company no. 00000000.</p>
```

A registered company number in the footer is a legal requirement for a UK limited company's
website, and it also helps Google tie the site to the business.

## 5. Insurance and safety claims

The site currently states **£5m public liability** and **PIPA-tested inflatables**, both attributed
to King of the Castles. Confirm both figures are correct for equipment hired out under the
Bounc-SEN Events Ltd name, and correct the wording if the cover amount differs. These claims appear
on `index.html`, `sen-inclusion.html` and `contact.html`.

## 6. Product details

The equipment cards describe what is visible in each photo and deliberately avoid quoting
dimensions, piece counts or age limits that have not been confirmed. Once you have the real specs,
add them to the `<ul class="product__meta">` list on each card in `hire.html`.

## 7. Prices

Every card says "Price on request". See the README section *Add a price to a product* for how to
put real figures in.

## 8. Social profiles

Facebook is already connected as:

`https://www.facebook.com/BouncSenEvents`

It appears in the footer of every page and in every structured-data `sameAs` array. Add future
Instagram and TikTok pages to:

1. The `sameAs` array in the structured data on every page
2. The footer, as links
3. The Google Business Profile

## 9. Google Search Console

After the domain is live, verify it in Search Console and submit `https://your-domain/sitemap.xml`.
If Search Console asks for HTML-tag verification, paste the tag into the `<head>` of `index.html`:

```html
<meta name="google-site-verification" content="PASTE_THE_CODE_HERE">
```

## Quick check before launch

```bash
cd bounc-sen-events
grep -rn "07700 900\|bounc-sen-events.co.uk" --include="*.html" --include="*.xml" --include="*.txt" .
```

If that command still prints the placeholder number, you are not finished.
