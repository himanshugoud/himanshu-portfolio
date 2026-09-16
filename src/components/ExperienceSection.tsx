"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "'23",
    org: "Madhav Institute of Technology and Science",
    detail: "Bachelor of Technology, Mathematics & Computing · Gwalior, India",
    tag: "B.Tech",
    current: true,
    origin: false,
  },
  {
    year: "'23",
    org: "Ebenezer Hr. Sec. School",
    detail: "Higher Secondary, CBSE · Gwalior, India",
    tag: "Higher Secondary",
    current: false,
    origin: false,
  },
  {
    year: "'21",
    org: "Pragati Vidya Peeth Morar",
    detail: "High School, CBSE · Gwalior, India",
    tag: "High School",
    current: false,
    origin: true,
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
          className="label-meta text-muted"
        >
          ( Experience / 04 )
        </motion.span>

        <motion.h2
          variants={item}
          className="font-display text-4xl font-normal leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
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

      {/* ---------- Right: vertical timeline — year sits left of a single continuous line ---------- */}
      <div className="relative flex flex-col gap-10">
        <span
          className="absolute bottom-2 left-16 top-2 w-px bg-line"
          aria-hidden="true"
        />
        {timeline.map((entry) => (
          <motion.div key={entry.org} variants={item} className="flex gap-4">
            <span
              className={`w-16 shrink-0 pt-1 font-display text-2xl font-normal sm:text-3xl ${
                entry.origin ? "text-gold" : "text-accent"
              }`}
            >
              {entry.year}
            </span>
            <div className="relative flex-1 pl-6">
              <span
                className={`absolute left-0 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 ${
                  entry.origin
                    ? "border-gold bg-gold"
                    : "border-line bg-paper"
                }`}
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="flex flex-wrap items-center gap-2 font-display text-xl font-normal text-ink sm:text-2xl">
                  {entry.org}
                  {entry.current && (
                    <span className="label-meta rounded-full bg-accent-ink px-2.5 py-1 text-accent">
                      Present
                    </span>
                  )}
                </h3>
                <span className="label-meta rounded-full border border-line px-2.5 py-1 text-muted">
                  {entry.tag}
                </span>
              </div>
              <p className="mt-1 text-muted">{entry.detail}</p>
              {entry.origin && (
                <span className="label-meta mt-1 block text-gold">
                  Where it started
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
