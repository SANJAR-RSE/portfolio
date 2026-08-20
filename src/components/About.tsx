import { Code2, Compass, Sparkles, Trophy } from "lucide-react";
import Reveal from "./Reveal";

const points = [
  {
    icon: Code2,
    title: "1+ year in IT",
    text: "Focused on frontend development with React and Next.js, building real, working applications rather than tutorials.",
  },
  {
    icon: Compass,
    title: "Growing full-stack",
    text: "Comfortable across the stack with Node.js, Express and MongoDB/PostgreSQL, and currently exploring Django and Python further.",
  },
  {
    icon: Trophy,
    title: "Hackathon experience",
    text: "Built and shipped a full product concept under time pressure, from problem definition to a working demo.",
  },
  {
    icon: Sparkles,
    title: "Always learning",
    text: "Interested in AI integration, Telegram bots and cybersecurity fundamentals alongside day-to-day frontend work.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <p className="font-mono text-sm text-accent">01 &middot; About</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            A full-stack developer, built by real projects.
          </h2>
          <p className="mt-6 max-w-2xl text-balance leading-relaxed text-text-muted">
            I&apos;ve spent the last year in IT building web applications end
            to end — React and Next.js on the frontend, styled with Tailwind
            CSS, backed by my own Node.js and Express APIs and MongoDB /
            PostgreSQL databases. I care about clean, readable code over
            clever tricks, with frontend as my strongest side and backend
            growing alongside it with every project.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong">
                <point.icon size={20} className="text-accent" />
                <h3 className="mt-4 font-medium text-text">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {point.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
