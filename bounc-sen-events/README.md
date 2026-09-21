# Bounc-SEN Events Ltd — website

Inclusive bouncy castle, soft play and sensory equipment hire for SEN children and young people.
Wirral, Merseyside and Cheshire. Sister company to
[King of the Castles](https://www.king-of-the-castles.com/).

Five pages, plus a 404:

| File | Page |
| --- | --- |
| `index.html` | Home |
| `hire.html` | Equipment & packages (filterable, with lightbox) |
| `sen-inclusion.html` | SEN inclusion standard + FAQs |
| `areas.html` | Areas we cover + postcode checker |
| `contact.html` | Request a quote |
| `404.html` | Not found |

## What this is built with

Plain HTML, one CSS file and one small JavaScript file. **No framework, no build step, no npm
install.** Open `index.html` in a browser and it works.

That is deliberate. The draft this replaced pulled in the Tailwind CDN (~400 KB of JavaScript that
compiles CSS in the visitor's browser), Font Awesome (~1.2 MB of icon font) and Google Fonts from a
third-party origin. All three are gone:

| Was | Now |
| --- | --- |
| Tailwind CDN compiling in the browser | One hand-written `styles.css`, ~22 KB |
| Font Awesome icon font | Inline SVG sprite, ~2 KB, no extra request |
| Google Fonts from `fonts.gstatic.com` | Two self-hosted `.woff2` files, 60 KB total, preloaded |
| Five "pages" as hidden `<div>`s toggled by JS | Five real HTML pages Google can index separately |
| 4 MB of unprocessed photos | Resized WebP with JPEG fallback, ~750 KB for all ten |
| `<i class="fa-solid fa-star">null</i>` | Gone — the stray `null` text is not in any page |

## Run it locally

Double-click `index.html`, or serve the folder so the paths behave exactly like they will live:

```bash
cd bounc-sen-events
python3 -m http.server 8080
```

Then open <http://127.0.0.1:8080>.

## Everyday jobs

### Add a price to a product

Prices are quoted per setup at the moment, so every card shows "Price on request". To put a real
price on one, open `hire.html`, find the card and replace the placeholder:

```html
<!-- before -->
<span class="price"><span class="price__poa">Price on request</span></span>

<!-- after -->
<span class="price">£85</span>
```

Repeat per card. Anything you leave alone keeps saying "Price on request".

### Add a new product photo

1. Save the photo into `assets/img/` with a lowercase, hyphenated name, e.g. `unicorn-ball-pit.jpg`.
   Aim for roughly 1200 px on the long edge — anything bigger just slows the page down.
2. Open `hire.html`, copy an existing `<article class="card card--feature product">` block, and
   change five things: the two image paths, the `width`/`height`, the `alt` text, the
   `data-lightbox` path and `data-lightbox-alt`, and the heading and description.
3. Set `data-category` so it lands in the right filter. Valid values, space-separated:

   | Value | Filter button |
   | --- | --- |
   | `castles` | Bouncy castles |
   | `soft-play` | Soft play sets |
   | `shapes` | Sensory shapes & mats |
   | `ballpits` | Ball pits & seating |

   An item can be in more than one, e.g. `data-category="soft-play shapes"`.
4. Point the "Get a quote" link at `contact.html?item=Your%20Product%20Name` so the quote form
   arrives pre-filled.

If you want a WebP version too (smaller, and the `<picture>` tag already looks for one):

```bash
python3 -c "from PIL import Image, ImageOps; im=ImageOps.exif_transpose(Image.open('assets/img/NAME.jpg')).convert('RGB'); im.thumbnail((1200,1200)); im.save('assets/img/NAME.webp','WEBP',quality=78,method=6)"
```

Skip it if you'd rather not — the JPEG still loads.

### Change the brand colours to match the logo

Everything is driven by six values at the top of `assets/css/styles.css`:

```css
:root {
  --brand-pink: #e6007e;
  --brand-purple: #6b21a8;
  --brand-teal: #0891b2;
  --brand-sun: #f59e0b;
  --brand-ink: #1b1233;
  --brand-paper: #fbfaff;
}
```

Change those and the header, buttons, gradients, icon tiles and footer all follow. Nothing else
needs touching.

### Swap in the real logo

The placeholder mark is `assets/brand/logo.svg` — a bouncy castle arch with a heart in the doorway,
drawn in the brand gradient. To use the real logo:

1. Replace `assets/brand/logo.svg` with your own SVG (keep the filename), **or** drop in a square
   PNG and change `logo.svg` to `logo.png` in the header of each HTML file.
2. Re-cut the favicon and app icons from the new artwork and overwrite `assets/brand/favicon.ico`,
   `icon-32.png`, `icon-48.png`, `icon-96.png`, `icon-192.png`, `icon-512.png`,
   `icon-maskable-512.png` and `apple-touch-icon.png`.
3. Update `assets/brand/og-image.jpg` (1200×630) — this is the picture that shows when the site is
   shared on Facebook, WhatsApp or in a Google result card.

### Change the phone number, email or domain

They are currently **placeholders** and must be replaced before launch. See
[`docs/before-you-go-live.md`](docs/before-you-go-live.md) for the exact find-and-replace list.

## Search and Google

Technical SEO is already in place: unique titles, descriptions and canonicals per page,
Open Graph and Twitter card tags, `LocalBusiness` / `ItemList` / `FAQPage` / `BreadcrumbList`
structured data, `sitemap.xml` and `robots.txt`, semantic headings and descriptive alt text.

That is the part code can do. Ranking also needs a real domain on HTTPS, a Google Business Profile
with matching name, address and phone, photos, and genuine reviews. **Nobody can promise first
place on Google**, and anyone who does is guessing. The honest checklist is in
[`docs/google-business.md`](docs/google-business.md).

## Hosting

The folder is static, so anything can serve it: GitHub Pages, Netlify, Cloudflare Pages, or plain
shared hosting over FTP. A ready-made GitHub Pages workflow is in
[`docs/github-pages-workflow.yml`](docs/github-pages-workflow.yml) — copy it to
`.github/workflows/` in the repository that will host the live site.

## Accessibility

Given who this business is for, the site itself has to clear the bar:

- Skip link, landmark regions and a visible focus ring on every interactive element
- Real buttons and links, keyboard operable, no mouse-only behaviour
- Text contrast at or above WCAG AA against its background
- `prefers-reduced-motion` respected — all transitions drop out
- Images carry meaningful `alt` text; decorative ones are `alt=""`
- The lightbox uses a native `<dialog>`, so Escape closes it and focus is trapped by the browser
- Every page works with JavaScript switched off, except the filter, lightbox and postcode checker

## Legal

Bounc-SEN Events Ltd. Based in Wirral, Merseyside. Insurance and PIPA testing provided through
King of the Castles.
