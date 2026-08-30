import Link from "next/link";

import { BrandName } from "@/components/brand-mark";
import { Lines } from "@/components/lines";

export function PageHero({
  eyebrow,
  title,
  lines,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  lines: string[];
  crumbs?: { name: string; href?: string }[];
}) {
  const trail = crumbs ?? [
    { name: "Home", href: "/" },
    { name: title },
  ];
  return (
    <section className="border-b border-black/5 bg-[linear-gradient(180deg,#fff5fb_0%,#ffffff_55%)]">
      <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 sm:py-16">
        <p>
          <BrandName size="md" />
        </p>
        {eyebrow ? (
          <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.28em] text-luna-pink-ink">{eyebrow}</p>
        ) : null}
        <h1 className="mt-4 text-4xl font-black tracking-tight text-balance sm:text-5xl">{title}</h1>
        <div className="mt-6">
          <Lines lines={lines} />
        </div>
        <p className="mt-8 text-sm">
          {trail.map((crumb, i) => (
            <span key={`${crumb.name}-${i}`}>
              {i > 0 ? <span className="px-2 text-muted-foreground">/</span> : null}
              {crumb.href ? (
                <Link href={crumb.href} className="text-muted-foreground hover:text-foreground">
                  {crumb.name}
                </Link>
              ) : (
                <span className="font-medium">{crumb.name}</span>
              )}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
