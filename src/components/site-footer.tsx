import Link from "next/link";
import { SubscribeForm } from "@/components/subscribe-form";
import { Wordmark } from "@/components/mark";
import { journal } from "@/lib/journal";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-wrap footer-grid">
        <div>
          <Wordmark />
          <p className="lead-copy mt-4 max-w-sm text-paper/80">{journal.tagline}</p>
          <p className="meta-line mt-4 text-paper/60">
            Independent journal · {journal.masthead.place} · Founded{" "}
            <span className="num">{journal.masthead.founded}</span>
          </p>
        </div>
        <div>
          <p className="kicker text-paper/60">Browse</p>
          <ul className="mt-3 grid gap-2">
            <li>
              <Link href="/zine">Zine</Link>
            </li>
            <li>
              <Link href="/archive">Archive</Link>
            </li>
            <li>
              <Link href="/authors">Authors</Link>
            </li>
            <li>
              <Link href="/topics">Topics</Link>
            </li>
            <li>
              <Link href="/about">Masthead</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="kicker text-paper/60">Next issue</p>
          <div className="mt-3">
            <SubscribeForm id="footer-subscribe" compact />
          </div>
        </div>
      </div>
      <div className="page-wrap footer-legal">
        <p>
          © <span className="num">{new Date().getFullYear()}</span> Field Notes.
          All original copy.
        </p>
        <p>Photographs via Unsplash. Credits live on each story.</p>
      </div>
    </footer>
  );
}
