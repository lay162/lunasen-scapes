import Link from "next/link";

import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { BUILDING_SERVICES, FAQS } from "@/lib/content";
import { lunaLinkClass } from "@/lib/luna-tone";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

const BUILDING_FAQS = [FAQS[1], FAQS[3], FAQS[5]];

export const metadata = pageMetadata({
  title: "Building Works, Internal Adaptations & Extensions UK",
  description:
    "LUNA SEN-Scapes carries out all aspects of building works across the UK — general building, internal works, accessible adaptations, extensions, conversions, flooring and renovations for SEN children, SEN adults and disabled people.",
  path: "/building",
  keywords: [
    "building works UK",
    "internal adaptations disabled",
    "accessible extension UK",
    "SEN home renovation",
    "wet room adaptation",
  ],
});

export default function BuildingPage() {
  return (
    <main id="main-content" className="text-center">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Building", path: "/building/" },
        ])}
      />
      <JsonLd data={faqJsonLd([...BUILDING_FAQS])} />
      <PageHero
        eyebrow="All aspects of building"
        title="Internal works and building, not just the garden."
        lines={[
          "LUNA SEN-Scapes builds rooms as well as outdoor space.",
          "General building, extensions, conversions, flooring and plastering.",
          "Accessible internal adaptations for SEN children, SEN adults and disabled people.",
          "Anyone who needs a safer room, a safer doorway or a finished house.",
          "One crew.",
          "One brief.",
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {BUILDING_SERVICES.map((service, i) => (
            <article key={service.slug} className="rounded-2xl border bg-white p-6">
              <h2 className={`text-xl font-black ${lunaLinkClass(i)}`}>{service.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={[...BUILDING_FAQS]} />
        </div>
        <div className="mt-12 rounded-3xl bg-black p-8 text-white md:p-10">
          <h2 className="text-2xl font-black">Garden, drive or inside the house.</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">Tell us the postcode and what is failing.</p>
          <p className="mx-auto mt-2 max-w-xl text-white/70">We will say if we should come.</p>
          <Link href="/enquire" className="luna-btn luna-btn-gradient mt-6 h-12 px-5">
            Talk to us about the build
          </Link>
        </div>
      </section>
    </main>
  );
}
