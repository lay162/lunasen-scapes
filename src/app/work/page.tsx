import Image from "next/image";

import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { WORK_ITEMS } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Work | Garden Makeovers, Playgrounds & Groundworks UK",
  description:
    "Groundworks, garden makeovers, paving, fencing and dig offs by LUNA SEN-Scapes — playgrounds and accessible gardens across the UK.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <main id="main-content" className="text-center">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Work", path: "/work" }])} />
      <PageHero
        eyebrow="Portfolio"
        title="Real UK ground, not stock playground photos."
        lines={[
          "These are real jobs.",
          "Dig offs, paving, gardens, fencing and levels.",
          "The same quality under a playground or a family drive.",
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WORK_ITEMS.map((item) => (
            <figure key={item.src} className="overflow-hidden rounded-2xl border bg-white shadow-sm">
              <Image
                src={item.src}
                alt={item.alt}
                width={800}
                height={600}
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="p-4">
                <p className="font-bold">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Named family garden case studies will be published here with permission.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Until then we show the groundworks quality, not invented playground photos.
        </p>
      </section>
    </main>
  );
}
