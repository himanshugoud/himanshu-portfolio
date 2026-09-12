"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="content-col flex items-center justify-between py-4">
        <Link href="#home" className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          <span className="font-display text-base font-bold uppercase tracking-tight text-ink">
            {site.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="label-meta group relative text-ink"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-200 ease-out group-hover:w-full" />
            </Link>
          ))}
          <a
            href={site.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="label-meta inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-accent-ink transition-colors hover:bg-accent-dim"
          >
            Resume
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-[var(--radius-sm)] border border-line md:hidden"
        >
          <span
            className={`h-px w-5 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile nav panel */}
      <div
        className={`origin-top border-t border-line bg-paper px-5 pb-6 pt-4 transition-[transform,opacity] duration-200 ease-out md:hidden ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none absolute inset-x-0 -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4">
          {site.nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="label-meta text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={site.links.resume}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-ink"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
