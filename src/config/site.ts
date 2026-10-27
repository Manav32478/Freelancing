/* ============================================================
   SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
   ------------------------------------------------------------
   Change the company name here — it updates the navbar, logo,
   footer, SEO metadata and structured data automatically.
   All facts below are extracted from the founders' resumes.
   ============================================================ */

export const SITE = {
  /** ← Change the company name here */
  name: "Future Tech",
  tagline: "Digital Products. Software. Technology.",
  heroStatement: "Building digital solutions that move businesses forward.",
  location: "Bhavnagar, Gujarat, India",
  foundingLine: "An independent digital studio founded by Manav Sarvaiya & Rahul Mehta.",
  /** Set to your live domain (e.g. "https://yourcompany.com") to enable sitemap & canonical URLs */
  baseUrl: "https://futuretechin.vercel.app",
  /** Connect a form backend later (e.g. a Formspree endpoint). Empty = front-end only demo state. */
  formEndpoint: "",
} as const;

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "/services" },
  { label: "Hospitality", href: "/hospitality" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "/contact" },
] as const;

export const MARQUEE_ITEMS = [
  "Web Development",
  "Full-Stack",
  "E-Commerce",
  "Cloud & Serverless",
  "UI / UX",
  "Databases",
  "AWS",
  "Payment Integration",
  "Digital Marketing",
  "Business Operations",
] as const;

export type Founder = {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  skills: string[];
  technologies?: string[];
  experienceLine: string;
  links: { label: string; href: string }[];
};

export const FOUNDERS: Founder[] = [
  {
    id: "manav",
    name: "Manav Sarvaiya",
    role: "Co-Founder & Full-Stack Developer",
    photo: "/founders/manav-sarvaiya.jpeg",
    bio: "Full-stack developer and cloud & serverless specialist. Designs, architects and ships production-grade applications — from serverless platforms on AWS to payment-ready e-commerce systems.",
    skills: [
      "Full-Stack Development",
      "Cloud & Serverless Architecture",
      "Frontend Engineering",
      "Database Design",
      "Payment & Shipping Integration",
    ],
    technologies: ["React", "Node.js", "AWS", "Python", "JavaScript", "MongoDB", "MySQL", "Supabase"],
    experienceLine:
      "Frontend development experience at Vaishnav Technologies; builder of Cloud Arcade (serverless on AWS) and the SPARSH e-commerce platform.",
    links: [
      { label: "GitHub", href: "https://github.com/Manav32478" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/manav-sarvaiya-043988289" },
      { label: "Portfolio", href: "https://manavportfolio378.vercel.app" },
    ],
  },
  {
    id: "rahul",
    name: "Rahul Mehta",
    role: "Co-Founder & Business Operations",
    photo: "/founders/rahul-mehta.jpeg",
    bio: "Business, operations and growth lead with real-world management experience across hospitality, retail and marketing — turning customer insight and disciplined operations into business results.",
    skills: [
      "Digital Marketing",
      "Sales & Revenue Growth",
      "Customer Relationship Management",
      "Team Leadership",
      "Negotiation",
      "Operations Management",
    ],
    technologies: ["Marketing Strategy", "Client Relations", "Team Coordination", "Critical Thinking"],
    experienceLine:
      "Hotel Manager at Raa Vansh Hotel — leading a team of 8–10, owning daily operations, sales and guest relationships end-to-end.",
    links: [
      { label: "Email", href: "mailto:futuret3ch.in@gmail.com" },
      { label: "Phone", href: "tel:+918734871729" },
    ],
  },
];

export type Service = {
  number: string;
  title: string;
  description: string;
  tags: string[];
};

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Fast, responsive, mobile-friendly websites with clean layouts and modern UI — built for businesses that need to look serious online.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Full-stack web apps with authentication, real-time data and structured backends — from safety platforms to serverless game hubs.",
    tags: ["React", "Node.js", "REST APIs", "Auth"],
  },
  {
    number: "03",
    title: "E-Commerce Solutions",
    description:
      "Complete online stores: product catalogs, carts, secure checkout with Razorpay, and automated shipping & tracking with Shiprocket.",
    tags: ["Razorpay", "Shiprocket", "Supabase", "Order Automation"],
  },
  {
    number: "04",
    title: "Full-Stack Development",
    description:
      "One team across the whole stack — frontend interfaces, backend services, databases and integrations, developed and tested end-to-end.",
    tags: ["React", "Node.js", "MySQL", "MongoDB"],
  },
  {
    number: "05",
    title: "Cloud & Serverless Architecture",
    description:
      "Scalable AWS architectures using S3, CloudFront, Lambda, DynamoDB, Cognito and API Gateway — secure, monitored and cost-efficient.",
    tags: ["AWS", "Lambda", "DynamoDB", "Cognito"],
  },
  {
    number: "06",
    title: "UI / UX & Responsive Design",
    description:
      "Intuitive, responsive interfaces designed around real users — clear navigation, structured content and mobile-first layouts.",
    tags: ["Responsive Design", "Mobile-First", "UI Design"],
  },
  {
    number: "07",
    title: "Digital Marketing & Growth",
    description:
      "Business-side expertise in digital marketing, sales and customer relationship management — so what we build also sells.",
    tags: ["Digital Marketing", "Sales Strategy", "CRM"],
  },
];

