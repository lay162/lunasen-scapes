# Google Business Profile — Bounc-SEN Events Ltd

Google matches a business profile to a website using the **name, address and phone number** (NAP).
If those three do not match character for character between the profile, the website footer and the
`LocalBusiness` structured data, you are competing with yourself. Use exactly what is below.

## Listing name

`Bounc-SEN Events Ltd`

Do not add keywords to the name ("Bounc-SEN Events Ltd | Bouncy Castle Hire Wirral"). Google
suspends listings for it and it is the single most common reason a new profile disappears.

## Categories

Primary: **Bouncy castle hire service** — Google offers this exact category in the UK. If it will
not accept it, **Party equipment rental service** is the fallback.

Additional:

- Children's party service
- Party planner
- Playground equipment supplier

Do **not** add "Disability services provider" or similar. The SEN specialism belongs in the
description and the posts, not in a category that describes a different kind of business.

## Address

Wirral
Merseyside
United Kingdom

Set it up as a **service-area business** and hide the street address — you deliver to customers
rather than having them visit.

Google allows up to 20 service areas and says the overall boundary should normally stay within
about two hours' drive of the base. Do not try to enter every North West postcode into the profile.
Use these 20 truthful, high-priority places:

1. Wirral
2. Birkenhead
3. Wallasey
4. Bebington
5. Bromborough
6. Heswall
7. West Kirby
8. Neston
9. Ellesmere Port
10. Chester
11. Liverpool
12. Crosby
13. Huyton
14. St Helens
15. Widnes
16. Runcorn
17. Warrington
18. Frodsham
19. Northwich
20. Knutsford

The website can describe extended North West partner delivery. The Google profile should represent
the practical service area of the Wirral-based Bounc-SEN operation, not the full reach of a separate
sister company.

## Phone

Use the same number as the website footer. Currently a placeholder — see
[`before-you-go-live.md`](before-you-go-live.md).

## Website field

Paste exactly the canonical form the site uses:

`https://bounc-sen-events.co.uk`

No `www`, no trailing path, no GitHub Pages URL. If you register `.com` variants, forward them to
this one rather than listing them separately.

## These must match everywhere

| Field | Value on the website |
| --- | --- |
| Name | `Bounc-SEN Events Ltd` |
| Address | Wirral, Merseyside, United Kingdom |
| Phone | (see `before-you-go-live.md`) |
| Email | `info@bounc-sen-events.co.uk` |
| Hours | Every day, 08:00 – 20:00 |

Those exact values are in the footer of every page and in the `LocalBusiness` block in each page's
`<head>`. Change one, change all three.

## Hours

Monday to Sunday, 08:00 – 20:00.

If that is not realistic, change it here **and** in the `openingHoursSpecification` of the
structured data on every page. Hours that are wrong are worse than hours that are narrow.

## Description (paste this)

> Bounc-SEN Events Ltd hires out bouncy castles, soft play, ball pits and sensory equipment
> designed around the needs of SEN children and young people. Quieter blower siting, calm or
> high-contrast colour schemes you choose, floor-level access and unhurried setup before guests
> arrive. Fully insured with PIPA-tested inflatables through our sister company King of the
> Castles. Serving Wirral, Merseyside and Cheshire.

## Photos to upload first

Google weights profiles with real photos far more heavily than it weights new websites. Upload in
this order:

1. **Logo** — `assets/brand/icon-512.png`
2. **Cover** — `assets/brand/og-image.jpg`
3. **Products** — everything in `assets/img/`, ten photos, one per equipment item
4. **Real jobs** — actual setups at actual events, as soon as you have permission to show them

Photo 4 is the one that converts. Ask families at the point of booking whether you may photograph
the setup before the children arrive; an empty, beautifully-built soft play area in a real front
room is more persuasive than a warehouse shot.

## Social profile

Add this exact URL in Google Business Profile → Contact → Social profiles:

`https://www.facebook.com/BouncSenEvents`

The website already links to it from every footer and includes it in the business schema, so Google
has the same signal in all three places.

## Services

Add each of these as a service on the profile, using the same names as the website so the two
reinforce each other:

- Dinosaur SEN Bouncy Castle
- Dragon Adventure Bouncy Castle
- Luxury White Soft Play Set
- Pink & Lilac Soft Play Set
- Sunshine Yellow & White Soft Play Set
- Orange & Green Soft Play Set
- Primary Colours Soft Play Set
- Soft Play Shape Bundle
- Luxury White Ball Pit
- White Sensory Rocker
- Little Bouncers SEN party (package)
- Quiet hour sensory session (package)
- School & community fun day (package)

## After the profile is live

1. Google Search Console → add the domain → submit `https://bounc-sen-events.co.uk/sitemap.xml`
2. Ask every happy customer for a review on the listing, by name, within 48 hours of the event
3. Post to the profile roughly fortnightly — a photo of a recent setup is enough
4. Add the business to Bing Places with identical NAP
5. Get listed on local SEN parent groups, Wirral council's local offer directory, and school
   newsletters — those links matter more for a business like this than any generic directory

Use this tagged website URL in the profile so Search Console/analytics can distinguish Google
Business clicks from normal search:

`https://bounc-sen-events.co.uk/?utm_source=google&utm_medium=organic&utm_campaign=gbp`

## Reviews

Ask for an honest review after collection, not before the event and never in exchange for a
discount. Send the customer the direct Google review link and one neutral prompt:

> If you have a minute, an honest Google review helps other SEN families find us. It is useful if
> you mention the equipment hired, the town and anything our team did that made the setup work for
> your family — but please only write what you genuinely experienced.

Do not hand customers a list of target keywords to copy. Repeated scripted reviews look unnatural
and are less useful to families.

## An honest note on ranking

The technical work is done: structured data, sitemap, unique pages, fast loading, mobile-first.
What decides whether you appear in the local map pack is mostly **proximity, prominence and
reviews** — and of those, reviews are the only one you directly control.

A new profile with two reviews will not outrank an established competitor with two hundred,
regardless of how good the website is. The realistic path is: consistent NAP, a steady trickle of
genuine reviews, real photos of real jobs, and links from local SEN organisations. There is no
setting in the code that shortcuts it.
