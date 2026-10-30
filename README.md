# idepablo.com

Personal site of Ignacio de Pablo. Built with [Astro](https://astro.build) as a fully static site and published to GitHub Pages by the workflow in `.github/workflows/deploy.yml` on every push to `main`.

## How it is organized

| What | Where |
| --- | --- |
| Facts used in several places (name, title, email, links, "Now" and "Next" tiles) | `src/data/site.ts` |
| Homepage text: intro, about, work history, education, certifications, personal, contact | `src/data/profile.ts` |
| One file per project (case studies, AZIMUTH, Beat Otto) | `src/content/projects/*.html` |
| One file per build-log post | `src/content/buildlog/*.html` |
| Résumé, favicons, robots.txt, Beat Otto policy pages, project images | `public/` |
| Photos, covers and badge images that the build optimizes | `src/assets/` |
| Page templates | `src/pages/`, `src/layouts/`, `src/components/` |
| Design tokens (colors, fonts, spacing) and long-form article styles | `src/styles/global.css`, `src/styles/article.css` |

## Everyday updates

**New résumé:** replace `public/resume.pdf` and push. The link is the same everywhere.

**A fact changed (title, location, what you are doing now or next):** edit `src/data/site.ts` or `src/data/profile.ts`.

**New project:** add `src/content/projects/<slug>.html` with a frontmatter block at the top and the write-up below it. The frontmatter fields are validated at build time (`src/content.config.ts`), so a typo in a field name fails the build instead of publishing a broken page:

```
---
title: "Title shown on the page and the card"
eyebrow: "Case Study · SQL · Healthcare Analytics"
byline: "Ignacio de Pablo · April 2026"
description: "One or two sentences for search engines and link previews."
summary: "One or two sentences for the project card."
date: 2026-04-15
category: "Case study"          # or "Self-directed"
area: "Healthcare analytics"
cover: "../../assets/covers/my-cover.jpg"
tools: ["MySQL", "CTEs", "Window functions"]
pills: ["MySQL", "101,766 encounters"]
stats:
  - num: "43.5%"
    cap: "of all bed-days"
links:
  - label: "Kaggle dataset"
    href: "https://..."
featured: false                  # true puts it on the homepage
---
<p>The write-up, as HTML.</p>
```

A `.md` file with the same frontmatter works too; the body is then rendered as Markdown. HTML is the safer choice for anything with code samples, because Markdown changes quotes and spacing inside them.

**New build-log post:** add `src/content/buildlog/<slug>.html` with `title`, `dateLabel` (what readers see), `date` (used for ordering and the RSS feed), `summary` and `project`. It appears on the homepage, the build-log index, the AZIMUTH page and the RSS feed automatically.

**New certification:** put the 340x340 badge PNG in `src/assets/badges/` and add a line to `certifications` in `src/data/profile.ts` with the Credly verification link.

## Running it locally

Requires Node 22 or newer.

```
npm install
npm run dev       # local preview at http://localhost:4321
npm run build     # production build in dist/
```

## Deployment and security

- GitHub Pages serves the `dist/` output that the workflow builds. Repository settings > Pages > Source must be **GitHub Actions**.
- The workflow has read-only access to the repository contents; it only needs to write the Pages deployment.
- The site is static files only: no server code, no database, no forms, no login, so there is nothing to inject into or take over. The remaining risks are the GitHub account and the DNS for the domain. Keep two-factor authentication on for both, and enable branch protection on `main` so that changes go through a pull request.
- Third-party code loads only on demand (the AZIMUTH and Tableau embeds appear when a visitor clicks "Load"), and the only script fetched on every page is the GoatCounter counter, which sets no cookies.
- Dependencies are pinned in `package-lock.json`. Running `npm audit` after `npm install` shows whether anything needs an update.
