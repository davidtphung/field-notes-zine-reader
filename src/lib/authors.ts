import type { Author } from "./types";

export const authors: Author[] = [
  {
    slug: "mira-chen",
    name: "Mira Chen",
    role: "Editor",
    location: "Astoria, Oregon",
    initials: "MC",
    bio: "Mira edits Field Notes and writes about judgment, distance, and the small systems that keep a trip honest. She spent six years as a hydrographer's assistant on the lower Columbia before moving into magazines. She still keeps a paper tide book in the glove box.",
  },
  {
    slug: "ellis-ward",
    name: "Ellis Ward",
    role: "Field craft editor",
    location: "Port Townsend, Washington",
    initials: "EW",
    bio: "Ellis teaches packing, boat keeping, and the unglamorous work that happens after the photograph. He ran a small-craft shop for a decade and now writes the how-to pages. His test for any kit is whether it still works after three wet days.",
  },
  {
    slug: "samira-okonkwo",
    name: "Samira Okonkwo",
    role: "Correspondent",
    location: "Oakland, California",
    initials: "SO",
    bio: "Samira writes essays and coastal dispatches on habit, water, and what autonomy actually costs. She reports from the Pacific edge and from the cities that forget they sit on a watershed. She prefers a notebook that can take rain.",
  },
  {
    slug: "jonah-hale",
    name: "Jonah Hale",
    role: "Dispatch writer",
    location: "Anacortes, Washington",
    initials: "JH",
    bio: "Jonah works seasonal boat jobs and files dispatches when the weather lets him. He is interested in night watches, temporary harbors, and the social contract of a shared galley. Winters, he mends gear and reads old coast pilots.",
  },
  {
    slug: "lena-voss",
    name: "Lena Voss",
    role: "Camp and kitchen",
    location: "Port Angeles, Washington",
    initials: "LV",
    bio: "Lena trained as a field botanist and writes about camp kitchens, trail water, and the plants that tell you where you are. She believes a trip is going well when dinner is on time and nobody is performing hardship.",
  },
];

export function getAuthor(slug: string) {
  return authors.find((author) => author.slug === slug);
}

export function getAuthorOrThrow(slug: string) {
  const author = getAuthor(slug);
  if (!author) {
    throw new Error(`Unknown author: ${slug}`);
  }
  return author;
}
