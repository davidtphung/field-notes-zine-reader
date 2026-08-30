export const STORY_FORMATS = ["essay", "field-note", "dispatch", "how-to"] as const;

export type StoryFormat = (typeof STORY_FORMATS)[number];

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit: string;
  creditUrl: string;
  caption?: string;
};

export type StoryBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "figure"; photo: Photo }
  | {
      type: "ledger";
      title: string;
      rows: { label: string; value: string }[];
    }
  | { type: "ol"; items: string[] }
  | { type: "ul"; items: string[] };

export type Author = {
  slug: string;
  name: string;
  role: string;
  location: string;
  bio: string;
  initials: string;
};

export type Topic = {
  slug: string;
  name: string;
  summary: string;
};

export type Story = {
  slug: string;
  title: string;
  dek: string;
  format: StoryFormat;
  topicSlugs: string[];
  authorSlug: string;
  publishedAt: string;
  featured: boolean;
  lead: boolean;
  hero: Photo;
  body: StoryBlock[];
};
