import type { Metadata } from "next";

import { DigitalCard } from "@/components/digital-card";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata({
    title: `${SITE.name} — Business Card`,
    description:
      "Save LUNA SEN-Scapes to your phone. Call, email or request a quote for gardens, playgrounds, driveways and building works.",
    path: "/BusinessCard/",
  }),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/brand/logo.png", type: "image/png", sizes: "500x500" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/brand/logo.png",
  },
};

export default function BusinessCardPage() {
  return <DigitalCard />;
}
