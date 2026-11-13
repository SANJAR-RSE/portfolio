/**
 * Single source of truth for personal and contact information.
 * Everything here is verified — do not add details that are not confirmed.
 */

export const site = {
  url: "https://portfolio-ten-gules-84.vercel.app",
  name: "Sanjar",
  role: "Full-Stack Developer",
  location: "Uzbekistan",
  experience: "2+ years",
  availability: "Open to Junior Full-Stack roles",
  description:
    "Sanjar is a Full-Stack Developer from Uzbekistan building complete web products with React, Next.js, Node.js, Django, MongoDB and PostgreSQL.",
} as const;

export const links = {
  github: "https://github.com/SANJAR-RSE",
  email: "rasulberdievsanjar@gmail.com",
  telegram: "https://t.me/SanjarRasulberdiyev",
} as const;

export const languages = [
  { name: "Uzbek", level: "Native" },
  { name: "Russian", level: "Professional" },
  { name: "English", level: "Beginner (A1–A2)" },
] as const;

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
] as const;
