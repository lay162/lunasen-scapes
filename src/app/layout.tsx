import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { customLogoExists } from "@/lib/logo";
import { localBusinessJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Safe Places, Gardens & Building Works for SEN & Disabled People | UK`,
    // Child pages pass a short title. pageMetadata() uses `absolute` when the title already includes the brand.
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName, url: SITE.url }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  category: "construction",
  keywords: [
    "disabled garden makeover UK",
    "accessible garden UK",
    "inclusive playground UK",
    "safe play area SEN",
    "sensory garden UK",
    "building works UK",
    "internal adaptations disabled",
    "LUNA SEN-Scapes",
    "LUNA SEN Group",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
  other: {
    "geo.region": "GB-WRL",
    "geo.placename": "Eastham Village, Wirral",
    "geo.position": `${SITE.geo.latitude};${SITE.geo.longitude}`,
    ICBM: `${SITE.geo.latitude}, ${SITE.geo.longitude}`,
  },
  ...(SITE.google.verification
    ? { verification: { google: SITE.google.verification } }
    : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const hasLogo = customLogoExists();
  return (
    <html lang="en-GB" className={`${inter.variable} h-full scroll-smooth`} data-scroll-behavior="smooth">
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground antialiased">
        <JsonLd data={localBusinessJsonLd()} />
        <SiteHeader hasLogo={hasLogo} />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter hasLogo={hasLogo} />
      </body>
    </html>
  );
}
