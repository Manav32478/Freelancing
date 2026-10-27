"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import { MARQUEE_ITEMS } from "@/config/site";

function Group({ hidden }: { hidden?: boolean }) {
  return (
    <div className="marquee-group" aria-hidden={hidden || undefined}>
      {MARQUEE_ITEMS.map((item) => (
        <span key={item} className="marquee-item">
          {item}
        </span>
      ))}
    </div>
  );
}

/** Infinite expertise marquee with scroll-velocity skew. Pauses on hover; static under reduced motion. */
export default function Marquee() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const raw = useTransform(velocity, [-3000, 3000], [-5, 5]);
  const skew = useSpring(raw, { stiffness: 90, damping: 22 });

  return (
    <div className="marquee" role="presentation">
      <motion.div style={reduce ? undefined : { skewX: skew }}>
        <div className="marquee-track">
          <Group />
          <Group hidden />
        </div>
      </motion.div>
    </div>
  );
}
