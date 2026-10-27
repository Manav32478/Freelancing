"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Reveal, { EASE } from "./Reveal";

/**
 * Editorial section heading: eyebrow label + line-masked title + optional sub copy.
 * Title lines slide up from behind a mask, driven by an explicit in-view flag.
 */
export default function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const lines = title.split("\n");

  return (
    <div className="section-head">
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <h2 ref={ref} className="h-section" aria-label={title.replace(/\n/g, " ")}>
        {lines.map((line, i) => (
          <span key={i} className="mask-line" aria-hidden="true">
            {reduce ? (
              <span>{line}</span>
            ) : (
              <motion.span
                initial={{ y: "112%" }}
                animate={{ y: inView ? "0%" : "112%" }}
                transition={{ duration: 0.85, delay: 0.08 + i * 0.12, ease: EASE }}
              >
                {line}
              </motion.span>
            )}
          </span>
        ))}
      </h2>
      {sub && (
        <Reveal delay={0.25}>
          <p className="h-sub muted">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
