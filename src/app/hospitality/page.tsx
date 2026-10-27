import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Faq from "@/components/ui/Faq";
import TrackLink from "@/components/ui/TrackLink";
import { HOSPITALITY, PROCESS_STEPS, WHATSAPP, SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Digital Solutions for Hotels, Restaurants and Cafes | Future Tech",
  description:
    "Professional hospitality websites, QR digital menus, enquiry and booking workflows and management software for hotels, restaurants and cafes in Gujarat and beyond.",
  alternates: { canonical: "/hospitality" },
};

export default function HospitalityPage() {
  return (
    <>
      <PageHero eyebrow="Hospitality" title={HOSPITALITY.headline} sub={HOSPITALITY.subheadline} backHref="/" backLabel="Home" />

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <Reveal>
            <div className="cta-band cta-band--tight">
              <h2>{HOSPITALITY.cta}</h2>
              <p>A short call, no pressure — we listen first and tell you honestly what will help.</p>
              <div className="cta-band-actions">
                <TrackLink href="/contact" event="consultation_cta_click" payload={{ page: "hospitality" }} className="btn btn-primary">
                  {HOSPITALITY.cta} <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
                </TrackLink>
                <TrackLink href={WHATSAPP.link} event="whatsapp_click" payload={{ source: "hospitality_hero" }} external className="btn btn-ghost">
                  WhatsApp Us <ArrowUpRight size={16} strokeWidth={2.4} aria-hidden="true" />
                </TrackLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="svc-h2">Problems we solve for hospitality businesses</h2>
            <div className="prob-grid">
              {HOSPITALITY.problems.map((p) => (
                <div key={p.title} className="prob-card">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="svc-h2">Our solutions</h2>
            <div className="prob-grid">
              {HOSPITALITY.solutions.map((p) => (
                <div key={p.title} className="prob-card prob-card--sol">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <h2 className="svc-h2">What you get</h2>
            <ul className="feature-list">
              {HOSPITALITY.benefits.map((b) => (
                <li key={b}>
                  <Check size={16} strokeWidth={2.6} aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="hub-note">
              Interface previews shown during consultations are honest demonstrations of our
              capabilities — any demonstration project is labelled as such, never presented as a
              client deployment.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <h2 className="svc-h2">How we work</h2>
            <ol className="proc-list">
              {PROCESS_STEPS.map((st) => (
                <li key={st.number}>
                  <span className="proc-num">{st.number}</span>
                  <div>
                    <h3>{st.title}</h3>
                    <p>{st.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.16}>
            <h2 className="svc-h2">Frequently asked questions</h2>
            <Faq items={HOSPITALITY.faqs} />
          </Reveal>

          <Reveal delay={0.2}>
            <div className="cta-band">
              <h2>Ready when you are.</h2>
              <p>
                Send an enquiry or message us on WhatsApp — we reply to every inquiry, usually the
                same working day.
              </p>
              <div className="cta-band-actions">
                <TrackLink href="/contact" event="cta_click" payload={{ cta: "hospitality_final", page: "hospitality" }} className="btn btn-primary">
                  {HOSPITALITY.cta} <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
                </TrackLink>
                <TrackLink href={WHATSAPP.link} event="whatsapp_click" payload={{ source: "hospitality_final" }} external className="btn btn-ghost">
                  WhatsApp {WHATSAPP.display} <ArrowUpRight size={16} strokeWidth={2.4} aria-hidden="true" />
                </TrackLink>
              </div>
              <p className="cta-band-fine">{SITE.name} · Bhavnagar, Gujarat, India</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
