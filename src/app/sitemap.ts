import type { MetadataRoute } from "next";

import { AREAS, SPACES } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "/",
    "/spaces",
    "/groundworks",
    "/building",
    "/work",
    "/areas",
    "/enquire",
    "/about",
    "/BusinessCard/",
    "/privacy",
    "/accessibility",
  ];
  const spacePaths = SPACES.map((space) => `/spaces/${space.slug}`);
  const areaPaths = AREAS.map((area) => `/areas/${area.slug}`);

  return [...staticPaths, ...spacePaths, ...areaPaths].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/spaces/") || path.startsWith("/areas/") ? 0.8 : 0.6,
  }));
}
