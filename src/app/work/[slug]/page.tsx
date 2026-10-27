import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, ArrowRight, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import TrackLink from "@/components/ui/TrackLink";
import ProjectArt from "@/components/ProjectArt";
import { CASE_STUDIES, WHATSAPP } from "@/config/site";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = CASE_STUDIES.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: `${c.project} — Case Study | Future Tech`,
    description: c.solution,
    alternates: { canonical: `/work/${c.slug}` },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = CASE_STUDIES.find((x) => x.slug === slug);
  if (!c) notFound();

  return (
    <>
      <PageHero eyebrow="Case Study" title={c.project} sub={c.solution} backHref="/#work" backLabel="All work" />

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container case-wrap">
          <Reveal>
            <span className="case-label">{c.label}</span>
            <div className="case-art" aria-hidden="true">
              <ProjectArt kind={c.art} />
            </div>
          </Reveal>

          <div className="case-grid">
            <Reveal delay={0.05}>
              <div className="case-block">
                <h2>The problem</h2>
                <p>{c.problem}</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="case-block">
                <h2>Intended users</h2>
                <p>{c.users}</p>
              </div>
            </Reveal>
            <Reveal delay={0.11}>
              <div className="case-block">
                <h2>The solution</h2>
                <p>{c.solution}</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            <h2 className="svc-h2">Main features</h2>
            <ul className="feature-list">
              {c.highlights.map((h) => (
                <li key={h}>
                  <Check size={16} strokeWidth={2.6} aria-hidden="true" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.17}>
            <h2 className="svc-h2">Technologies used</h2>
            <div className="chips">
              {c.tech.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="note-box">
              <h3>Outcome</h3>
              <p>{c.outcome}</p>
            </div>
          </Reveal>

          <Reveal delay={0.23}>
            <div className="cta-band">
              <h2>Want something similar for your business?</h2>
              <p>Contact Future Tech to discuss your project — we&apos;ll reply with honest next steps.</p>
              <div className="cta-band-actions">
                <TrackLink href="/contact" event="cta_click" payload={{ cta: "case_study_contact", page: c.slug }} className="btn btn-primary">
                  Discuss Your Project <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
                </TrackLink>
                {c.liveUrl && (
                  <TrackLink href={c.liveUrl} event="project_demo_click" payload={{ project: c.slug }} external className="btn btn-ghost">
                    View Live Project <ArrowUpRight size={16} strokeWidth={2.4} aria-hidden="true" />
                  </TrackLink>
                )}
                <TrackLink href={WHATSAPP.link} event="whatsapp_click" payload={{ source: `case_${c.slug}` }} external className="btn btn-ghost">
                  WhatsApp Us <ArrowUpRight size={16} strokeWidth={2.4} aria-hidden="true" />
                </TrackLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
