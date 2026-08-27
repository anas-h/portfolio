export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-[11px] leading-5 tracking-wide text-accent">
      {children}
    </li>
  );
}
