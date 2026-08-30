import type { MetadataRoute } from "next";
import { journal } from "@/lib/journal";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${journal.siteUrl}/sitemap.xml`,
  };
}
