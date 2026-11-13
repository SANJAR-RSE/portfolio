import type { CSSProperties } from "react";
import { concepts, techGroups } from "@/content/stack";
import BrandIcon, { legibleBrandColor } from "../ui/BrandIcon";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";

export default function Stack() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-title"
      className="scroll-mt-16 border-t border-line py-24 sm:py-36"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8">
        <SectionHeader
          id="stack-title"
          index="03"
          label="Tech stack"
          title="The tools I build with."
          intro="Grouped by where they sit in an application. No skill bars — the projects above show how I actually use them."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:mt-20 md:grid-cols-2">
          {techGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 80} className="bg-bg p-6 sm:p-8">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-medium tracking-tight text-fg">{group.title}</h3>
                <span className="font-mono text-[11px] text-muted">{String(group.items.length).padStart(2, "0")}</span>
              </div>
              <p className="mt-1 text-sm text-muted">{group.note}</p>
              <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {group.items.map((tech) => (
                  <li
                    key={tech.name}
                    style={{ "--brand": legibleBrandColor(tech.icon.hex) } as CSSProperties}
                    className="tech-chip flex min-h-11 items-center gap-2.5 rounded-lg border border-line bg-surface/60 px-3 py-2 text-[13px] leading-tight text-fg/85"
                  >
                    <BrandIcon icon={tech.icon} size={16} className="tech-icon shrink-0" />
                    {tech.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-baseline sm:gap-10">
          <h3 className="shrink-0 font-mono text-xs uppercase tracking-[0.16em] text-muted">Concepts</h3>
          <ul className="flex flex-wrap gap-x-2 gap-y-2">
            {concepts.map((concept) => (
              <li key={concept} className="rounded-full border border-line px-3.5 py-1.5 text-sm text-fg/80">
                {concept}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
