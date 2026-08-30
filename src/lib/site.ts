export const SITE = {
  name: "LUNA SEN-Scapes",
  shortName: "LUNA SEN-Scapes",
  legalName: "LUNA SEN Group Ltd",
  companyNumber: "17049817",
  tagline: "Safe places, gardens and building works for SEN and disabled people — UK wide.",
  description:
    "LUNA SEN-Scapes builds safe places for SEN children, SEN adults and disabled people across the UK: garden makeovers, playgrounds, driveways, internal works and all aspects of building. Groundworks, fencing, patios, landscaping, drainage and renovations sit in the same brief.",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://lunasen-scapes.co.uk",
  cardPath: "/BusinessCard/",
  email: process.env.NEXT_PUBLIC_ENQUIRY_EMAIL || "info@lunasen-scapes.co.uk",
  phoneDisplay: "07375 996 207",
  phoneTel: "+447375996207",
  priceRange: "££",
  foundedYear: 2026,
  address: {
    line1: "Eastham Village",
    line2: "",
    city: "Eastham Village",
    region: "Wirral",
    postalCode: "",
    country: "GB",
    countryName: "United Kingdom",
  },
  geo: {
    latitude: 53.3136,
    longitude: -2.9608,
  },
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" },
  ],
  openingHoursSchema: ["Mo-Fr 08:00-17:00"],
  openingHoursNote: "Saturday visits by appointment.",
  areaServed: [
    "United Kingdom",
    "England",
    "Scotland",
    "Wales",
    "Northern Ireland",
    "London",
    "Midlands",
    "Yorkshire",
    "North West",
    "North East",
    "South West",
    "South East",
    "East of England",
    "Wirral",
    "Liverpool",
    "Merseyside",
    "Cheshire",
    "Chester",
    "Ellesmere Port",
    "North Wales",
    "Wallasey",
    "West Kirby",
    "Neston",
    "Birkenhead",
  ],
  google: {
    mapsQuery: "Eastham Village, Wirral",
    verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
} as const;

export const NAP = {
  name: SITE.name,
  street: SITE.address.line1,
  locality: [SITE.address.city, SITE.address.region].filter((part, i, all) => part && all.indexOf(part) === i).join(", "),
  postalCode: SITE.address.postalCode,
  phone: SITE.phoneDisplay,
  email: SITE.email,
};

export function fullAddress() {
  return [SITE.address.line1, SITE.address.line2, SITE.address.city, SITE.address.region, SITE.address.postalCode]
    .filter((part, index, all) => Boolean(part) && all.indexOf(part) === index)
    .join(", ");
}

/** Page URLs get a trailing slash to match `trailingSlash: true`. Asset paths do not. */
export function absoluteUrl(path = "/", opts?: { asset?: boolean }) {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (p === "/") return `${SITE.url}/`;
  if (opts?.asset || /\.[a-z0-9]+$/i.test(p)) {
    return `${SITE.url}${p}`;
  }
  const slashed = p.endsWith("/") ? p : `${p}/`;
  return `${SITE.url}${slashed}`;
}

/** Live branded card: https://lunasen-scapes.co.uk/BusinessCard/ */
export function brandedCardUrl() {
  return `${SITE.url}${SITE.cardPath}`;
}
