"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { categories, toneClasses } from "@/data/categories";

const cards = categories;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function CategoryCards() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="overflow-x-auto overflow-y-visible pb-2 md:overflow-visible">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="content-col flex w-max justify-start gap-0 pb-28 pt-8 md:-mt-2 md:w-full md:justify-center md:pb-32"
      >
        {cards.map((card, i) => {
          const isHovered = hovered === i;
          // Neighbors nudge away from whichever card is hovered, so the
          // stack visibly responds as one composition rather than just the
          // single hovered card reacting in isolation.
          const isNeighbor = hovered !== null && Math.abs(hovered - i) === 1;
          const neighborPush =
            isNeighbor && hovered !== null ? (i < hovered ? -10 : 10) : 0;

          // Baseline zigzag stagger — confirmed against the reference by
          // measuring each card's top-edge height in a screenshot: cards
          // alternate up/down (not a flat fan), and the lower cards sit in
          // front of the raised ones on either side of them.
          const isRaised = i % 2 === 1;
          const baseY = isRaised ? -22 : 18;
          const baseZ = isRaised ? 10 + i : 20 + i;

          return (
            <motion.div
              key={card.n}
              variants={item}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                marginLeft: i === 0 ? 0 : "-2.25rem",
                zIndex: isHovered ? 30 : baseZ,
              }}
              className="w-44 shrink-0 sm:w-48 md:w-52"
            >
              <motion.div
                animate={{
                  y: isHovered ? -14 : baseY,
                  x: neighborPush,
                  rotate: isHovered ? 0 : card.rotate,
                  scale: isHovered ? 1.04 : 1,
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`dot-grid-texture group flex h-full flex-col gap-3 rounded-[var(--radius-card)] border p-5 shadow-[0_22px_48px_-26px_rgba(23,21,15,0.5)] ${toneClasses[card.tone]}`}
              >
                <motion.div
                  animate={{ y: isHovered ? -3 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <card.Icon className="h-7 w-7 opacity-90" strokeWidth={1.7} />
                </motion.div>
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
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
