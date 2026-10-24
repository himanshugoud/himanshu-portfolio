"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Wraps the hero text column and gently tilts/shifts it toward the
 * cursor as the pointer moves anywhere across the hero section — a
 * subtle, spring-damped parallax rather than a 1:1 follow. Listens on
 * the enclosing <section>, not just this element, so moving the mouse
 * over the photo or the empty space still moves the text block.
 * Desktop (fine pointer) only; respects prefers-reduced-motion via
 * MotionConfig at the app root.
 */
export default function HeroParallax({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 55, damping: 16, mass: 0.6 });
  const springY = useSpring(my, { stiffness: 55, damping: 16, mass: 0.6 });
  const x = useTransform(springX, (v) => v * 10);
  const y = useTransform(springY, (v) => v * 7);

  useEffect(() => {
    const section = ref.current?.closest("section");
    if (!section || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      mx.set((e.clientX - rect.left) / rect.width - 0.5);
      my.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    const onLeave = () => {
      mx.set(0);
      my.set(0);
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, [mx, my]);

  return (
    <motion.div ref={ref} className={className} style={{ x, y }}>
      {children}
    </motion.div>
  );
}
