import type { MetadataRoute } from "next";
import { authors } from "@/lib/authors";
import { journal } from "@/lib/journal";
import { stories } from "@/lib/stories";
import { topics } from "@/lib/topics";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = journal.siteUrl;
  const staticRoutes = ["", "/zine", "/archive", "/authors", "/topics", "/about"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date("2026-08-18"),
    }),
  );

  return [
    ...staticRoutes,
    ...stories.map((story) => ({
      url: `${base}/story/${story.slug}`,
      lastModified: new Date(story.publishedAt),
    })),
    ...authors.map((author) => ({
      url: `${base}/authors/${author.slug}`,
      lastModified: new Date("2026-08-18"),
    })),
    ...topics.map((topic) => ({
      url: `${base}/topics/${topic.slug}`,
      lastModified: new Date("2026-08-18"),
    })),
  ];
}
