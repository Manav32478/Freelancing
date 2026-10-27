import type { MetadataRoute } from "next";
import { SITE, SERVICE_PAGES, CASE_STUDIES, BLOG_POSTS } from "@/config/site";

/** Full sitemap once SITE.baseUrl is configured with a live domain. */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE.baseUrl) return [];
  const now = new Date();
  const entry = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${SITE.baseUrl}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  });
  return [
    entry("/", 1),
    entry("/services", 0.9),
    ...SERVICE_PAGES.map((s) => entry(`/services/${s.slug}`, 0.8)),
    entry("/hospitality", 0.9),
    ...CASE_STUDIES.map((c) => entry(`/work/${c.slug}`, 0.7)),
    entry("/blog", 0.6),
    ...BLOG_POSTS.map((p) => entry(`/blog/${p.slug}`, 0.5)),
    entry("/privacy", 0.2),
  ];
}
