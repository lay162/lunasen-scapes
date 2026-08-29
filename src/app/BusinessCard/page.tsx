import type { Metadata } from "next";

import { DigitalCard } from "@/components/digital-card";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: `${SITE.name} — Business Card`,
  description:
    "Save LUNA SEN-Scapes to your phone. Call, email or request a quote for gardens, playgrounds, driveways and building works.",
  path: "/BusinessCard",
});

export default function BusinessCardPage() {
  return <DigitalCard />;
}
