import { Mail, Send } from "lucide-react";
import { contact } from "@/lib/config";
import GithubIcon from "./GithubIcon";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <p className="font-mono text-sm text-accent">05 &middot; Contact</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Let&apos;s build something together.
          </h2>
          <p className="mt-4 max-w-xl text-text-muted">
            Open to frontend and full-stack opportunities, collaborations,
            and interesting projects.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5 hover:brightness-110"
            >
              <Mail size={16} />
              Email me
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            {contact.telegram && (
              <a
                href={contact.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
              >
                <Send size={16} />
                Telegram
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
