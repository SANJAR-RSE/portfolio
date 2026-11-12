import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <p className="font-mono text-sm text-accent">02 &middot; Skills</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Technologies I work with.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-mono text-xs uppercase tracking-wider text-text-muted">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border-strong px-3 py-1 text-sm text-text"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
