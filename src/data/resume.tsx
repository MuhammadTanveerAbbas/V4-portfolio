import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Tanveer",
  initials: "MTA",
  location: "Punjab, PK",
  locationLink: "https://www.google.com/maps/place/punjab",
  description: "SaaS MVP Developer & Full Stack Developer",
  summary:
    "Helping founders and businesses transform ideas into scalable SaaS products. I specialize in designing and building fast, conversion-focused applications that drive measurable growth. By combining lean development practices, marketing psychology, and SEO driven acquisition strategies, I deliver MVPs that gain traction from day one. With experience across fintech, edtech, healthcare, and AI, I focus on creating solutions that are not only technically sound but also aligned with real business outcomes.",
  avatarUrl: "/me.webp",
  url: "https://muhammadtanveerabbas.vercel.app/",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Supabase",
    "MongoDB",
    "Tailwind CSS",
    "ShadCN/UI",
    "Clerk & NextAuth (Authentication)",
    "REST APIs",
    "Stripe & Lemon Squeezy (Payments)",
    "Git & GitHub",
    "SEO & CRO",
    "SaaS Architecture & Deployment",
    "Product-Market Fit Strategy",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/CV.pdf", icon: NotebookIcon, label: "CV" },
  ],
  contact: {
    email: "muhammadtanveerabbas.dev@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/MuhammadTanveerAbbas",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muhammadtanveerabbas/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/tanveer_webdev",
        icon: Icons.x,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:muhammadtanveerabbas.dev@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "FinTech Startup",
      title: "Investment Portfolio Tracker Developer",
      location: "Remote",
      logoUrl: "/Fintech.webp",
      start: "Apr 2025",
      end: "Jul 2025",
      badges: [],
      description:
        "Designed and delivered a fully functional MVP investment platform with real-time stock data, automated SEC compliance reporting, multi-factor authentication, and bank-grade security. Completed within 12 days, enabling the client to secure $50K in seed funding.",
    },
    {
      company: "EdTech Platform",
      title: "Online Course Marketplace Engineer",
      location: "Remote",
      logoUrl: "/Edtech.webp",
      start: "Jan 2025",
      end: "Mar 2025",
      badges: [],
      description:
        "Developed a robust course marketplace with Cloudflare Stream for video delivery, progressive video loading, Lemon Squeezy subscription management, and custom student progress tracking. Achieved 1,000+ student enrollments in the first month.",
    },
    {
      company: "Healthcare SaaS",
      title: "Patient Scheduling & Telemedicine Developer",
      location: "Remote",
      logoUrl: "/Healthcare.webp",
      start: "Oct 2024",
      end: "Dec 2024",
      badges: [],
      description:
        "Built a HIPAA-compliant SaaS platform with encrypted EHR storage, Twilio video integration, and insurance verification APIs. Launched within two weeks and reached $25K MRR within 90 days.",
    },
    {
      company: "AI Startup",
      title: "AI Chatbot & Automation Engineer",
      location: "Remote",
      logoUrl: "/AI.webp",
      start: "Jul 2024",
      end: "Sep 2024",
      badges: [],
      description:
        "Engineered a customer support AI chatbot with GPT powered natural language processing, automated ticket routing, and CRM integration. Reduced support response times by 70% and boosted customer satisfaction scores by 40%.",
    },
  ],

  education: [
    {
      school: "GCUF",
      href: "https://gcuf.edu.pk/",
      degree: "Bachelor of Business Administration (BBA)",
      logoUrl: "/GCUF.webp",
      start: "Dec 2022",
      end: "Jun 2026",
    },
    {
      school: "Udemy",
      href: "https://www.udemy.com/certificate/UC-59223166-900f-4a9e-b2ee-d80efe22dbce/",
      degree: "Conversion Rate Optimization (CRO)",
      logoUrl: "/Udemy.webp",
      start: "Mar 2025",
      end: "Aug 2025",
    },
    {
      school: "FreeCodeCamp",
      href: "https://freecodecamp.org/certification/MuhammadTanveerAbbas/javascript-algorithms-and-data-structures-v8",
      degree: "JavaScript Algorithms and Data Structures",
      logoUrl: "/FreeCodeCamp.webp",
      start: "Dec 2024",
      end: "Jul 2025",
    },
    {
      school: "Claude",
      href: "https://verify.skilljar.com/c/sdqqcxaeu566",
      degree: "AI Fluency Framework Foundations",
      logoUrl: "/Claude.webp",
      start: "Aug 2025",
      end: "Sep 2025",
    },
  ],

  projects: [
    {
      title: "ZestyMint - Marketing Website",
      href: "https://zestymint.vercel.app/",
      dates: "May 2025",
      active: true,
      description:
        "A visually dynamic, scroll-powered marketing website designed for a modern mint-based beverage brand, this site deliver storytelling high impact, responsive user experience.",
      tags: ["Next.js", "TypeScript", "GSAP", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://zestymint.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MuhammadTanveerAbbas/zestymint",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Zestymint.webp",
    },
    {
      title: "Aurielle Jewelry - Sales Funnel Site",
      href: "https://aurielle-jewellery.vercel.app/",
      dates: "June 2025",
      active: true,
      description:
        "A modern, feature-rich jewellery e-commerce landing page platform. Designed, developed, and sold animated UI components for developers. SEO optimized to enhance product visibility.",
      tags: ["Next.js", "TypeScript", "GSAP", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://aurielle-jewellery.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MuhammadTanveerAbbas/aurielle-jewellery",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Aurielle-Jewelry.webp",
    },
  ],
} as const;
