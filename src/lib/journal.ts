export const journal = {
  name: "Field Notes",
  tagline: "Stories for people building a more intentional life.",
  issue: {
    code: "001",
    title: "Open Water",
    volume: "Vol. 01",
    season: "Spring / Summer 2026",
    statement:
      "This issue is about range. Not the kind sold as a feature, the kind you earn by knowing your water, your weather, and when to turn around.",
  },
  domain: "openwater.davidtphung.com",
  siteUrl: "https://openwater.davidtphung.com",
  masthead: {
    founded: "2026",
    place: "Astoria, Oregon",
    frequency: "Seasonal issues, weekly field notes",
  },
};

export const formatLabels: Record<
  "essay" | "field-note" | "dispatch" | "how-to",
  string
> = {
  essay: "Essay",
  "field-note": "Field note",
  dispatch: "Dispatch",
  "how-to": "How-to",
};
