import Link from "next/link";
import { ZineFolio } from "@/components/zine-folio";
import { ZineReader } from "@/components/zine-reader";
import { journal } from "@/lib/journal";
import { zineIssue, zinePages } from "@/lib/zine";

export const metadata = {
  title: "Zine",
  description: `${zineIssue.title} / ${zineIssue.journal} ${zineIssue.volume}. Nine journal plates, readable without JavaScript.`,
};

export default function ZinePage() {
  return (
    <main id="main" className="zine-shell">
      <a className="skip-link zine-skip" href="#zine-stage">
        Skip to the issue pages
      </a>
      <header className="page-wrap zine-mast">
        <p className="kicker">
          {zineIssue.title} / {zineIssue.journal} {zineIssue.volume}
        </p>
        <h1 className="font-display">Issue 001</h1>
        <p className="lead-copy mt-4 max-w-2xl">
          Nine plates from {journal.name} Issue {zineIssue.code}, {journal.issue.title}.
          Cover first, then two-page spreads on a wide screen. Previous / next,
          arrow keys, or a swipe turns the page. Every plate is an image in this
          HTML, so the issue stays visible if JavaScript does not run.
        </p>
        <p className="meta-line mt-3">
          <span className="num">{zinePages.length}</span> pages · keyboard arrows ·
          swipe
        </p>
      </header>
      <ZineReader>
        <ZineFolio />
      </ZineReader>
      <p className="page-wrap zine-after">
        <Link href="/archive" className="font-ui underline underline-offset-4">
          Read the stories as web pages
        </Link>
      </p>
    </main>
  );
}
