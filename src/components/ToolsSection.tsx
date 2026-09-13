"use client";

import { motion } from "framer-motion";

const skills: { name: string; descriptor: string; fill: number }[] = [
  { name: "React.js", descriptor: "Daily driver", fill: 90 },
  { name: "Node.js & Express", descriptor: "Core stack", fill: 85 },
  { name: "MongoDB", descriptor: "Core stack", fill: 85 },
  { name: "JavaScript / TypeScript", descriptor: "Core stack", fill: 88 },
  { name: "Firebase", descriptor: "Comfortable", fill: 72 },
  { name: "Git & GitHub", descriptor: "Daily driver", fill: 90 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const bar = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ToolsSection() {
  return (
    <section className="content-col py-10 md:py-16">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="rounded-[var(--radius-md)] border border-dark-line bg-dark px-6 py-14 text-dark-ink sm:px-10 md:px-16 md:py-20"
      >
        <motion.div
          variants={item}
          className="flex items-center justify-between border-b border-dark-line pb-6"
        >
          <span className="label-meta flex items-center gap-3 text-dark-muted">
            <span className="text-dark-ink">05</span>
            <span className="h-px w-5 bg-dark-muted" aria-hidden="true" />
            Tools
          </span>
          <span className="hidden font-display text-sm italic text-dark-muted sm:block">
            still adding to it &#8600;
          </span>
        </motion.div>

        <motion.h2
          variants={item}
          className="mt-8 font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight sm:text-5xl lg:text-[3.4rem]"
        >
          The tools
          <br />
          on my bench.
        </motion.h2>

        <div className="mt-12 grid gap-x-16 gap-y-10 sm:grid-cols-2 md:mt-16">
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={item}>
              <div className="flex items-baseline justify-between">
                <span className="font-display text-lg font-semibold">
                  {skill.name}
                </span>
                <span className="label-meta text-dark-muted">
                  {skill.descriptor}
                </span>
              </div>
              <div className="mt-3 h-px w-full bg-dark-line">
                <motion.div
                  variants={bar}
                  style={{ width: `${skill.fill}%`, transformOrigin: "left" }}
                  className="h-px bg-accent"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
