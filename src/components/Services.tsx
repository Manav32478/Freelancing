import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { SERVICES, SITE } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container services-grid">
        <div className="services-sticky">
          <SectionHeading
            eyebrow="Services"
            title={"What\nWe Build"}
            sub="From first idea to final deployment — the work we take on for businesses, end to end."
          />
          <Reveal delay={0.2}>
            <a className="project-link" href="#contact">
              Discuss a project <ArrowUpRight size={16} strokeWidth={2.4} />
            </a>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="muted" style={{ fontSize: "0.85rem", marginTop: "2.2rem", maxWidth: "34ch" }}>
              {SITE.name} — {SITE.tagline}
            </p>
          </Reveal>
        </div>

        <div className="services-list">
          {SERVICES.map((s, i) => (
            <Reveal key={s.number} delay={Math.min(i * 0.05, 0.2)}>
              <div className="service-row">
                <span className="service-num">/{s.number}</span>
                <h3 className="service-title">{s.title}</h3>
                <div className="service-desc">
                  <p>{s.description}</p>
                  <div className="service-tags">
                    {s.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight className="service-arrow" size={26} strokeWidth={1.8} aria-hidden="true" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
