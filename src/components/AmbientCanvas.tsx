"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient full-page background: a slow constellation of dev artifacts —
 * connected nodes (cloud/network), floating code glyphs, and tiny UI
 * wireframes — echoing the studio's actual work. GPU-light, paused when
 * the tab is hidden, skipped entirely under prefers-reduced-motion.
 */
export default function AmbientCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const N = coarse ? 20 : 40;
    const glyphs = ["</>", "{ }", "=>", "( )", "#", "&&", "::"];

    type P = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      kind: 0 | 1 | 2;
      rot: number;
      vr: number;
      char: string;
    };
    const ps: P[] = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.24,
      vy: (Math.random() - 0.5) * 0.24,
      r: 1.4 + Math.random() * 1.8,
      kind: (Math.floor(Math.random() * 3) as 0 | 1 | 2),
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.004,
      char: glyphs[Math.floor(Math.random() * glyphs.length)],
    }));

    let raf = 0;
    let running = true;

    const tick = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);

      // constellation links
      for (let i = 0; i < ps.length; i++) {
        const a = ps[i];
        for (let j = i + 1; j < ps.length; j++) {
          const b = ps[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 15000) {
            const alpha = (1 - Math.sqrt(d2) / 122) * 0.1;
            ctx.strokeStyle = `rgba(126, 164, 214, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of ps) {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        if (p.x < -50) p.x = w + 50;
        if (p.x > w + 50) p.x = -50;
        if (p.y < -50) p.y = h + 50;
        if (p.y > h + 50) p.y = -50;

        if (p.kind === 0) {
          // network node
          ctx.fillStyle = "rgba(183, 208, 240, 0.5)";
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.kind === 1) {
          // floating code glyph
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(Math.sin(p.rot) * 0.25);
          ctx.fillStyle = "rgba(230, 238, 250, 0.3)";
          ctx.font = "600 11px Inter, system-ui, sans-serif";
          ctx.fillText(p.char, 0, 0);
          ctx.restore();
        } else {
          // tiny drifting UI wireframe
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(Math.sin(p.rot) * 0.12);
          ctx.strokeStyle = "rgba(126, 164, 214, 0.25)";
          ctx.lineWidth = 1;
          ctx.strokeRect(-15, -11, 30, 22);
          ctx.beginPath();
          ctx.moveTo(-15, -4);
          ctx.lineTo(15, -4);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(-10, 2);
          ctx.lineTo(4, 2);
          ctx.stroke();
          ctx.restore();
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const onVis = () => {
      const vis = document.visibilityState === "visible";
      if (vis && !running) {
        running = true;
        raf = requestAnimationFrame(tick);
      } else if (!vis) {
        running = false;
        cancelAnimationFrame(raf);
      }
    };
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return <canvas ref={ref} className="ambient-canvas" aria-hidden="true" />;
}
