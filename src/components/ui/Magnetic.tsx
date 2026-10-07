"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";

/**
 * Magnetic hover wrapper for buttons/links — subtle pull toward the cursor.
 * Disabled on touch devices and for prefers-reduced-motion.
 */
export default function Magnetic({
  children,
  href,
  onClick,
  className,
  ariaLabel,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}) {
  const ref = useRef<any>(null);
  const reduce = useReducedMotion();
  const x = useSpring(0, { stiffness: 180, damping: 16, mass: 0.4 });
  const y = useSpring(0, { stiffness: 180, damping: 16, mass: 0.4 });

  const onMove = (e: MouseEvent) => {
    if (reduce || !ref.current || window.matchMedia("(pointer: coarse)").matches) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.22);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.32);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const shared = {
    ref,
    className,
    style: { x, y },
    onMouseMove: onMove,
    onMouseLeave: reset,
    onClick,
    "aria-label": ariaLabel,
  };

  return href ? (
    <motion.a href={href} {...shared}>
      {children}
    </motion.a>
  ) : (
    <motion.button type="button" {...shared}>
      {children}
    </motion.button>
  );
}
