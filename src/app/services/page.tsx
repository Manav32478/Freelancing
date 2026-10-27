import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { SERVICE_PAGES, HOSPITALITY, SITE, PACKAGES, MAINTENANCE_NOTE } from "@/config/site";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Websites, Software & SaaS Development",
  description:
    "Hotel websites, restaurant digital solutions, custom business software and SaaS product development — built end-to-end by Future Tech, Gujarat.",
  alternates: { canonical: "/services" },
};

export default function ServicesHub() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="What We Build for Businesses"
        sub="Four focused service lines — each with clear deliverables, honest scoping and a direct path from first conversation to launch."
        backHref="/"
        backLabel="Home"
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="hub-grid">
            {SERVICE_PAGES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <Link className="hub-card" href={`/services/${s.slug}`}>
                  <span className="hub-num">0{i + 1}</span>
                  <h2>{s.title}</h2>
                  <p>{s.short}</p>
                  <span className="hub-cta">
                    {s.cta} <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="hub-banner">
              <div>
                <h2>Hotels, restaurants &amp; cafes</h2>
                <p>
                  {HOSPITALITY.subheadline} See the dedicated landing page with solutions,
                  features, process and FAQs.
                </p>
              </div>
              <Link className="btn btn-primary" href="/hospitality">
                Hospitality Solutions <ArrowUpRight size={16} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <h2 className="svc-h2">Transparent starting packages</h2>
            <div className="pkg-grid">
              {PACKAGES.map((p) => (
                <div key={p.name} className={`pkg-card ${p.highlight ? "pkg-card--hot" : ""}`}>
                  {p.highlight && <span className="pkg-flag">Most chosen</span>}
                  <h3>{p.name}</h3>
                  <p className="pkg-price">{p.price}</p>
                  <p className="pkg-tag">{p.tagline}</p>
                  <ul>
                    {p.includes.map((inc) => (
                      <li key={inc}>
                        <Check size={14} strokeWidth={2.6} aria-hidden="true" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="hub-note">
              {MAINTENANCE_NOTE} Ranges are indicative starting points — every project is quoted
              in writing after a free consultation, with deliverables, exclusions and ongoing
              costs clearly defined.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="hub-note">
              {SITE.name} advertises only services we deliver in-house. Ready-made packages and
              custom development are clearly distinguished on every service page, and every
              project starts with a written scope.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
