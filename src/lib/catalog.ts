import { storyPlainText } from "./reading";
import { allEnrichedStories, type EnrichedStory } from "./stories";
import { STORY_FORMATS, type StoryFormat } from "./types";

export type CatalogQuery = {
  q?: string;
  format?: string;
  topic?: string;
  author?: string;
  saved?: string;
};

export function parseFormat(value?: string): StoryFormat | undefined {
  if (!value) return undefined;
  return STORY_FORMATS.find((format) => format === value);
}

export function normalizeQuery(raw: CatalogQuery): {
  q: string;
  format?: StoryFormat;
  topic?: string;
  author?: string;
  savedOnly: boolean;
} {
  return {
    q: (raw.q ?? "").trim(),
    format: parseFormat(raw.format),
    topic: raw.topic?.trim() || undefined,
    author: raw.author?.trim() || undefined,
    savedOnly: raw.saved === "1" || raw.saved === "true",
  };
}

export function searchStories(query: CatalogQuery): EnrichedStory[] {
  const { q, format, topic, author } = normalizeQuery(query);
  const needle = q.toLowerCase();

  return allEnrichedStories().filter((story) => {
    if (format && story.format !== format) return false;
    if (topic && !story.topicSlugs.includes(topic)) return false;
    if (author && story.authorSlug !== author) return false;
    if (!needle) return true;

    const haystack = [
      story.title,
      story.dek,
      story.author.name,
      story.author.role,
      ...story.topics.map((item) => item.name),
      story.format,
      storyPlainText(story),
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(needle);
  });
}

export function catalogHref(query: CatalogQuery) {
  const params = new URLSearchParams();
  if (query.q?.trim()) params.set("q", query.q.trim());
  if (query.format) params.set("format", query.format);
  if (query.topic) params.set("topic", query.topic);
  if (query.author) params.set("author", query.author);
  if (query.saved === "1" || query.saved === "true") params.set("saved", "1");
  const qs = params.toString();
  return qs ? `/archive?${qs}` : "/archive";
}