export const TECH_STACK: { category: string; items: string[] }[] = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
  { category: "Backend", items: ["Node.js", "AWS Lambda", "REST APIs"] },
  { category: "Programming", items: ["Python", "C", "C++", "Java"] },
  { category: "Databases", items: ["MySQL", "MongoDB", "Supabase", "DynamoDB"] },
  { category: "Cloud / AWS", items: ["S3", "Lambda", "DynamoDB", "Cognito", "API Gateway", "CloudFront", "CloudWatch", "IAM"] },
  { category: "Integrations", items: ["Razorpay", "Shiprocket", "Formspree"] },
  { category: "Tools", items: ["GitHub"] },
];

export type Project = {
  name: string;
  category: string;
  period: string;
  description: string;
  tags: string[];
  lead: string;
  liveUrl?: string;
  art: "commerce" | "arcade" | "safety" | "portfolio";
  size: "featured" | "half" | "wide";
};

export const PROJECTS: Project[] = [
  {
    name: "SPARSH",
    category: "E-Commerce Platform",
    period: "2025 — Present",
    description:
      "A full-stack e-commerce platform for natural hair-care products: product browsing by category, cart management, secure Razorpay checkout, Shiprocket shipping & tracking, automated order notifications and customer query forms.",
    tags: ["Supabase", "Razorpay", "Shiprocket", "Formspree", "Responsive UI"],
    lead: "Manav Sarvaiya",
    liveUrl: "https://www.sparshnaturals.shop",
    art: "commerce",
    size: "featured",
  },
  {
    name: "Cloud Arcade",
    category: "Serverless Web Application",
    period: "2026 — Present",
    description:
      "A full-stack serverless gaming platform on AWS with three browser games and real-time leaderboards. Four Lambda microservices, Cognito JWT-secured score submission and least-privilege IAM — served globally over CloudFront.",
    tags: ["AWS S3", "CloudFront", "Lambda", "DynamoDB", "Cognito", "API Gateway"],
    lead: "Manav Sarvaiya",
    liveUrl: "http://cloud-arcade-frontend-manav.s3-website.ap-south-1.amazonaws.com",
    art: "arcade",
    size: "half",
  },
  {
    name: "Women's Safety Platform",
    category: "Social Impact · Smart India Hackathon",
    period: "2025",
    description:
      "A web-based safety platform built for the Smart India Hackathon: SOS alerts, emergency calling, instant messaging to trusted contacts and live GPS location tracking, with safety-awareness resources.",
    tags: ["JavaScript", "Geolocation", "Real-Time Alerts"],
    lead: "Manav Sarvaiya",
    liveUrl: "https://women-s-safety-website.vercel.app",
    art: "safety",
    size: "half",
  },
  {
    name: "Portfolio Website",
    category: "Website",
    period: "2025",
    description:
      "A responsive portfolio website with a modern UI, smooth navigation, structured sections and a focus on performance and mobile-friendly design.",
    tags: ["HTML", "CSS", "JavaScript", "Performance"],
    lead: "Manav Sarvaiya",
    liveUrl: "https://manavportfolio378.vercel.app",
    art: "portfolio",
    size: "wide",
  },
];

