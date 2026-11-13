import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeaderProps = {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
};

export default function SectionHeader({ index, label, title, intro, id }: SectionHeaderProps) {
  return (
    <Reveal className="grid gap-6 md:grid-cols-12 md:gap-8">
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted md:col-span-3 md:pt-3">
        <span className="text-accent-soft">({index})</span>
        {label}
      </p>
      <div className="md:col-span-9">
        <h2
          id={id}
          className="text-balance text-[2rem] font-medium leading-[1.08] tracking-[-0.03em] text-fg sm:text-5xl"
        >
          {title}
        </h2>
        {intro && (
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            {intro}
          </p>
        )}
      </div>
    </Reveal>
  );
}
