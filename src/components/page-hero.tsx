import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-black/5 bg-[linear-gradient(180deg,#fff5fb_0%,#ffffff_55%)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        {eyebrow ? (
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-luna-pink">{eyebrow}</p>
        ) : null}
        <h1 className="max-w-3xl text-4xl font-black tracking-tight text-balance sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
        <p className="mt-6 text-sm">
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
