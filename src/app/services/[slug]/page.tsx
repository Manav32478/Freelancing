import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import TrackLink from "@/components/ui/TrackLink";
import { SERVICE_PAGES, CASE_STUDIES, WHATSAPP, SITE, waLink } from "@/config/site";

export function generateStaticParams() {
  return SERVICE_PAGES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICE_PAGES.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SERVICE_PAGES.find((x) => x.slug === slug);
  if (!s) notFound();
  const cs = CASE_STUDIES.find((c) => c.slug === s.caseStudy);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.metaDescription,
    serviceType: s.title,
    areaServed: { "@type": "State", name: "Gujarat, India" },
    provider: { "@type": "ProfessionalService", name: SITE.name, url: SITE.baseUrl || undefined },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <PageHero
        eyebrow="Service"
        title={s.title}
        sub={s.intro}
        backHref="/services"
        backLabel="All services"
      />

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <Reveal>
            <p className="svc-audience">
              <strong>Who it&apos;s for:</strong> {s.audience}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="svc-h2">What&apos;s included</h2>
            <ul className="feature-list">
              {s.features.map((f) => (
                <li key={f}>
                  <Check size={16} strokeWidth={2.6} aria-hidden="true" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="note-box">
              <h3>Ready-made vs. custom — honestly scoped</h3>
              <p>{s.approach}</p>
            </div>
          </Reveal>

          {cs && (
            <Reveal delay={0.16}>
              <Link className="svc-case" href={`/work/${cs.slug}`}>
                <span className="eyebrow">Related case study</span>
                <h3>{cs.project}</h3>
                <p>{cs.solution.split(". ")[0]}.</p>
                <span className="hub-cta">
                  Read the case study <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          )}

          <Reveal delay={0.2}>
            <div className="cta-band">
              <h2>{s.cta}</h2>
              <p>
                Tell us about your business and we&apos;ll reply with honest next steps — including
                whether you need custom work at all.
              </p>
              <div className="cta-band-actions">
                <TrackLink href="/contact" event="cta_click" payload={{ cta: s.cta, page: s.slug }} className="btn btn-primary">
                  {s.cta} <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
                </TrackLink>
                <TrackLink href={waLink(`Hello Future Tech! I'm interested in ${s.title} for my business.`)} event="whatsapp_click" payload={{ source: `service_${s.slug}` }} external className="btn btn-ghost">
                  WhatsApp Us <ArrowUpRight size={16} strokeWidth={2.4} aria-hidden="true" />
                </TrackLink>
              </div>
              <p className="cta-band-fine">
                {SITE.name} · Bhavnagar, Gujarat · We work with businesses across Gujarat and beyond.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
