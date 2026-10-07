import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";

/** Returns an empty sitemap until SITE.baseUrl is configured with a live domain. */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE.baseUrl) return [];
  return [{ url: SITE.baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
