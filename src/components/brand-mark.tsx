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
      className="group flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luna-pink"
      aria-label={`${SITE.name} home`}
    >
      {hasLogo ? (
        <Image
          src="/brand/logo.png"
          alt=""
          width={44}
          height={44}
          className="h-11 w-11 rounded-full object-cover ring-1 ring-white/20"
          priority
        />
      ) : null}
      <span className={cn("leading-tight", compact && "hidden sm:block")}>
        <span className="block font-black tracking-tight">
          <span className="luna-gradient-text text-lg sm:text-xl">LUNA</span>{" "}
          <span className={inverted ? "text-white" : "text-foreground"}>SEN Scapes</span>
        </span>
        {!compact ? (
          <span
            className={cn(
              "block text-[10px] font-semibold uppercase tracking-[0.18em]",
              inverted ? "text-white/55" : "text-muted-foreground",
            )}
          >
            Play · sensory · safe ground
          </span>
        ) : null}
      </span>
    </Link>
  );
}
