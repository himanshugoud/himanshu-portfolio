"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { categories, toneClasses } from "@/data/categories";
import RevealWords from "./RevealWords";

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Starting pose of each card while the deck is clustered at the bottom of the
// first screen: a little rotation and vertical stagger so the deck looks fanned.
// Reveal the heading only once it has risen above the clustered deck.
const REVEAL_MARGIN = "0px 0px -32% 0px";

const CLUSTER_ROT = [-8, 6, -5, 7, -6];
const CLUSTER_DY = [8, -6, 4, -6, 8];

/**
 * The five cards exist exactly once. At scroll 0 they are pulled out of the
 * grid and drawn as a small, overlapping, slightly translucent deck peeking
 * above the bottom edge of the first screen. As the user scrolls they fly to
 * their real grid slot, growing and straightening on the way (driven directly
 * by scroll position, not a timed animation). Below 900px the cards simply
 * stack normally with no flight.
 */
export default function WhatIBringSection() {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    const cards = Array.from(row.children) as HTMLElement[];
    let nat: { top: number; left: number; w: number; h: number }[] = [];
    let raf = 0;

    const measure = () => {
      cards.forEach((c) => {
        c.style.transform = "none";
      });
      nat = cards.map((c) => {
        const r = c.getBoundingClientRect();
        return { top: r.top + window.scrollY, left: r.left + window.scrollX, w: r.width, h: r.height };
      });
    };

    const frame = () => {
      raf = 0;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const sy = window.scrollY;

      if (vw <= 900) {
        cards.forEach((c) => {
          c.style.transform = "";
          c.style.opacity = "";
          c.style.zIndex = "";
          c.style.pointerEvents = "";
        });
        return;
      }

      const n = cards.length;
      const spread = Math.min(vw * 0.115, 128);
      const clusterW = clamp(vw * 0.15, 118, 172);
      const PEEK = 96; // how many px of the deck show above the bottom edge

      cards.forEach((c, i) => {
        const { top, left, w, h } = nat[i];
        const natTop = top - sy;
        const cx = left + w / 2;
        const cy = natTop + h / 2;

        const stagger = i * vh * 0.045;
        const startY = vh * 1.3 + stagger;
        const endY = vh * 0.04 + stagger;
        const p = clamp((startY - natTop) / (startY - endY), 0, 1);
        const e = ease(p);

        const sc0 = clusterW / w;
        const targetX = vw / 2 + (i - (n - 1) / 2) * spread;
        const targetY = vh - PEEK + (h * sc0) / 2 + CLUSTER_DY[i];

        const dx = (targetX - cx) * (1 - e);
        const dy = (targetY - cy) * (1 - e);
        const rot = CLUSTER_ROT[i] * (1 - e);
        const sc = sc0 + (1 - sc0) * e;

        c.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px) rotate(${rot.toFixed(2)}deg) scale(${sc.toFixed(3)})`;
        c.style.opacity = (0.9 + 0.1 * e).toFixed(3); // slightly see-through while clustered
        c.style.zIndex = String(20 + i); // later cards sit on top of earlier ones
        c.style.pointerEvents = e > 0.92 ? "auto" : "none";
      });
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };
    const onResize = () => {
      measure();
      frame();
    };

    measure();
    frame();
    const t = setTimeout(() => {
      measure();
      frame();
    }, 500);
    document.fonts?.ready.then(() => {
      measure();
      frame();
    });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section id="services" className="bring-section">
      <div className="section-heading bring-heading">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8, margin: REVEAL_MARGIN }}
          transition={{ duration: 0.6 }}
        >
          ( WHAT I BRING / 01 )
        </motion.span>
        <h2>
          <RevealWords text="WHAT I BRING TO THE TABLE." accentWords={1} viewportMargin={REVEAL_MARGIN} />
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8, margin: REVEAL_MARGIN }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Five focus areas, and one stubborn habit of curiosity.
        </motion.p>
      </div>
      <div className="card-row" ref={rowRef}>
        {categories.map((card) => (
          <article key={card.n} className={`bring-card ${toneClasses[card.tone]}`}>
            <card.Icon className="card-icon" strokeWidth={1.7} />
            <div className="card-number">{card.n}</div>
            <h3>
              {card.title[0]}
              <br />
              {card.title[1]}
            </h3>
            <ul>
              {card.bullets.map((b) => (
                <li key={b}>› {b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
