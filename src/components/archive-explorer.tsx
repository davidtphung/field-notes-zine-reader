"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState, useTransition, type ReactNode } from "react";
import { StoryCard } from "@/components/story-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBookmarks } from "@/hooks/use-bookmarks";
import { authors } from "@/lib/authors";
import {
  catalogHref,
  normalizeQuery,
  searchStories,
  type CatalogQuery,
} from "@/lib/catalog";
import { formatLabels } from "@/lib/journal";
import { topics } from "@/lib/topics";
import { STORY_FORMATS } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ArchiveExplorer({ initial }: { initial: CatalogQuery }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const { saved } = useBookmarks();
  const query = normalizeQuery(initial);
  const [draft, setDraft] = useState(query.q);

  function update(patch: CatalogQuery) {
    startTransition(() => {
      router.replace(
        catalogHref({
          q: "q" in patch ? patch.q : draft,
          format: "format" in patch ? patch.format : query.format,
          topic: "topic" in patch ? patch.topic : query.topic,
          author: "author" in patch ? patch.author : query.author,
          saved: "saved" in patch ? patch.saved : query.savedOnly ? "1" : undefined,
        }),
        { scroll: false },
      );
    });
  }

  const results = useMemo(() => {
    const found = searchStories(initial);
    if (!query.savedOnly) return found;
    return found.filter((story) => saved.includes(story.slug));
  }, [initial, query.savedOnly, saved]);

  const emptyTitle = query.savedOnly
    ? "Nothing saved matches this view"
    : "No stories match those filters";
  const emptyBody = query.savedOnly
    ? "Save a story from any page. They stay on this browser until you clear them."
    : "Try a shorter search, or clear one filter. The archive is small and picky on purpose.";

  return (
    <div className="grid gap-8">
      <form
        className="archive-panel"
        role="search"
        onSubmit={(event) => {
          event.preventDefault();
          update({ q: draft });
        }}
      >
        <div className="grid gap-2">
          <Label htmlFor="archive-q" className="kicker">
            Search stories
          </Label>
          <Input
            id="archive-q"
            name="q"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Harbor, hose, cache, fog…"
            className="bg-paper text-base"
          />
        </div>

        <fieldset>
          <legend className="kicker mb-3">Format</legend>
          <div className="flex flex-wrap gap-2">
            <FilterChip
              active={!query.format}
              onClick={() => update({ format: undefined })}
            >
              All formats
            </FilterChip>
            {STORY_FORMATS.map((format) => (
              <FilterChip
                key={format}
                active={query.format === format}
                onClick={() =>
                  update({
                    format: query.format === format ? undefined : format,
                  })
                }
              >
                {formatLabels[format]}
              </FilterChip>
            ))}
          </div>
        </fieldset>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="archive-topic" className="kicker">
              Topic
            </Label>
            <select
              id="archive-topic"
              className="select-ledger"
              value={query.topic ?? ""}
              onChange={(event) =>
                update({
                  topic: event.target.value || undefined,
                })
              }
            >
              <option value="">All topics</option>
              {topics.map((topic) => (
                <option key={topic.slug} value={topic.slug}>
                  {topic.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="archive-author" className="kicker">
              Author
            </Label>
            <select
              id="archive-author"
              className="select-ledger"
              value={query.author ?? ""}
              onChange={(event) =>
                update({
                  author: event.target.value || undefined,
                })
              }
            >
              <option value="">All authors</option>
              {authors.map((author) => (
                <option key={author.slug} value={author.slug}>
                  {author.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <Button
            type="button"
            variant={query.savedOnly ? "default" : "outline"}
            className={cn(query.savedOnly && "bg-kelp text-paper hover:bg-kelp/90")}
            onClick={() =>
              update({
                saved: query.savedOnly ? undefined : "1",
              })
            }
            aria-pressed={query.savedOnly}
          >
            Saved only
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setDraft("");
              update({
                q: "",
                format: undefined,
                topic: undefined,
                author: undefined,
                saved: undefined,
              });
            }}
          >
            Clear filters
          </Button>
        </div>
      </form>

      <div
        className="flex flex-wrap items-end justify-between gap-3"
        aria-live="polite"
      >
        <p className="font-ui text-ink/70">
          {pending ? (
            "Updating…"
          ) : (
            <>
              <span className="num">{results.length}</span>{" "}
              {results.length === 1 ? "story" : "stories"}
            </>
          )}
          {query.q ? ` for “${query.q}”` : ""}
        </p>
      </div>

      {results.length === 0 ? (
        <div className="empty-state">
          <h2 className="font-display">{emptyTitle}</h2>
          <p className="card-copy mt-3 max-w-md">{emptyBody}</p>
          <Button className="mt-6 bg-kelp text-paper hover:bg-kelp/90" asChild>
            <a href="/archive">Return to the full index</a>
          </Button>
        </div>
      ) : (
        <div className="archive-results">
          {results.map((story, index) => (
            <StoryCard
              key={story.slug}
              story={story}
              variant={index === 0 && !query.q ? "feature" : "standard"}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={cn("chip", active && "is-active")}
      onClick={onClick}
      aria-pressed={active}
    >
      {children}
    </button>
  );
}
