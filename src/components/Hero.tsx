"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <motion.section
      id="home"
      variants={container}
      initial="hidden"
      animate="show"
      className="content-col grid gap-14 pb-8 pt-10 md:grid-cols-[1fr_auto] md:items-center md:justify-between md:gap-24 md:pt-16 lg:gap-32"
    >
      {/* ---------- Copy column ---------- */}
      <div className="flex flex-col gap-6 md:max-w-md lg:max-w-lg">
        <motion.span
          variants={item}
          className="label-meta flex items-center gap-2 text-muted"
        >
          <span className="h-px w-5 bg-muted" aria-hidden="true" />
          Full-Stack Developer
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display text-[2.75rem] font-bold uppercase leading-[0.92] tracking-tight text-ink sm:text-[3.75rem] lg:text-[4.5rem]"
        >
          Hello, I&rsquo;m
          <br />
          <span className="text-accent underline decoration-4 underline-offset-8">
            Himanshu
          </span>{" "}
          Goud
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-[42ch] text-lg leading-relaxed text-muted"
        >
          A full-stack developer building thoughtful digital products
          where engineering meets design.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#work"
            data-cursor-hover
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-dim"
          >
            View Work
            <span className="transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:translate-y-0.5">
              &#8600;
            </span>
          </a>
          <a
            href={site.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* ---------- Photo composition ---------- */}
      <motion.div
        variants={item}
        className="relative mx-auto w-full max-w-[19rem] pt-6 sm:max-w-xs md:pt-0"
      >
        {/* decorative ring — large, overlapping the top of the composition */}
        <span
          className="absolute -right-10 -top-14 z-0 hidden h-44 w-44 rounded-full border border-line sm:block"
          aria-hidden="true"
        />

        {/* backdrop arch */}
        <div className="absolute inset-2 rounded-t-[999px] rounded-b-[var(--radius-md)] border-2 border-gold bg-accent" />

        {/* photo, inset within the arch */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[999px] rounded-b-[var(--radius-md)]">
          <Image
            src="/images/profile/himanshu.jpg"
            alt="Portrait of Himanshu Goud"
            fill
            sizes="(min-width: 768px) 32vw, 80vw"
            className="object-cover"
            priority
          />
        </div>

        {/* rotating badge */}
        <div className="animate-spin-slow absolute -left-5 -top-5 h-20 w-20 sm:-left-8 sm:-top-8 sm:h-24 sm:w-24">
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <circle cx="50" cy="50" r="48" fill="var(--ink)" />
            <path
              id="badgeCircle"
              d="M 50,50 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
              fill="none"
            />
            <text fill="var(--paper)" fontSize="8.2" letterSpacing="1.5">
              <textPath href="#badgeCircle" startOffset="0%">
                OPEN TO WORK &#8226; SAY HI &#8226;
              </textPath>
            </text>
          </svg>
        </div>

        {/* location chip */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-ink px-4 py-1.5">
          <span className="label-meta text-paper">{site.location}</span>
        </div>

        {/* sticker note */}
        <div className="absolute -right-3 top-1/3 rotate-3 rounded-[var(--radius-sm)] border border-line bg-paper px-3 py-1.5 shadow-[3px_3px_0_var(--ink)] sm:-right-6">
          <p className="font-display text-xs font-semibold text-ink">
            That&rsquo;s me!
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
