"use server";

import { getDictionary, hasLocale, type Locale } from "@/content/dictionaries";
import { sendContactMessage } from "@/lib/mailer";

export type ContactField = "name" | "email" | "message";

export type ContactState = {
  status: "idle" | "success" | "error";
  /** Incrémenté à chaque soumission : sert de `key` pour remonter le formulaire. */
  attempt: number;
  /** Message global, affiché en `aria-live`. */
  message?: string;
  errors?: Partial<Record<ContactField, string>>;
  /** Saisie renvoyée au client pour ne pas vider le formulaire en cas d'erreur. */
  values?: Record<ContactField, string>;
};

export const initialContactState: ContactState = { status: "idle", attempt: 0 };

const MIN_MESSAGE_LENGTH = 20;

// Volontairement permissif : le seul vrai test de validité d'une adresse est
// d'y écrire. On écarte les fautes de frappe évidentes, rien de plus.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const read = (formData: FormData, key: string) =>
  (formData.get(key) ?? "").toString().trim();

/**
 * La locale est passée par `bind` côté client : elle détermine la langue des
 * messages d'erreur, qui sont validés côté serveur.
 */
export async function submitContact(
  lang: string,
  prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const locale: Locale = hasLocale(lang) ? lang : "fr";
  const t = getDictionary(locale).ui.form;
  const attempt = prevState.attempt + 1;

  const values = {
    name: read(formData, "name"),
    email: read(formData, "email"),
    message: read(formData, "message"),
  };

  // Piège à robots : un champ invisible que seul un script remplit. On répond
  // « envoyé » sans rien envoyer, pour ne pas lui indiquer qu'il est repéré.
  if (read(formData, "website")) {
    return { status: "success", attempt, message: t.success };
  }

  const errors: Partial<Record<ContactField, string>> = {};
  if (!values.name) errors.name = t.errorRequired;
  if (!values.email) errors.email = t.errorRequired;
  else if (!EMAIL.test(values.email)) errors.email = t.errorEmail;
  if (!values.message) errors.message = t.errorRequired;
  else if (values.message.length < MIN_MESSAGE_LENGTH)
    errors.message = t.errorTooShort;

  if (Object.keys(errors).length > 0) {
    return { status: "error", attempt, errors, values };
  }

  try {
    await sendContactMessage(values);
  } catch (error) {
    // Le détail reste côté serveur : il peut contenir la réponse du
    // fournisseur, voire la raison d'une configuration absente.
    console.error("[contact] envoi impossible :", error);
    return { status: "error", attempt, message: t.error, values };
  }

  return { status: "success", attempt, message: t.success };
}
