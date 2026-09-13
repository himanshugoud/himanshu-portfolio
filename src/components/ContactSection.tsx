"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";

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

export default function ContactSection() {
  return (
    <section id="contact" className="content-col py-10 md:py-16">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-[var(--radius-md)] border border-dark-line bg-dark px-6 py-16 text-dark-ink sm:px-10 md:px-16 md:py-24"
      >
        <motion.span variants={item} className="label-meta text-dark-muted">
          ( Let&rsquo;s talk / 09 )
        </motion.span>

        <motion.h2
          variants={item}
          className="mt-6 font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Got an idea?
          <br />
          <span className="text-gold">Let&rsquo;s ship it.</span>
        </motion.h2>

        <motion.p variants={item} className="mt-6 max-w-[40ch] text-lg text-dark-muted">
          Let&rsquo;s build something meaningful.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            data-cursor-hover
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-dim"
          >
            Email Me
            <span className="transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              &#8599;
            </span>
          </a>
          <a
            href={site.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="inline-flex items-center gap-2 rounded-full border border-dark-line px-7 py-3.5 text-sm font-semibold text-dark-ink transition-colors hover:border-dark-ink"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-12 flex flex-wrap items-center gap-6 border-t border-dark-line pt-8"
        >
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="label-meta text-dark-ink underline decoration-dark-line underline-offset-4 transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="label-meta text-dark-ink underline decoration-dark-line underline-offset-4 transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={`mailto:${site.email}`}
            data-cursor-hover
            className="label-meta text-dark-ink underline decoration-dark-line underline-offset-4 transition-colors hover:text-accent"
          >
            Email
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
