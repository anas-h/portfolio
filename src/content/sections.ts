import type { Content } from "./types";

/**
 * Ancres de la page. Les `id` sont communs aux deux langues — seuls les
 * libellés sont traduits — pour qu'un lien profond reste valide d'une locale
 * à l'autre.
 */
export const sectionIds = ["work", "stack", "cv", "contact"] as const;

export type SectionId = (typeof sectionIds)[number];

export type NavSection = { id: SectionId; label: string };

export const navSections = (ui: Content["ui"]): NavSection[] => [
  { id: "work", label: ui.navWork },
  { id: "stack", label: ui.navStack },
  { id: "cv", label: ui.navCv },
  { id: "contact", label: ui.navContact },
];
