import { Trophy } from "lucide-react";
import Reveal from "../ui/Reveal";

export default function Achievement() {
  return (
    <section aria-labelledby="achievement-title" className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8">
        <Reveal>
          <div className="achievement relative isolate overflow-hidden rounded-2xl border border-line-strong bg-surface px-6 py-12 sm:px-12 sm:py-16">
            {/* Concentric rings echo the hero object. */}
            <svg
              viewBox="0 0 400 400"
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 top-1/2 -z-10 size-[520px] -translate-y-1/2 opacity-60 sm:-right-10"
            >
              <g fill="none" stroke="#a855f7">
                <circle cx="200" cy="200" r="90" strokeOpacity="0.35" />
                <circle cx="200" cy="200" r="130" strokeOpacity="0.22" />
                <circle cx="200" cy="200" r="170" strokeOpacity="0.12" />
                <circle cx="200" cy="200" r="198" strokeOpacity="0.06" />
              </g>
            </svg>

            <div className="grid items-center gap-10 md:grid-cols-12">
              <p
                className="achievement-rank font-serif text-[clamp(6rem,20vw,12rem)] italic leading-[0.8] tracking-[-0.04em] md:col-span-5"
                aria-hidden="true"
              >
                3rd
              </p>
              <div className="md:col-span-7">
                <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                  <span className="text-accent-soft">(04)</span>
                  Achievement
                </p>
                <h2
                  id="achievement-title"
                  className="mt-5 text-balance text-3xl font-medium tracking-[-0.03em] text-fg sm:text-4xl"
                >
                  3rd Place — School AI Assistant Hackathon
                </h2>
                <p className="mt-5 max-w-lg text-pretty leading-relaxed text-muted">
                  A top-three finish at a hackathon built around AI assistants for
                  schools — working against the clock to take an idea to a
                  working demo.
                </p>
                <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent-soft">
                  <Trophy size={15} aria-hidden="true" />
                  Hackathon award
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