export type ExperienceEntry = {
  period: string;
  role: string;
  company: string;
  person: string;
  points: string[];
  tech?: string[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    period: "2025 — 2026",
    role: "Hotel Manager",
    company: "Raa Vansh Hotel",
    person: "Rahul Mehta",
    points: [
      "Managed day-to-day hotel operations with high standards of guest satisfaction and service quality.",
      "Applied personal selling techniques to increase room bookings and upsell services.",
      "Led a diverse team of 8–10 members — scheduling, training and conflict resolution.",
      "Resolved complex guest issues with a professional, marketing-oriented approach to drive repeat business.",
    ],
    tech: ["Operations Leadership", "Sales & Revenue", "Team Coordination", "CRM"],
  },
  {
    period: "May 2025 — Jun 2025",
    role: "Frontend Web Developer (Intern)",
    company: "Vaishnav Technologies",
    person: "Manav Sarvaiya",
    points: [
      "Built responsive web interfaces and contributed to frontend development using modern web technologies.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    period: "Feb 2025 — Apr 2025",
    role: "Developer — Smart India Hackathon",
    company: "Women's Safety Platform",
    person: "Manav Sarvaiya",
    points: [
      "Developed a safety platform with SOS alerts, emergency calling and live GPS location sharing under hackathon deadlines.",
    ],
    tech: ["JavaScript", "Geolocation", "Rapid Prototyping"],
  },
];

export const EDUCATION: { person: string; entries: { degree: string; institution: string; period: string; note?: string }[] }[] = [
  {
    person: "Manav Sarvaiya",
    entries: [
      {
        degree: "B.Tech, Information Technology",
        institution: "Charotar University of Science and Technology",
        period: "2023 — Present",
        note: "CGPA 7.81",
      },
      { degree: "HSC", institution: "Gyanmanjri Vidyapith", period: "2021 — 2023", note: "87.8 percentile" },
    ],
  },
  {
    person: "Rahul Mehta",
    entries: [
      {
        degree: "Bachelor of Business Administration (BBA)",
        institution: "Bhavnagar University",
        period: "2023 — 2027",
      },
      { degree: "HSC", institution: "Saint Thomas English Medium High School", period: "2020 — 2023" },
    ],
  },
];

export const CERTIFICATIONS: { title: string; org: string }[] = [
  { title: "NPTEL — DSA, C++ & C", org: "NPTEL" },
  { title: "Generative AI & ChatGPT for Industrial Applications", org: "Corizo" },
  { title: "Java (Basic)", org: "HackerRank" },
  { title: "Introduction to Python", org: "DataCamp" },
  { title: "Intermediate Python", org: "DataCamp" },
];

export const AWS_BADGES = [
  "Cloud Computing 101",
  "Getting Started with Compute",
  "Networking",
  "Security",
  "Serverless",
  "Introduction to Generative AI",
  "Machine Learning Foundations",
  "Web Application Development Builder",
] as const;

export const RECOGNITION = [
  "AIU West Zone Basketball",
  "State-Level Drawing Award",
  "Black Belt in Karate",
  "District-Level Cricket (Under-14)",
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your business, your customers and the problem the project must solve.",
  },
  {
    number: "02",
    title: "Proposal",
    description: "Scope, timeline, deliverables, milestones and payment terms are agreed in writing before work begins.",
  },
  {
    number: "03",
    title: "Development",
    description: "We build the agreed solution in reviewable increments and share progress with you regularly.",
  },
  {
    number: "04",
    title: "Testing & Launch",
    description: "The product is tested across devices and scenarios, then deployed carefully to production.",
  },
  {
    number: "05",
    title: "Ongoing Support",
    description: "Agreed maintenance, monitoring and technical support keep your product healthy after launch.",
  },
] as const;

export const PRINCIPLES = [
  {
    number: "01",
    title: "Business First",
    description: "Technology should solve a real problem. Every build starts with the business outcome it needs to create.",
  },
  {
    number: "02",
    title: "Clean Development",
    description: "Structured, maintainable code and least-privilege security — the way our AWS work is already built.",
  },
  {
    number: "03",
    title: "Modern Experiences",
    description: "Fast, responsive, intuitive interfaces. Mobile-first, performance-optimized, easy to use.",
  },
  {
    number: "04",
    title: "Transparent Communication",
    description: "Clear updates and honest conversations from first call to final deployment — and after.",
  },
  {
    number: "05",
    title: "Scalable Thinking",
    description: "Serverless and cloud-native by default, so what we build today grows with you tomorrow.",
  },
  {
    number: "06",
    title: "End-to-End Ownership",
    description: "Engineering plus operations, sales and marketing under one roof — we stay accountable for results.",
  },
] as const;

export type ContactChannel = { label: string; value: string; person?: string; href?: string };

export const CONTACT_CHANNELS: ContactChannel[] = [
  { label: "Email", value: "futuret3ch.in@gmail.com", href: "mailto:futuret3ch.in@gmail.com" },
  { label: "Phone", value: "+91 87348 71729", href: "tel:+918734871729" },
  { label: "GitHub", value: "github.com/Manav32478", href: "https://github.com/Manav32478", person: "Manav Sarvaiya" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/manav-sarvaiya",
    href: "https://www.linkedin.com/in/manav-sarvaiya-043988289",
    person: "Manav Sarvaiya",
  },
  { label: "Location", value: "Bhavnagar, Gujarat, India", person: "Both founders" },
];

