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
  manifest: "/BusinessCard/manifest.json",
  appleWebApp: {
    capable: true,
    title: SITE.name,
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: [
      { url: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/brand/logo.png", type: "image/png", sizes: "500x500" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/brand/icon-192.png",
  },
};

export const viewport = {
  themeColor: "#ff69b4",
  viewportFit: "cover",
};

export default function BusinessCardPage() {
  return <DigitalCard />;
}
