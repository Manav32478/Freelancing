"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

/** Cursor-tracked radial glow on card borders/surfaces (Linear-style spotlight). */
export default function Spotlight({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div ref={ref} className={`spotlight ${className ?? ""}`} onMouseMove={onMove}>
      {children}
    </div>
  );
}
