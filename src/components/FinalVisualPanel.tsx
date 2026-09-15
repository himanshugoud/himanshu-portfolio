"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function FinalVisualPanel({
  imagePath,
  hasImage,
}: {
  imagePath: string;
  hasImage: boolean;
}) {
  return (
    <section id="workspace" className="content-col py-10 md:py-16">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="rounded-[var(--radius-md)] border border-accent bg-accent px-6 py-14 text-accent-ink sm:px-10 md:px-16 md:py-20"
      >
        <motion.span
          variants={item}
          className="label-meta text-accent-ink"
        >
          ( Where I Build / 08 )
        </motion.span>

        <motion.h2
          variants={item}
          className="mt-6 max-w-[36ch] font-display text-3xl font-normal leading-tight tracking-tight text-accent-ink sm:text-4xl"
        >
          Most of this got built at a small desk, late at night, one tab away
          from Stack Overflow.
        </motion.h2>

        <motion.div
          variants={item}
          className="relative mx-auto mt-12 max-w-2xl rounded-[var(--radius-md)] border border-accent-ink/20 bg-paper p-3 sm:p-4"
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-sm)]">
            {hasImage ? (
              <Image
                src={imagePath}
                alt="Himanshu's workspace"
                fill
                sizes="(min-width: 768px) 42vw, 90vw"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-line p-8 text-center">
                <span className="label-meta text-muted">
                  Add personal / workspace image
                </span>
                <p className="max-w-[26ch] text-sm text-muted">
                  Drop a photo at{" "}
                  <code className="rounded bg-paper-dim px-1 py-0.5 text-xs">
                    public{imagePath}
                  </code>
                </p>
              </div>
            )}
          </div>

          {/* playful annotations */}
          <div className="absolute -left-4 -top-4 -rotate-3 rounded-[var(--radius-sm)] border border-line bg-paper px-3 py-1.5 shadow-[3px_3px_0_var(--ink)] sm:-left-8">
            <p className="font-display text-xs font-normal text-ink">
              fueled by chai &#9749;
            </p>
          </div>
          <div className="absolute -bottom-4 -right-3 rotate-2 rounded-[var(--radius-sm)] border border-line bg-paper px-3 py-1.5 shadow-[3px_3px_0_var(--ink)] sm:-right-6">
            <p className="font-display text-xs font-normal text-ink">
              3 tabs of docs, always
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
