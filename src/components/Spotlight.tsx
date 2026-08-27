"use client";

import { useEffect, useState } from "react";

/**
 * Halo discret qui suit le curseur. Désactivé au tactile et si
 * l'utilisateur a demandé moins d'animations.
 */
export default function Spotlight() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || calm) return;

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setPos({ x: e.clientX, y: e.clientY }));
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (!pos) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(560px at ${pos.x}px ${pos.y}px, rgba(94,234,212,0.055), transparent 80%)`,
      }}
    />
  );
}
