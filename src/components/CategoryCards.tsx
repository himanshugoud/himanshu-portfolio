"use client";

import { motion } from "framer-motion";
import { Code2, LayoutGrid, Database, Lightbulb, PuzzleIcon } from "lucide-react";

type Tone = "blue" | "orange" | "yellow" | "pink" | "green";

const cards: {
  n: string;
  lines: [string, string];
  tone: Tone;
  rotate: number;
  Icon: typeof Code2;
}[] = [
  { n: "01", lines: ["Full-Stack", "Development"], tone: "blue", rotate: -6, Icon: Code2 },
  { n: "02", lines: ["Frontend", "Engineering"], tone: "orange", rotate: -3, Icon: LayoutGrid },
  { n: "03", lines: ["Backend", "Systems"], tone: "yellow", rotate: 0, Icon: Database },
  { n: "04", lines: ["Product", "Thinking"], tone: "pink", rotate: 3, Icon: Lightbulb },
  { n: "05", lines: ["Problem", "Solving"], tone: "green", rotate: 6, Icon: PuzzleIcon },
];

const toneClasses: Record<Tone, string> = {
  blue: "bg-accent text-accent-ink border-accent",
  orange: "bg-card-orange text-paper border-card-orange",
  yellow: "bg-gold text-ink border-gold",
  pink: "bg-card-pink text-ink border-card-pink",
  green: "bg-card-green text-ink border-card-green",
};

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
  return (
    <div className="overflow-x-auto overflow-y-visible pb-2 md:overflow-visible">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="content-col flex w-max justify-start gap-0 pb-24 pt-6 md:w-full md:justify-center md:pb-32"
      >
        {cards.map((card, i) => (
          <motion.div
            key={card.n}
            variants={item}
            style={{
              rotate: card.rotate,
              marginLeft: i === 0 ? 0 : "-2.25rem",
              zIndex: i,
            }}
            className={`group flex aspect-[3/4] w-40 shrink-0 flex-col justify-between rounded-[var(--radius-md)] border p-4 shadow-[0_10px_24px_-12px_rgba(0,0,0,0.25)] transition-all duration-200 ease-out hover:z-20 hover:-translate-y-3 hover:rotate-0 sm:w-44 md:w-48 md:p-5 ${toneClasses[card.tone]}`}
          >
            <card.Icon className="h-6 w-6 opacity-90" strokeWidth={1.75} />
            <p className="font-display text-base font-semibold leading-tight sm:text-lg">
              {card.lines[0]}
              <br />
              {card.lines[1]}
            </p>
            <span className="label-meta opacity-70">{card.n}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
