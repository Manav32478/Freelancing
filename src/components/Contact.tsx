"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  BUSINESS_TYPES,
  CONTACT_CHANNELS,
  CONTACT_TIMES,
  SERVICE_OPTIONS,
  SITE,
  WHATSAPP,
} from "@/config/site";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import TrackLink from "./ui/TrackLink";
import { ArrowRight, ArrowUpRight, Check, MessageCircle, Phone } from "lucide-react";
import { track } from "@/lib/track";

type Status = "idle" | "loading" | "success" | "error";

const initial = {
  name: "",
  business: "",
  phone: "",
  email: "",
  businessType: "",
  service: "",
  budget: "",
  contactTime: "",
  message: "",
};

export default function Contact() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  const set =
    (key: keyof typeof initial) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!values.name.trim()) e.name = "Please tell us your name.";
    if (!/^[+\d][\d\s-]{7,}$/.test(values.phone.trim()))
      e.phone = "Please add a phone or WhatsApp number we can reach you on.";
    if (!values.service) e.service = "Please choose the service you need.";
    return e;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setStatus("loading");
    const payload = {
      ...values,
      source: typeof window !== "undefined" ? window.location.pathname : "/",
      referrer: typeof document !== "undefined" ? document.referrer : "",
      submittedAt: new Date().toISOString(),
    };
    try {
      if (SITE.formEndpoint) {
        const res = await fetch(SITE.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("send failed");
      } else {
        // No backend configured yet — front-end only. Connect SITE.formEndpoint later.
        await new Promise((r) => setTimeout(r, 900));
      }
      track("lead_submit", { service: values.service, source: payload.source });
      setStatus("success");
    } catch {
      track("lead_submit_error", { service: values.service });
      setStatus("error");
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title={"Let's Build\nSomething Great."}
          sub="Tell us about your idea or business problem — we reply to every inquiry, usually the same working day."
        />
        <div className="contact-grid">
          <Reveal>
            <div className="contact-quick">
              <TrackLink
                href={WHATSAPP.link}
                event="whatsapp_click"
                payload={{ source: "contact_panel" }}
                external
                className="btn btn-primary"
              >
                <MessageCircle size={17} strokeWidth={2.4} aria-hidden="true" /> WhatsApp Us Now
              </TrackLink>
              <TrackLink
                href="tel:+918734871729"
                event="phone_click"
                payload={{ source: "contact_panel" }}
                className="btn btn-ghost"
              >
                <Phone size={16} strokeWidth={2.4} aria-hidden="true" /> {WHATSAPP.display}
              </TrackLink>
            </div>
            <dl className="contact-rows" style={{ marginTop: "1.6rem" }}>
              {CONTACT_CHANNELS.map((c) => (
                <div key={c.label} className="contact-row">
                  <dt>{c.label}</dt>
                  <dd>
                    {c.href ? (
                      <TrackLink
                        href={c.href}
                        event={c.href.startsWith("mailto") ? "email_click" : c.href.startsWith("tel") ? "phone_click" : "link_click"}
                        payload={{ source: "contact_rows", target: c.label }}
                        external={c.href.startsWith("http")}
                      >
                        {c.value}
                      </TrackLink>
                    ) : (
                      c.value
                    )}
                    {c.person && <span className="contact-person">{c.person}</span>}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.12}>
            {status === "success" ? (
              <div className="form-success" role="status">
                <Check size={28} strokeWidth={2.4} style={{ color: "var(--cyan)" }} />
                <h3>Enquiry received.</h3>
                <p>
                  Thanks, {values.name.split(" ")[0] || "there"} — we&apos;ve noted your project
                  details and will get back to you at your preferred time. Need us sooner? Message
                  us on WhatsApp at {WHATSAPP.display}.
                </p>
                <button
                  className="btn btn-ghost btn-sm"
                  onClick={() => {
                    setValues(initial);
                    setStatus("idle");
                  }}
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form className="form" onSubmit={onSubmit} noValidate>
                <div className="form-grid">
                  <div className={`field ${errors.name ? "invalid" : ""}`}>
                    <label htmlFor="cf-name">Name *</label>
                    <input id="cf-name" className="input" placeholder="Your name" value={values.name} onChange={set("name")} autoComplete="name" />
                    {errors.name && <span className="field-error">{errors.name}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="cf-business">Business name</label>
                    <input id="cf-business" className="input" placeholder="Your business name" value={values.business} onChange={set("business")} autoComplete="organization" />
                  </div>
                </div>
                <div className="form-grid">
                  <div className={`field ${errors.phone ? "invalid" : ""}`}>
                    <label htmlFor="cf-phone">Phone / WhatsApp *</label>
                    <input id="cf-phone" className="input" type="tel" placeholder="+91 …" value={values.phone} onChange={set("phone")} autoComplete="tel" />
                    {errors.phone && <span className="field-error">{errors.phone}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="cf-email">Email (optional)</label>
                    <input id="cf-email" className="input" type="email" placeholder="you@company.com" value={values.email} onChange={set("email")} autoComplete="email" />
                  </div>
                </div>
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="cf-btype">Business type</label>
                    <select id="cf-btype" className="select" value={values.businessType} onChange={set("businessType")}>
                      <option value="">Select…</option>
                      {BUSINESS_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className={`field ${errors.service ? "invalid" : ""}`}>
                    <label htmlFor="cf-service">Service required *</label>
                    <select id="cf-service" className="select" value={values.service} onChange={set("service")}>
                      <option value="">Select…</option>
                      {SERVICE_OPTIONS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    {errors.service && <span className="field-error">{errors.service}</span>}
                  </div>
                </div>
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="cf-budget">Project budget (optional)</label>
                    <input id="cf-budget" className="input" type="text" placeholder="e.g. ₹50,000 – ₹1,50,000" value={values.budget} onChange={set("budget")} />
                  </div>
                  <div className="field">
                    <label htmlFor="cf-time">Preferred contact time</label>
                    <select id="cf-time" className="select" value={values.contactTime} onChange={set("contactTime")}>
                      <option value="">Any time</option>
                      {CONTACT_TIMES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="cf-message">Message (optional)</label>
                  <textarea id="cf-message" className="textarea" placeholder="What are you building? What problem should it solve?" value={values.message} onChange={set("message")} />
                </div>
                {status === "error" && (
                  <p className="field-error" role="alert">
                    Something went wrong sending your inquiry. Please email us directly at
                    futuret3ch.in@gmail.com or WhatsApp {WHATSAPP.display}.
                  </p>
                )}
                <div>
                  <button type="submit" className="btn btn-primary" disabled={status === "loading"}>
                    {status === "loading" ? "Sending…" : "Send Inquiry"} <ArrowRight size={17} strokeWidth={2.4} />
                  </button>
                </div>
                <p className="form-privacy">
                  We use these details only to respond to your enquiry — never sold or shared for
                  marketing. See our{" "}
                  <a href="/privacy" style={{ color: "var(--cyan)" }}>
                    privacy notice
                  </a>
                  . Prefer WhatsApp?{" "}
                  <TrackLink href={WHATSAPP.link} event="whatsapp_click" payload={{ source: "form_note" }} external>
                    Message us <ArrowUpRight size={12} strokeWidth={2.4} style={{ display: "inline", verticalAlign: "-2px" }} aria-hidden="true" />
                  </TrackLink>
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
