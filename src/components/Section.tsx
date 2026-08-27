import Reveal from "./Reveal";

type Props = {
  id: string;
  title: string;
  children: React.ReactNode;
};

/**
 * Coquille de section. Le séparateur se dessine de gauche à droite quand la
 * section entre à l'écran — le trait accent marque le départ, le losange la
 * fin. `scroll-mt` compense la barre collante : à ne pas réduire, sinon les
 * titres passent dessous à l'arrivée sur une ancre.
 */
export default function Section({ id, title, children }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-24 py-10 lg:py-14"
    >
      <Reveal variant="rule">
        <div aria-hidden className="flex items-center gap-3">
          <span className="h-px w-14 shrink-0 bg-accent" />
          <span className="h-px flex-1 bg-line" />
          <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-line" />
        </div>
      </Reveal>

      <h2
        id={`${id}-title`}
        className="mt-5 mb-6 font-mono text-xs tracking-[0.2em] text-accent uppercase"
      >
        {title}
      </h2>

      {children}
    </section>
  );
}
