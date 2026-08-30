import type { MetadataRoute } from "next";

import { CASE_STUDIES, workPath } from "@/lib/case-studies";
import { AREAS, SPACES } from "@/lib/content";
import { areaPath } from "@/lib/local-areas";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "/",
    "/spaces/",
    "/groundworks/",
    "/building/",
    "/work/",
    "/areas/",
    "/enquire/",
    "/about/",
    "/BusinessCard/",
    "/privacy/",
    "/accessibility/",
  ];
  const spacePaths = SPACES.map((space) => `/spaces/${space.slug}/`);
  const areaPaths = AREAS.map((area) => areaPath(area.slug));
  const workPaths = CASE_STUDIES.map((study) => workPath(study.slug));

  return [...staticPaths, ...spacePaths, ...areaPaths, ...workPaths].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path.startsWith("/spaces/") || path.startsWith("/areas/") || path.startsWith("/work/")
          ? 0.8
          : 0.6,
  }));
}
