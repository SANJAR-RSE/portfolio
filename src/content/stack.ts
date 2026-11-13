import {
  siAntdesign,
  siAxios,
  siC,
  siCplusplus,
  siCss,
  siDjango,
  siExpress,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siReactquery,
  siReactrouter,
  siSqlite,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";

export type Tech = { name: string; icon: SimpleIcon };
export type TechGroup = { title: string; note: string; items: Tech[] };

export const techGroups: TechGroup[] = [
  {
    title: "Frontend",
    note: "Interfaces, routing and data fetching",
    items: [
      { name: "HTML5", icon: siHtml5 },
      { name: "CSS3", icon: siCss },
      { name: "JavaScript", icon: siJavascript },
      { name: "TypeScript", icon: siTypescript },
      { name: "React.js", icon: siReact },
      { name: "Next.js", icon: siNextdotjs },
      { name: "Tailwind CSS", icon: siTailwindcss },
      { name: "Ant Design", icon: siAntdesign },
      { name: "React Router", icon: siReactrouter },
      { name: "TanStack Query", icon: siReactquery },
      { name: "Axios", icon: siAxios },
    ],
  },
  {
    title: "Backend",
    note: "APIs, business logic and auth",
    items: [
      { name: "Node.js", icon: siNodedotjs },
      { name: "Express.js", icon: siExpress },
      { name: "Python", icon: siPython },
      { name: "Django", icon: siDjango },
      { name: "Django REST Framework", icon: siDjango },
    ],
  },
  {
    title: "Databases",
    note: "Document and relational storage",
    items: [
      { name: "MongoDB", icon: siMongodb },
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "SQLite", icon: siSqlite },
    ],
  },
  {
    title: "Tools & other languages",
    note: "Version control and fundamentals",
    items: [
      { name: "Git", icon: siGit },
      { name: "GitHub", icon: siGithub },
      { name: "C", icon: siC },
      { name: "C++", icon: siCplusplus },
    ],
  },
];

export const concepts = [
  "REST API",
  "CRUD Operations",
  "Authentication",
  "State Management",
  "API Integration",
  "Object-Oriented Programming",
  "Algorithms",
  "Data Structures",
];
