import { languages, site } from "@/content/site";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";

const facts = [
  { label: "Based in", value: site.location },
  { label: "Experience", value: `${site.experience} of development` },
  { label: "Focus", value: "Full-stack web apps & REST APIs" },
  { label: "Looking for", value: "Junior Full-Stack Developer role" },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-16 border-t border-line py-24 sm:py-36"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8">
        <SectionHeader
          id="about-title"
          index="02"
          label="About"
          title={
            <>
              I like building the whole thing —{" "}
              <span className="font-serif font-normal italic text-accent-soft">and making it work.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-14 md:grid-cols-12 md:gap-8">
          <Reveal className="space-y-6 text-pretty text-lg leading-relaxed text-fg/85 md:col-span-6 md:col-start-4">
            <p>
              I&apos;m Sanjar, a Full-Stack Developer from Uzbekistan. For more
              than two years I&apos;ve been building web applications end to
              end: designing the interface, writing the API and modelling the
              data behind it.
            </p>
            <p className="text-muted">
              Most of my projects start from an everyday problem — waiting in a
              clinic queue, booking a seat at a computer club, keeping track of
              money. I enjoy turning those into products that work across the
              web, Telegram bots and mobile, on top of one well-structured
              backend.
            </p>
            <p className="text-muted">
              I&apos;ve built projects on my own, in teams and at hackathons.
              Now I want to join a professional team, learn from experienced
              engineers and keep getting better at shipping real products.
            </p>
          </Reveal>

          <Reveal delay={120} className="md:col-span-3">
            <dl className="divide-y divide-line border-y border-line">
              {facts.map((fact) => (
                <div key={fact.label} className="py-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{fact.label}</dt>
                  <dd className="mt-1.5 text-sm text-fg">{fact.value}</dd>
                </div>
              ))}
              <div className="py-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Languages</dt>
                <dd className="mt-2">
                  <ul className="space-y-1.5 text-sm">
                    {languages.map((language) => (
                      <li key={language.name} className="flex justify-between gap-4">
                        <span className="text-fg">{language.name}</span>
                        <span className="text-muted">{language.level}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
