export type Project = {
  name: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Pulse",
    description:
      "HealthTech ecosystem for everyday health tracking — pick a clinic, department and doctor, book a queue online, follow its status in real time and keep a medical history, unified across web and Telegram under one account. Includes an in-app AI assistant that answers from real backend data (clinics, doctors, queue status) instead of a static script.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Node.js",
      "Express",
      "MongoDB",
      "Telegraf",
    ],
    github: "https://github.com/SANJAR-RSE/Pulse",
    live: "https://pulse-web-delta.vercel.app/",
    featured: true,
  },
  {
    name: "FinanceSave",
    description:
      "Personal finance manager for tracking daily income and expenses, setting budget limits with 80%/100% alerts, and following savings goals — synced between a web dashboard and a Telegram bot on one account. An AI Advisor gives insight based on the user's actual transaction data.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "MongoDB",
      "JWT",
      "Telegraf",
    ],
    github: "https://github.com/SANJAR-RSE/financesave",
    live: "https://financesave-web.vercel.app/",
    featured: true,
  },
  {
    name: "Avto Ijara",
    description:
      "Full-stack car rental platform with a browsable vehicle catalog on the frontend and a JWT-authenticated REST API on the backend for listings and bookings.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Axios", "Express", "MongoDB", "JWT"],
    github: "https://github.com/SANJAR-RSE/avto-ijara",
    live: "https://avto-ijara-xi.vercel.app/",
  },
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "Python", "C", "C++"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Ant Design"],
  },
  {
    title: "Data & State",
    skills: ["TanStack Query", "Axios", "REST API", "React Router"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Django"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
];
