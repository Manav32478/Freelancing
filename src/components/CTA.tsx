"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Reveal from "./ui/Reveal";
import Magnetic from "./ui/Magnetic";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const PHRASE = "Digital Products — Software — Technology — ";

export default function CTA() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yOrb = useTransform(scrollYProgress, [0, 1], [90, -90]);

  return (
    <section className="section cta" ref={ref}>
      <div className="aurora a1" aria-hidden="true" />
      <div className="aurora a2" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />
      <motion.div className="cta-orb" style={reduce ? undefined : { y: yOrb }} aria-hidden="true" />
      <div className="cta-marquee" aria-hidden="true">
        <div className="cta-marquee-track">
          <span>{PHRASE.repeat(4)}</span>
          <span>{PHRASE.repeat(4)}</span>
        </div>
      </div>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <Reveal>
          <h2 className="cta-title">
            Your Next Digital
            <br />
            Product <span className="grad-text serif">Starts Here.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="cta-sub muted">
            Have an idea, a business problem or a product you want to build? Let&apos;s talk.
          </p>
        </Reveal>
        <Reveal delay={0.28}>
          <div className="cta-actions">
            <Magnetic href="#contact" className="btn btn-primary">
              Start a Project <ArrowUpRight size={17} strokeWidth={2.4} />
            </Magnetic>
            <Magnetic href="#work" className="btn btn-ghost">
              View Our Work <ArrowRight size={17} strokeWidth={2.4} />
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
