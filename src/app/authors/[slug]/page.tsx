import { notFound } from "next/navigation";
import { StoryCard } from "@/components/story-card";
import { authors, getAuthor } from "@/lib/authors";
import { enrichStory, storiesByAuthor } from "@/lib/stories";

export function generateStaticParams() {
  return authors.map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/authors/[slug]">) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) return { title: "Author" };
  return {
    title: author.name,
    description: author.bio,
  };
}

export default async function AuthorPage({
  params,
}: PageProps<"/authors/[slug]">) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) notFound();

  const work = storiesByAuthor(author.slug)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map(enrichStory);

  return (
    <main id="main" className="page-wrap section">
      <p className="kicker">
        {author.role} · {author.location}
      </p>
      <h1 className="font-display">{author.name}</h1>
      <p className="lead-copy mt-6 max-w-2xl">{author.bio}</p>
      <h2 className="mt-12 font-display">Stories</h2>
      {work.length === 0 ? (
        <p className="mt-4 text-ink/70">No stories filed yet.</p>
      ) : (
        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          {work.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      )}
    </main>
  );
}
