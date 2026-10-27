import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Notice | Future Tech",
  description: `How ${SITE.name} handles the information you send through this website.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Notice"
        sub="Short, plain-language summary of what we collect and why."
        backHref="/"
        backLabel="Home"
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container prose-ft">
          <Reveal>
            <h2>What we collect</h2>
            <p>
              When you submit an enquiry form, we collect only the details you provide: your name,
              business name, contact details (phone, WhatsApp or email), business type, the service
              you are interested in, an optional budget range, your preferred contact time and your
              message.
            </p>
            <h2>How we use it</h2>
            <p>
              We use your enquiry solely to respond to you, prepare a proposal if you request one,
              and keep a record of our conversation. We record the source of an enquiry (for
              example, which page or campaign it came from) to understand which channels work.
            </p>
            <h2>What we never do</h2>
            <p>
              We do not sell, rent or share your information with third parties for marketing. We
              do not send unsolicited messages beyond following up on your enquiry.
            </p>
            <h2>Retention &amp; your rights</h2>
            <p>
              Enquiry records are kept while our business relationship is active and for a
              reasonable period afterwards. You may ask us at any time to show, correct or delete
              the information we hold about you by emailing{" "}
              <a href="mailto:futuret3ch.in@gmail.com">futuret3ch.in@gmail.com</a>.
            </p>
            <h2>Analytics</h2>
            <p>
              This website measures aggregate interactions (page views, button and form events) to
              improve the site. These measurements are not used to identify individuals.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
