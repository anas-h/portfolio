"use client";

import { useEffect, useState } from "react";
import LangSwitcher from "./LangSwitcher";
import { navSections, sectionIds } from "@/content/sections";
import type { Content } from "@/content/types";
import type { Locale } from "@/content/dictionaries";

function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => n !== null);

    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

/** Progression de lecture (0–100) et passage en état « défilé ». */
function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const read = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (doc.scrollTop / max) * 100 : 0);
      setScrolled(doc.scrollTop > 8);
    };

    // Première mesure hors du corps de l'effet : au rendu serveur la position
    // de défilement est inconnue, et un rechargement peut la restaurer.
    const frame = requestAnimationFrame(read);
    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
    };
  }, []);

  return { progress, scrolled };
}

/**
 * Barre collante. La navigation défile horizontalement sur mobile plutôt que
 * de se replier dans un menu : quatre entrées tiennent sans burger.
 */
export default function Header({
  content,
  lang,
}: {
  content: Content;
  lang: Locale;
}) {
  const { profile, ui } = content;
  const sections = navSections(ui);
  const active = useActiveSection(sectionIds);
  const { progress, scrolled } = useScrollProgress();

  return (
    <header
      className={`no-print sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-line bg-bg/90 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.9)] backdrop-blur-xl"
          : "border-line/40 bg-bg/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-3 lg:px-5">
        <a
          href="#top"
          className="shrink-0 font-mono text-sm tracking-tight text-heading transition-colors duration-200 hover:text-accent"
        >
          {profile.name}
        </a>

        <nav
          aria-label={ui.navLabel}
          className="-mx-2 flex-1 overflow-x-auto no-scrollbar"
        >
          <ul className="flex items-center gap-1 px-2">
            {sections.map((s) => {
              const isActive = active === s.id;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`block rounded-md px-3 py-2 font-mono text-[11px] tracking-[0.15em] whitespace-nowrap uppercase transition-colors duration-200 ${
                      isActive
                        ? "bg-accent/10 text-accent"
                        : "text-muted hover:text-heading"
                    }`}
                  >
                    {s.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <LangSwitcher current={lang} label={ui.switchLabel} />
          <a
            href={profile.cv}
            className="hidden rounded-md border border-accent/30 bg-accent/5 px-3 py-2 font-mono text-[11px] tracking-wider text-accent uppercase transition-colors duration-200 hover:bg-accent/10 sm:block"
          >
            CV
          </a>
        </div>
      </div>

      {/* Progression de lecture : rien de cliquable, purement indicatif. */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </header>
  );
}
