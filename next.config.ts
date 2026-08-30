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
};

export default nextConfig;
