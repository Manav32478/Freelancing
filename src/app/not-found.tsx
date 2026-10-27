import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = { title: "Page Not Found | Future Tech" };

export default function NotFound() {
  return (
    <section className="page-hero not-found">
      <div className="bg-grid" aria-hidden="true" />
      <div className="container">
        <p className="eyebrow">
          <span className="eyebrow-line" aria-hidden="true" />
          Error 404
        </p>
        <h1 className="page-title">This page took a wrong turn.</h1>
        <p className="page-sub">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back
          to something useful.
        </p>
        <div className="cta-band-actions" style={{ justifyContent: "flex-start", marginTop: "2rem" }}>
          <Link className="btn btn-primary" href="/">
            Back to Home <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
          </Link>
          <Link className="btn btn-ghost" href="/services">
            Explore Services
          </Link>
          <Link className="btn btn-ghost" href="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
