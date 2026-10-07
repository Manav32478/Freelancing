"use client";

import type { CSSProperties, PointerEvent } from "react";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import Magnetic from "./ui/Magnetic";
import ScrambleText from "./ui/ScrambleText";
import CircularBadge from "./ui/CircularBadge";
import CodeCard from "./CodeCard";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SITE } from "@/config/site";

const d = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

const CHIPS = [
  { label: "React · Node.js", style: { top: "14%", left: "7%" }, delay: 0 },
  { label: "AWS Serverless", style: { top: "20%", right: "9%" }, delay: 1.4 },
  { label: "Razorpay · Shiprocket", style: { bottom: "18%", left: "13%" }, delay: 2.2 },
  { label: "E-Commerce", style: { bottom: "14%", right: "16%" }, delay: 0.8 },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yVisual = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yCopy = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const rotY = useSpring(0, { stiffness: 60, damping: 20 });
  const rotX = useSpring(0, { stiffness: 60, damping: 20 });
  const onPointer = (e: PointerEvent) => {
    if (reduce || window.matchMedia("(pointer: coarse)").matches) return;
    rotY.set((e.clientX / window.innerWidth - 0.5) * 7);
    rotX.set((e.clientY / window.innerHeight - 0.5) * -7);
  };

  return (
    <section className="hero" id="top" ref={ref} onPointerMove={onPointer}>
      <div className="bg-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <motion.div style={reduce ? undefined : { y: yCopy, opacity: fade }}>
          <p className="hero-meta fade-up" style={d(0.35)}>
            <ScrambleText text="Independent Digital Studio" />
            <span className="dot" aria-hidden="true" />
            <span>Bhavnagar · India</span>
            <span className="dot" aria-hidden="true" />
            <span>Full-Stack — Cloud — Business</span>
          </p>
          <h1 className="hero-title">
            <span className="line">
              <span style={d(0.5)}>We Build</span>
            </span>
            <span className="line">
              <span style={d(0.62)}>Digital Products</span>
            </span>
            <span className="line">
              <span style={d(0.74)}>
                That <span className="grad-text serif">matter.</span>
              </span>
            </span>
          </h1>
          <p className="hero-sub fade-up" style={d(1)}>
            From full-stack web applications and e-commerce platforms to cloud-native software on
            AWS — we design, build and launch digital products that help businesses grow. {SITE.foundingLine}
          </p>
          <div className="hero-ctas fade-up" style={d(1.15)}>
            <Magnetic href="#work" className="btn btn-primary">
              View Our Work <ArrowRight size={17} strokeWidth={2.4} />
            </Magnetic>
            <Magnetic href="#contact" className="btn btn-ghost">
              Start a Project <ArrowUpRight size={17} strokeWidth={2.4} />
            </Magnetic>
          </div>
        </motion.div>

        <div className="hero-banner fade-up" style={d(1.05)} aria-hidden="true">
          <div className="bg-grid" />
          <motion.div
            className="hero-visual-inner"
            style={reduce ? undefined : { y: yVisual, rotateX: rotX, rotateY: rotY, transformPerspective: 1100 }}
          >
            <div className="hero-orb" />
            <svg className="hero-rings" viewBox="0 0 400 400" fill="none">
              <circle cx="200" cy="200" r="152" stroke="rgba(126,164,214,0.22)" strokeDasharray="2 8" />
              <circle cx="200" cy="200" r="152" stroke="url(#hero-g1)" strokeWidth="1.6" strokeDasharray="90 870" strokeLinecap="round" />
              <circle cx="200" cy="48" r="4" fill="#d7e4f7" />
              <circle cx="352" cy="200" r="3" fill="#4f74a8" />
              <circle cx="200" cy="352" r="3" fill="#3c5a86" />
              <defs>
                <linearGradient id="hero-g1" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#4f74a8" />
                  <stop offset="1" stopColor="#d7e4f7" />
                </linearGradient>
              </defs>
            </svg>
            <svg className="hero-rings reverse" viewBox="0 0 400 400" fill="none">
              <circle cx="200" cy="200" r="104" stroke="rgba(126,164,214,0.16)" />
              <circle cx="200" cy="200" r="104" stroke="#d7e4f7" strokeWidth="1.4" strokeDasharray="40 620" strokeLinecap="round" opacity="0.8" />
              <circle cx="200" cy="96" r="5" fill="none" stroke="#d7e4f7" strokeWidth="1.5" />
            </svg>
            {CHIPS.map((c) => (
              <span key={c.label} className="hero-chip" style={{ ...c.style, ...d(c.delay) }}>
                {c.label}
              </span>
            ))}
          </motion.div>
          <CodeCard />
          <CircularBadge text="SCROLL TO EXPLORE • DIGITAL STUDIO • SCROLL TO EXPLORE • " />
        </div>

        <div className="hero-scroll fade-up" style={d(1.3)}>
          <span>Scroll to explore</span>
          <span className="hero-scroll-line" />
        </div>
      </div>
    </section>
  );
}
