import type { Topic } from "./types";

export const topics: Topic[] = [
  {
    slug: "water",
    name: "Water",
    summary:
      "Rivers, harbors, caches, and the daily work of staying hydrated when the tap is a long walk behind you.",
  },
  {
    slug: "range",
    name: "Range",
    summary:
      "How far you can go when food, weather, and judgment are the limiting reagents, not a marketing claim.",
  },
  {
    slug: "field-craft",
    name: "Field craft",
    summary:
      "The repeatable habits that keep gear dry, camps quiet, and the next morning easier than the last.",
  },
  {
    slug: "autonomy",
    name: "Autonomy",
    summary:
      "Making your own water, time, and decisions without pretending you do not need other people.",
  },
  {
    slug: "navigation",
    name: "Navigation",
    summary:
      "Charts, fog, wind shifts, and the humble skill of knowing where you are before you need to.",
  },
  {
    slug: "camp",
    name: "Camp",
    summary:
      "Kitchens, night watches, and the small architecture of a place you will leave cleaner than you found it.",
  },
];

export function getTopic(slug: string) {
  return topics.find((topic) => topic.slug === slug);
}

export function getTopicOrThrow(slug: string) {
  const topic = getTopic(slug);
  if (!topic) {
    throw new Error(`Unknown topic: ${slug}`);
  }
  return topic;
}
