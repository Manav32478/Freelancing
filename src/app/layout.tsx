import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SITE, FOUNDERS } from "@/config/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const description = `${SITE.name} is an independent digital technology studio based in ${SITE.location}, founded by Manav Sarvaiya and Rahul Mehta. We design and build websites, web applications, e-commerce platforms and cloud-native software for businesses.`;

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
  },
  twitter: {
    card: "summary",
    title: `${SITE.name} — ${SITE.tagline}`,
    description,
  },
  robots: { index: true, follow: true },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
