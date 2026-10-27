import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Spotlight from "./ui/Spotlight";
import { PRINCIPLES } from "@/config/site";

export default function Principles() {
  return (
    <section className="section" id="principles">
      <div className="aurora a2" aria-hidden="true" />
      <div className="container">
        <SectionHeading
          eyebrow="Why work with us"
          title="Built With Purpose"
          sub="The principles we hold every project to."
        />
        <div className="principles-grid">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.number} delay={Math.min(i * 0.07, 0.28)}>
              <Spotlight className="principle-card">
                <span className="principle-num">/{p.number}</span>
                <h3 className="principle-title">{p.title}</h3>
                <p className="principle-desc">{p.description}</p>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
