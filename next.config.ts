import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  agentRules: false,
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  skipTrailingSlashRedirect: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/spaces/school-spaces", destination: "/spaces/garden-makeovers", permanent: true },
      { source: "/card", destination: "/BusinessCard/", permanent: false },
      { source: "/card/", destination: "/BusinessCard/", permanent: false },
      { source: "/business-card", destination: "/BusinessCard/", permanent: false },
      { source: "/business-card/", destination: "/BusinessCard/", permanent: false },
      {
        source: "/:path*",
        has: [{ type: "host", value: "lunasenscapes.com" }],
        destination: "https://lunasen-scapes.co.uk/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.lunasenscapes.com" }],
        destination: "https://lunasen-scapes.co.uk/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "lunasen-scapes.com" }],
        destination: "https://lunasen-scapes.co.uk/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.lunasen-scapes.com" }],
        destination: "https://lunasen-scapes.co.uk/:path*",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [{ source: "/BusinessCard/", destination: "/BusinessCard" }];
  },
};

export default nextConfig;
