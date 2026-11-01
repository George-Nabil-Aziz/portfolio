# George Nabil Aziz — Portfolio

Personal portfolio of **George Nabil Aziz**, Full Stack Developer.
Bilingual (English / Arabic with full RTL), light and dark themes, fully static.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Motion · next-themes

## Run it

```bash
npm install
npm run dev      # http://localhost:3000 (redirects to /en or /ar)
npm run build    # production build
npm run lint
```

## Editing content

All text lives in two files. Components never hold user-facing strings.

| File | What it holds |
| --- | --- |
| `src/content/site.ts` | Profile, links, stats, experience, services, skills, projects, case studies |
| `src/content/ui.ts` | Fixed interface text: headings, buttons, labels |

Every piece of text is an `{ en, ar }` pair, read with `tr(text, locale)` from `src/i18n.ts`.

To add a case study, give a project in `featured` a `caseStudy` array — its page at
`/[lang]/projects/[slug]` is generated automatically.

## Structure

| Path | Contents |
| --- | --- |
| `src/app/[lang]/` | Root layout (fonts, theme, `lang`/`dir`), home page, project pages, link-preview image |
| `src/app/sitemap.ts`, `robots.ts` | SEO files |
| `src/proxy.ts` | Redirects `/` to `/en` or `/ar` from the browser language |
| `src/components/sections/` | One component per home-page section |
| `src/components/` | Header, footer, shared pieces (`Section`, `Reveal`, `CountUp`, `BlurText`, contact form) |
| `public/George_Nabil_Aziz_CV.pdf` | The downloadable CV |

## Conventions

- **RTL-safe classes only:** `ms-`/`me-`/`ps-`/`pe-`/`start-`/`end-`, never `ml-`/`mr-`/`left-`/`right-`.
- **Colours only from theme tokens** in `src/app/globals.css` (`bg-surface`, `text-muted`, `text-accent`, …).
- **Motion respects `prefers-reduced-motion`.**

## Configuration

| Setting | Where |
| --- | --- |
| Contact form | Create a form at [formspree.io](https://formspree.io) and set `formspreeId` in `site.ts`. Until then the form opens the visitor's email app. |
| Site address | `NEXT_PUBLIC_SITE_URL` environment variable (used by the sitemap and link previews). |

## Deploy

Import the repository into [Vercel](https://vercel.com) — no settings needed. Set
`NEXT_PUBLIC_SITE_URL` to the final address.
