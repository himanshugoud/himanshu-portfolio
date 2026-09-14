"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

export default function StatCounter({
  value,
  prefix = "",
  label,
}: {
  value: number;
  prefix?: string;
  label: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 900, bounce: 0 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${prefix}${Math.round(v)}`;
    });
  }, [spring, prefix]);

  return (
    <motion.div className="flex flex-col gap-1">
      <span className="font-display text-3xl font-normal text-ink sm:text-4xl">
        <span ref={ref}>{prefix}0</span>
      </span>
      <span className="label-meta text-muted">{label}</span>
    </motion.div>
  );
}
