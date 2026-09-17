"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Sparkles } from "lucide-react";
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

const ease = [0.22, 1, 0.36, 1] as const;

// Photo-side elements enter independently, after the headline, each with
// its own distance/duration rather than one shared fade — the arch settles
// first, the photo follows with more travel, then the ring/badge/sticker
// arrive with their own timing so the composition feels assembled, not
// switched on all at once.
const photoGroup = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.38 } },
};
const archVariant = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease } },
};
const photoVariant = {
  hidden: { opacity: 0, y: 46 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};
const ringVariant = {
  hidden: { opacity: 0, scale: 0.5, rotate: -25 },
  show: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.9, ease } },
};
const badgeVariant = {
  hidden: { opacity: 0, scale: 0.6 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease } },
};
const chipVariant = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};
const stickerVariant = {
  hidden: { opacity: 0, x: 18, rotate: 12 },
  show: { opacity: 1, x: 0, rotate: 3, transition: { duration: 0.5, ease } },
};

export default function Hero() {
  // Subtle desktop-only mouse parallax. Confirmed against the reference
  // that it's the TEXT column that drifts slightly with the cursor while
  // the photo composition stays put — the previous version had this
  // backwards (the photo moved, the text was static). The listener still
  // lives on the photo wrapper since that's the region the cursor is
  // over, but the resulting motion values are applied to the text column
  // instead. Disabled on touch devices — reduced-motion is handled
  // globally via MotionConfig, which suppresses transform-driven motion
  // values too.
  const wrapRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 120, damping: 20, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    const el = wrapRef.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      mx.set((e.clientX - rect.left) / rect.width - 0.5);
      my.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    const onLeave = () => {
      mx.set(0);
      my.set(0);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [mx, my]);

  // Only the badge/ring/sticker flourishes keep a tiny parallax of their
  // own — the arch and the photo itself no longer move at all.
  const ringX = useTransform(sx, [-0.5, 0.5], [14, -14]);
  const ringY = useTransform(sy, [-0.5, 0.5], [14, -14]);
  const badgeX = useTransform(sx, [-0.5, 0.5], [-12, 12]);
  const badgeY = useTransform(sy, [-0.5, 0.5], [-12, 12]);
  const stickerX = useTransform(sx, [-0.5, 0.5], [10, -10]);
  const stickerY = useTransform(sy, [-0.5, 0.5], [10, -10]);
  const textX = useTransform(sx, [-0.5, 0.5], [-8, 8]);
  const textY = useTransform(sy, [-0.5, 0.5], [-6, 6]);

  return (
    <motion.section
      id="home"
      variants={container}
      initial="hidden"
      animate="show"
      className="content-col grid gap-14 pb-2 pt-10 md:min-h-[max(440px,calc(100vh-160px))] md:grid-cols-[1fr_18rem] md:items-center md:gap-24 md:pt-16 lg:grid-cols-[1fr_20rem] lg:gap-32"
    >
      {/* ---------- Copy column ---------- */}
      <motion.div style={{ x: textX, y: textY }} className="flex flex-col gap-6">
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
          <span className="relative inline-block">
            {/* hand-drawn arrow swooping into the name, matching the
                reference's hand-lettered accent marks */}
            <svg
              viewBox="0 0 60 46"
              aria-hidden="true"
              className="pointer-events-none absolute -left-11 top-1/2 hidden h-10 w-14 -translate-y-1/2 -scale-x-100 text-ink sm:block"
            >
              <path
                d="M4 4 C 2 20, 14 30, 30 26 C 40 23.5, 44 30, 38 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M30 32 L38 40 L46 31"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="relative z-[1] text-accent">Himanshu</span>
            {/* tilted hand-drawn underline in gold, sitting slightly off
                true-horizontal like the reference's marker-drawn line */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -bottom-1 h-[5px] -rotate-2 rounded-full bg-gold sm:h-[6px]"
            />
          </span>{" "}
          Goud
          <Sparkles
            aria-hidden="true"
            className="ml-1 inline h-6 w-6 -translate-y-3 rotate-6 text-accent sm:h-8 sm:w-8"
            strokeWidth={1.75}
          />
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
      </motion.div>

      {/* ---------- Photo composition ---------- */}
      <motion.div
        ref={wrapRef}
        variants={photoGroup}
        className="relative mx-auto w-full max-w-[21rem] pt-6 sm:max-w-sm md:max-w-none md:pt-0"
      >
        {/* backdrop arch — gold border wraps the full shape (not just
            an offset shadow on two edges), and the fill is a vertical
            two-tone stripe pattern rather than flat blue, both
            confirmed by pixel-sampling the reference screenshot. Static
            now — the arch and photo no longer carry the mouse parallax,
            only the small flourishes (ring/badge/sticker) still do. */}
        <motion.div
          variants={archVariant}
          className="arch-stripes absolute inset-2 overflow-hidden rounded-t-[999px] rounded-b-[var(--radius-md)] border-[14px] border-gold"
        />

        {/* invisible spacer establishing the composition's footprint */}
        <div className="aspect-[4/5] w-full" aria-hidden="true" />

        {/* real die-cut photo — stays fixed, no parallax */}
        <motion.div
          variants={photoVariant}
          className="pointer-events-none absolute inset-x-[-10%] bottom-0 z-[5] aspect-square"
        >
          <Image
            src="/images/profile/himanshu-cutout.png"
            alt="Cutout portrait of Himanshu Goud"
            fill
            sizes="(min-width: 768px) 42vw, 100vw"
            className="object-contain object-bottom"
            priority
          />
        </motion.div>

        {/* decorative ring */}
        <motion.span
          variants={ringVariant}
          style={{ x: ringX, y: ringY }}
          className="absolute -right-8 -top-12 z-10 hidden h-40 w-40 rounded-full border border-line sm:block"
          aria-hidden="true"
        />

        {/* rotating badge — rotation and parallax both driven by Motion so
            they compose into one transform instead of fighting a CSS
            keyframe animation set via a separate mechanism */}
        <motion.div
          variants={badgeVariant}
          style={{ x: badgeX, y: badgeY }}
          animate={{ rotate: 360 }}
          transition={{ rotate: { duration: 14, repeat: Infinity, ease: "linear" } }}
          className="absolute -left-5 -top-5 z-20 h-20 w-20 sm:-left-8 sm:-top-8 sm:h-24 sm:w-24"
        >
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
        </motion.div>

        {/* location chip — tucked against the bottom edge of the photo,
            slightly overlapping it, rather than floating separately below
            (confirmed against the reference: it sits right at the hem of
            the composition, not in a gap underneath it) */}
        <motion.div
          variants={chipVariant}
          className="absolute bottom-1 left-1/2 z-20 -translate-x-1/2 rounded-full bg-ink px-4 py-1.5"
        >
          <span className="label-meta text-paper">{site.location}</span>
        </motion.div>

        {/* sticker note */}
        <motion.div
          variants={stickerVariant}
          style={{ x: stickerX, y: stickerY }}
          className="absolute -right-3 top-[38%] z-20 rounded-[var(--radius-sm)] border border-line bg-paper px-3 py-1.5 shadow-[3px_3px_0_var(--ink)] sm:-right-6"
        >
          <p className="font-display text-xs font-normal text-ink">
            That&rsquo;s me!
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