export const PROJECT_TYPES = [
  "Website",
  "Web Application",
  "E-Commerce Store",
  "Cloud / Serverless Solution",
  "Digital Marketing",
  "Something else",
] as const;

/* ------------------------------------------------------------------ */
/*  GROWTH-PLAN CONTENT (Part 1)                                       */
/* ------------------------------------------------------------------ */

export const WHATSAPP = {
  number: "918734871729",
  display: "+91 87348 71729",
  link:
    "https://wa.me/918734871729?text=" +
    encodeURIComponent("Hello Future Tech! I'd like to discuss a project for my business."),
};

export type ServicePage = {
  slug: string;
  title: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  audience: string;
  features: string[];
  approach: string;
  cta: string;
  caseStudy?: string;
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "hotel-websites",
    title: "Hotel Website Development",
    short: "Professional websites for hotels, resorts and guest houses.",
    metaTitle: "Hotel Website Development in Gujarat | Future Tech",
    metaDescription:
      "Professional, mobile-friendly hotel websites with room showcases, enquiry forms, WhatsApp integration and booking-system integration. Built by Future Tech, Gujarat.",
    intro:
      "Your hotel's website is often the first impression a guest gets. We build fast, mobile-friendly hotel websites that present your rooms, amenities and location clearly — and turn visitors into direct enquiries.",
    audience: "Independent hotels, resorts, guest houses and farm stays.",
    features: [
      "Professional hotel websites",
      "Room and amenity showcases",
      "Enquiry forms",
      "WhatsApp integration",
      "Booking-system integration where required",
      "Mobile-friendly design",
      "Website maintenance",
    ],
    approach:
      "Ready-made website packages are available for standard hotel websites. Booking-engine integration, custom workflows and multi-property setups are quoted as custom development after a free consultation.",
    cta: "Get a Hotel Website",
    caseStudy: "sparsh",
  },
  {
    slug: "restaurant-digital",
    title: "Restaurant Digital Solutions",
    short: "Websites, digital menus and ordering workflows for restaurants and cafes.",
    metaTitle: "Restaurant Website & Digital Menu Development | Future Tech",
    metaDescription:
      "Restaurant websites, QR-code digital menus, online ordering workflows and restaurant management applications. Mobile-first and easy to update. Future Tech, Gujarat.",
    intro:
      "From a professional website to QR-code digital menus and ordering workflows, we help restaurants and cafes present their food beautifully and handle enquiries without chaos.",
    audience: "Restaurants, cafes, cloud kitchens and catering businesses.",
    features: [
      "Restaurant websites",
      "Digital menus",
      "QR-code menu experiences",
      "Online ordering workflows",
      "Customer enquiry systems",
      "Restaurant management applications",
      "Menu and content updates",
    ],
    approach:
      "Digital-menu and website packages are available as ready-made offerings. Ordering workflows and management applications are custom-scoped per restaurant, so you only pay for what you actually need.",
    cta: "Improve My Restaurant",
  },
  {
    slug: "custom-business-software",
    title: "Custom Business Software",
    short: "Management systems, dashboards and workflow automation for your business.",
    metaTitle: "Custom Business Software Developer in Gujarat | Future Tech",
    metaDescription:
      "Inventory management systems, admin dashboards, reporting, workflow automation and database-driven web applications — custom-built for businesses in Gujarat and beyond.",
    intro:
      "When spreadsheets and WhatsApp groups stop being enough, custom software removes repetitive work. We build management systems around the way your business actually operates.",
    audience: "Growing businesses drowning in manual, repetitive work.",
    features: [
      "Inventory management systems",
      "Admin dashboards",
      "Business management applications",
      "Reporting and analytics",
      "Workflow automation",
      "Database-driven web applications",
      "Custom integrations",
    ],
    approach:
      "All business software is custom development. We start with a short discovery phase, provide a written proposal with scope and milestones, and build in reviewable increments.",
    cta: "Discuss My Requirements",
    caseStudy: "cloud-arcade",
  },
  {
    slug: "saas-development",
    title: "SaaS Product Development",
    short: "From MVP to production — authentication, subscriptions and cloud deployment.",
    metaTitle: "SaaS Product Development Company in India | Future Tech",
    metaDescription:
      "SaaS MVP development with user authentication, subscription workflows, admin dashboards, API development and cloud deployment on AWS. Future Tech, India.",
    intro:
      "Have a product idea? We help founders validate and build it: a focused MVP first, real users early, and an architecture that can grow into a full SaaS platform.",
    audience: "Founders and businesses launching subscription software products.",
    features: [
      "SaaS MVP development",
      "User authentication",
      "Subscription workflows",
      "Admin dashboards",
      "Database architecture",
      "API development",
      "Cloud deployment",
      "Ongoing product development",
    ],
    approach:
      "We recommend starting with a scoped MVP and a validation plan before investing in full-scale features. Subscription and billing integrations are quoted per provider and scope.",
    cta: "Build My Product",
    caseStudy: "cloud-arcade",
  },
];

