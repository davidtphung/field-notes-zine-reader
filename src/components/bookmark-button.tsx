"use client";

import { Bookmark } from "lucide-react";
import { useBookmarks } from "@/hooks/use-bookmarks";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BookmarkButton({
  slug,
  title,
  compact = false,
}: {
  slug: string;
  title: string;
  compact?: boolean;
}) {
  const { isSaved, toggle } = useBookmarks();
  const saved = isSaved(slug);

  return (
    <Button
      type="button"
      variant={saved ? "default" : "outline"}
      size={compact ? "sm" : "default"}
      onClick={() => toggle(slug)}
      aria-pressed={saved}
      aria-label={
        saved ? `Remove ${title} from saved stories` : `Save ${title}`
      }
      className={cn(
        "gap-2 font-medium",
        saved && "bg-kelp text-paper hover:bg-kelp/90",
      )}
    >
      <Bookmark
        className={cn("size-4", saved && "fill-current")}
        aria-hidden="true"
      />
      <span>{saved ? "Saved" : "Save"}</span>
    </Button>
  );
}
