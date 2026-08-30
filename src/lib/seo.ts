import type { Metadata } from "next";
import type { CaseStudy } from "@/lib/case-studies";
import { AREAS, BUILDING_SERVICES, GROUNDWORK_SERVICES, SPACES } from "@/lib/content";
import type { AreaLocal } from "@/lib/local-areas";
import { SITE, absoluteUrl, postalAddressJsonLd } from "@/lib/site";

const defaultOg = {
  url: absoluteUrl("/opengraph-image", { asset: true }),
  width: 1200,
  height: 630,
  alt: `${SITE.name} — disabled garden makeovers, playgrounds and groundworks across the UK`,
};

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
  robots,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  robots?: Metadata["robots"];
}): Metadata {
  const url = absoluteUrl(path);
  const brandedTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
  return {
    title: title.includes(SITE.name) ? { absolute: title } : title,
    description,
    ...(robots ? { robots } : {}),
    keywords: [
      SITE.name,
      SITE.legalName,
      "SEN playground",
      "inclusive playground",
      "safe play area",
      "disabled garden makeover",
      "accessible garden UK",
      "building works UK",
      "internal adaptations",
      "sensory garden",
      "sensory room",
      "United Kingdom",
      ...keywords,
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url,
      siteName: SITE.name,
      title: brandedTitle,
      description,
      images: [defaultOg],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [defaultOg.url],
    },
  };
}

export function localBusinessJsonLd() {
  const id = `${SITE.url}/#business`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "LandscapingBusiness"],
        "@id": id,
        name: SITE.name,
        alternateName: ["LUNA SEN-Scapes", "Luna SEN-Scapes"],
        legalName: SITE.legalName,
        description: SITE.description,
        url: SITE.url,
        email: SITE.email,
        telephone: SITE.phoneTel,
        image: absoluteUrl("/opengraph-image", { asset: true }),
        logo: absoluteUrl("/icon", { asset: true }),
        priceRange: SITE.priceRange,
        currenciesAccepted: "GBP",
        paymentAccepted: "Bank transfer, invoice",
        foundingDate: String(SITE.foundedYear),
        taxID: SITE.companyNumber,
        identifier: SITE.companyNumber,
        address: postalAddressJsonLd(),
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE.geo.latitude,
          longitude: SITE.geo.longitude,
        },
        hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.google.mapsQuery)}`,
        openingHoursSpecification: SITE.openingHours.flatMap((block) =>
          block.days.map((day) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: day,
            opens: block.opens,
            closes: block.closes,
          })),
        ),
        areaServed: SITE.areaServed.map((name) => ({
          "@type": "AdministrativeArea",
          name,
        })),
        knowsAbout: [
          "SEN children outdoor spaces",
          "SEN adults gardens",
          "Disabled garden makeovers",
          "Accessible gardens",
          "Inclusive playgrounds",
          "Safe play areas",
          "Sensory rooms",
          "Sensory gardens",
          "Inclusive surfacing",
          "Groundworks",
          "Driveways",
          "Fencing",
          "Patios",
          "Landscaping",
          "Dig offs",
          "Levelling",
          "Drainage",
          "Foundations",
          "Dropped kerbs",
          "Building works",
          "Internal works",
          "Accessible internal adaptations",
          "Extensions",
          "Conversions",
          "Renovations",
          "Garden adaptations for disabled people",
        ],
        brand: { "@type": "Brand", name: "LUNA SEN-Scapes" },
        parentOrganization: {
          "@type": "Organization",
          name: SITE.legalName,
          identifier: SITE.companyNumber,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: SITE.phoneTel,
            email: SITE.email,
            contactType: "sales",
            areaServed: "GB",
            availableLanguage: ["English"],
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "LUNA SEN-Scapes services",
          itemListElement: [
            ...SPACES.map((space) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: space.title,
                description: space.summary,
                url: absoluteUrl(`/spaces/${space.slug}`),
                provider: { "@id": id },
                areaServed: "United Kingdom",
              },
            })),
            ...GROUNDWORK_SERVICES.map((service) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: service.title,
                description: service.summary,
                url: absoluteUrl("/groundworks"),
                provider: { "@id": id },
              },
            })),
            ...BUILDING_SERVICES.map((service) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: service.title,
                description: service.summary,
                url: absoluteUrl("/building"),
                provider: { "@id": id },
              },
            })),
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        inLanguage: "en-GB",
        publisher: { "@id": id },
      },
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#org`,
        name: SITE.legalName,
        legalName: SITE.legalName,
        identifier: SITE.companyNumber,
        address: postalAddressJsonLd(),
        url: SITE.url,
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function serviceJsonLd(space: (typeof SPACES)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: space.title,
    description: space.summary,
    url: absoluteUrl(`/spaces/${space.slug}`),
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: AREAS.map((area) => area.name),
    audience: { "@type": "Audience", audienceType: space.audience },
    serviceType: space.title,
  };
}

export function areaPlaceJsonLd(area: (typeof AREAS)[number], local: AreaLocal) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: area.name,
    description: local.seoDescription,
    url: absoluteUrl(`/areas/${area.slug}/`),
    containedInPlace: { "@type": "AdministrativeArea", name: local.containedIn },
    geo: {
      "@type": "GeoCoordinates",
      latitude: local.geo.latitude,
      longitude: local.geo.longitude,
    },
  };
}

export function areaServiceJsonLd(area: (typeof AREAS)[number], local: AreaLocal) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `SEN and accessible landscape services in ${area.name}`,
    description: local.seoDescription,
    url: absoluteUrl(`/areas/${area.slug}/`),
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: {
      "@type": "Place",
      name: area.name,
      geo: {
        "@type": "GeoCoordinates",
        latitude: local.geo.latitude,
        longitude: local.geo.longitude,
      },
    },
    serviceType: [
      "Disabled garden makeovers",
      "Sensory gardens",
      "Inclusive playgrounds",
      "Groundworks",
    ],
  };
}

export function caseStudyJsonLd(study: CaseStudy) {
  const url = absoluteUrl(`/work/${study.slug}/`);
  const images = study.images.map((image) => absoluteUrl(image.src, { asset: true }));
  const places = study.areaSlugs.map((slug) => {
    const area = AREAS.find((item) => item.slug === slug);
    return { "@type": "Place" as const, name: area?.name ?? slug };
  });
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${url}#work`,
        name: study.title,
        headline: study.title,
        description: study.seoDescription,
        url,
        inLanguage: "en-GB",
        creator: { "@id": `${SITE.url}/#business` },
        publisher: { "@id": `${SITE.url}/#business` },
        author: { "@type": "Organization", name: SITE.name, url: SITE.url },
        about: { "@id": `${url}#service` },
        contentLocation: places,
        image: images,
        thumbnailUrl: images[0],
      },
      {
        "@type": "VisualArtwork",
        "@id": `${url}#artwork`,
        name: study.title,
        artform: "Landscape photography of completed groundworks",
        artMedium: study.materials.join(", "),
        creator: { "@id": `${SITE.url}/#business` },
        image: images,
        contentLocation: places[0],
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: study.title,
        description: study.seoDescription,
        url,
        provider: { "@id": `${SITE.url}/#business` },
        areaServed: places,
        serviceType: study.eyebrow,
        image: images[0],
      },
    ],
  };
}
