"use client";

import { useRef, type CSSProperties } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import Reveal, { EASE, useInViewSafe } from "./ui/Reveal";
import Spotlight from "./ui/Spotlight";
import ProjectArt from "./ProjectArt";
import { PROJECTS, type Project } from "@/config/site";
import { ArrowRight } from "lucide-react";

function ProjectCard({ p }: { p: Project }) {
  const reduce = useReducedMotion();
  const artRef = useRef<HTMLDivElement>(null);
  const inView = useInViewSafe(artRef);
  const { scrollYProgress } = useScroll({ target: artRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <Spotlight className="project-card">
      <motion.div
        ref={artRef}
        className="project-art"
        initial={false}
        animate={
          reduce || inView
            ? { clipPath: "inset(0% 0% 0% 0%)" }
            : { clipPath: "inset(100% 0% 0% 0%)" }
        }
        transition={{ duration: 1, ease: EASE }}
      >
        <motion.div className="art-parallax" style={reduce ? undefined : { y }}>
          <div className="art-zoom">
            <ProjectArt kind={p.art} />
          </div>
        </motion.div>
      </motion.div>
      <div className="project-body">
        <div className="project-meta">
          <span className="grad-text">{p.category}</span>
          <span>{p.period}</span>
        </div>
        <h3 className="project-name">{p.name}</h3>
        <p className="project-desc">{p.description}</p>
        <div className="chips">
          {p.tags.map((t) => (
            <span key={t} className="chip" style={{ borderColor: "var(--line-strong)", color: "var(--muted)", background: "transparent" }}>
              {t}
            </span>
          ))}
        </div>
        <div className="project-foot">
          <span className="project-lead">Built by {p.lead}</span>
          {p.liveUrl && (
            <a className="project-link" href={p.liveUrl} target="_blank" rel="noreferrer">
              View Project <ArrowRight size={16} strokeWidth={2.4} />
            </a>
          )}
        </div>
      </div>
    </Spotlight>
  );
}

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHeading
          eyebrow="Selected Work"
          title="Selected Work"
          sub="Some of the products and digital experiences we've designed, built and shipped. Scroll — each project stacks onto the last."
        />
        <div className="work-stack">
          {PROJECTS.map((p, i) => (
            <div key={p.name} className="stack-item" style={{ "--i": i } as CSSProperties}>
              <Reveal delay={0.05}>
                <ProjectCard p={p} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
