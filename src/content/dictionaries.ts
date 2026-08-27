import type { Content } from "./types";
import { fr } from "./fr";
import { en } from "./en";

export const dictionaries = { fr, en } satisfies Record<string, Content>;

export type Locale = keyof typeof dictionaries;

export const locales = Object.keys(dictionaries) as Locale[];

export const defaultLocale: Locale = "fr";

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
};

export const hasLocale = (value: string): value is Locale =>
  value in dictionaries;

export const getDictionary = (locale: Locale): Content => dictionaries[locale];
