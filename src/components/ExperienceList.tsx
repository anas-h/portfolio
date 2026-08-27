import type { Experience } from "@/content/types";
import Reveal from "./Reveal";
import Tag from "./Tag";

export default function ExperienceList({
  experiences,
}: {
  experiences: Experience[];
}) {
  return (
    <ol className="space-y-3">
      {experiences.map((xp, i) => (
        <li key={xp.company + xp.period}>
          <Reveal delay={i * 60}>
            <div className="lift group relative grid gap-4 rounded-lg p-4 transition duration-300 sm:grid-cols-8 sm:gap-6 lg:p-6 lg:hover:-translate-y-0.5 lg:hover:bg-bgsoft/60 lg:hover:shadow-[0_0_0_1px_rgba(30,42,68,0.9)]">
              <header className="sm:col-span-2">
                <p className="font-mono text-[11px] leading-5 tracking-wider text-muted/80 uppercase">
                  {xp.period}
                </p>
                <p className="mt-1 font-mono text-[11px] text-muted/50">
                  {xp.type}
                </p>
              </header>

              <div className="sm:col-span-6">
                <h3 className="font-medium text-heading">
                  {xp.role}
                  <span className="mt-0.5 block text-sm text-muted">
                    {xp.company} · {xp.location}
                  </span>
                </h3>

                <ul className="mt-4 space-y-2">
                  {xp.highlights.map((h) => (
                    <li
                      key={h}
                      className="relative pl-5 text-sm leading-relaxed before:absolute before:top-[0.6em] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-accent/70"
                    >
                      {h}
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {xp.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
