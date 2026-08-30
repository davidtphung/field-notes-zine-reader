export const zineIssue = {
  title: "OPEN WATER",
  journal: "Field Notes",
  volume: "Vol. 01",
  code: "001",
  pageCount: 9,
};

export const zinePages = [
  {
    id: 1,
    src: "/zine/page-01.jpg",
    label: "Cover",
    alt: "Open Water cover: a surfer in the barrel of a turquoise wave, Field Notes Issue 001 / Vital Lyfe.",
    width: 1024,
    height: 1536,
  },
  {
    id: 2,
    src: "/zine/page-02.jpg",
    label: "Manifesto",
    alt: "Manifesto spread: aerial boat wake and Freedom to Go Further.",
    width: 1400,
    height: 933,
  },
  {
    id: 3,
    src: "/zine/page-03.jpg",
    label: "Tideline",
    alt: "Tideline spread: The world is 71% water. Access changes the other 29%.",
    width: 1400,
    height: 933,
  },
  {
    id: 4,
    src: "/zine/page-04.jpg",
    label: "The unit",
    alt: "The Problem and The Unit: Range is a water problem, Access specs.",
    width: 1400,
    height: 933,
  },
  {
    id: 5,
    src: "/zine/page-05.jpg",
    label: "Under the hood",
    alt: "Centerfold: Intelligence in the flow, five-stage treatment path.",
    width: 1400,
    height: 933,
  },
  {
    id: 6,
    src: "/zine/page-06.jpg",
    label: "The Waterman",
    alt: "Partnership plate: The Waterman, John John Florence x Vital Lyfe.",
    width: 1400,
    height: 933,
  },
  {
    id: 7,
    src: "/zine/page-07.jpg",
    label: "Operation",
    alt: "Operation and Field Craft: Place hose. Press start. Hydrate.",
    width: 1400,
    height: 933,
  },
  {
    id: 8,
    src: "/zine/page-08.jpg",
    label: "The journal",
    alt: "From the Frontier journal index and Reserve the Future pre-order plate.",
    width: 1400,
    height: 933,
  },
  {
    id: 9,
    src: "/zine/page-09.jpg",
    label: "Close",
    alt: "Close plate: Vital Lyfe, Freedom to Go Further, Open Water Issue 001.",
    width: 1024,
    height: 1536,
  },
] as const;

export type ZinePage = (typeof zinePages)[number];

export function padPage(id: number) {
  return String(id).padStart(2, "0");
}

export function desktopViews(count: number) {
  const views: number[][] = [[0]];
  for (let i = 1; i < count; i += 2) {
    views.push(i + 1 < count ? [i, i + 1] : [i]);
  }
  return views;
}
