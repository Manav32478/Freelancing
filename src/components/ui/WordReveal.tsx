"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { EASE, useInViewSafe } from "./Reveal";

/** Word-by-word staggered reveal for editorial statements. */
export default function WordReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInViewSafe(ref, 40);
  const words = text.split(" ");
  return (
    <span ref={ref}>
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          className="word"
          initial={false}
          animate={reduce || inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.55, delay: delay + i * 0.045, ease: EASE }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}
