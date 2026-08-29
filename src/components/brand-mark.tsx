import Image from "next/image";
import Link from "next/link";

import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function BrandMark({
  href = "/",
  inverted = false,
  compact = false,
  hasLogo = false,
}: {
  href?: string;
  inverted?: boolean;
  compact?: boolean;
  hasLogo?: boolean;
}) {
  return (
    <Link
      href={href}
      className="group mx-auto flex flex-col items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luna-pink"
      aria-label={`${SITE.name} home`}
    >
      {hasLogo ? (
        <Image
          src="/brand/logo.png"
          alt={`${SITE.name} logo`}
          width={56}
          height={56}
          className="h-12 w-12 rounded-full object-cover ring-1 ring-white/20 sm:h-14 sm:w-14"
          priority
        />
      ) : null}
      <span className="text-center leading-tight">
        <span className="block font-black tracking-tight">
          <span className="luna-gradient-text text-xl sm:text-2xl">LUNA</span>{" "}
          <span className={inverted ? "text-white" : "text-foreground"}>SEN-Scapes</span>
        </span>
        {!compact ? (
          <span
            className={cn(
              "mt-1 block text-[10px] font-semibold uppercase tracking-[0.22em]",
              inverted ? "text-white/55" : "text-muted-foreground",
            )}
          >
            SEN spaces · groundworks · North West
          </span>
        ) : null}
      </span>
    </Link>
  );
}