export const HOSPITALITY = {
  headline: "Digital Solutions for Hotels, Restaurants and Cafes.",
  subheadline:
    "From professional websites to custom business software, Future Tech helps hospitality businesses improve their digital presence and simplify everyday workflows.",
  cta: "Book a Free 15-Minute Consultation",
  problems: [
    {
      title: "No website — or an outdated one",
      text: "Guests search online before they book. Without a professional, mobile-friendly website, they choose the business that looks trustworthy.",
    },
    {
      title: "Menus that are hard to share and update",
      text: "Printed menus and image-only PDFs frustrate customers. Digital and QR-code menus update in minutes, not reprints.",
    },
    {
      title: "Enquiries getting lost",
      text: "Calls, DMs and WhatsApp messages scattered across devices mean missed bookings and slow replies.",
    },
    {
      title: "Manual records and repetitive work",
      text: "Bookings, inventory and billing tracked in notebooks and spreadsheets consume hours every week.",
    },
    {
      title: "Dependence on listing platforms",
      text: "Commission-based platforms own your customer relationship. Direct enquiries through your own website keep margins with you.",
    },
  ],
  solutions: [
    {
      title: "Professional hospitality websites",
      text: "Fast, mobile-first websites with room or menu showcases, photo galleries, location maps and one-tap enquiry and WhatsApp buttons.",
    },
    {
      title: "Digital & QR-code menus",
      text: "Clean digital menus guests open by scanning a QR code — easy to update whenever dishes or prices change.",
    },
    {
      title: "Enquiry and booking workflows",
      text: "Structured enquiry forms and, where required, booking-system integration so requests arrive organised, with source tracking.",
    },
    {
      title: "Business management software",
      text: "Custom dashboards for inventory, orders, staff schedules and reporting — built around your actual workflow.",
    },
  ],
  benefits: [
    "Mobile-first design for guests on phones",
    "One-tap WhatsApp and call buttons",
    "Fast loading even on slow connections",
    "Easy content and menu updates",
    "Direct enquiries without platform commissions",
    "Professional first impression, 24×7",
  ],
  faqs: [
    {
      q: "How long does a hotel or restaurant website take?",
      a: "A standard package website typically takes two to four weeks once photos and content are ready. Custom scopes are timed in the written proposal.",
    },
    {
      q: "Can you integrate our existing booking system?",
      a: "Yes — where required we integrate third-party booking engines into your website. If you don't have one, we build a structured enquiry workflow that suits independent properties.",
    },
    {
      q: "Will guests be able to reach us on WhatsApp?",
      a: "Yes. Every hospitality website we build includes a one-tap WhatsApp button with a prefilled message, plus click tracking so you know how many guests used it.",
    },
    {
      q: "Do you provide QR-code digital menus?",
      a: "Yes. Guests scan a QR code at the table and see a clean, mobile-friendly menu. You can update items and prices without reprinting anything.",
    },
    {
      q: "We already have a website. Can you improve it?",
      a: "Yes. We start with a short review of your current website, explain the specific improvements worth making, and quote only the work that genuinely helps.",
    },
    {
      q: "What happens after launch?",
      a: "We offer monthly maintenance and support plans covering updates, backups, monitoring, minor content changes and technical support, with clearly defined scope and response times.",
    },
  ],
};

