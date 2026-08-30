import Link from "next/link";
import { BookmarkButton } from "@/components/bookmark-button";
import { PhotoFigure } from "@/components/photo-figure";
import { formatPublishedShort } from "@/lib/reading";
import { formatLabels } from "@/lib/journal";
import type { EnrichedStory } from "@/lib/stories";
import { cn } from "@/lib/utils";

export function StoryCard({
  story,
  variant = "standard",
}: {
  story: EnrichedStory;
  variant?: "standard" | "feature" | "row";
}) {
  const href = `/story/${story.slug}`;

  if (variant === "row") {
    return (
      <article className="story-row">
        <Link href={href} className="story-row-media">
          <PhotoFigure
            photo={{ ...story.hero, caption: undefined }}
            sizes="160px"
            rounded
            aspect="aspect-square"
            figureClassName="!mb-0"
          />
        </Link>
        <div className="min-w-0">
          <p className="kicker">
            {formatLabels[story.format]} ·{" "}
            <span className="num">{formatPublishedShort(story.publishedAt)}</span>
          </p>
          <h3 className="font-display">
            <Link href={href} className="link-quiet">
              {story.title}
            </Link>
          </h3>
          <p className="card-copy mt-2">{story.dek}</p>
          <p className="meta-line mt-2">
            {story.author.name} · <span className="num">{story.minutes}</span> min
          </p>
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "story-card",
        variant === "feature" && "story-card-feature",
      )}
    >
      <Link href={href} className="story-card-media">
        <PhotoFigure
          photo={{ ...story.hero, caption: undefined }}
          sizes={
            variant === "feature"
              ? "(min-width: 1024px) 720px, 100vw"
              : "(min-width: 1024px) 400px, 100vw"
          }
          aspect={variant === "feature" ? "aspect-[16/9]" : "aspect-[3/2]"}
          figureClassName="!mb-0"
        />
      </Link>
      <div className="story-card-body">
        <p className="kicker">
          {formatLabels[story.format]}
          {story.topics[0] ? ` · ${story.topics[0].name}` : ""}
        </p>
        <h3 className="font-display">
          <Link href={href} className="link-quiet">
            {story.title}
          </Link>
        </h3>
        <p className="card-copy mt-2 max-w-prose">{story.dek}</p>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <p className="meta-line">
            {story.author.name} ·{" "}
            <span className="num">{formatPublishedShort(story.publishedAt)}</span>{" "}
            · <span className="num">{story.minutes}</span> min
          </p>
          <BookmarkButton slug={story.slug} title={story.title} compact />
        </div>
      </div>
    </article>
  );
}
