"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";

const details = [
  site.education,
  "Full-Stack Development",
  site.location,
  "Open to opportunities",
];

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

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="content-col grid gap-10 border-t border-line py-20 md:grid-cols-2 md:gap-16 md:py-32"
    >
      {/* ---------- Left: number, eyebrow, headline ---------- */}
      <div className="flex flex-col gap-6">
        <motion.span
          variants={item}
          className="label-meta flex items-center gap-3 text-muted"
        >
          <span className="text-ink">02</span>
          <span className="h-px w-5 bg-muted" aria-hidden="true" />
          About
        </motion.span>

        <motion.h2
          variants={item}
          className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
        >
          Building with curiosity.
          <br />
          Solving with intention.
        </motion.h2>
      </div>

      {/* ---------- Right: paragraph + detail chips ---------- */}
      <div className="flex flex-col gap-8 md:pt-2">
        <motion.p
          variants={item}
          className="max-w-[52ch] text-lg leading-relaxed text-muted"
        >
          I&rsquo;m a Computer Science student at Madhav Institute of
          Technology and Science, Gwalior, and most of my time goes into
          taking an idea from a blank file to something people can
          actually rely on. I like the parts of building that don&rsquo;t
          show up in a demo &mdash; the geospatial logic that keeps a
          blood-donor match useful in an emergency, the quiet bug that
          would&rsquo;ve otherwise leaked someone&rsquo;s booking. Good
          software is mostly about noticing the details nobody asked you
          to fix.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-3">
          {details.map((detail) => (
            <span
              key={detail}
              className="label-meta rounded-full border border-line px-4 py-2 text-ink"
            >
              {detail}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