export type CaseStudy = {
  slug: string;
  project: string;
  label: string;
  problem: string;
  users: string;
  solution: string;
  highlights: string[];
  tech: string[];
  outcome: string;
  liveUrl?: string;
  art: "commerce" | "arcade" | "safety" | "portfolio";
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "sparsh",
    project: "SPARSH — E-Commerce Platform",
    label: "Live e-commerce product",
    problem:
      "A natural-products brand needed an online store that could accept payments and ship orders without manual coordination between systems.",
    users: "Online shoppers browsing and ordering natural products across India.",
    solution:
      "A full-stack e-commerce platform with a responsive storefront, product catalog, cart and secure Razorpay checkout, connected to Shiprocket for automated shipping and tracking.",
    highlights: [
      "Responsive product catalog and cart",
      "Secure Razorpay payment checkout",
      "Shiprocket order and shipping automation",
      "Clean, mobile-friendly storefront design",
    ],
    tech: ["React", "Node.js", "Razorpay", "Shiprocket", "Supabase"],
    outcome: "Live in production and accepting real orders.",
    liveUrl: "https://sparshnaturals.shop",
    art: "commerce",
  },
  {
    slug: "cloud-arcade",
    project: "Cloud Arcade — Serverless Gaming Platform",
    label: "Live product demonstration",
    problem:
      "Building a browser gaming hub that scales without managing servers — while keeping score submission secure and user accounts protected.",
    users: "Casual browser gamers and registered players competing on leaderboards.",
    solution:
      "A full-stack serverless platform on AWS: three browser games, Cognito-based authentication with JWT-secured score submission, four Lambda microservices, DynamoDB leaderboards and CloudFront delivery.",
    highlights: [
      "User authentication with Amazon Cognito (JWT)",
      "Three browser game interfaces with live leaderboards",
      "API Gateway endpoints backed by Lambda microservices",
      "Least-privilege IAM security model",
      "Serverless deployment served globally over CloudFront",
    ],
    tech: ["AWS S3", "CloudFront", "Lambda", "DynamoDB", "Cognito", "API Gateway"],
    outcome: "Deployed on AWS and served globally over CloudFront.",
    art: "arcade",
  },
  {
    slug: "womens-safety",
    project: "Women's Safety Platform",
    label: "Hackathon project — Smart India Hackathon",
    problem:
      "Women in urgent situations need a fast, simple way to alert trusted contacts with their location — without navigating complex apps.",
    users: "Women needing immediate emergency assistance, and their trusted contacts.",
    solution:
      "A web-based safety platform with SOS alerts, emergency calling, instant messaging to trusted contacts and live GPS location tracking, plus safety-awareness resources.",
    highlights: [
      "One-action SOS alerts",
      "Live GPS location sharing with trusted contacts",
      "Instant messaging and emergency calling flows",
      "Safety-awareness resource library",
    ],
    tech: ["JavaScript", "Geolocation", "Real-Time Alerts"],
    outcome: "Built and demonstrated for the Smart India Hackathon (Feb – Apr 2025).",
    art: "safety",
  },
  {
    slug: "portfolio",
    project: "Founder Portfolio — Personal Project",
    label: "Personal project",
    problem:
      "Presenting a developer's real projects and skills in a fast, professional format instead of a generic résumé link.",
    users: "Recruiters, collaborators and clients evaluating technical work.",
    solution:
      "A responsive personal portfolio website with project showcases, skill sections and clean typography — designed and shipped end-to-end.",
    highlights: [
      "Responsive, fast-loading layout",
      "Project and skill showcases",
      "Clean identity and typography system",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React"],
    outcome: "Published live as a personal portfolio.",
    art: "portfolio",
  },
];

export const BUSINESS_TYPES = [
  "Hotel / Resort",
  "Restaurant / Cafe",
  "Retail / E-Commerce",
  "Services / Consulting",
  "Manufacturing",
  "Other",
] as const;

export const SERVICE_OPTIONS = [
  "Free 15-Minute Consultation",
  "Hotel Website Development",
  "Restaurant Digital Solutions",
  "Custom Business Software",
  "SaaS Product Development",
  "Website (Other)",
  "Something else",
] as const;

