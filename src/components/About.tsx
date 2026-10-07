import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import WordReveal from "./ui/WordReveal";
import Spotlight from "./ui/Spotlight";
import { SITE } from "@/config/site";

const CAPABILITIES = [
  { title: "Design", text: "Responsive, mobile-first interfaces and clear product experiences." },
  { title: "Development", text: "Full-stack builds with React, Node.js and modern web standards." },
  { title: "Cloud Technology", text: "Serverless AWS architecture — secure, monitored and built to scale." },
  { title: "Business Thinking", text: "Operations, sales and digital marketing expertise that make products sell." },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="aurora a1" aria-hidden="true" />
      <div className="aurora a2" aria-hidden="true" />
      <div className="container">
        <SectionHeading
          eyebrow="About the studio"
          title={"We're Building\nMore Than Websites."}
        />
        <div className="about-grid">
          <p className="about-statement">
            <WordReveal text="Two founders. Different strengths." />
            <span className="grad-text">
              <WordReveal text="One digital vision." delay={0.25} />
            </span>
            <WordReveal
              text="We combine engineering and cloud architecture with real business, sales and marketing experience — so what we build works technically and commercially."
              delay={0.4}
            />
          </p>
          <Reveal delay={0.15}>
            <div className="about-body">
              <p className="muted">
                {SITE.name} is an independent technology studio. One founder ships production-grade
                software — full-stack web applications, e-commerce platforms and serverless systems
                on AWS. The other runs business operations, sales and customer relationships in the
                real world, every day.
              </p>
              <p className="muted">
                That combination is the point: we don&apos;t just hand over code. We build digital
                products with the business outcome in mind — from the first conversation to
                deployment and beyond.
              </p>
              <p className="about-founders-line">
                <span>{SITE.foundingLine}</span>
                <span aria-hidden="true">·</span>
                <span>Based in {SITE.location}</span>
              </p>
            </div>
          </Reveal>
        </div>

        <div className="cap-grid">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <Spotlight className="cap-card" >
                <span className="cap-num">0{i + 1}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
