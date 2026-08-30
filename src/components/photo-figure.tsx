import Image from "next/image";
import type { Photo } from "@/lib/types";
import { cn } from "@/lib/utils";

export function PhotoFigure({
  photo,
  priority = false,
  sizes,
  className,
  figureClassName,
  rounded = true,
  aspect,
}: {
  photo: Photo;
  priority?: boolean;
  sizes: string;
  className?: string;
  figureClassName?: string;
  rounded?: boolean;
  aspect?: string;
}) {
  return (
    <figure className={cn("photo-figure", figureClassName)}>
      <div
        className={cn(
          "relative overflow-hidden bg-rule",
          rounded && "rounded-[2px]",
          aspect,
          className,
        )}
      >
        {aspect ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover"
          />
        ) : (
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            priority={priority}
            sizes={sizes}
            className="h-auto w-full object-cover"
          />
        )}
      </div>
      {(photo.caption || photo.credit) && (
        <figcaption className="photo-caption">
          {photo.caption ? <span>{photo.caption}</span> : null}
          {photo.credit ? (
            <span className="photo-credit">
              Photo:{" "}
              <a
                href={photo.creditUrl}
                rel="noreferrer"
                target="_blank"
              >
                {photo.credit}
              </a>
              , Unsplash
            </span>
          ) : null}
        </figcaption>
      )}
    </figure>
  );
}