export const CONTACT_TIMES = [
  "Morning (9 AM – 12 PM)",
  "Afternoon (12 PM – 5 PM)",
  "Evening (5 PM – 9 PM)",
  "Any time",
] as const;

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  sections: { h: string; p: string[] }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-every-hotel-needs-a-professional-website",
    title: "Why Every Hotel Needs a Professional Website",
    description:
      "Guests decide online before they call. Here is what a professional hotel website must do — and what happens without one.",
    date: "2026-10-07",
    readTime: "4 min read",
    sections: [
      {
        h: "Guests shortlist you online first",
        p: [
          "Most travellers search on their phone, compare three or four options and only then call or book. If your hotel appears only as a map pin or a listing-platform entry, you are competing on price alone.",
          "A professional website lets you control the story: your rooms, your amenities, your location and your direct contact — presented the way you want guests to see them.",
        ],
      },
      {
        h: "What a good hotel website must do",
        p: [
          "Load fast on mobile connections, show real room photos with clear descriptions, answer the questions guests always ask (parking, check-in times, food options), and make contact effortless with call and WhatsApp buttons.",
          "An enquiry form that captures name, dates and requirement helps you reply with a proper quote instead of playing phone tag.",
        ],
      },
      {
        h: "Direct enquiries protect your margin",
        p: [
          "Listing platforms are useful for discovery, but every booking through them carries a commission. Guests who find you on a listing and then visit your website to confirm are far more likely to book direct next time — if the website looks trustworthy.",
        ],
      },
      {
        h: "Start small, but start professional",
        p: [
          "You do not need a complex booking engine on day one. A clean website with rooms, photos, location and one-tap enquiry is enough to start converting searches into direct conversations.",
        ],
      },
    ],
  },
  {
    slug: "how-restaurants-can-use-digital-menus",
    title: "How Restaurants Can Use Digital Menus",
    description:
      "QR-code menus are more than a PDF. Used well, they update instantly, look better and feed your ordering workflow.",
    date: "2026-10-07",
    readTime: "4 min read",
    sections: [
      {
        h: "Beyond the PDF photo",
        p: [
          "Many restaurants put a photo of a printed menu online. It is unreadable on small screens and impossible to update without re-uploading. A true digital menu is a web page: structured, searchable and styled for phones.",
        ],
      },
      {
        h: "What QR menus unlock",
        p: [
          "Scan-at-table access, categories with photos and prices, instant updates when a dish runs out, and seasonal specials without reprinting costs. The same menu link works on WhatsApp broadcasts and your website.",
        ],
      },
      {
        h: "Connecting menus to orders",
        p: [
          "A digital menu becomes powerful when connected to a workflow: a WhatsApp order button per table, an enquiry form for party bookings, or a full online ordering flow for cloud kitchens. Start with the workflow that removes the most friction today.",
        ],
      },
      {
        h: "Keep it honest and current",
        p: [
          "An outdated menu damages trust more than no menu. Choose a setup where your team can update items in minutes — or a maintenance plan that handles it for you.",
        ],
      },
    ],
  },
  {
    slug: "website-vs-instagram-for-small-business",
    title: "Website vs. Instagram: What Does a Small Business Need?",
    description:
      "Instagram builds attention; a website converts it. Here is how the two work together for small businesses.",
    date: "2026-10-07",
    readTime: "4 min read",
    sections: [
      {
        h: "Instagram is a shop window",
        p: [
          "Social media is excellent for reach and personality: reels, photos, offers and quick DMs. But content sinks fast, search inside the app is weak, and your profile looks the same as every competitor's.",
        ],
      },
      {
        h: "A website is the shop itself",
        p: [
          "A website holds everything a serious customer needs before spending money: full service lists, prices or packages, photos organised by category, reviews, location, and structured ways to enquire or book. It also works while your social account sleeps.",
        ],
      },
      {
        h: "They work best together",
        p: [
          "Use Instagram to create interest and your website to convert it. Put the website link in your bio, tag products and services properly, and track which posts bring enquiries.",
        ],
      },
      {
        h: "If you can only do one thing this quarter",
        p: [
          "For most small businesses, the highest-value step is a simple professional website with clear contact paths — then point all social traffic at it.",
        ],
      },
    ],
  },
  {
    slug: "how-custom-software-simplifies-business-operations",
    title: "How Custom Software Can Simplify Business Operations",
    description:
      "Signs your spreadsheets have expired, and what a first management system should (and should not) do.",
    date: "2026-10-07",
    readTime: "5 min read",
    sections: [
      {
        h: "The signs you have outgrown spreadsheets",
        p: [
          "The same data copied in three files. Versions sent over WhatsApp. One person who 'knows where everything is'. Hours spent each week reconciling numbers that still disagree.",
          "These are workflow problems, not discipline problems. Software removes the copying, not the responsibility.",
        ],
      },
      {
        h: "What a first system should do",
        p: [
          "Start with one painful flow: inventory in and out, order status, or daily sales entry. A focused dashboard with roles, history and simple reports beats a giant system nobody adopts.",
        ],
      },
      {
        h: "What it should not do (yet)",
        p: [
          "Avoid automating everything in version one. Every extra module adds cost and training. Validate the core flow with real daily use, then expand in planned phases.",
        ],
      },
      {
        h: "Make the business case simple",
        p: [
          "Count the hours saved per week and the mistakes avoided. Compare that with the build cost and a modest maintenance plan. If the numbers do not work, the scope is wrong — not the idea.",
        ],
      },
    ],
  },
  {
    slug: "what-to-consider-before-building-a-hotel-website",
    title: "What to Consider Before Building a Hotel Website",
    description:
      "Photos, content ownership, booking flow, maintenance — the decisions that determine whether your hotel website actually earns enquiries.",
    date: "2026-10-07",
    readTime: "5 min read",
    sections: [
      {
        h: "Get the photos right first",
        p: [
          "Rooms sold on honest, well-lit photos convert better than heavily filtered ones. Plan a simple shoot: each room type, bathroom, common areas, exterior and one honest street-view context.",
        ],
      },
      {
        h: "Decide your booking path",
        p: [
          "Direct enquiry (form + WhatsApp + call) suits independent properties starting out. Integrating a booking engine suits properties with fixed inventory and rates. Decide this before design, because it changes the whole structure.",
        ],
      },
      {
        h: "Own your content and domain",
        p: [
          "Keep the domain, photos and website credentials in your business's name. Whoever builds it, you should be able to leave with everything.",
        ],
      },
      {
        h: "Plan for maintenance",
        p: [
          "Prices change, rooms get renovated, festivals bring offers. Agree upfront who updates content and how fast — a maintenance plan with defined response times keeps the website alive.",
        ],
      },
      {
        h: "Measure what matters",
        p: [
          "Track enquiries, WhatsApp clicks and calls per month. A website without tracking is a brochure; with tracking, it is a sales channel you can improve.",
        ],
      },
    ],
  },
  {
    slug: "how-to-choose-restaurant-management-software",
    title: "How to Choose Restaurant Management Software",
    description:
      "A practical checklist for restaurants comparing ready-made tools vs. custom-built systems.",
    date: "2026-10-07",
    readTime: "5 min read",
    sections: [
      {
        h: "List your real workflows first",
        p: [
          "Write down what happens daily: purchase entry, stock usage, menu changes, order taking, billing, staff shifts, caterer enquiries. Software should map to this list — not the other way around.",
        ],
      },
      {
        h: "Ready-made vs. custom",
        p: [
          "Ready-made POS and inventory tools are faster to adopt and cheaper initially. Custom software earns its place when your workflow is genuinely different: multi-outlet reporting, special pricing contracts, or integrations ready tools do not offer.",
        ],
      },
      {
        h: "Questions to ask any vendor",
        p: [
          "Who owns the data and how do you export it? What happens to pricing after year one? Which changes are included in support? Can we test with our own menu and stock list before committing?",
        ],
      },
      {
        h: "Pilot before you commit",
        p: [
          "Run the shortlisted system on one outlet or one workflow for a few weeks with real data. Adoption by your staff is the only review that matters.",
        ],
      },
    ],
  },
];

