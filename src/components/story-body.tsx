import { PhotoFigure } from "@/components/photo-figure";
import type { StoryBlock } from "@/lib/types";

function measure(value: string) {
  return value.split(/(\d[\d.,:]*)/g).map((part, index) =>
    /^\d/.test(part) ? (
      <span key={index} className="num">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export function StoryBody({ blocks }: { blocks: StoryBlock[] }) {
  return (
    <div className="story-prose">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "p":
            return <p key={index}>{block.text}</p>;
          case "h2":
            return <h2 key={index}>{block.text}</h2>;
          case "quote":
            return (
              <blockquote key={index} className="pull-quote">
                <p>{block.text}</p>
                {block.attribution ? <cite>{block.attribution}</cite> : null}
              </blockquote>
            );
          case "figure":
            return (
              <PhotoFigure
                key={index}
                photo={block.photo}
                sizes="(min-width: 1100px) 760px, 100vw"
              />
            );
          case "ledger":
            return (
              <aside key={index} className="ledger" aria-label={block.title}>
                <p className="kicker">{block.title}</p>
                <dl>
                  {block.rows.map((row) => (
                    <div key={row.label}>
                      <dt>{row.label}</dt>
                      <dd>{measure(row.value)}</dd>
                    </div>
                  ))}
                </dl>
              </aside>
            );
          case "ol":
            return (
              <ol key={index}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            );
          case "ul":
            return (
              <ul key={index}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
