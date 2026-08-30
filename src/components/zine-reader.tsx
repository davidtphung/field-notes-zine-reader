"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { desktopViews, zinePages } from "@/lib/zine";
import { cn } from "@/lib/utils";

function useWideStage() {
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 860px)");
    const sync = () => setWide(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);
  return wide;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);
  return reduced;
}

export function ZineReader({ children }: { children: ReactNode }) {
  const wide = useWideStage();
  const reduced = usePrefersReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const touch = useRef<{ x: number; t: number } | null>(null);
  const views = useMemo(
    () => (wide ? desktopViews(zinePages.length) : zinePages.map((_, i) => [i])),
    [wide],
  );
  const [index, setIndex] = useState(0);
  const safeIndex = Math.min(index, views.length - 1);
  const current = useMemo(() => views[safeIndex] ?? [0], [views, safeIndex]);

  const go = useCallback(
    (next: number) => {
      setIndex(Math.max(0, Math.min(views.length - 1, next)));
    },
    [views.length],
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const folio = root.querySelector(".zine-folio");
    if (!folio) return;
    folio.classList.add("is-reader");
    folio.classList.toggle("is-spread", current.length > 1);
    folio.classList.toggle("is-single", current.length === 1);
    const leaves = folio.querySelectorAll<HTMLElement>(".zine-leaf");
    leaves.forEach((leaf, i) => {
      leaf.classList.toggle("is-on", current.includes(i));
    });
  }, [current]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "ArrowRight" || event.key === "PageDown") {
        event.preventDefault();
        go(safeIndex + 1);
      }
      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        go(safeIndex - 1);
      }
      if (event.key === "Home") go(0);
      if (event.key === "End") go(views.length - 1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, safeIndex, views.length]);

  const firstPage = current[0] + 1;
  const lastPage = current[current.length - 1] + 1;
  const indicator =
    firstPage === lastPage
      ? `${firstPage} / ${zinePages.length}`
      : `${firstPage}–${lastPage} / ${zinePages.length}`;

  return (
    <div className="zine-reader" ref={rootRef}>
      <div
        id="zine-stage"
        className={cn("zine-stage", reduced && "is-static")}
        tabIndex={-1}
        onTouchStart={(event) => {
          const point = event.changedTouches[0];
          touch.current = { x: point.clientX, t: Date.now() };
        }}
        onTouchEnd={(event) => {
          if (!touch.current) return;
          const point = event.changedTouches[0];
          const dx = point.clientX - touch.current.x;
          const dt = Date.now() - touch.current.t;
          touch.current = null;
          if (dt > 800 || Math.abs(dx) < 48) return;
          go(dx < 0 ? safeIndex + 1 : safeIndex - 1);
        }}
      >
        {children}
      </div>

      <div className="zine-controls">
        <button
          type="button"
          className="zine-btn"
          onClick={() => go(safeIndex - 1)}
          disabled={safeIndex === 0}
        >
          Previous
        </button>
        <p className="zine-indicator" aria-live="polite">
          <span className="num">{indicator}</span>
        </p>
        <button
          type="button"
          className="zine-btn"
          onClick={() => go(safeIndex + 1)}
          disabled={safeIndex === views.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
