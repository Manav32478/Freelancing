import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Spotlight from "./ui/Spotlight";
import { AWS_BADGES, CERTIFICATIONS, RECOGNITION } from "@/config/site";

export default function Achievements() {
  return (
    <section className="section" id="recognition">
      <div className="container">
        <SectionHeading
          eyebrow="Credentials"
          title={"Knowledge &\nRecognition"}
          sub="Certifications, badges and recognition earned by the team."
        />
        <div className="cert-grid">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.title} delay={Math.min(i * 0.06, 0.24)}>
              <Spotlight className="cert-card">
                <span className="cert-org">{c.org}</span>
                <span className="cert-title">{c.title}</span>
                <span className="muted" style={{ fontSize: "0.8rem" }}>
                  Manav Sarvaiya
                </span>
              </Spotlight>
            </Reveal>
          ))}
        </div>

        <div className="badges-block">
          <Reveal>
            <h3>AWS Educate — Trained Badges (8)</h3>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="chips">
              {AWS_BADGES.map((b) => (
                <span key={b} className="chip">
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="badges-block">
          <Reveal>
            <h3>Beyond Work</h3>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="chips">
              {RECOGNITION.map((r) => (
                <span key={r} className="chip">
                  {r}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