export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(text)}`;

export type Package = {
  name: string;
  price: string;
  tagline: string;
  includes: string[];
  highlight?: boolean;
};

/* Illustrative starting ranges from the business plan — adjust in ONE place.
   Final quotes are always confirmed in writing after a free consultation. */
export const PACKAGES: Package[] = [
  {
    name: "Website Launch",
    price: "₹15,000 – ₹25,000",
    tagline: "For businesses that need to look serious online, fast.",
    includes: [
      "Professional responsive website",
      "Agreed number of pages",
      "Service or menu information",
      "Contact form",
      "WhatsApp integration",
      "Basic SEO setup",
      "Deployment",
    ],
  },
  {
    name: "Business Website Plus",
    price: "₹25,000 – ₹50,000",
    tagline: "More customisation, workflows and integrations.",
    highlight: true,
    includes: [
      "More customised design",
      "Additional pages",
      "Advanced enquiry workflows",
      "Analytics integration",
      "Relevant third-party integrations",
      "Additional agreed functionality",
    ],
  },
  {
    name: "Custom Software",
    price: "Custom quotation",
    tagline: "Management systems, dashboards, SaaS MVPs and complex web apps.",
    includes: [
      "Discovery phase & written proposal",
      "Management / inventory systems",
      "Admin dashboards & reporting",
      "Workflow automation",
      "SaaS MVPs & API integrations",
      "Maintenance & support plans",
    ],
  },
];

export const MAINTENANCE_NOTE =
  "Ongoing maintenance & support plans: ₹2,000 – ₹6,000 / month depending on agreed scope — updates, backups, monitoring, minor content changes and technical support with defined response times.";
