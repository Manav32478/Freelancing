import Logo from "./ui/Logo";
import { CONTACT_CHANNELS, NAV_LINKS, SERVICE_PAGES, SITE } from "@/config/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-word" aria-hidden="true">
          {SITE.name}
        </div>
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" aria-label={`${SITE.name} — back to top`}>
              <Logo />
            </a>
            <p className="footer-tag">{SITE.tagline}</p>
            <p className="footer-tag">{SITE.foundingLine}</p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
              <li>
                <a href="/blog">Articles</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {SERVICE_PAGES.map((s) => (
                <li key={s.slug}>
                  <a href={`/services/${s.slug}`}>{s.title}</a>
                </li>
              ))}
              <li>
                <a href="/hospitality">Hotels &amp; Restaurants</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              {CONTACT_CHANNELS.filter((c) => c.href).map((c) => (
                <li key={c.label}>
                  <a href={c.href} target={c.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © 2026 {SITE.name}. All rights reserved. ·{" "}
            <a href="/privacy" style={{ color: "inherit" }}>
              Privacy Notice
            </a>
          </span>
          <span>{SITE.location}</span>
        </div>
      </div>
    </footer>
  );
}
