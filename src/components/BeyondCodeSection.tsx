"use client";

import { motion } from "framer-motion";

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

export default function BeyondCodeSection() {
  return (
    <section className="content-col py-10 md:py-16">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="rounded-[var(--radius-md)] border border-card-pink bg-card-pink px-6 py-14 text-ink sm:px-10 md:px-16 md:py-20"
      >
        <motion.span
          variants={item}
          className="label-meta flex items-center gap-3 text-ink/60"
        >
          <span className="text-ink">07</span>
          <span className="h-px w-5 bg-ink/40" aria-hidden="true" />
          Beyond Code
        </motion.span>

        <motion.h2
          variants={item}
          className="mt-6 font-display text-4xl italic leading-[1.05] text-ink sm:text-5xl lg:text-[3.4rem]"
        >
          Off the clock.
        </motion.h2>

        <div className="mt-12 grid gap-10 border-t border-ink/15 pt-10 md:grid-cols-2 md:gap-16">
          <motion.div variants={item}>
            <span className="label-meta text-ink/60">
              Aug 2025 &ndash; Dec 2025
            </span>
            <h3 className="mt-2 font-display text-2xl font-bold text-ink">
              Mood Indigo, IIT Bombay
            </h3>
            <p className="mt-1 text-sm font-semibold text-ink/80">
              Public Relations Representative
            </p>
            <p className="mt-3 text-ink/70">
              Ranked{" "}
              <span className="font-display text-2xl font-bold text-ink">
                6th
              </span>{" "}
              out of{" "}
              <span className="font-display text-2xl font-bold text-ink">
                530
              </span>{" "}
              participants pan-India in digital outreach and engagement for
              the 55th edition of Mood Indigo &mdash; Asia&rsquo;s largest
              college cultural festival &mdash; accumulating 74,090 points.
            </p>
          </motion.div>

          <motion.div variants={item}>
            <span className="label-meta text-ink/60">Sept 2025 &ndash; Present</span>
            <h3 className="mt-2 font-display text-2xl font-bold text-ink">
              Soft Computing Research Society
            </h3>
            <p className="mt-1 text-sm font-semibold text-ink/80">
              Core Team Member
            </p>
            <p className="mt-3 text-ink/70">
              Planning and contributing to organizational activities &mdash;
              spearheaded technical workshops for 100+ student attendees,
              owning end-to-end logistics with a 20-member core committee.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
