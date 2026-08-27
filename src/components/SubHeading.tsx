/** Titre de second niveau, à l'intérieur d'une `Section`. */
export default function SubHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3 className="mb-3 flex items-center gap-3 text-sm font-medium tracking-tight text-heading">
      <span aria-hidden className="h-px w-6 shrink-0 bg-accent/50" />
      {children}
    </h3>
  );
}
