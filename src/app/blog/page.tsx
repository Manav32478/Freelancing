import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { BLOG_POSTS } from "@/config/site";

export const metadata: Metadata = {
  title: "Articles for Business Owners | Future Tech",
  description:
    "Practical articles on hotel websites, digital menus, custom software and going digital — written for business owners in Gujarat and beyond.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return (
    <>
      <PageHero
        eyebrow="Articles"
        title="Useful Reading for Business Owners"
        sub="Practical, honest guidance on websites, digital menus and business software — no hype, no jargon."
        backHref="/"
        backLabel="Home"
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="blog-grid">
            {BLOG_POSTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link className="blog-card" href={`/blog/${p.slug}`}>
                  <span className="blog-meta">
                    {new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })} · {p.readTime}
                  </span>
                  <h2>{p.title}</h2>
                  <p>{p.description}</p>
                  <span className="hub-cta">
                    Read article <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
