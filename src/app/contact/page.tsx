import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Future Tech — Discuss Your Project",
  description:
    "Send an enquiry, book a free 15-minute consultation or message us on WhatsApp. Future Tech replies to every inquiry — usually the same working day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>
      <Contact />
    </div>
  );
}
