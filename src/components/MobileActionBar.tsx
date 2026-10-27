"use client";

import { Phone, MessageCircle, Send } from "lucide-react";
import Link from "next/link";
import { WHATSAPP, waLink } from "@/config/site";
import { track } from "@/lib/track";

/** Mobile-only sticky action bar: call, WhatsApp, enquiry — always in thumb reach. */
export default function MobileActionBar() {
  return (
    <div className="mobile-bar" role="navigation" aria-label="Quick contact actions">
      <a
        href="tel:+918734871729"
        onClick={() => track("phone_click", { source: "mobile_bar" })}
      >
        <Phone size={18} strokeWidth={2.4} aria-hidden="true" />
        <span>Call</span>
      </a>
      <a
        href={waLink("Hello Future Tech! I'd like to discuss a project for my business.")}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("whatsapp_click", { source: "mobile_bar" })}
      >
        <MessageCircle size={18} strokeWidth={2.4} aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
      <Link href="/contact" onClick={() => track("cta_click", { cta: "mobile_bar_enquire" })}>
        <Send size={17} strokeWidth={2.4} aria-hidden="true" />
        <span>Enquire</span>
      </Link>
    </div>
  );
}
