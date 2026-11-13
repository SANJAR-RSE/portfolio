import { highlights } from "@/content/journey";
import { site } from "@/content/site";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";

export default function Journey() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-title"
      className="scroll-mt-16 border-t border-line py-24 sm:py-36"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8">
        <SectionHeader
          id="journey-title"
          index="05"
          label="Development journey"
          title={
            <>
              {site.experience} of building —{" "}
              <span className="font-serif font-normal italic text-accent-soft">what it added up to.</span>
            </>
          }
          intro="Not an employment timeline — these are the areas I've grown in through personal, team and hackathon projects."
        />

        <ol className="mt-14 sm:mt-20 md:ml-[25%]">
          {highlights.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 60}
              className="group grid gap-3 border-t border-line py-8 last:border-b sm:grid-cols-[4rem_1fr_1.4fr] sm:gap-8"
            >
              <span className="font-mono text-xs text-muted transition-colors duration-300 group-hover:text-accent-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-medium tracking-tight text-fg">{item.title}</h3>
              <p className="text-pretty leading-relaxed text-muted">{item.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
