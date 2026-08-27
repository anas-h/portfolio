import Reveal from "./Reveal";
import SubHeading from "./SubHeading";
import type { Content } from "@/content/types";

export default function EducationLanguages({
  education,
  languages,
  ui,
}: {
  education: Content["education"];
  languages: Content["languages"];
  ui: Content["ui"];
}) {
  return (
    <Reveal>
      <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
        <div>
          <SubHeading>{ui.educationTitle}</SubHeading>
          <ul className="space-y-4">
            {education.map((e) => (
              <li key={e.title} className="text-sm">
                <span className="font-mono text-[11px] text-accent">
                  {e.year}
                </span>
                <p className="text-heading">{e.title}</p>
                <p className="text-muted/80">{e.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SubHeading>{ui.languagesTitle}</SubHeading>
          <ul className="space-y-2">
            {languages.map((l) => (
              <li key={l.name} className="flex justify-between text-sm">
                <span className="text-heading">{l.name}</span>
                <span className="text-muted/80">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
