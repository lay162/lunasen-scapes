import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  agentRules: false,
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/spaces/school-spaces", destination: "/spaces/garden-makeovers", permanent: true },
      { source: "/card", destination: "/BusinessCard", permanent: false },
      { source: "/business-card", destination: "/BusinessCard", permanent: false },
    ];
  },
};

export default nextConfig;
