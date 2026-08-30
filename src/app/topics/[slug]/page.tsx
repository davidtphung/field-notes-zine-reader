import Link from "next/link";
import { notFound } from "next/navigation";
import { StoryCard } from "@/components/story-card";
import { catalogHref } from "@/lib/catalog";
import { enrichStory, storiesByTopic } from "@/lib/stories";
import { getTopic, topics } from "@/lib/topics";

export function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/topics/[slug]">) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) return { title: "Topic" };
  return {
    title: topic.name,
    description: topic.summary,
  };
}

export default async function TopicPage({
  params,
}: PageProps<"/topics/[slug]">) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();

  const work = storiesByTopic(topic.slug)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map(enrichStory);

  return (
    <main id="main" className="page-wrap section">
      <p className="kicker">Topic</p>
      <h1 className="font-display">{topic.name}</h1>
      <p className="lead-copy mt-6 max-w-2xl">{topic.summary}</p>
      <p className="mt-4">
        <Link
          href={catalogHref({ topic: topic.slug })}
          className="font-ui underline underline-offset-4"
        >
          Open this topic in the archive
        </Link>
      </p>
      {work.length === 0 ? (
        <div className="empty-state mt-10">
          <h2 className="font-display">No stories in this lane yet</h2>
          <p className="card-copy mt-3">
            The first issue is still filling in. Try the full archive.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {work.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      )}
    </main>
  );
}
