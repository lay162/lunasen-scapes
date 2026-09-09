import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  agentRules: false,
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "api.qrserver.com", pathname: "/v1/**" }],
  },
  // next dev does not map /BusinessCard/ to public/BusinessCard/index.html.
  // Static export / GitHub Pages already serve the folder index. Rewrites are ignored on export.
  async rewrites() {
    return [
      { source: "/BusinessCard", destination: "/BusinessCard/index.html" },
      { source: "/BusinessCard/", destination: "/BusinessCard/index.html" },
    ];
  },
};

export default nextConfig;
