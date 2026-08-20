"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import GithubIcon from "./GithubIcon";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <p className="font-mono text-sm text-accent">03 &middot; Projects</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Things I&apos;ve built.
          </h2>
          <p className="mt-4 max-w-2xl text-text-muted">
            A mix of full-stack products with real backends and Telegram bot
            integrations, and standalone web apps.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={`group h-full rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-accent/60 ${
                  project.featured ? "lg:p-8" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-text">
                    {project.name}
                  </h3>
                  {project.featured && (
                    <span className="rounded-full border border-accent/40 bg-accent-dim px-3 py-1 font-mono text-[11px] text-accent">
                      Featured
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-sm text-text transition-colors hover:border-accent hover:text-accent"
                  >
                    <GithubIcon size={15} />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-bg transition-transform group-hover:-translate-y-0.5 hover:brightness-110"
                    >
                      Live Demo
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
