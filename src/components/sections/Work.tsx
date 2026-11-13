import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siGithub } from "simple-icons";
import { projects, type Project } from "@/content/projects";
import BrandIcon from "../ui/BrandIcon";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-16 py-24 sm:py-36">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8">
        <SectionHeader
          id="work-title"
          index="01"
          label="Selected work"
          title={
            <>
              Products built end to end —{" "}
              <span className="font-serif font-normal italic text-accent-soft">from schema to screen.</span>
            </>
          }
          intro="Four projects where I built the frontend, the API and the data layer. Most of them run on several clients — web, Telegram and mobile — on top of one shared backend."
        />

        <ol className="mt-16 flex flex-col gap-24 sm:mt-24 sm:gap-36">
          {projects.map((project, i) => (
            <li key={project.slug}>
              <ProjectCase project={project} index={i} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProjectCase({ project, index }: { project: Project; index: number }) {
  const flipped = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article aria-labelledby={`${project.slug}-title`} className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
      <Reveal className={`lg:col-span-7 ${flipped ? "lg:order-2" : ""}`}>
        <ProjectShot project={project} />
      </Reveal>

      <Reveal delay={120} className={`lg:col-span-5 lg:pt-4 ${flipped ? "lg:order-1" : ""}`}>
        <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.16em] text-muted">
          <span className="text-accent-soft">{number}</span>
          <span className="h-px w-8 bg-line-strong" />
          <span>{project.category}</span>
        </div>

        <h3
          id={`${project.slug}-title`}
          className="mt-5 text-4xl font-medium tracking-[-0.035em] text-fg sm:text-5xl"
        >
          {project.name}
        </h3>

        <p className="mt-5 text-pretty leading-relaxed text-muted">{project.summary}</p>

        <ul className="mt-7 space-y-3 border-t border-line pt-6">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-fg/85">
              <span className="mt-[0.6em] size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <dl className="mt-7 grid gap-5 border-t border-line pt-6 text-sm">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Platforms</dt>
            <dd className="mt-2 text-fg/85">{project.platforms.join(" · ")}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Stack</dt>
            <dd className="mt-3">
              <ul className="flex flex-wrap gap-1.5" aria-label={`${project.name} technologies`}>
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[11px] text-fg/75"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex h-11 items-center gap-2 rounded-full bg-fg px-5 text-sm font-medium text-bg transition-colors duration-300 hover:bg-accent-soft"
            >
              Live demo
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              <span className="sr-only">of {project.name} (opens in a new tab)</span>
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-line-strong px-5 text-sm text-fg transition-colors duration-300 hover:border-accent/60 hover:bg-white/[0.03]"
          >
            <BrandIcon icon={siGithub} size={15} />
            Source code
            <span className="sr-only">of {project.name} on GitHub (opens in a new tab)</span>
          </a>
        </div>
      </Reveal>
    </article>
  );
}

function ProjectShot({ project }: { project: Project }) {
  return (
    <div className="group/shot relative">
      <div className="shot-glow pointer-events-none absolute -inset-6 -z-10 opacity-0 transition-opacity duration-700 group-hover/shot:opacity-100" />
      <figure className="overflow-hidden rounded-xl border border-line-strong bg-surface transition-colors duration-500 group-hover/shot:border-accent/40">
        <div className="flex items-center gap-3 border-b border-line px-4 py-3">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="size-2 rounded-full bg-white/15" />
            <span className="size-2 rounded-full bg-white/15" />
            <span className="size-2 rounded-full bg-white/15" />
          </span>
          <figcaption className="truncate font-mono text-[11px] text-muted">{project.image.caption}</figcaption>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1240px) 680px, (min-width: 1024px) 56vw, 100vw"
            className="object-cover object-top transition-transform duration-[1200ms] ease-out-expo group-hover/shot:scale-[1.03]"
          />
        </div>
      </figure>
    </div>
  );
}
