import { ArrowUpRight, Mail } from "lucide-react";
import { siGithub, siTelegram } from "simple-icons";
import { links } from "@/content/site";
import BrandIcon from "../ui/BrandIcon";
import CopyEmailButton from "../ui/CopyEmailButton";
import Reveal from "../ui/Reveal";

const channels = [
  {
    label: "GitHub",
    handle: "SANJAR-RSE",
    href: links.github,
    icon: <BrandIcon icon={siGithub} size={18} />,
  },
  {
    label: "Telegram",
    handle: "@SanjarRasulberdiyev",
    href: links.telegram,
    icon: <BrandIcon icon={siTelegram} size={18} />,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate scroll-mt-16 overflow-hidden border-t border-line py-24 sm:py-36"
    >
      <div className="contact-glow pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[70%]" />
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            <span className="text-accent-soft">(06)</span>
            Contact
          </p>
          <h2
            id="contact-title"
            className="mt-8 max-w-4xl text-balance text-[clamp(2.6rem,8vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.05em] text-fg"
          >
            Let&apos;s build{" "}
            <span className="font-serif font-normal italic text-accent-soft">something real.</span>
          </h2>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted">
            I&apos;m open to Junior Full-Stack roles and to working on
            interesting products. Email is the best way to reach me — I reply
            in Uzbek, Russian or simple English.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-14">
          <a
            href={`mailto:${links.email}`}
            className="group flex flex-col gap-4 border-y border-line py-8 transition-colors duration-500 hover:border-accent/40 sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-full border border-line-strong text-fg transition-colors duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                <Mail size={18} aria-hidden="true" />
              </span>
              <span className="break-all text-xl font-medium tracking-tight text-fg sm:text-3xl">
                {links.email}
              </span>
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-muted transition-colors group-hover:text-fg">
              Write an email
              <ArrowUpRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </a>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-3">
              {channels.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center gap-3 rounded-full border border-line-strong px-5 text-sm text-fg transition-colors duration-300 hover:border-accent/60 hover:bg-white/[0.03]"
                  >
                    {channel.icon}
                    <span>{channel.label}</span>
                    <span className="hidden text-muted sm:inline">{channel.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
            <CopyEmailButton email={links.email} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
