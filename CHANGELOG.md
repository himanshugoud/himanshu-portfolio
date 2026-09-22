# Changelog

## Craft upgrade pass

Brought the site's interaction/animation sophistication up to a level that
was previously missing, using your existing content, colors and fonts.
Nothing here was copied from another site — these are standard modern
portfolio techniques, implemented fresh.

### Added
- **Custom cursor v2** (`CustomCursor.tsx`) — expands into a colored label
  pill ("View live site") with a per-project accent color when hovering a
  project link, instead of a plain dot. Respects `prefers-reduced-motion`
  and disables itself entirely on touch devices.
- **`RevealWords`** — new reusable component that splits a heading into
  words and reveals them with a staggered fade/slide as they scroll into
  view. Applied to the Hero, "What I Bring," and About headings.
- **Spinning hero badge** — the "open to work · say hi" badge is now a real
  SVG with text-on-a-circle, rotating continuously (16s/turn), instead of a
  static tilted div.
- **Tools section**: added real per-tool proficiency percentages and colors
  driving proportional animated bars (was previously a flat 1px line with no
  data behind it). Added a genuine second subsection, "AI in the workflow,"
  listing the AI tools actually used (Claude, Claude Code, ChatGPT, Copilot)
  — previously only a single sentence with no follow-through list.
- **Experience timeline**: connecting line is now a gradient, with each
  node's border color matching its position on the gradient.
- **Marker/highlighter effect** on a key phrase in the About section.

### Fixed
- Removed `ProjectCard.tsx` — dead code, never imported anywhere.
- Merged the footer, which was previously two disconnected light-background
  pieces (a CTA block in `ContactSection` + a separate thin bar in
  `Footer.tsx`), into one unified dark footer block in `ContactSection.tsx`.
  `Footer.tsx` removed; `page.tsx` updated.
- Certifications section heading/copy cleaned up for consistency.
- A stray SVG prop (`textTransform` isn't valid on `<text>` in React's SVG
  typings) caught by `tsc` during the production build — fixed before this
  was packaged, not after.

### Verified before packaging
- `npx next build` — clean production build, zero TypeScript errors.
- Production server booted and every new section's HTML was inspected
  directly (not assumed): hero word-reveal markup, tool bar fill/color
  values, AI-workflow list, cursor `data-*` attributes on project links,
  unified contact/footer markup — all confirmed present and correctly
  populated in the actual server output.
- All referenced images/resume asset paths resolve to real files in
  `public/` and return HTTP 200.
- `globals.css` brace count balanced (206 open / 206 close).

### Known limitation
I could not get a real browser screenshot in this environment (Playwright's
Chromium install was blocked by network restrictions here), so this was
verified by inspecting actual rendered HTML/CSS output rather than by eye.
Do a visual pass yourself after `npm run dev` before you consider this final
— particularly mobile breakpoints, which I edited but couldn't visually
confirm.
