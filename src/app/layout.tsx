import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SITE, FOUNDERS } from "@/config/site";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileActionBar from "@/components/MobileActionBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const description = `${SITE.name} builds software solutions that move businesses forward — websites, custom web applications and business management software for hotels, restaurants and growing businesses across Gujarat and beyond.`;

export const metadata: Metadata = {
  metadataBase: SITE.baseUrl ? new URL(SITE.baseUrl) : null,
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description,
  authors: [{ name: "Manav Sarvaiya" }, { name: "Rahul Mehta" }],
  creator: SITE.name,
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description,
    siteName: SITE.name,
    type: "website",
    locale: "en_IN",
    images: SITE.baseUrl ? [{ url: `${SITE.baseUrl}/og.png`, width: 1200, height: 630, alt: `${SITE.name} — Software Solutions That Move Your Business Forward` }] : [],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description,
    images: SITE.baseUrl ? [`${SITE.baseUrl}/og.png`] : [],
  },
  robots: { index: true, follow: true },
  verification: {
    google: "Z-XRTDl6ma4ANJGWogpLboY3OAfZ4DE9NjOBk3HVgYA",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060b16",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  slogan: SITE.tagline,
  description,
  areaServed: "IN",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhavnagar",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  email: "futuret3ch.in@gmail.com",
  telephone: "+918734871729",
  founder: FOUNDERS.map((f) => ({ "@type": "Person", name: f.name, jobTitle: f.role })),
};

export default function RootLayout({ children }: { children: import("react").ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <main id="main">{children}</main>
        <WhatsAppFloat />
        <MobileActionBar />
      </body>
    </html>
  );
}
