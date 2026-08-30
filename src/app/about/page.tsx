import Link from "next/link";
import { authors } from "@/lib/authors";
import { journal } from "@/lib/journal";

export const metadata = {
  title: "About",
  description:
    "Field Notes is an independent journal of water, range, and field craft.",
};

export default function AboutPage() {
  return (
    <main id="main" className="page-wrap section">
      <p className="kicker">Masthead</p>
      <h1 className="max-w-4xl font-display">
        {journal.name} is an independent journal, not a catalog.
      </h1>
      <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="lead-copy max-w-2xl space-y-5">
          <p>
            We publish stories for people building a more intentional life,
            starting with Issue 001, {journal.issue.title}. The beat is water,
            range, field craft, and the quiet systems that make a trip possible
            without turning it into a brand exercise.
          </p>
          <p>
            The magazine is edited in {journal.masthead.place}. Frequency:{" "}
            {journal.masthead.frequency.toLowerCase()}. There is no checkout,
            no cart, and no invented celebrity endorsement. A subscribe box
            stores an email on your browser if you want a reminder. That is the
            whole commercial apparatus.
          </p>
          <p>
            Photography is first because a harbor at dusk is easier to trust
            than a paragraph that tries to sell you weather. We use original
            marks and royalty-free photographs, credited on the page. If a
            picture cannot carry a caption, it does not run.
          </p>
          <p>
            Desired home on the public web: {journal.domain}. The writing
            stays here, in this repository, as the source of truth.
          </p>
        </div>
        <aside className="ledger h-fit">
          <p className="kicker">Issue plate</p>
          <dl>
            <div>
              <dt>Title</dt>
              <dd>{journal.issue.title}</dd>
            </div>
            <div>
              <dt>Volume</dt>
              <dd><span className="num">{journal.issue.volume}</span></dd>
            </div>
            <div>
              <dt>Season</dt>
              <dd>{journal.issue.season}</dd>
            </div>
            <div>
              <dt>Founded</dt>
              <dd><span className="num">{journal.masthead.founded}</span></dd>
            </div>
          </dl>
        </aside>
      </div>

      <section className="mt-16">
        <h2 className="font-display">Who files</h2>
        <ul className="mt-6 grid gap-4">
          {authors.map((author) => (
            <li key={author.slug} className="border-t border-rule pt-4">
              <Link
                href={`/authors/${author.slug}`}
                className="font-display link-quiet"
              >
                {author.name}
              </Link>
              <p className="meta-line mt-1">
                {author.role} · {author.location}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
