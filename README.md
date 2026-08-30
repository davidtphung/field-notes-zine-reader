# Field Notes

An independent editorial journal. Issue 001 is **Open Water**: stories about water, range, field craft, and autonomy.

Tagline: Stories for people building a more intentional life.

Desired live domain: `openwater.davidtphung.com`

This repository is the source of truth. Deploy from here. Do not mirror the project to GitHub only so a host can see it.

## Stack

- Next.js App Router, TypeScript
- Tailwind CSS and a small set of shadcn/ui primitives
- Type: Inter (300–700) for prose and labels; JetBrains Mono only for numbers
- Local story data, no database
- Saved stories and the subscribe box use `localStorage` only

## Run locally

```bash
npm install
npm run dev
```

The dev server listens on [http://127.0.0.1:43147](http://127.0.0.1:43147).

```bash
npm run build
npm run start
```

`npm run lint` runs the Next.js ESLint config.

## What is here

- Home with a full-bleed lead, issue contents, and featured stories
- Interactive zine viewer at `/zine`: nine JPEG plates in the HTML (`/zine/page-01.jpg` … `page-09.jpg`), cover then spreads on desktop, one page on mobile, previous/next, arrow keys, swipe, and a page indicator. The plates stay visible if JavaScript is off.
- Archive with working search, filters, saved stories, and shareable URLs
- Longform story pages with progress, read time, pull quotes, and next-up
- Authors, topics, about/masthead, and an on-brand 404
- Twelve original stories, five authors, six topics

Photography is stored in `public/photos` (Unsplash License) and credited on the page. Marks and layout are original. This is not a facsimile of any other journal.

## Deploy

Keep this Origin repository as the source of truth.

1. Import the Origin git remote into [Vercel](https://vercel.com) (or Origin’s own Next.js host if you use that instead).
2. Framework preset: Next.js. Build command: `npm run build`. Output: default `.next`.
3. Set the production domain to `openwater.davidtphung.com` in the host’s domain panel.
4. Copy the CNAME target the host gives you. Vercel’s target is usually `cname.vercel-dns.com`. Confirm it in the project domain screen.

Do not create a throwaway GitHub copy just to attach Vercel. Point the host at this Origin remote.

## GoDaddy DNS for the subdomain

In GoDaddy DNS for `davidtphung.com`:

| Type  | Name       | Value / points to                         | TTL   |
| ----- | ---------- | ----------------------------------------- | ----- |
| CNAME | `openwater` | The Vercel or Origin target from step 4 | 600 s |

Do not create an A record for `openwater` if a CNAME is present. Wait for DNS, then complete HTTPS in the host dashboard.

Apex (`davidtphung.com`) is a different record. This journal only needs the `openwater` subdomain.

## Content and legal notes

- All magazine copy in `src/lib` is original.
- Do not add third-party wordmarks or scraped brand photos.
- The subscribe form does not send mail. It stores an address in the browser so the UI can be honest without a fake backend.
