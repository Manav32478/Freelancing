"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/config/site";
import Logo from "./ui/Logo";
import Magnetic from "./ui/Magnetic";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled || open ? "scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="#top" aria-label={`${SITE.name} — back to top`} onClick={() => setOpen(false)}>
            <Logo />
          </a>

          <nav className="nav-links" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a key={l.href} className="nav-link" href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <Magnetic href="#contact" className="btn btn-primary btn-sm nav-cta">
            Let&apos;s Talk <ArrowUpRight size={15} strokeWidth={2.4} />
          </Magnetic>

          <button
            className={`nav-burger ${open ? "open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.href}
              className="mobile-link"
              href={l.href}
              style={{ transitionDelay: open ? `${0.08 + i * 0.06}s` : "0s" }}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div style={{ marginTop: "1.6rem" }}>
          <Magnetic href="#contact" className="btn btn-primary" onClick={() => setOpen(false)} ariaLabel="Let's talk">
            Let&apos;s Talk <ArrowUpRight size={16} strokeWidth={2.4} />
          </Magnetic>
        </div>
        <div className="mobile-menu-foot">
          <span>{SITE.tagline}</span>
          <span>{SITE.location}</span>
        </div>
      </div>
    </>
  );
}
