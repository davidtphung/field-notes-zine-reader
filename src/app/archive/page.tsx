import { Suspense } from "react";
import { ArchiveExplorer } from "@/components/archive-explorer";
import type { CatalogQuery } from "@/lib/catalog";
import { stories } from "@/lib/stories";

export const metadata = {
  title: "Archive",
  description:
    "All Field Notes stories, filterable by format, topic, author, and the words on the page.",
};

export default async function ArchivePage({
  searchParams,
}: PageProps<"/archive">) {
  const params = await searchParams;
  const initial: CatalogQuery = {
    q: first(params.q),
    format: first(params.format),
    topic: first(params.topic),
    author: first(params.author),
    saved: first(params.saved),
  };

  return (
    <main id="main" className="page-wrap section">
      <p className="kicker">Index</p>
      <h1 className="font-display">Archive</h1>
      <p className="lead-copy mt-6 max-w-2xl">
        <span className="num">{stories.length}</span> stories from Issue 001.
        Search the copy, filter by format, and save what you want to reread. The
        address bar keeps your view, so a filter is a link.
      </p>
      <div className="mt-10">
        <Suspense fallback={<p className="meta-line">Loading the index…</p>}>
          <ArchiveExplorer initial={initial} />
        </Suspense>
      </div>
    </main>
  );
}

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}
