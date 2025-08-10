import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Tanveer",
  initials: "MTA",
  location: "Punjab, PK",
  locationLink: "https://www.google.com/maps/place/punjab",
  description: "Website developer turning ideas into reality.",
  summary:
    "Web developer with a strong focus on SEO and marketing principles. Building fast, responsive, and scalable applications optimized for search engines since 2023. I help businesses and individuals establish a powerful online presence through performance optimization, SEO best practices, and conversion-focused development. Experienced across diverse projects with a commitment to continuous learning in both technology and business strategy.",
  avatarUrl: "/me.webp",
  url: "tanveer.github.io",
  skills: [
    "HTML",
    "CSS",
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
      company: "SaaS Company",
      title: "Software Developer",
      location: "Remote",
      logoUrl: "/Saas.webp",
      start: "Jun 2025",
      end: "Aug 2025",
      badges: [],
      description:
        "Developed a modular UI editing tool for early-stage SaaS products using Next.js and clean architecture. Implemented SEO best practices to ensure high search engine visibility and organic traffic through custom funnels uing CRO.",
    },
    {
      company: "Ecommerce Site",
      title: "WooCommerce Developer",
      location: "Remote",
      logoUrl: "/Wordpress.webp",
      start: "Sep 2024",
      end: "Dec 2024",
      badges: [],
      description:
        "Built and customized WooCommerce solutions to optimize product catalog performance and streamline checkout. Integrated headless WordPress APIs and implemented SEO strategies to improve product rankings and drive sales.",
    },
    {
      company: "SEO Agency",
      title: "Website Developer",
      location: "Remote",
      logoUrl: "/Marketing.webp",
      start: "Jan 2020",
      end: "Apr 2020",
      badges: [],
      description:
        "Created an A/B testing dashboard for client using SEO Tools. Led front-end architecture and integrated with Python data pipelines to provide marketing teams with actionable campaign insights.",
    },
    {
      company: "Jewelry Brand",
      title: "Developer & Designer",
      location: "Hybrid",
      logoUrl: "/Jewelry.webp",
      start: "Jan 2019",
      end: "Apr 2019",
      badges: [],
      description:
        "Designed and developed an e-commerce platform with a custom interface to showcase jewelry products. Delivered a seamless shopping experience that increased customer engagement and online sales. Implemented SEO optimizations to improve organic search visibility.",
    },
    {
      company: "SEO Company",
      title: "SEO Specialist",
      location: "Remote",
      logoUrl: "/SEO.webp",
      start: "Jan 2018",
      end: "Apr 2018",
      badges: [],
      description:
        "Implemented SEO strategies to boost client rankings and traffic. Performed keyword research, on-page optimization, and technical audits to drive measurable growth in competitive markets.",
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
      school: "Semrush",
      href: "https://static.semrush.com/academy/certificates/d235927bf2/m-tanveer-abbas_2.pdf",
      degree: "Technical SEO with Bastian Grimm",
      logoUrl: "/semrush.webp",
      start: "Mar 2024",
      end: "Jun 2025",
    },
    {
      school: "DigiSkills",
      href: "https://digiskills.pk/",
      degree: "Digital Marketing",
      logoUrl: "/Digiskills.webp",
      start: "Aug 2023",
      end: "Nov 2023",
    },
  ],

  projects: [
    {
      title: "Layer Editor Landing Page",
      href: "https://layers-editor-landing-page.vercel.app/",
      dates: "June 2025",
      active: true,
      description:
        "A modern, responsive SaaS landing page built for UI Editing MVP's. Designed, developed, and sold animated UI components for developers. Designed for startups and SaaS products.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://layers-editor-landing-page.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MuhammadTanveerAbbas/Layers-Editor-Landing-Page",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Layer-editor.webp",
    },
    {
      title: "Aurielle Jewelry",
      href: "https://aurielle-jewellery.vercel.app/",
      dates: "June 2025",
      active: true,
      description:
        "A modern, feature-rich jewellery e-commerce landing page platform. Designed, developed, and sold animated UI components for developers. SEO optimized to enhance product visibility.",
      technologies: ["Next.js", "TypeScript", "GSAP", "TailwindCSS"],
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
    {
      title: "ZestyMint",
      href: "https://zestymint.vercel.app/",
      dates: "May 2025",
      active: true,
      description:
        "A visually dynamic, scroll-powered marketing website designed for a modern mint-based beverage brand, this site deliver storytelling high impact, responsive user experience.",
      technologies: ["Next.js", "TypeScript", "GSAP", "TailwindCSS"],
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
      title: "AI Summary",
      href: "https://ai-summarizer-gpt.vercel.app/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI customer support chatbot that automatically responds to support tickets using the latest GPT models. SEO focused to increase organic traffic to the platform.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "AI integration"],
      links: [
        {
          type: "Website",
          href: "https://ai-summarizer-gpt.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MuhammadTanveerAbbas/ai-summarizer-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/AI-Summary.webp",
    },
  ],
} as const;
