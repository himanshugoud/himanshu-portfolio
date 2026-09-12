"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

const sidebarNav = [
  { label: "Profile", href: "#home" },
  { label: "Portfolio", href: "#work" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ===================== DESKTOP SIDEBAR ===================== */}
      <aside
        className="hidden md:flex md:fixed md:inset-y-0 md:left-0 md:w-sidebar md:flex-col md:justify-between md:border-r md:border-line md:px-8 md:py-10"
        aria-label="Profile"
      >
        <div className="flex flex-col gap-6">
          <div className="relative aspect-square w-24 overflow-hidden rounded-[var(--radius-md)] border border-line">
            <Image
              src="/images/profile/himanshu.jpg"
              alt="Himanshu Goud"
              fill
              sizes="96px"
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col gap-1">
            <h2 className="font-display text-xl font-semibold leading-tight text-ink">
              {site.name}
            </h2>
            <p className="text-sm text-muted">{site.role}</p>
            <p className="text-sm text-muted">{site.education}</p>
            <p className="label-meta mt-1 text-muted">{site.location}</p>
          </div>

          <nav className="flex flex-col gap-3 border-t border-line pt-6">
            {sidebarNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="label-meta w-fit text-ink transition-opacity hover:opacity-60"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <a
          href={`mailto:${site.email}`}
          data-cursor-hover
          className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
        >
          Message
        </a>
      </aside>

      {/* ===================== MOBILE HEADER ===================== */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-line bg-paper/95 px-5 py-3 backdrop-blur md:hidden">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-[var(--radius-sm)] border border-line">
            <Image
              src="/images/profile/himanshu.jpg"
              alt="Himanshu Goud"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>
          <div className="leading-tight">
            <p className="font-display text-sm font-semibold text-ink">
              {site.name}
            </p>
            <p className="text-xs text-muted">{site.role}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-[var(--radius-sm)] border border-line"
        >
          <span
            className={`h-px w-5 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </header>

      {/* Mobile nav panel */}
      <div
        className={`fixed inset-x-0 top-[61px] z-40 origin-top border-b border-line bg-paper px-5 pb-6 pt-4 shadow-sm transition-[transform,opacity] duration-200 ease-out md:hidden ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
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
          {sidebarNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="label-meta text-muted"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={`mailto:${site.email}`}
          className="mt-6 inline-flex w-full items-center justify-center rounded-[var(--radius-md)] bg-accent px-5 py-3 text-sm font-medium text-accent-ink"
        >
          Contact
        </a>
      </div>
    </>
  );
}
