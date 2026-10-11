import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/about",
    "/contact",
    "/gallery",
    "/projects",
    "/projects/prarambh-51",
    "/projects/prarambh-plaza",
    "/projects/prarambh-pragati",
    "/projects/prarambh-pride",
    "/team",
    "/testimonials",
  ];

  return paths.map((path) => ({ url: new URL(path, SITE_URL).href }));
}
