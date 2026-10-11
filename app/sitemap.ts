import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";
import { seoPages } from "@/lib/seo";
import { projects } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...Object.entries(seoPages).filter(([, page]) => page.index !== false).map(([path]) => path),
    ...projects.map((project) => `/projects/${project.slug}`),
  ];

  return paths.map((path) => ({ url: new URL(path, SITE_URL).href }));
}
