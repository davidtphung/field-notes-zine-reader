import { zinePages } from "@/lib/zine";

export function ZineFolio() {
  return (
    <div className="zine-folio">
      {zinePages.map((page) => (
        <figure
          key={page.id}
          className="zine-leaf zine-page"
          data-page={page.id}
        >
          {/* Plain img so the HTML itself always contains the nine plates. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={page.src}
            alt={page.alt}
            width={page.width}
            height={page.height}
          />
          <figcaption className="sr-only">
            Page {page.id} / {zinePages.length} · {page.label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
