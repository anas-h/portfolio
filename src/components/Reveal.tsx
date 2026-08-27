"use client";

import { useEffect, useRef, useState } from "react";

/**
 * `up`   — montée + fondu, le défaut pour un bloc de contenu.
 * `fade` — fondu seul, quand un déplacement décalerait la mise en page.
 * `rule` — trait qui se dessine de gauche à droite.
 */
type Variant = "up" | "fade" | "rule";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
};

/**
 * Révèle son contenu quand il entre dans le viewport.
 * Neutralisé si l'utilisateur a demandé moins d'animations (géré en CSS).
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Déjà visible ou déjà dépassé (arrivée sur une ancre profonde) :
    // on affiche sans attendre, sinon le contenu resterait invisible.
    if (node.getBoundingClientRect().top < window.innerHeight) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal--${variant} ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
