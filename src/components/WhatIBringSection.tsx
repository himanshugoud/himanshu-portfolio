"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { categories, toneClasses, type Category } from "@/data/categories";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function WhatIBringSection() {
  const cardsBoxRef = useRef<HTMLDivElement>(null);

  // Driven by the card row's own position as it travels through the
  // viewport — confirmed against the reference by extracting the source
  // video frame-by-frame: the page scrolls normally the whole time (the
  // heading isn't pinned), it's only the cards that carry a scroll-linked
  // transform from their small fanned teaser shape to a flat full-detail
  // grid, resolving by the time the row nears the top of the viewport.
  const { scrollYProgress } = useScroll({
    target: cardsBoxRef,
    offset: ["start 0.9", "start 0.3"],
  });

  return (
    <section id="services" className="content-col border-t border-line py-20 md:py-28">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="text-center"
      >
        <motion.span variants={item} className="label-meta text-muted">
          ( What I Bring / 02 )
        </motion.span>
        <motion.h2
          variants={item}
          className="mx-auto mt-4 max-w-3xl font-display text-4xl font-normal uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl md:text-6xl"
        >
          What I Bring To
          <br />
          The <span className="text-accent">Table.</span>
        </motion.h2>
        <motion.p variants={item} className="mx-auto mt-4 max-w-md text-muted">
          Five focus areas, and one stubborn habit of curiosity.
        </motion.p>
      </motion.div>

      <div
        ref={cardsBoxRef}
        className="relative mx-auto mt-14 h-[22rem] w-full max-w-5xl sm:h-[26rem] md:mt-20 md:h-[30rem]"
      >
        {categories.map((card, i) => (
          <ExpandingCard key={card.n} card={card} index={i} progress={scrollYProgress} />
        ))}
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
  const initialLeft = 50 + (index - (total - 1) / 2) * 9;
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
      <h3 className="shrink-0 font-display text-lg font-normal leading-[0.95] tracking-tight sm:text-xl md:text-2xl">
        {card.title[0]}
        <br />
        {card.title[1]}
      </h3>
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
