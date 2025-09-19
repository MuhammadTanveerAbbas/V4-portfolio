import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Tanveer",
  initials: "MTA",
  location: "Punjab, PK",
  locationLink: "https://www.google.com/maps/place/punjab",
  description: "SaaS MVP Developer & Full Stack Developer",
  summary:
    "I help founders turn ideas into SaaS products that launch fast, attract users, and scale with lasting confidence worldwide. I build applications that are simple, reliable, and designed to convert quickly. By combining lean development with the right tech stack, I deliver MVPs that show real traction from day one. With experience in fintech, edtech, healthcare, and AI, I create solutions that cut risk and drive meaningful business results in weeks, not months.",
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
    "Product Market Fit Strategy",
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
        url: "https://x.com/m_tanveerabbas",
        icon: Icons.x,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:muhammadtanveerabbas.contact@gmail.com",
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
        "Designed and delivered a fully functional MVP investment platform with real time stock data, automated SEC compliance reporting, multi factor authentication, and security.Enabling the client to secure $50K in seed funding.",
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
        "Developed a robust course marketplace with Cloudflare Stream for video delivery, progressive video loading, Lemon Squeezy subscription management, and custom student progress tracking. Achieved 1,000+ student enrollments in the first Quarter.",
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
        "Built a HIPAA compliant SaaS platform with encrypted EHR storage, Twilio video integration, and insurance verification APIs. Launched within two weeks and reached $25K MRR within 90 days.",
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
      school: "Claude",
      href: "https://verify.skilljar.com/c/sdqqcxaeu566",
      degree: "AI Fluency Framework Foundations",
      logoUrl: "/Claude.webp",
      start: "Aug 2025",
      end: "Sep 2025",
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
      title: "kanbi - Action Board",
      href: "https://kanbi.vercel.app/",
      dates: "January 2025",
      active: true,
      description:
        "AI driven task management tool that Transform chaotic notes and brainstorming sessions into crystal clear, actionable Kanban boards that drive results instantly.just instant productivity ",
      tags: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "SaaS",
        "React",
        "Vercel",
        "Kanban",
        "Project Management",
        "Team Collaboration",
        "Productivity",
      ],
      links: [
        {
          type: "Preview",
          href: "https://kanbi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MuhammadTanveerAbbas/kanbi-ActionBoard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/kanbi-ActionBoard.webp",
    },
    {
      title: "AI Dev Toolkit",
      href: "https://ai-dev-toolkit.vercel.app/",
      dates: "February 2025",
      active: true,
      description:
        "Revolutionary open source developer toolkit featuring twelve zero configuration AI utilities that eliminate repetitive coding nightmares forever.No sign up, just instant productivity ",
      tags: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "SaaS",
        "AI",
        "Open Source",
        "DevTools",
        "Automation",
        "Code Generation",
        "Developer Experience",
      ],
      links: [
        {
          type: "Preview",
          href: "https://ai-dev-toolkit.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MuhammadTanveerAbbas/Ai-Dev-Toolkit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/AI-Dev-Toolkit.webp",
    },
    {
      title: "Clario - Summarizer",
      href: "https://clario-summarizer.vercel.app/",
      dates: "March 2025",
      active: true,
      description:
        "Cut through information overload with AI powered summarization engine that transforms dense, chaotic text into razor sharp actionable insights instantly.No sign up, just instant productivity ",
      tags: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "SaaS",
        "AI",
        "NLP",
        "Productivity",
        "Text Processing",
        "Machine Learning",
        "Content Analysis",
      ],
      links: [
        {
          type: "Preview",
          href: "https://clario-summarizer.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MuhammadTanveerAbbas/Clario-Summarizer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/Clario-Summarizer.webp",
    },
    {
      title: "Aetherium - AI Tool",
      href: "https://aetherium-ai.vercel.app/",
      dates: "April 2025",
      active: true,
      description:
        "Unleash your creative potential with the ultimate Next.js content creation powerhouse that generates publication ready articles, SEO optimized copy, and viral video scripts.",
      tags: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "SaaS",
        "AI",
        "Content Creation",
        "SEO",
        "Marketing",
        "Copywriting",
        "Video Scripts",
      ],
      links: [
        {
          type: "Preview",
          href: "https://aetherium-ai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MuhammadTanveerAbbas/Aetherium-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/Aetherium-AI.webp",
    },
    {
      title: "Subsight - Tracker",
      href: "https://subsight-tracker.vercel.app/",
      dates: "May 2025",
      active: true,
      description:
        "Take complete control of your recurring expenses with privacy first subscription management that operates entirely within your browser's secure environment.Instant insights, zero hassle.",
      tags: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "SaaS",
        "Privacy",
        "Finance",
        "PWA",
        "Subscription Management",
        "Budget Tracking",
        "Local Storage",
      ],
      links: [
        {
          type: "Preview",
          href: "https://subsight-tracker.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MuhammadTanveerAbbas/Subsight-Tracker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/Subsight.webp",
    },
    {
      title: "Ledgerly - Finance Dashboard",
      href: "https://ledgerly-tracker.vercel.app/",
      dates: "June 2025",
      active: true,
      description:
        "Master your financial future with an intelligent personal finance dashboard that transforms spending chaos into crystal clear insights.Fast, simple, and focused on your finances. ",
      tags: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "SaaS",
        "Finance",
        "Analytics",
        "Dashboard",
        "Data Visualization",
        "Personal Finance",
        "Budgeting",
      ],
      links: [
        {
          type: "Preview",
          href: "https://ledgerly-tracker.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MuhammadTanveerAbbas/Ledgerly-Dashboard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/Ledgerly.webp",
    },
  ],
} as const;
