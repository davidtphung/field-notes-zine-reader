import Link from "next/link";
import { notFound } from "next/navigation";
import { BookmarkButton } from "@/components/bookmark-button";
import { PhotoFigure } from "@/components/photo-figure";
import { ReadingProgress } from "@/components/reading-progress";
import { StoryBody } from "@/components/story-body";
import { StoryCard } from "@/components/story-card";
import { formatLabels } from "@/lib/journal";
import { formatPublished } from "@/lib/reading";
import {
  enrichStory,
  getStory,
  relatedStories,
  stories,
} from "@/lib/stories";

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/story/[slug]">) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return { title: "Story" };
  return {
    title: story.title,
    description: story.dek,
    openGraph: {
      title: story.title,
      description: story.dek,
      type: "article",
      publishedTime: story.publishedAt,
    },
  };
}

export default async function StoryPage({
  params,
}: PageProps<"/story/[slug]">) {
  const { slug } = await params;
  const found = getStory(slug);
  if (!found) notFound();

  const story = enrichStory(found);
  const next = relatedStories(found).map(enrichStory);

  return (
    <>
      <ReadingProgress targetId="article" />
      <main id="main" className="pb-16">
        <header className="page-wrap pt-8 sm:pt-12">
          <p className="kicker">
            {formatLabels[story.format]} ·{" "}
            {story.topics.map((topic) => topic.name).join(" · ")}
          </p>
          <h1 className="max-w-4xl font-display">
            {story.title}
          </h1>
          <p className="lead-copy mt-6 max-w-3xl">
            {story.dek}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="meta-line">
              <Link
                href={`/authors/${story.author.slug}`}
                className="underline underline-offset-4"
              >
                {story.author.name}
              </Link>{" "}
              · <span className="num">{formatPublished(story.publishedAt)}</span>{" "}
              · <span className="num">{story.minutes}</span> min read
            </p>
            <BookmarkButton slug={story.slug} title={story.title} />
          </div>
        </header>

        <div className="wide-wrap mt-8">
          <PhotoFigure
            photo={story.hero}
            priority
            sizes="(min-width: 1320px) 1280px, 100vw"
          />
        </div>

        <article id="article" className="page-wrap story-layout mt-6">
          <StoryBody blocks={story.body} />
          <aside className="grid gap-8 lg:sticky lg:top-28">
            <div className="ledger">
              <p className="kicker">Story file</p>
              <dl>
                <div>
                  <dt>Format</dt>
                  <dd>{formatLabels[story.format]}</dd>
                </div>
                <div>
                  <dt>Author</dt>
                  <dd>{story.author.name}</dd>
                </div>
                <div>
                  <dt>Topics</dt>
                  <dd>
                    {story.topics.map((topic) => (
                      <span key={topic.slug}>
                        <Link
                          href={`/topics/${topic.slug}`}
                          className="underline underline-offset-2"
                        >
                          {topic.name}
                        </Link>{" "}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt>Read</dt>
                  <dd>
                    <span className="num">{story.minutes}</span> minutes
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <p className="kicker mb-3">About the writer</p>
              <p className="font-display">{story.author.name}</p>
              <p className="card-copy mt-2">{story.author.bio}</p>
              <Link
                href={`/authors/${story.author.slug}`}
                className="font-ui mt-3 inline-block underline underline-offset-4"
              >
                More by {story.author.name.split(" ")[0]}
              </Link>
            </div>
          </aside>
        </article>

        <section className="page-wrap mt-16">
          <p className="kicker">Next up</p>
          <h2 className="font-display">Keep reading</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {next.map((item) => (
              <StoryCard key={item.slug} story={item} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
