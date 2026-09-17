"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { categories, toneClasses, type Category } from "@/data/categories";

export default function WhatIBringSection() {
  const cardsBoxRef = useRef<HTMLDivElement>(null);

  // Driven by the card row's own position as it travels through the
  // viewport — confirmed against the reference by extracting the source
  // video frame-by-frame: there is only ONE fan of cards on the page. It
  // sits right at the bottom of the hero at rest (same peeking position
  // the old static teaser used to occupy) and, as the page scrolls, that
  // same fan unrotates into a flat full-detail grid while the heading
  // above it fades in — there is no separate static teaser before it.
  const { scrollYProgress } = useScroll({
    target: cardsBoxRef,
    offset: ["start 0.7", "start 0.3"],
  });

  // useScroll's raw progress isn't guaranteed to sit exactly at 0 the
  // instant the page loads (it depends on the target's rest position
  // relative to the viewport, which varies by viewport height) — clamp
  // explicitly so the heading is genuinely invisible and the cards are
  // genuinely in their small resting state before any scrolling happens,
  // rather than a few percent "pre-opened".
  const progress = useTransform(scrollYProgress, (v) => Math.max(0, Math.min(1, v)));

  const headingOpacity = useTransform(progress, [0, 0.3], [0, 1]);
  const headingY = useTransform(progress, [0, 0.3], [16, 0]);

  return (
    <section id="services" className="content-col relative pb-28 pt-2 md:-mt-2 md:pb-32">
      <div className="relative">
        {/* Heading sits absolutely above the card row so it takes no
            layout space — the row can stay pulled up against the hero's
            fold exactly like the old teaser did, while the heading fades
            in on top of that same space as the page scrolls. */}
        <motion.div
          style={{ opacity: headingOpacity, y: headingY }}
          className="pointer-events-none absolute inset-x-0 bottom-full mb-10 text-center md:mb-14"
        >
          <span className="label-meta text-muted">( What I Bring / 02 )</span>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-normal uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl md:text-6xl">
            What I Bring To
            <br />
            The <span className="text-accent">Table.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            Five focus areas, and one stubborn habit of curiosity.
          </p>
        </motion.div>

        <div
          ref={cardsBoxRef}
          className="relative mx-auto h-[22rem] w-full max-w-5xl sm:h-[26rem] md:h-[30rem]"
        >
          {categories.map((card, i) => (
            <ExpandingCard key={card.n} card={card} index={i} progress={progress} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpandingCard({
  card,
  index,
  progress,
}: {
  card: Category;
  index: number;
  progress: MotionValue<number>;
}) {
  const total = categories.length;
  const isRaised = index % 2 === 1;

  // Initial state mirrors the small fanned teaser at the bottom of the
  // hero: clustered near center, alternating vertical stagger, each card
  // rotated by its own small angle.
  const initialLeft = 50 + (index - (total - 1) / 2) * 10.5;
  const initialTop = isRaised ? 40 : 56;
  const initialWidth = 15;
  const initialHeight = 44;

  // Final state: an even, non-overlapping grid, fully flattened — matches
  // the reference's expanded "what I bring" layout.
  const finalLeft = (index + 0.5) * (100 / total);
  const finalTop = 50;
  const finalWidth = 100 / total - 2;
  const finalHeight = 94;

  const left = useTransform(progress, [0, 1], [`${initialLeft}%`, `${finalLeft}%`]);
  const top = useTransform(progress, [0, 1], [`${initialTop}%`, `${finalTop}%`]);
  const width = useTransform(progress, [0, 1], [`${initialWidth}%`, `${finalWidth}%`]);
  const height = useTransform(progress, [0, 1], [`${initialHeight}%`, `${finalHeight}%`]);
  const rotate = useTransform(progress, [0, 1], [card.rotate, 0]);
  const bulletsOpacity = useTransform(progress, [0.55, 0.9], [0, 1]);
  const zIndex = isRaised ? index : index + 10;

  // The title is set as two fixed lines (e.g. "Full-Stack" /
  // "Development"), and the card is only ~15% of the row's width while
  // small — a static text-2xl size overflowed and got clipped mid-card
  // during the transition (confirmed against the recording: "Full-Stack
  // Developmen" with the final "t" cut off by the card edge). Scaling the
  // font size down at the start and up to full size by the end keeps the
  // text inside the card at every point of the animation, not just at the
  // two ends.
  const titleFontSize = useTransform(progress, [0, 1], ["0.7rem", "1.375rem"]);

  // Separately: while the cards are still clustered near the start, a
  // higher-stacked neighbor visually overlaps part of the card behind it
  // (confirmed against the recording: the blue card's edge covered the
  // "F" of "Frontend", leaving "rontend Engineering"). Scaling the font
  // down doesn't fix that — it's a stacking-order overlap, not a sizing
  // one — so the title itself stays invisible until the cards have spread
  // out enough to clear each other, then fades in.
  const titleOpacity = useTransform(progress, [0.05, 0.4], [0, 1]);

  return (
    <motion.div
      style={{
        position: "absolute",
        left,
        top,
        width,
        height,
        x: "-50%",
        y: "-50%",
        rotate,
        zIndex,
      }}
      className={`dot-grid-texture flex flex-col gap-2 overflow-hidden rounded-[var(--radius-card)] border p-4 shadow-[0_22px_48px_-26px_rgba(23,21,15,0.5)] sm:gap-3 sm:p-5 ${toneClasses[card.tone]}`}
    >
      <card.Icon className="h-6 w-6 shrink-0 opacity-90 sm:h-7 sm:w-7" strokeWidth={1.7} />
      <span
        className="shrink-0 text-[10px] uppercase tracking-[0.1em] opacity-70 sm:text-[11px]"
        style={{ fontFamily: "var(--font-label)" }}
      >
        {card.n}
      </span>
      <motion.h3
        style={{ fontSize: titleFontSize, opacity: titleOpacity }}
        className="shrink-0 font-display font-normal leading-[1.05] tracking-tight"
      >
        {card.title[0]}
        <br />
        {card.title[1]}
      </motion.h3>
      <motion.ul
        style={{ opacity: bulletsOpacity }}
        className="mt-auto flex flex-col gap-1.5 text-[12px] font-semibold leading-tight sm:text-[13.5px]"
      >
        {card.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <span className="opacity-60">&rsaquo;</span>
            {bullet}
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
