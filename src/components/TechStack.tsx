import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Spotlight from "./ui/Spotlight";
import { TECH_STACK } from "@/config/site";

export default function TechStack() {
  return (
    <section className="section tech-section" id="stack">
      <div className="container">
        <SectionHeading
          eyebrow="Technology"
          title="Tools We Build With"
          sub="The languages, frameworks and cloud services we use in production work."
        />
        <div className="tech-grid">
          {TECH_STACK.map((cat, i) => (
            <Reveal key={cat.category} delay={Math.min(i * 0.07, 0.3)}>
              <Spotlight className="tech-card">
                <span className="tech-cat">{cat.category}</span>
                <div className="chips">
                  {cat.items.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
