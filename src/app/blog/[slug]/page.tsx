import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import TrackLink from "@/components/ui/TrackLink";
import { BLOG_POSTS } from "@/config/site";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = BLOG_POSTS.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.title} | Future Tech`,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = BLOG_POSTS.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <>
      <PageHero
        eyebrow="Article"
        title={p.title}
        sub={`${new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })} · ${p.readTime}`}
        backHref="/blog"
        backLabel="All articles"
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container prose-ft">
          <Reveal>
            <p className="prose-lead">{p.description}</p>
          </Reveal>
          {p.sections.map((s, i) => (
            <Reveal key={s.h} delay={0.04 * i}>
              <h2>{s.h}</h2>
              {s.p.map((par) => (
                <p key={par.slice(0, 24)}>{par}</p>
              ))}
            </Reveal>
          ))}
          <Reveal delay={0.1}>
            <div className="cta-band">
              <h2>Want this for your business?</h2>
              <p>Tell us what you&apos;re trying to solve — we&apos;ll reply with honest next steps.</p>
              <div className="cta-band-actions">
                <TrackLink href="/contact" event="cta_click" payload={{ cta: "blog_contact", page: p.slug }} className="btn btn-primary">
                  Discuss Your Project <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
                </TrackLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
