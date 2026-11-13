/**
 * Featured projects. Every claim below was checked against the project's
 * repository (README, source tree, package.json) — keep it that way.
 */

export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  highlights: string[];
  platforms: string[];
  stack: string[];
  github: string;
  live?: string;
  image: {
    src: string;
    alt: string;
    /** Short note on what the screenshot shows, rendered in the frame bar. */
    caption: string;
  };
};

export const projects: Project[] = [
  {
    slug: "pulse",
    name: "PULSE",
    category: "Healthcare · Full-Stack",
    summary:
      "A HealthTech platform that brings clinic search, online appointment queues and personal health tracking under one account — shared between a web app and a Telegram bot.",
    highlights: [
      "Clinic → department → doctor flow with an online appointment queue and live queue status",
      "Medical history, notifications and a separate panel for doctors",
      "Daily tracking for water, sleep, workouts and medications",
      "PULSE AI assistant that answers from the user's own data (rule-based)",
    ],
    platforms: ["Web app", "Telegram bot", "Landing page"],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Telegraf",
    ],
    github: "https://github.com/SANJAR-RSE/Pulse",
    live: "https://pulse-web-delta.vercel.app",
    image: {
      src: "/projects/pulse.webp",
      alt: "PULSE landing page: the headline “Your health. One pulse.” next to a dashboard card showing water, sleep, workout, medication and queue status.",
      caption: "pulse — landing page",
    },
  },
  {
    slug: "pcplace",
    name: "PCplace",
    category: "Booking Platform",
    summary:
      "A seat-reservation platform for computer clubs: find a club on the map, choose a room and a free PC, add snacks and book — with dedicated tools for club owners and admins.",
    highlights: [
      "Interactive club map with room and PC availability",
      "Real-time updates over Socket.IO across web, mobile and bot",
      "Role-based access for users, club owners and admins, plus reviews",
      "Expo mobile app and a Python Telegram bot with one-time-code login",
    ],
    platforms: ["Web app", "Mobile (Expo)", "Telegram bot", "Landing page"],
    stack: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Socket.IO",
      "Leaflet",
      "Expo",
      "React Native",
      "Python",
      "aiogram",
    ],
    github: "https://github.com/SANJAR-RSE/PCplace",
    live: "https://pcplace-frontend.vercel.app",
    image: {
      src: "/projects/pcplace.webp",
      alt: "PCplace landing page with the booking headline and a club card showing a map, a grid of PC seats and a booking total.",
      caption: "pcplace — landing page",
    },
  },
  {
    slug: "growclass",
    name: "GrowClass",
    category: "Education Technology · Hackathon project",
    summary:
      "A school platform that turns learning into a growth loop: teachers create missions with AI, and students earn XP and level up a virtual pet that evolves with their real progress.",
    highlights: [
      "AI-generated missions; AI, teacher and peer ratings combine into one growth score",
      "XP, levels, a leaderboard and friend challenges",
      "Moderated school chat and a teacher dashboard for class progress",
      "Uzbek, Russian and English interface with dark and light themes",
    ],
    platforms: ["Web app", "Mobile (Expo)", "Telegram bot"],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Expo",
      "React Native",
      "Telegraf",
    ],
    github: "https://github.com/SANJAR-RSE/hakaton_final",
    live: "https://growclass-web.vercel.app",
    image: {
      src: "/projects/growclass.webp",
      alt: "GrowClass landing page with the headline “O'qing. O'sing. Ulaning.” and the stages of the virtual pet's evolution.",
      caption: "growclass — landing page",
    },
  },
  {
    slug: "financesave",
    name: "FinanceSave",
    category: "Finance · Personal Management",
    summary:
      "A personal finance manager for daily income and expenses, budgets and savings goals — synced between a web dashboard and a Telegram bot on one account.",
    highlights: [
      "Quick entry from text or voice with automatic amount and category detection",
      "Budget limits with 80% / 100% alerts pushed to Telegram",
      "Savings goals, debts, recurring payments and statistics charts",
      "Rule-based AI Advisor that analyses the user's real transactions",
    ],
    platforms: ["Web app", "Telegram bot"],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Recharts",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Telegraf",
    ],
    github: "https://github.com/SANJAR-RSE/financesave",
    live: "https://financesave-web.vercel.app",
    image: {
      src: "/projects/financesave.webp",
      alt: "FinanceSave (Finance AI) sign-in screen from the live web app.",
      caption: "financesave — live app sign-in",
    },
  },
];
