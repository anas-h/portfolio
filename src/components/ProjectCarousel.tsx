"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Tag from "./Tag";
import type { Content, Project } from "@/content/types";

/**
 * Carrousel de cartes. Le défilement est natif (`scroll-snap`) : le geste
 * tactile et le trackpad fonctionnent sans JS, les boutons et les pastilles
 * ne font que piloter ce même défilement.
 */
export default function ProjectCarousel({
  projects,
  ui,
}: {
  projects: Project[];
  ui: Content["ui"];
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);

  // La carte active est celle dont le centre est le plus proche du centre de
  // la piste — plus fiable qu'un calcul sur la largeur, les cartes étant
  // partiellement visibles sur les côtés.
  const syncIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const middle = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let smallest = Infinity;

    Array.from(track.children).forEach((child, i) => {
      const card = child as HTMLElement;
      const distance = Math.abs(card.offsetLeft + card.offsetWidth / 2 - middle);
      if (distance < smallest) {
        smallest = distance;
        closest = i;
      }
    });

    setIndex(closest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    syncIndex();
    track.addEventListener("scroll", syncIndex, { passive: true });
    window.addEventListener("resize", syncIndex);
    return () => {
      track.removeEventListener("scroll", syncIndex);
      window.removeEventListener("resize", syncIndex);
    };
  }, [syncIndex]);

  const goTo = (target: number) => {
    const track = trackRef.current;
    if (!track) return;

    const clamped = Math.max(0, Math.min(target, projects.length - 1));
    const card = track.children[clamped] as HTMLElement | undefined;
    if (!card) return;

    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({
      left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2,
      behavior: calm ? "auto" : "smooth",
    });
  };

  const multiple = projects.length > 1;

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={ui.workTitle}
      className="relative"
    >
      <ul
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth py-1"
      >
        {projects.map((p, i) => (
          <li
            key={p.slug}
            aria-roledescription="slide"
            aria-label={`${i + 1} / ${projects.length}`}
            className="w-[85%] shrink-0 snap-center sm:w-[62%] lg:w-[42%]"
          >
            <article
              className={`lift flex h-full flex-col rounded-xl border bg-bgsoft/40 p-6 transition duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.9)] lg:p-7 ${
                i === index
                  ? "border-line/70 opacity-100"
                  : "border-line/50 opacity-60"
              }`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-mono text-xs tracking-wider text-accent/90">
                  {p.context}
                </p>
                <p className="font-mono text-[11px] tracking-wider text-muted/60 uppercase">
                  {p.year}
                </p>
              </div>

              <h3 className="mt-3 text-lg font-medium tracking-tight text-heading">
                {p.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed">{p.summary}</p>

              <p className="mt-5 border-l-2 border-accent/40 pl-4 text-sm font-medium text-heading/85">
                {p.outcome}
              </p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </ul>

              {p.link && (
                <a
                  href={p.link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-heading transition-colors duration-200 hover:text-accent"
                >
                  {p.link.label}
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path d="M7 17 17 7m0 0H8m9 0v9" />
                  </svg>
                </a>
              )}
            </article>
          </li>
        ))}
      </ul>

      {multiple && (
        <div className="no-print mt-4 flex items-center gap-5">
          <div className="flex gap-2">
            <CarouselButton
              label={ui.previousProject}
              onClick={() => goTo(index - 1)}
              disabled={index === 0}
              path="M15 5l-7 7 7 7"
            />
            <CarouselButton
              label={ui.nextProject}
              onClick={() => goTo(index + 1)}
              disabled={index === projects.length - 1}
              path="M9 5l7 7-7 7"
            />
          </div>

          <ul className="flex items-center gap-2">
            {projects.map((p, i) => (
              <li key={p.slug}>
                <button
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={p.title}
                  aria-current={i === index ? "true" : undefined}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-7 bg-accent" : "w-3 bg-line hover:bg-muted"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function CarouselButton({
  label,
  onClick,
  disabled,
  path,
}: {
  label: string;
  onClick: () => void;
  disabled: boolean;
  path: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="rounded-md border border-line p-2.5 text-heading transition-colors duration-200 hover:border-muted disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-line"
    >
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d={path} />
      </svg>
    </button>
  );
}
