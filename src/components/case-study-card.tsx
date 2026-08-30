import Image from "next/image";
import Link from "next/link";

import type { CaseStudy } from "@/lib/case-studies";
import { workPath } from "@/lib/case-studies";
import { lunaLinkClass } from "@/lib/luna-tone";

export function CaseStudyCard({
  study,
  index,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: {
  study: CaseStudy;
  index: number;
  sizes?: string;
}) {
  const hero = study.images[0];
  return (
    <Link
      href={workPath(study.slug)}
      className="overflow-hidden rounded-2xl border bg-white text-center shadow-sm hover:border-luna-pink/50"
    >
      <Image
        src={hero.src}
        alt={hero.alt}
        width={hero.width}
        height={hero.height}
        sizes={sizes}
        className="aspect-[4/3] w-full object-cover"
      />
      <div className="p-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-luna-pink-ink">{study.eyebrow}</p>
        <h2 className={`mt-2 text-xl font-black ${lunaLinkClass(index)}`}>{study.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{study.summary}</p>
      </div>
    </Link>
  );
}
