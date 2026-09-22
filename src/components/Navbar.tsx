"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Link href="#home" className="brand" aria-label="Himanshu Goud home">
          <span className="brand-dot" aria-hidden="true" />
          <span>{site.name}</span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          <Link href="#work">WORK</Link>
          <Link href="#about">ABOUT</Link>
          <a className="nav-resume" href={site.links.resume} target="_blank" rel="noreferrer">RESUME</a>
        </nav>
        <button className="mobile-menu" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation" aria-expanded={open}>
          <span /><span />
        </button>
      </div>
      <div className={`mobile-panel ${open ? "open" : ""}`}>
        <Link href="#work" onClick={() => setOpen(false)}>WORK</Link>
        <Link href="#about" onClick={() => setOpen(false)}>ABOUT</Link>
        <a href={site.links.resume} target="_blank" rel="noreferrer">RESUME</a>
      </div>
    </header>
  );
}
