import { site } from "@/lib/site";

/**
 * PHASE 0 — FOUNDATION CHECK
 * This placeholder exists only to verify fonts, colors and spacing
 * tokens are wired up correctly. It is replaced entirely in Phase 1
 * (Home / Hero).
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <span className="label-meta text-muted">Foundation check</span>
      <h1 className="font-display text-6xl font-semibold tracking-tight text-ink sm:text-8xl">
        H<span className="text-accent">G</span>.
      </h1>
      <p className="max-w-xs text-center font-sans text-sm text-muted">
        {site.name} — {site.role}. Design tokens loaded, ready for Phase 1.
      </p>
    </main>
  );
}
