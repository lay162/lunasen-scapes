import Link from "next/link";

import { AREAS } from "@/lib/content";
import { areaPath, getAreaLocal } from "@/lib/local-areas";
import { lunaLinkClass } from "@/lib/luna-tone";

export function AreaCard({
  area,
  index,
}: {
  area: (typeof AREAS)[number];
  index: number;
}) {
  const local = getAreaLocal(area.slug);
  return (
    <Link
      href={areaPath(area.slug)}
      className="rounded-2xl border bg-white p-5 text-center hover:border-luna-pink/50"
    >
      <h3 className={`text-xl font-black ${lunaLinkClass(index)}`}>{area.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{local.heroLines[0]}</p>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{local.towns.slice(0, 5).join(" · ")}</p>
    </Link>
  );
}
