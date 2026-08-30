"use client";

import { useEffect, useState } from "react";

export function ReadingProgress({ targetId }: { targetId: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const article = document.getElementById(targetId);
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const start = window.scrollY + rect.top;
      const height = article.offsetHeight - window.innerHeight;
      const value =
        height <= 0 ? 1 : Math.min(1, Math.max(0, (window.scrollY - start) / height));
      setProgress(value);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [targetId]);

  return (
    <div
      className="reading-progress"
      role="progressbar"
      aria-label="Reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
    >
      <span
        style={{
          transform: `scaleX(${progress})`,
          transition: undefined,
        }}
      />
    </div>
  );
}
