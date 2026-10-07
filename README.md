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
