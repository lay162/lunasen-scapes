export const SITE = {
  name: "LUNA SEN-Scapes",
  shortName: "LUNA SEN-Scapes",
  legalName: "LUNA SEN Group Ltd",
  companyNumber: "17049817",
  tagline: "Safe places, gardens and building works for SEN and disabled people — UK wide.",
  description:
    "LUNA SEN-Scapes builds safe places for SEN children, SEN adults and disabled people across the UK: garden makeovers, playgrounds, driveways, internal works and all aspects of building. Groundworks, fencing, patios, landscaping, drainage and renovations sit in the same brief.",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://lunasen-scapes.co.uk",
  email: process.env.NEXT_PUBLIC_ENQUIRY_EMAIL || "enquiries@lunasen-scapes.co.uk",
  phoneDisplay: "07375 996 207",
  phoneTel: "+447375996207",
  priceRange: "££",
  foundedYear: 2026,
  address: {
    line1: "109, Eastham Hall",
    line2: "Eastham Village Road",
    city: "Eastham",
    region: "Wirral",
    postalCode: "CH62 0AF",
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
  ],
  google: {
    mapsQuery: "Eastham Hall, Eastham Village Road, Eastham CH62 0AF",
    verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
} as const;

export const NAP = {
  name: SITE.name,
  street: `${SITE.address.line1}, ${SITE.address.line2}`,
  locality: `${SITE.address.city}, ${SITE.address.region}`,
  postalCode: SITE.address.postalCode,
  phone: SITE.phoneDisplay,
  email: SITE.email,
};

export function fullAddress() {
  return `${SITE.address.line1}, ${SITE.address.line2}, ${SITE.address.city}, ${SITE.address.region}, ${SITE.address.postalCode}`;
}

export function absoluteUrl(path = "/") {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${p}`;
}
