import Reveal from "./Reveal";
import Tag from "./Tag";
import type { Content } from "@/content/types";

/**
 * Les technologies, groupées par type. Chaque groupe est une carte : à cinq
 * groupes de tailles inégales, une grille de listes se lit mieux qu'une
 * énumération continue.
 */
export default function StackSection({
  stack,
}: {
  stack: Content["stack"];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stack.map((group, i) => (
        <Reveal key={group.group} delay={i * 60} className="h-full">
          <div className="lift flex h-full flex-col rounded-xl border border-line/70 bg-bgsoft/30 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/30">
            <h3 className="font-mono text-[11px] tracking-[0.18em] text-heading uppercase">
              {group.group}
            </h3>
            <div className="mt-3 h-px w-full bg-line" />
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
