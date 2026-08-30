import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="page-wrap not-found">
      <p className="kicker">
        <span className="num">404</span> / Off the chart
      </p>
      <h1 className="font-display">This page is not on the log.</h1>
      <p className="lead-copy mt-6 max-w-xl">
        The link may have drifted, or the story never shipped. The archive is
        still the shortest way back to deep water.
      </p>
      <form action="/archive" method="get" className="mt-8 grid max-w-md gap-3" role="search">
        <label htmlFor="missing-q" className="kicker">
          Search the journal
        </label>
        <input
          id="missing-q"
          name="q"
          type="search"
          placeholder="Fog, cache, harbor…"
          className="select-ledger"
        />
        <button type="submit" className="btn-kelp w-fit">
          Search archive
        </button>
      </form>
      <p className="mt-6">
        <Link href="/" className="underline underline-offset-4">
          Return to the lead
        </Link>
      </p>
    </main>
  );
}
