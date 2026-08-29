import Image from "next/image";

import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { WORK_ITEMS } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Work | SEN Groundworks & Gardens North West",
  description:
    "Groundworks, gardens, paving, fencing and dig offs from S.W.M — the crew behind LUNA SEN Scapes playgrounds and sensory spaces in Wirral, Liverpool and Cheshire.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <main id="main-content">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Work", path: "/work" }])} />
      <PageHero
        eyebrow="Portfolio"
        title="Real North West ground, not stock playground photos."
        description="These jobs were delivered by S.W.M Groundworks. They are the proof we can level, drain and finish a site — the same skills every SEN playground and sensory garden needs before equipment arrives."
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
                <p className="mt-1 text-sm text-muted-foreground">{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted-foreground">
          SEN-specific case studies (named schools and settings) will be published here with permission. Until then
          we show the groundworks quality, not invented playground photos.
        </p>
      </section>
    </main>
  );
}
