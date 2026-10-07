"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { EXPERIENCE } from "@/config/site";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.55"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="Track Record"
          title={"Experience That Shapes\nHow We Build"}
          sub="Real-world operations, client-facing work and shipped software — before and alongside this studio."
        />
        <div className="timeline" ref={ref}>
          <div className="timeline-rail" aria-hidden="true" />
          <motion.div className="timeline-progress" style={{ scaleY }} aria-hidden="true" />
          {EXPERIENCE.map((e, i) => (
            <Reveal key={`${e.company}-${e.period}`} delay={Math.min(i * 0.08, 0.2)}>
              <div className="timeline-item">
                <span className="timeline-dot" aria-hidden="true" />
                <div className="timeline-card">
                  <div className="timeline-top">
                    <h3 className="timeline-role">{e.role}</h3>
                    <span className="timeline-period">{e.period}</span>
                  </div>
                  <p className="timeline-company">
                    {e.company} · {e.person}
                  </p>
                  <ul className="timeline-points">
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  {e.tech && (
                    <div className="chips">
                      {e.tech.map((t) => (
                        <span key={t} className="chip" style={{ borderColor: "var(--line-strong)", color: "var(--muted)", background: "transparent" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
