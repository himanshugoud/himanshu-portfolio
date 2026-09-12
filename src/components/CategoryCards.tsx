"use client";

import { motion } from "framer-motion";

type Tone = "dark" | "accent" | "outline" | "gold" | "paper";

const cards: {
  n: string;
  lines: [string, string];
  tone: Tone;
  rotate: number;
}[] = [
  { n: "01", lines: ["Full-Stack", "Development"], tone: "dark", rotate: -6 },
  { n: "02", lines: ["Frontend", "Engineering"], tone: "accent", rotate: -3 },
  { n: "03", lines: ["Backend", "Systems"], tone: "paper", rotate: 0 },
  { n: "04", lines: ["Product", "Thinking"], tone: "gold", rotate: 3 },
  { n: "05", lines: ["Problem", "Solving"], tone: "outline", rotate: 6 },
];

const toneClasses: Record<Tone, string> = {
  dark: "bg-dark text-dark-ink border-dark",
  accent: "bg-accent text-accent-ink border-accent",
  outline: "bg-paper text-ink border-line",
  gold: "bg-gold text-ink border-gold",
  paper: "bg-paper-dim text-ink border-line",
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
            <span className="label-meta opacity-70">{card.n}</span>
            <p className="font-display text-base font-semibold leading-tight sm:text-lg">
              {card.lines[0]}
              <br />
              {card.lines[1]}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
