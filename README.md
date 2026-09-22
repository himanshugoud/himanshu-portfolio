# Himanshu Goud — Portfolio

Personal portfolio site for Himanshu Goud, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app` — root layout, global styles, and the single page (`page.tsx`) that assembles every section
- `src/components` — one component per section (Hero, AboutSection, ExperienceSection, WorkSection, etc.)
- `src/data/projects.ts` — project case-study content (title, problem, solution, stack, links, image path)
- `src/lib/site.ts` — centralized identity/links (name, email, GitHub, LinkedIn, resume path) — never hardcode these elsewhere
- `public/images` — profile photo, project screenshots, personal/workspace image
- `public/resume` — downloadable resume PDF

## Updating content

- **Swap a project screenshot**: drop an image at the path referenced in `src/data/projects.ts` (e.g. `public/images/projects/raktsetu.png`) — it's picked up automatically, no code change needed.
- **Add the workspace photo**: drop an image at `public/images/personal/workspace.jpg`.
- **Update links or contact info**: edit `src/lib/site.ts` only.
- **Deploying**: set the `NEXT_PUBLIC_SITE_URL` environment variable to your real domain so social share previews (Open Graph/Twitter cards) resolve correctly.

## Build

```bash
npm run build
```
