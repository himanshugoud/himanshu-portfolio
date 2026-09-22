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
 * Custom cursor: a small dot that expands into a colored label pill when
 * hovering anything tagged with data-cursor-label (and optionally
 * data-cursor-color / data-cursor-ink for a per-element accent). Falls back
 * to a plain dark dot on plain links/buttons. Desktop (fine pointer) only —
 * untouched on mobile/tablet. Respects prefers-reduced-motion by rendering
 * nothing.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");
  const [colors, setColors] = useState({ bg: "#17150f", ink: "#f7f6f2" });

  useEffect(() => {
    if (!enabled) return;

    const move = (e: PointerEvent) => {
      setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      const target = e.target as HTMLElement;
      const labelHost = target.closest<HTMLElement>("[data-cursor-label]");
      const plainHost = target.closest("a, button, [data-cursor-hover]");

      if (labelHost) {
        setHovering(true);
        setLabel(labelHost.dataset.cursorLabel ?? "");
        setColors({
          bg: labelHost.dataset.cursorColor ?? "#2854df",
          ink: labelHost.dataset.cursorInk ?? "#f7f6f2",
        });
      } else if (plainHost) {
        setHovering(true);
        setLabel("");
        setColors({ bg: "#17150f", ink: "#f7f6f2" });
      } else {
        setHovering(false);
        setLabel("");
      }
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

  const expanded = hovering && label.length > 0;

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="cursor-dot"
      style={{
        opacity: visible ? 1 : 0,
        width: expanded ? "auto" : hovering ? 26 : 8,
        height: expanded ? 38 : hovering ? 26 : 8,
        padding: expanded ? "0 18px" : 0,
        borderRadius: 999,
        background: hovering ? colors.bg : "#17150f",
        color: colors.ink,
      }}
    >
      {label && <span className="cursor-label">{label}</span>}
    </div>
  );
}
