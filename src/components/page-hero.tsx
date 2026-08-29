import Link from "next/link";

import { Lines } from "@/components/lines";

export function PageHero({
  eyebrow,
  title,
  lines,
}: {
  eyebrow?: string;
  title: string;
  lines: string[];
}) {
  return (
    <section className="border-b border-black/5 bg-[linear-gradient(180deg,#fff5fb_0%,#ffffff_55%)]">
      <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 sm:py-16">
        <p className="text-[11px] font-bold uppercase tracking-[0.28em]">
          <span className="luna-gradient-text">LUNA SEN-Scapes</span>
        </p>
        {eyebrow ? (
          <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.28em] text-luna-pink">{eyebrow}</p>
        ) : null}
        <h1 className="mt-4 text-4xl font-black tracking-tight text-balance sm:text-5xl">{title}</h1>
        <div className="mt-6">
          <Lines lines={lines} />
        </div>
        <p className="mt-8 text-sm">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <span className="px-2 text-muted-foreground">/</span>
          <span className="font-medium">{title}</span>
        </p>
      </div>
    </section>
  );
}
