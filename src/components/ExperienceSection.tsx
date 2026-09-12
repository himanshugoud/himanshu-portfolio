"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "'23 — Present",
    org: "Madhav Institute of Technology and Science",
    detail: "Bachelor of Technology, Mathematics & Computing · Gwalior, India",
    current: true,
  },
  {
    year: "'23",
    org: "Ebenezer Hr. Sec. School",
    detail: "Higher Secondary, CBSE · Gwalior, India",
    current: false,
  },
  {
    year: "'21",
    org: "Pragati Vidya Peeth Morar",
    detail: "High School, CBSE · Gwalior, India",
    current: false,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="content-col grid gap-10 border-t border-line py-20 md:grid-cols-2 md:gap-16 md:py-32"
    >
      {/* ---------- Left: number, eyebrow, headline (sticky on desktop) ---------- */}
      <div className="flex flex-col gap-6 md:sticky md:top-24 md:self-start">
        <motion.span
          variants={item}
          className="label-meta flex items-center gap-3 text-muted"
        >
          <span className="text-ink">03</span>
          <span className="h-px w-5 bg-muted" aria-hidden="true" />
          Experience
        </motion.span>

        <motion.h2
          variants={item}
          className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
        >
          Learning since 2021.
          <br />
          Building since <span className="text-accent">2023.</span>
        </motion.h2>

        <motion.p variants={item} className="max-w-[42ch] text-muted">
          No internships to list yet &mdash; just a steady academic run and
          a growing stack of things I&rsquo;ve shipped on my own.
        </motion.p>
      </div>

      {/* ---------- Right: vertical timeline ---------- */}
      <div className="relative flex flex-col gap-12 border-l border-line pl-8">
        {timeline.map((entry) => (
          <motion.div key={entry.org} variants={item} className="relative">
            <span
              className={`absolute -left-[2.31rem] top-1 h-3 w-3 rounded-full border-2 ${
                entry.current
                  ? "border-accent bg-accent"
                  : "border-line bg-paper"
              }`}
              aria-hidden="true"
            />
            <span className="label-meta text-accent">{entry.year}</span>
            <h3 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
              {entry.org}
            </h3>
            <p className="mt-1 text-muted">{entry.detail}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
