"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  const fineQuery = window.matchMedia("(pointer: fine)");
  const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  fineQuery.addEventListener("change", callback);
  reducedQuery.addEventListener("change", callback);
  return () => {
    fineQuery.removeEventListener("change", callback);
    reducedQuery.removeEventListener("change", callback);
  };
}

function getSnapshot() {
  const fine = window.matchMedia("(pointer: fine)").matches;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return fine && !reduced;
}

// Server never has a fine pointer or motion preference to check — always
// render nothing on the server so hydration matches the client's first
// paint (which may briefly still read `false` before the real value settles).
function getServerSnapshot() {
  return false;
}

/**
 * Minimal custom cursor: a small dot that expands slightly over
 * interactive elements. Desktop (fine pointer) only — untouched on
 * mobile/tablet. Respects prefers-reduced-motion by rendering nothing.
 *
 * `enabled` is read via useSyncExternalStore rather than useState+useEffect
 * specifically so the server-rendered HTML and the client's first render
 * agree (both `false`) — avoiding a hydration mismatch — while still
 * updating live if the user changes pointer/motion settings mid-session.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const move = (e: PointerEvent) => {
      setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [data-cursor-hover]"));
    };
    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move);
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink transition-[width,height,opacity] duration-150 ease-out"
      style={{
        width: hovering ? 28 : 8,
        height: hovering ? 28 : 8,
        opacity: visible ? (hovering ? 0.12 : 0.55) : 0,
      }}
    />
  );
}
