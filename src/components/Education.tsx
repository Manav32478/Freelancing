import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { EDUCATION } from "@/config/site";

export default function Education() {
  return (
    <section className="section section-light" id="education">
      <div className="container">
        <SectionHeading
          eyebrow="Foundations"
          title="Education"
          sub="The formal foundations behind the studio — engineering and business, side by side."
        />
        <div className="edu-grid">
          {EDUCATION.map((person, i) => (
            <Reveal key={person.person} delay={i * 0.1}>
              <div className="edu-card">
                <span className="edu-person">{person.person}</span>
                {person.entries.map((e) => (
                  <div key={e.degree} className="edu-entry">
                    <span className="edu-degree">{e.degree}</span>
                    <span className="edu-inst">{e.institution}</span>
                    <span className="edu-period">
                      {e.period}
                      {e.note ? ` · ${e.note}` : ""}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
