"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { personal } from "@/lib/config";
import GithubIcon from "./GithubIcon";

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="bg-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-4 py-1.5 font-mono text-xs text-text-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Full Stack Developer &middot; based in Uzbekistan
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-balance text-5xl font-semibold tracking-tight text-text sm:text-6xl md:text-7xl"
        >
          {personal.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-3 text-2xl font-medium text-accent sm:text-3xl"
        >
          {personal.role}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-text-muted"
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5 hover:brightness-110"
          >
            View Projects
            <ArrowUpRight size={16} />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mt-16 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-text-muted"
        >
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
