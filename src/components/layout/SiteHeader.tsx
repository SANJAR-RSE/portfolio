"use client";

import { useEffect, useRef, useState } from "react";
import { siGithub } from "simple-icons";
import { links, nav, site } from "@/content/site";
import BrandIcon from "../ui/BrandIcon";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item for the section currently in the middle of the viewport.
  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Mobile menu: lock scroll, close on Escape and return focus to the toggle.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled || open
          ? "border-b border-line bg-bg/75 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>

      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-4 sm:px-8"
      >
        <a href="#top" className="group flex items-center gap-2.5" aria-label={`${site.name} — back to top`}>
          <span className="relative grid size-7 place-items-center rounded-full border border-line-strong">
            <span className="size-2 rounded-full bg-accent transition-transform duration-500 group-hover:scale-150" />
          </span>
          <span className="font-mono text-sm tracking-tight text-fg">sanjar</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={active === item.href ? "true" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                  active === item.href ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-4 -bottom-px h-px origin-left bg-accent transition-transform duration-500 ease-out-expo ${
                    active === item.href ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden h-9 items-center gap-2 rounded-full border border-line-strong px-4 text-sm text-fg transition-colors duration-300 hover:border-accent/60 md:inline-flex"
        >
          <BrandIcon icon={siGithub} size={15} />
          GitHub
        </a>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative grid size-10 place-items-center rounded-full border border-line-strong md:hidden"
        >
          <span
            className={`absolute h-px w-4 bg-fg transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-[3px]"}`}
          />
          <span
            className={`absolute h-px w-4 bg-fg transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-[3px]"}`}
          />
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-bg px-4 pb-10 md:hidden"
      >
        <ul className="flex flex-col pt-4">
          {nav.map((item, i) => (
            <li key={item.href} className="border-b border-line">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between py-5 text-3xl font-medium tracking-tight text-fg"
              >
                {item.label}
                <span className="font-mono text-xs text-muted">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm text-muted"
        >
          <BrandIcon icon={siGithub} size={16} />
          github.com/SANJAR-RSE
        </a>
      </div>
    </header>
  );
}
