# Future Tech — Company Website

Premium single-page company website for the digital studio founded by
**Manav Sarvaiya** (Co-Founder & Full-Stack Developer) and **Rahul Mehta**
(Co-Founder & Business Operations).

Built with **Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · Lucide React**.

## Run it

```bash
npm install
npm run dev        # development
npm run build && npm run start   # production
```

## One-file configuration

Everything editable lives in **`src/config/site.ts`**:

| Setting | Purpose |
| --- | --- |
| `SITE.name` | **Company name** — updates navbar, logo text, footer, SEO title, structured data |
| `SITE.tagline` | Tagline used in footer + SEO |
| `SITE.baseUrl` | Set your live domain to enable `sitemap.xml` + canonical OG metadata |
| `SITE.formEndpoint` | Plug in a form backend (e.g. Formspree URL) to make the contact form send for real |
| `FOUNDERS` | Founder profiles, photos, skills, links |
| `SERVICES` / `TECH_STACK` / `PROJECTS` / `EXPERIENCE` / `EDUCATION` / `CERTIFICATIONS` | All site content |

No content is hard-coded across components — change the config and the whole site follows.

## Structure

```
src/
  config/site.ts            ← single source of truth
  app/                      ← layout, SEO metadata, icon.svg, robots, sitemap
  components/
    Navbar, Hero, Marquee, About, Founders, Services, TechStack,
    Projects, Experience, Education, Achievements, Process, Principles,
    CTA, Contact, Footer, Cursor, ScrollProgress
    ui/                     ← Logo, Reveal, SectionHeading, Magnetic
```

## Notes

- Founder photos are served from `public/founders/`.
- Project visuals are abstract, conceptual SVG artwork — never fake screenshots.
- All facts (experience, education, certifications, links, contacts) come
  exclusively from the two founders' resumes. No invented clients, stats or
  testimonials.
- Accessibility: semantic HTML, focus states, aria labels, and full
  `prefers-reduced-motion` support. Custom cursor is desktop-pointer only.

## Analytics & Search Console

- Conversion events (WhatsApp clicks, enquiry submissions, CTA and demo clicks, phone/email
  clicks) are pushed to `window.dataLayer` via `src/lib/track.ts`. Add a Google Tag Manager /
  GA4 container snippet in `src/app/layout.tsx` to start measuring them.
- Set `SITE.baseUrl` in `src/config/site.ts` to your live domain (e.g. https://futuretechin.vercel.app)
  so `sitemap.xml` and canonical URLs activate, then submit the sitemap in Google Search Console.
- Form posts: set `SITE.formEndpoint` (e.g. a Formspree or custom API endpoint) to receive
  enquiries by email/CRM; until then the form validates and confirms client-side.

## Quick management guide (edit content without touching components)

Everything business-facing lives in ONE file: `src/config/site.ts`

| What you want to change            | Where in `src/config/site.ts`        |
| ---------------------------------- | ------------------------------------ |
| Company name / tagline / location  | `SITE`                               |
| Live domain (sitemap, canonicals)  | `SITE.baseUrl`                       |
| Enquiry form destination (email/CRM)| `SITE.formEndpoint`                 |
| Founder profiles, photos, links    | `FOUNDERS`                           |
| Services shown on homepage         | `SERVICES`                           |
| Dedicated service pages & SEO      | `SERVICE_PAGES`                      |
| Hospitality page copy & FAQs       | `HOSPITALITY`                        |
| Case studies / portfolio           | `CASE_STUDIES`                       |
| Blog articles                      | `BLOG_POSTS`                         |
| Packages, prices, maintenance note | `PACKAGES`, `MAINTENANCE_NOTE`       |
| WhatsApp number & default message  | `WHATSAPP` (+ `waLink()` helper)     |
| Form dropdown options              | `BUSINESS_TYPES`, `SERVICE_OPTIONS`, `CONTACT_TIMES` |
| Process steps / principles         | `PROCESS_STEPS`, `PRINCIPLES`        |

Design tokens (colors, radii, fonts): `src/app/globals.css` → `:root`.
Share image: replace `public/og.png` (1200×630). Favicon: `src/app/icon.svg`.

After any edit: `npm run build` locally (or just push — Vercel rebuilds automatically).
