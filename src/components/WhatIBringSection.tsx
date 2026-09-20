"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { categories, toneClasses, type Category } from "@/data/categories";

// Word-by-word heading reveal — confirmed directly from the reference's
// DOM: each word of the h2 is its own span, animating opacity 0→1 and
// translateY(0.6em)→0 with a per-word stagger, not the heading fading in
// as one block the way the earlier version did.
const headingWords: { text: string; accent?: boolean }[] = [
  { text: "What" },
  { text: "I" },
  { text: "Bring" },
  { text: "To" },
  { text: "The" },
  { text: "Table.", accent: true },
];

const wordVariants = {
  hidden: { opacity: 0, y: "0.6em" },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] as const },
  },
};

const headingContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055, delayChildren: 0.05 } },
};

const revealUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] as const },
  },
};

export default function WhatIBringSection() {
  return (
    <section id="services" className="content-col relative pb-16 pt-0 md:pb-20">
      {/* Heading sits absolutely above the card grid so it takes no layout
          space of its own — confirmed necessary against the reference:
          the cards start peeking right at the bottom of the hero fold,
          which is only possible if the (still off-screen / not-yet-
          revealed) heading isn't pushing them down first. The margin on
          `viewport` delays the reveal trigger until the section has
          actually been scrolled to, rather than firing immediately
          because the heading happens to already be within the tall
          absolute box at page load. */}
      <motion.div
        variants={headingContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6, margin: "0px 0px -35% 0px" }}
        className="pointer-events-none absolute inset-x-0 bottom-full mx-auto mb-8 max-w-2xl text-center md:mb-10"
      >
        <motion.span variants={revealUp} className="label-meta text-muted">
          ( What I Bring / 02 )
        </motion.span>
        <h2 className="mx-auto mt-4 max-w-[15ch] font-display text-4xl font-normal uppercase leading-[0.94] tracking-tight text-ink sm:text-5xl md:text-6xl">
          {headingWords.map((w, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className={`inline-block ${w.accent ? "text-accent" : ""}`}
            >
              {w.text}
              {i < headingWords.length - 1 ? "\u00A0" : ""}
            </motion.span>
          ))}
        </h2>
        <motion.p variants={revealUp} className="mx-auto mt-4 max-w-md text-muted">
          Five focus areas, and one stubborn habit of curiosity.
        </motion.p>
      </motion.div>

      <div
        className="grid gap-[clamp(16px,1.8vw,26px)] pt-2"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(176px, 1fr))" }}
      >
        {categories.map((card, i) => (
          <RevealCard key={card.n} card={card} index={i} />
        ))}
      </div>
    </section>
  );
}

function RevealCard({ card, index }: { card: Category; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  // Each card reveals on its OWN scroll position, not a single shared
  // progress for the whole row — confirmed against the reference's
  // captured inline styles, where each card carries its own
  // translate/rotate/scale that eases to identity as it's individually
  // scrolled into place. The card's real size and grid slot never
  // change — only this transform does, which is what let the reference
  // avoid any text-overflow issue during the animation: the box is
  // always full size, just visually offset and shrunk on top of it.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "start 0.6"],
  });
  const progress = useTransform(scrollYProgress, (v) => Math.max(0, Math.min(1, v)));

  // Confirmed against the reference recording: the cards are fully
  // visible (colored, readable) even in their compact pre-reveal state at
  // rest — they don't fade in from invisible, they settle/straighten
  // into place. Animating opacity 0→1 here was hiding them entirely at
  // rest, which is why nothing peeked at the bottom of the hero fold.
  const isOdd = index % 2 === 1;
  const y = useTransform(progress, [0, 1], [46, 0]);
  const rotate = useTransform(progress, [0, 1], [isOdd ? 7 : -7, 0]);
  const scale = useTransform(progress, [0, 1], [0.9, 1]);

  return (
    <motion.article
      ref={ref}
      style={{ y, rotate, scale, transformOrigin: "50% 50%" }}
      className={`dot-grid-texture flex min-h-[clamp(300px,33vw,404px)] flex-col gap-[clamp(13px,1.3vw,18px)] rounded-[18px] p-[clamp(20px,1.7vw,27px)] shadow-[0_22px_48px_-26px_rgba(23,21,15,0.7)] ${toneClasses[card.tone]}`}
    >
      <card.Icon className="h-7 w-7 opacity-90" strokeWidth={1.7} />
      <span
        className="text-[11px] uppercase tracking-[0.1em] opacity-70"
        style={{ fontFamily: "var(--font-label)" }}
      >
        {card.n}
      </span>
      <h3 className="font-display text-xl font-normal leading-[0.95] tracking-tight sm:text-2xl">
        {card.title[0]}
        <br />
        {card.title[1]}
      </h3>
      <ul className="mt-auto flex flex-col gap-1.5 text-[13.5px] font-semibold leading-tight">
        {card.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <span className="opacity-60">&rsaquo;</span>
            {bullet}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
