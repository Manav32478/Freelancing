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
  baseUrl: "",
  /** Connect a form backend later (e.g. a Formspree endpoint). Empty = front-end only demo state. */
  formEndpoint: "",
} as const;

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
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
    title: "Discover",
    description: "We start with your business, your users and the problem that needs solving — not with code.",
  },
  {
    number: "02",
    title: "Strategize",
    description: "Requirements, technology choices and architecture are defined before a single line is written.",
  },
  {
    number: "03",
    title: "Design",
    description: "Responsive interfaces and clear experiences, structured so real people can use them easily.",
  },
  {
    number: "04",
    title: "Build",
    description: "Clean, structured development with integrations, security and testing at every step.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Deployment, monitoring and continued improvement long after the product goes live.",
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
