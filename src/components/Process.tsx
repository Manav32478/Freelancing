"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { PROCESS_STEPS } from "@/config/site";

function Step({ s, i }: { s: (typeof PROCESS_STEPS)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const active = useInView(ref, { margin: "-30% 0px -30% 0px" });
  return (
    <Reveal delay={Math.min(i * 0.08, 0.3)}>
      <div className={`process-step ${active ? "active" : ""}`} ref={ref}>
        <span className="process-num">{s.number}</span>
        <h3 className="process-title">{s.title}</h3>
        <p className="process-desc">{s.description}</p>
      </div>
    </Reveal>
  );
}

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.6"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section className="section process-section" id="process">
      <div className="container">
        <SectionHeading
          eyebrow="Our Process"
          title={"How We Turn Ideas\nInto Products"}
          sub="A clear, five-step path from first conversation to a live, working product."
        />
        <div className="process-track" ref={ref}>
          <div className="process-rail" aria-hidden="true" />
          <motion.div className="process-progress" style={{ scaleX: progress }} aria-hidden="true" />
          <motion.div className="process-progress-v" style={{ scaleY: progress }} aria-hidden="true" />
          {PROCESS_STEPS.map((s, i) => (
            <Step key={s.number} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
