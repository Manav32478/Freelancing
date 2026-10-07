"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const LINES = [
  "const studio = createStudio();",
  "studio.build({ stack: ['react', 'node'] });",
  "studio.deploy('aws://serverless');",
  "await payments.connect('razorpay');",
  "shipping.track(order.id); // shiprocket",
];

/** Floating glass code-editor card that types real studio-flavored snippets in a loop. */
export default function CodeCard() {
  const reduce = useReducedMotion();
  const [text, setText] = useState("");

  useEffect(() => {
    if (reduce) {
      setText(LINES.slice(0, 3).join("\n"));
      return;
    }
    let li = 0;
    let ci = 0;
    let deleting = false;
    let timer = 0;
    const step = () => {
      const line = LINES[li];
      if (!deleting) {
        ci += 1;
        if (ci >= line.length) {
          ci = line.length;
          setText(line);
          deleting = true;
          timer = window.setTimeout(step, 1600);
          return;
        }
        setText(line.slice(0, ci));
        timer = window.setTimeout(step, 42);
      } else {
        ci -= 3;
        if (ci <= 0) {
          ci = 0;
          deleting = false;
          li = (li + 1) % LINES.length;
        }
        setText(LINES[li].slice(0, ci));
        timer = window.setTimeout(step, 16);
      }
    };
    timer = window.setTimeout(step, 600);
    return () => window.clearTimeout(timer);
  }, [reduce]);

  return (
    <div className="code-card" aria-hidden="true">
      <div className="code-head">
        <span className="cd cd-r" />
        <span className="cd cd-y" />
        <span className="cd cd-g" />
        <span className="code-file">studio — deploy.ts</span>
      </div>
      <pre>
        <span className="code-prompt">❯ </span>
        {text}
        <span className="code-caret" />
      </pre>
    </div>
  );
}
