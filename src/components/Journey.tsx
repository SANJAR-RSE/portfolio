import Reveal from "./Reveal";

const milestones = [
  {
    period: "Ongoing",
    title: "1+ year of continuous learning, building and experimenting in IT",
    text: "No formal employer history yet — my experience comes from building real projects, shipping them, and learning by doing.",
  },
  {
    period: "Frontend base",
    title: "React & Next.js as a daily toolkit",
    text: "Went from HTML/CSS/JavaScript fundamentals to building full applications with React, Next.js and Tailwind CSS.",
  },
  {
    period: "Hackathon",
    title: "MedQueue Tashkent",
    text: "Designed and built a healthcare queueing concept end to end within a hackathon timeframe, including an AI assistant grounded in real backend data.",
  },
  {
    period: "Now",
    title: "Full-stack in practice",
    text: "Pairing React/Next.js frontends with my own Node.js, Express and MongoDB/PostgreSQL backends on every real project, while continuing to explore Django and Python.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <p className="font-mono text-sm text-accent">04 &middot; Journey</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Where I&apos;m at.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-0">
          {milestones.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.06}>
              <div className="flex gap-6 border-t border-border py-6 first:border-t-0 sm:gap-10">
                <span className="w-28 shrink-0 font-mono text-xs text-text-muted sm:w-36 sm:text-sm">
                  {m.period}
                </span>
                <div>
                  <h3 className="font-medium text-text">{m.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-muted">
                    {m.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
