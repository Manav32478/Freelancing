"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";

/** Subtle 3D tilt toward the cursor (desktop only, max a few degrees). */
export default function Tilt({
  children,
  className,
  max = 4,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const rx = useSpring(0, { stiffness: 160, damping: 18 });
  const ry = useSpring(0, { stiffness: 160, damping: 18 });

  const onMove = (e: MouseEvent) => {
    if (reduce || !ref.current || window.matchMedia("(pointer: coarse)").matches) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * max * 2);
    rx.set(-py * max * 2);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1100 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}
