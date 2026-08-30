import Link from "next/link";
import { storiesByTopic } from "@/lib/stories";
import { topics } from "@/lib/topics";

export const metadata = {
  title: "Topics",
  description: "Water, range, field craft, autonomy, navigation, and camp.",
};

export default function TopicsPage() {
  return (
    <main id="main" className="page-wrap section">
      <p className="kicker">Map</p>
      <h1 className="font-display">Topics</h1>
      <p className="lead-copy mt-6 max-w-2xl">
        Six lanes through Issue 001. Each one is a real filter, not a tag
        cloud. Use them to read across formats.
      </p>
      <div className="topic-grid mt-10">
        {topics.map((topic) => {
          const count = storiesByTopic(topic.slug).length;
          return (
            <Link
              key={topic.slug}
              href={`/topics/${topic.slug}`}
              className="topic-card"
            >
              <p className="kicker">
                <span className="num">{count}</span>{" "}
                {count === 1 ? "story" : "stories"}
              </p>
              <h3 className="mt-3 font-display">{topic.name}</h3>
              <p className="card-copy mt-3">{topic.summary}</p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
