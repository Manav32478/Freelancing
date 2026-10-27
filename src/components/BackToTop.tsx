"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

/** Floating back-to-top with a circular scroll-progress ring. */
export default function BackToTop() {
  const [show, setShow] = useState(false);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });

  useEffect(() => {
    const on = () => setShow(window.scrollY > 700);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <motion.button
      className="back-top"
      aria-label="Back to top"
      initial={false}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 18, pointerEvents: "none" }}
      transition={{ duration: 0.35 }}
      onClick={() => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })}
    >
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="21" fill="none" stroke="rgba(126, 164, 214, 0.25)" strokeWidth="2" />
        <motion.circle
          cx="24"
          cy="24"
          r="21"
          fill="none"
          stroke="#d7e4f7"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ pathLength }}
          transform="rotate(-90 24 24)"
        />
      </svg>
      <ArrowUp size={16} strokeWidth={2.6} />
    </motion.button>
  );
}
