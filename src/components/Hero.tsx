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
      className="content-col grid gap-14 pb-8 pt-10 md:min-h-[max(480px,calc(100vh-90px))] md:grid-cols-[1fr_18rem] md:items-center md:gap-24 md:pt-16 lg:grid-cols-[1fr_20rem] lg:gap-32"
    >
      {/* ---------- Copy column ---------- */}
      <div className="flex flex-col gap-6 md:max-w-xl lg:max-w-2xl">
        <motion.span
          variants={item}
          className="label-meta flex items-center gap-2 text-muted"
        >
          <span className="h-px w-5 bg-muted" aria-hidden="true" />
          Full-Stack Developer
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display text-[2.75rem] font-normal uppercase leading-[0.92] tracking-tight text-ink sm:text-[3.75rem] lg:text-[4.5rem]"
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
        className="relative mx-auto w-full max-w-[19rem] pt-6 sm:max-w-xs md:max-w-none md:pt-0"
      >
        {/* backdrop arch */}
        <div className="absolute inset-2 rounded-t-[999px] rounded-b-[var(--radius-md)] border-2 border-gold bg-accent" />

        {/* invisible spacer establishing the composition's footprint */}
        <div className="aspect-[4/5] w-full" aria-hidden="true" />

        {/* real die-cut photo — deliberately sized larger than the arch and
            left uncropped (object-contain) so the silhouette overflows the
            arch edges naturally, the way a true cutout composition does,
            instead of being cropped/clipped into the arch shape */}
        <div className="pointer-events-none absolute -inset-x-[9%] -top-[7%] bottom-0 z-[5]">
          <Image
            src="/images/profile/himanshu-cutout.png"
            alt="Cutout portrait of Himanshu Goud"
            fill
            sizes="(min-width: 768px) 36vw, 90vw"
            className="object-contain object-bottom"
            priority
          />
        </div>

        {/* decorative ring — drawn after the photo so its outline is
            actually visible crossing over the top of the composition,
            rather than being painted over by the opaque photo/arch */}
        <span
          className="absolute -right-8 -top-12 z-10 hidden h-40 w-40 rounded-full border border-line sm:block"
          aria-hidden="true"
        />

        {/* rotating badge */}
        <div className="animate-spin-slow absolute -left-5 -top-5 z-20 h-20 w-20 sm:-left-8 sm:-top-8 sm:h-24 sm:w-24">
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
        <div className="absolute bottom-4 left-[42%] z-20 -translate-x-1/2 rounded-full bg-ink px-4 py-1.5">
          <span className="label-meta text-paper">{site.location}</span>
        </div>

        {/* sticker note */}
        <div className="absolute -right-3 top-[38%] z-20 rotate-3 rounded-[var(--radius-sm)] border border-line bg-paper px-3 py-1.5 shadow-[3px_3px_0_var(--ink)] sm:-right-6">
          <p className="font-display text-xs font-normal text-ink">
            That&rsquo;s me!
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
