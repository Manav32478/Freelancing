"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CHARS = "#/\\<>[]{}=+*—?!";

/** Decode-style scramble reveal for small labels. Reduced motion = plain text. */
export default function ScrambleText({ text, className }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (reduce) {
      setDisplay(text);
      return;
    }
    if (!inView) return;
    let frame = 0;
    const id = window.setInterval(() => {
      frame += 1;
      let out = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === " ") {
          out += " ";
          continue;
        }
        const revealAt = 6 + i * 2;
        if (frame >= revealAt + 4) out += ch;
        else if (frame >= revealAt) out += CHARS[(i + frame) % CHARS.length];
        else out += "\u00A0";
      }
      setDisplay(out);
      if (frame > text.length * 2 + 12) {
        setDisplay(text);
        window.clearInterval(id);
      }
    }, 28);
    return () => window.clearInterval(id);
  }, [inView, reduce, text]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">{display || "\u00A0"}</span>
    </span>
  );
}
