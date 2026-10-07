"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { CONTACT_CHANNELS, PROJECT_TYPES, SITE } from "@/config/site";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { ArrowRight, Check } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const initial = { name: "", email: "", company: "", projectType: "", budget: "", message: "" };

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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = "Please enter a valid email address.";
    if (!values.projectType) e.projectType = "Please select a project type.";
    if (values.message.trim().length < 10) e.message = "Tell us a little more — at least a sentence.";
    return e;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setStatus("loading");
    try {
      if (SITE.formEndpoint) {
        const res = await fetch(SITE.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error("send failed");
      } else {
        // No backend configured yet — front-end only. Connect SITE.formEndpoint later.
        await new Promise((r) => setTimeout(r, 900));
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title={"Let's Build\nSomething Great."}
          sub="Tell us about your idea or business problem — we reply to every inquiry."
        />
        <div className="contact-grid">
          <Reveal>
            <dl className="contact-rows" style={{ marginTop: 0 }}>
              {CONTACT_CHANNELS.map((c) => (
                <div key={c.label} className="contact-row">
                  <dt>{c.label}</dt>
                  <dd>
                    {c.href ? (
                      <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                      {c.value}
                    </a>
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
                <h3>Inquiry received.</h3>
                <p>
                  Thanks, {values.name.split(" ")[0] || "there"} — we&apos;ve noted your project
                  details and will get back to you shortly. Prefer to reach out directly? Email{" "}
                  <a href="mailto:futuret3ch.in@gmail.com" style={{ color: "var(--cyan)" }}>
                    futuret3ch.in@gmail.com
                  </a>
                  .
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
                  <div className={`field ${errors.email ? "invalid" : ""}`}>
                    <label htmlFor="cf-email">Email *</label>
                    <input id="cf-email" className="input" type="email" placeholder="you@company.com" value={values.email} onChange={set("email")} autoComplete="email" />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="cf-company">Company (optional)</label>
                  <input id="cf-company" className="input" placeholder="Your business name" value={values.company} onChange={set("company")} autoComplete="organization" />
                </div>
                <div className="form-grid">
                  <div className={`field ${errors.projectType ? "invalid" : ""}`}>
                    <label htmlFor="cf-type">Project Type *</label>
                    <select id="cf-type" className="select" value={values.projectType} onChange={set("projectType")}>
                      <option value="">Select…</option>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    {errors.projectType && <span className="field-error">{errors.projectType}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="cf-budget">Budget (optional)</label>
                    <input
                      id="cf-budget"
                      className="input"
                      type="text"
                      placeholder="e.g. ₹50,000 – ₹1,50,000"
                      value={values.budget}
                      onChange={set("budget")}
                    />
                  </div>
                </div>
                <div className={`field ${errors.message ? "invalid" : ""}`}>
                  <label htmlFor="cf-message">Message *</label>
                  <textarea id="cf-message" className="textarea" placeholder="What are you building? What problem should it solve?" value={values.message} onChange={set("message")} />
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>
                {status === "error" && (
                  <p className="field-error" role="alert">
                    Something went wrong sending your inquiry. Please email us directly at
                    futuret3ch.in@gmail.com.
                  </p>
                )}
                <div>
                  <button type="submit" className="btn btn-primary" disabled={status === "loading"}>
                    {status === "loading" ? "Sending…" : "Send Inquiry"} <ArrowRight size={17} strokeWidth={2.4} />
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
