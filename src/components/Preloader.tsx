"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { SITE } from "@/config/site";
import { EASE } from "./ui/Reveal";

/** Branded loading moment: logo strokes draw in, then the curtain lifts. Skipped for reduced motion. */
export default function Preloader() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setDone(true), 1050);
    return () => window.clearTimeout(t);
  }, []);

  if (reduce) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="preloader"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: EASE }}
          aria-hidden="true"
        >
          <svg width="76" height="76" viewBox="0 0 64 64" fill="none">
            <motion.rect
              x="6"
              y="6"
              width="32"
              height="32"
              rx="9"
              stroke="#4f74a8"
              strokeWidth="4"
              initial={{ pathLength: 0, opacity: 0.4 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
            <motion.rect
              x="26"
              y="26"
              width="32"
              height="32"
              rx="9"
              stroke="#d7e4f7"
              strokeWidth="4"
              initial={{ pathLength: 0, opacity: 0.4 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.22, ease: "easeInOut" }}
            />
          </svg>
          <motion.p
            initial={{ opacity: 0, y: 12, letterSpacing: "0.4em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.18em" }}
            transition={{ delay: 0.4, duration: 0.55, ease: EASE }}
          >
            {SITE.name}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
