/**
 * Site-wide personal & contact configuration.
 * Every section reads from this single file.
 */

export const personal = {
  name: "Sanjar",
  role: "Full Stack Developer",
  location: "Uzbekistan",
  tagline:
    "I build modern web applications end to end — React and Next.js on the frontend, Node.js and Express on the backend.",
  github: "https://github.com/SANJAR-RSE",
};

export const contact = {
  email: "rasulberdievsanjar@gmail.com",
  telegram: "https://t.me/SanjarRasulberdiyev",
  github: personal.github,
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];
