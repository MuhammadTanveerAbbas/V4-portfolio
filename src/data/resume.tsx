import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Tanveer",
  initials: "MTA",
  location: "Punjab, PK",
  locationLink: "https://www.google.com/maps/place/punjab",
  description: "Sales Funnel Specialist & Full Stack Developer",
  summary:
    "Helping businesses and founders turn ideas into scalable, high performing products. I design and build fast, conversion focused applications that drive measurable growth, combining marketing psychology, lean development practices, and SEO principles to maximize traction from day one. With experience across diverse projects, I focus on creating solutions that not only work technically but also deliver real business results.",
  avatarUrl: "/me.webp",
  url: "tanveer.github.io",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "REST APIs",
    "MongoDB",
    "Redis",
    "Supabase",
    "Tailwind CSS",
    "Git & GitHub",
    "SEO",
    "CRO",
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
      company: "SaaS Startup",
      title: "Sales Funnel & MVP Developer",
      location: "Remote",
      logoUrl: "/Saas.webp",
      start: "Mar 2025",
      end: "May 2025",
      badges: [],
      description:
        "Designed and developed a modular UI editor for an early stage SaaS product using Next.js and clean architecture. Built high converting funnels with CRO techniques, integrated analytics, and applied SEO best practices to drive organic acquisition during pre launch.",
    },
    {
      company: "Clothes Brand",
      title: "WooCommerce Funnel Developer",
      location: "Remote",
      logoUrl: "/Wordpress.webp",
      start: "Jan 2025",
      end: "Mar 2025",
      badges: [],
      description:
        "Engineered custom WooCommerce solutions to optimize catalog navigation, checkout speed, and upsell opportunities. Integrated headless WordPress APIs with performance-focused front-end, and executed SEO strategies that increased product rankings and improved conversion rates.",
    },
    {
      company: "Law Firm",
      title: "Web Developer & Marketing Analyst",
      location: "Remote",
      logoUrl: "/Marketing.webp",
      start: "Oct 2024",
      end: "Dec 2024",
      badges: [],
      description:
        "Built an A/B testing dashboard, improved campaign ROI and lead generationImproved funnel by simplifying checkout flow, adding testimonials near CTAs, and tightening follow up email sequence. Used analytics + heatmaps to remove friction points.",
    },
    {
      company: "Web Agency",
      title: "SEO & Funnel Specialist",
      location: "Remote",
      logoUrl: "/SEO.webp",
      start: "Jul 2024 ",
      end: "Sep 2024",
      badges: [],
      description:
        "Executed full-scale SEO strategies for clients in competitive markets. Conducted keyword research, technical audits, and conversion-focused on-page optimization that increased organic traffic and customer acquisition across multiple campaigns.",
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
