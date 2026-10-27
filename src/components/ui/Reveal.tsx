"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { RefObject, ReactNode } from "react";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Scroll-into-view detection via getBoundingClientRect polling on scroll.
    IntersectionObserver (and framer's whileInView/useInView) can silently
    never fire on some mobile browsers/headless shells, leaving content
    stuck invisible. Rect checks work everywhere, always. */
export function useInViewSafe(ref: RefObject<HTMLElement | null>, margin = 70) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let open = false;
    let raf = 0;
    const check = () => {
      if (open) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight || 800;
      if (r.top < vh - margin && r.bottom > Math.min(margin, 40)) {
        open = true;
        setInView(true);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(check);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    check();
    const t1 = setTimeout(check, 300);
    const t2 = setTimeout(check, 1200);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [margin]);
  return inView;
}

/** Fade-up on scroll into view. Honors prefers-reduced-motion. */
export default function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInViewSafe(ref);
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={reduce || inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
