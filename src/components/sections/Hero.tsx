import type { CSSProperties } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import {
  siDjango,
  siGithub,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siReact,
  siTypescript,
} from "simple-icons";
import { links, site } from "@/content/site";
import HeroObject from "../three/HeroObject";
import BrandIcon from "../ui/BrandIcon";
import ButtonLink from "../ui/ButtonLink";

const heroStack = [
  { name: "React", icon: siReact },
  { name: "Next.js", icon: siNextdotjs },
  { name: "TypeScript", icon: siTypescript },
  { name: "Node.js", icon: siNodedotjs },
  { name: "Django", icon: siDjango },
  { name: "MongoDB", icon: siMongodb },
  { name: "PostgreSQL", icon: siPostgresql },
];

/** Stagger index for the CSS intro animation (`.intro` in globals.css). */
const step = (i: number) => ({ "--i": i }) as CSSProperties;

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pt-16"
    >
      {/* Ambient light behind the object; static, no per-frame cost. */}
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" />
      <div className="hero-grid pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-4 px-4 pb-10 pt-10 sm:px-8 lg:min-h-[calc(100svh-9.5rem)] lg:grid-cols-12 lg:gap-0 lg:py-6">
        <div className="relative z-10 lg:col-span-7">
          <p className="intro inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-surface/60 py-1.5 pl-2.5 pr-4 text-xs text-muted" style={step(0)}>
            <span className="relative flex size-2">
              <span className="pulse-dot absolute inline-flex size-full rounded-full bg-accent" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {site.availability}
          </p>

          <h1 id="hero-title" className="mt-8">
            <span className="intro block text-[clamp(3.6rem,13vw,8.5rem)] font-medium leading-[0.92] tracking-[-0.055em] text-fg" style={step(1)}>
              Sanjar
            </span>
            <span className="sr-only">, </span>
            <span className="intro mt-3 block font-serif text-[clamp(1.9rem,5.2vw,3.4rem)] italic leading-none tracking-[-0.01em] text-accent-soft" style={step(2)}>
              Full-Stack Developer
            </span>
          </h1>

          <p className="intro mt-8 max-w-xl text-pretty text-lg leading-relaxed text-fg/90 sm:text-xl" style={step(3)}>
            I build complete web products — the interface, the API and the
            database behind it.
          </p>
          <p className="intro mt-3 max-w-xl text-pretty leading-relaxed text-muted" style={step(3)}>
            React and Next.js on the front, Node.js and Django on the back,
            MongoDB and PostgreSQL underneath. Based in {site.location}.
          </p>

          <div className="intro mt-10 flex flex-wrap items-center gap-2.5 sm:gap-3" style={step(4)}>
            <ButtonLink href="#work">
              View Projects
              <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Contact Me
            </ButtonLink>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sanjar on GitHub"
              className="grid size-12 place-items-center rounded-full border border-line-strong text-fg transition-colors duration-300 hover:border-accent/60 hover:text-accent-soft"
            >
              <BrandIcon icon={siGithub} size={18} />
            </a>
          </div>
        </div>

        <div className="relative -mx-4 h-[340px] sm:h-[420px] lg:col-span-5 lg:-mr-16 lg:ml-0 lg:h-[620px]">
          <HeroObject />
        </div>
      </div>

      <div className="mx-auto max-w-[1240px] px-4 sm:px-8">
        <div className="intro flex flex-col gap-5 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between" style={step(5)}>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3" aria-label="Core technologies">
            {heroStack.map((tech) => (
              <li key={tech.name} className="flex items-center gap-2 text-xs text-muted">
                <BrandIcon icon={tech.icon} size={14} className="opacity-80" />
                {tech.name}
              </li>
            ))}
          </ul>
          <a
            href="#work"
            className="hidden items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-fg sm:inline-flex"
          >
            Scroll
            <ArrowDown size={14} className="scroll-cue" />
          </a>
        </div>
      </div>
    </section>
  );
}
