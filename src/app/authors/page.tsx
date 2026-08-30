import Link from "next/link";
import { authors } from "@/lib/authors";
import { storiesByAuthor } from "@/lib/stories";

export const metadata = {
  title: "Authors",
  description: "The Field Notes masthead and correspondents for Issue 001.",
};

export default function AuthorsPage() {
  return (
    <main id="main" className="page-wrap section">
      <p className="kicker">People</p>
      <h1 className="font-display">Authors</h1>
      <p className="lead-copy mt-6 max-w-2xl">
        Five writers for the first issue. None of them are here to endorse a
        product. They file from working harbors, wet kitchens, and the walk
        between the tap and the next good intake.
      </p>
      <div className="author-grid mt-10">
        {authors.map((author) => {
          const count = storiesByAuthor(author.slug).length;
          return (
            <Link
              key={author.slug}
              href={`/authors/${author.slug}`}
              className="person-card"
            >
              <p className="kicker">
                {author.role} · {author.location}
              </p>
              <h3 className="mt-3 font-display">{author.name}</h3>
              <p className="card-copy mt-3">{author.bio}</p>
              <p className="meta-line mt-4">
                <span className="num">{count}</span>{" "}
                {count === 1 ? "story" : "stories"}
              </p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
