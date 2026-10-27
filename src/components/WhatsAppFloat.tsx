"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP } from "@/config/site";
import { track } from "@/lib/track";

/** Floating WhatsApp CTA — always reachable on mobile. */
export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={WHATSAPP.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Future Tech on WhatsApp"
      onClick={() => track("whatsapp_click", { source: "floating_button" })}
    >
      <MessageCircle size={22} strokeWidth={2.4} aria-hidden="true" />
      <span className="wa-float-label">WhatsApp</span>
    </a>
  );
}
