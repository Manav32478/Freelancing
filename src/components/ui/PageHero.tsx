import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/** Shared header for sub-pages (services, case studies, blog, legal). */
export default function PageHero({
  eyebrow,
  title,
  sub,
  backHref,
  backLabel,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <header className="page-hero">
      <div className="bg-grid" aria-hidden="true" />
      <div className="container">
        {backHref && (
          <Link className="page-back" href={backHref}>
            <ArrowLeft size={15} strokeWidth={2.4} aria-hidden="true" /> {backLabel || "Back"}
          </Link>
        )}
        <p className="eyebrow">
          <span className="eyebrow-line" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="page-title">{title}</h1>
        {sub && <p className="page-sub">{sub}</p>}
      </div>
    </header>
  );
}
