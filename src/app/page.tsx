import Image from "next/image";
import Link from "next/link";
import { PhotoFigure } from "@/components/photo-figure";
import { StoryCard } from "@/components/story-card";
import { formatLabels, journal } from "@/lib/journal";
import { formatPublished } from "@/lib/reading";
import {
  enrichStory,
  getFeaturedStories,
  getLeadStory,
  stories,
} from "@/lib/stories";

export default function HomePage() {
  const lead = enrichStory(getLeadStory());
  const featured = getFeaturedStories().map(enrichStory);
  const toc = [...stories].sort((a, b) =>
    a.publishedAt.localeCompare(b.publishedAt),
  );

  return (
    <main id="main">
      <section className="hero" aria-labelledby="lead-title">
        <div className="hero-media">
          <Image
            src={lead.hero.src}
            alt={lead.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="hero-shade" />
        </div>
        <div className="hero-panel">
          <div>
            <p className="kicker">
              Lead essay · {journal.issue.title} · {formatLabels[lead.format]}
            </p>
            <h1 id="lead-title" className="hero-title">
              {lead.title}
            </h1>
            <p className="lead-copy mt-5 max-w-xl">
              {lead.dek}
            </p>
            <p className="meta-line mt-4">
              {lead.author.name} ·{" "}
              <span className="num">{formatPublished(lead.publishedAt)}</span> ·{" "}
              <span className="num">{lead.minutes}</span> min read
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link className="btn-kelp" href="/zine">
                Open the zine
              </Link>
              <Link className="btn-kelp btn-quiet" href={`/story/${lead.slug}`}>
                Read the lead
              </Link>
              <Link
                className="font-ui inline-flex items-center px-1 underline underline-offset-4"
                href="/archive"
              >
                Read the issue
              </Link>
            </div>
          </div>
          <aside className="ledger" aria-label="Shore ledger from the lead essay">
            <p className="kicker">Shore Ledger · Station 14</p>
            <dl>
              <div>
                <dt>Collected</dt>
                <dd><span className="num">3.1</span> L seepage</dd>
              </div>
              <div>
                <dt>Cache</dt>
                <dd><span className="num">14</span> km, marked cedar</dd>
              </div>
              <div>
                <dt>Window</dt>
                <dd><span className="num">5.5</span> hr, wind west</dd>
              </div>
              <div>
                <dt>Turnaround</dt>
                <dd><span className="num">13:40</span> if the bar is noisy</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <p className="page-wrap mt-2 text-right">
        <span className="photo-caption !mt-0 justify-items-end">
          <span className="photo-credit">
            Photo:{" "}
            <a href={lead.hero.creditUrl} rel="noreferrer" target="_blank">
              {lead.hero.credit}
            </a>
            , Unsplash
          </span>
        </span>
      </p>

      <section className="section page-wrap intro-grid">
        <div>
          <p className="kicker">The journal</p>
          <h2 className="font-display">
            {journal.name} is a seasonal magazine for people who want more range
            and fewer performances.
          </h2>
          <p className="lead-copy mt-6 max-w-2xl">
            {journal.issue.statement} We write long enough to be useful, short
            enough to finish on a ferry. Photography first. Paper-minded. No
            store attached.
          </p>
          <p className="card-copy mt-4 max-w-2xl">
            Issue 001 collects essays, field notes, dispatches, and how-to pages
            on water, camp kitchens, harbor arrivals, and the ethics of a cache.
            If you came from a product brochure, you are in a different room now.
          </p>
        </div>
        <div>
          <p className="kicker">Issue 001 contents</p>
          <ol className="toc mt-4">
            {toc.map((story, index) => (
              <li key={story.slug}>
                <Link href={`/story/${story.slug}`}>
                  <span>
                    <span className="num">{String(index + 1).padStart(2, "0")}</span> {story.title}
                  </span>
                  <span>{formatLabels[story.format]}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="tide-rule" aria-hidden="true" />

      <section className="section page-wrap">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="kicker">From the issue</p>
            <h2 className="font-display">Featured stories</h2>
          </div>
          <Link
            href="/archive"
            className="font-ui underline underline-offset-4"
          >
            All {stories.length} stories
          </Link>
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          {featured.slice(0, 4).map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="page-wrap grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <PhotoFigure
            photo={{
              ...lead.hero,
              src: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&w=2000&q=72",
              alt: "A walker on a rocky coastal shelf beside cold water.",
              width: 2000,
              height: 1331,
              caption: "The issue stays close to the waterline.",
              credit: "Ivana Cajina",
              creditUrl: "https://unsplash.com/photos/HSd9pSXp7uc",
            }}
            sizes="(min-width: 1024px) 620px, 100vw"
          />
          <div>
            <p className="kicker">Masthead</p>
            <h2 className="font-display">
              {journal.name} / {journal.issue.title} /{" "}
              <span className="num">{journal.issue.volume}</span>
            </h2>
            <p className="lead-copy mt-4">
              Edited in {journal.masthead.place}. Written by people who still
              carry paper tide books.{" "}
              <Link href="/about" className="underline underline-offset-4">
                Read the masthead
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
