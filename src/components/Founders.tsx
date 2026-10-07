"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import Reveal, { EASE, useInViewSafe } from "./ui/Reveal";
import Tilt from "./ui/Tilt";
import { FOUNDERS } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

/* Clip-path curtain reveal driven by useInView (whileInView on framer v13
   can silently never fire, leaving the photo clipped invisible). */
function PhotoReveal({
  index,
  reduce,
  children,
}: {
  index: number;
  reduce: boolean | null;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInViewSafe(ref);
  return (
    <motion.div
      ref={ref}
      className="photo-reveal"
      initial={false}
      animate={
        reduce || inView
          ? { clipPath: "inset(0 0 0% 0)" }
          : { clipPath: "inset(0 0 100% 0)" }
      }
      transition={{ duration: 0.9, ease: EASE, delay: 0.15 + index * 0.12 }}
    >
      {children}
    </motion.div>
  );
}

export default function Founders() {
  const reduce = useReducedMotion();
  return (
    <section className="section section-light" id="team">
      <div className="container">
        <SectionHeading
          eyebrow="Founders"
          title={"The People\nBehind the Work"}
          sub="A technology company is only as good as the people running it. Here's who you'll be working with."
        />
        <div className="founders-grid">
          <div className="founders-bridge" aria-hidden="true">
            &amp;
          </div>
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.id} delay={i * 0.12}>
              <Tilt max={3}>
                <article className="founder-card">
                  <div className="founder-photo">
                    <PhotoReveal index={i} reduce={reduce}>
                      <img src={f.photo} alt={`Portrait of ${f.name}, ${f.role}`} />
                    </PhotoReveal>
                  </div>
                  <div className="founder-body">
                    <div>
                      <p className="founder-role">{f.role}</p>
                      <h3 className="founder-name">{f.name}</h3>
                    </div>
                    <p className="founder-bio">{f.bio}</p>
                    <div className="chips" aria-label={`Core skills of ${f.name}`}>
                      {f.skills.map((s) => (
                        <span key={s} className="chip">
                          {s}
                        </span>
                      ))}
                    </div>
                    {f.technologies && (
                      <p className="founder-meta">
                        <strong>Focus:</strong> {f.technologies.join(" · ")}
                      </p>
                    )}
                    <p className="founder-meta">{f.experienceLine}</p>
                    <div className="founder-links">
                      {f.links.map((l) => (
                        <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                          {l.label} <ArrowUpRight size={13} strokeWidth={2.6} />
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
