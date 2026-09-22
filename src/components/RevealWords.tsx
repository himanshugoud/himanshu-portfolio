"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055 } },
};

const word = {
  hidden: { opacity: 0, y: "0.6em" },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.2, 0.7, 0.2, 1] as const },
  },
};

/**
 * Splits `text` on spaces and reveals each word with a staggered
 * fade + slide-up as the heading scrolls into view. `accent` marks the
 * trailing N words (counted from the end) with the given class name, so a
 * final word like "table." can be styled independently.
 */
export default function RevealWords({
  text,
  as: Tag = "span",
  accentWords = 0,
  accentClassName = "accent",
  className,
}: {
  text: string;
  as?: keyof React.JSX.IntrinsicElements;
  accentWords?: number;
  accentClassName?: string;
  className?: string;
}) {
  const words = text.split(" ");
  const cutoff = words.length - accentWords;

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className={className}
    >
      {words.map((w, i) => (
        <Tag key={`${w}-${i}`} style={{ display: "inline-block", overflow: "hidden" }}>
          <motion.span
            variants={word}
            style={{ display: "inline-block" }}
            className={i >= cutoff ? accentClassName : undefined}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </Tag>
      )) as ReactNode}
    </motion.span>
  );
}
