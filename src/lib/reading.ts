import type { Story, StoryBlock } from "./types";

const WORDS_PER_MINUTE = 230;

function blockText(block: StoryBlock): string {
  switch (block.type) {
    case "p":
    case "h2":
    case "quote":
      return block.text;
    case "figure":
      return [block.photo.alt, block.photo.caption, block.photo.credit]
        .filter(Boolean)
        .join(" ");
    case "ledger":
      return [
        block.title,
        ...block.rows.map((row) => `${row.label} ${row.value}`),
      ].join(" ");
    case "ol":
    case "ul":
      return block.items.join(" ");
    default:
      return "";
  }
}

export function storyPlainText(story: Story) {
  return [
    story.title,
    story.dek,
    ...story.body.map(blockText),
  ].join(" ");
}

export function wordCount(story: Story) {
  const words = storyPlainText(story).trim().split(/\s+/).filter(Boolean);
  return words.length;
}

export function readMinutes(story: Story) {
  return Math.max(1, Math.round(wordCount(story) / WORDS_PER_MINUTE));
}

export function formatPublished(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/Los_Angeles",
  }).format(new Date(`${iso}T12:00:00-08:00`));
}

export function formatPublishedShort(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "America/Los_Angeles",
  }).format(new Date(`${iso}T12:00:00-08:00`));
}
