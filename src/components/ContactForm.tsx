"use client";

import { useActionState } from "react";
import {
  initialContactState,
  submitContact,
  type ContactField,
} from "@/app/[lang]/actions";
import type { Content } from "@/content/types";
import type { Locale } from "@/content/dictionaries";

export default function ContactForm({
  lang,
  ui,
}: {
  lang: Locale;
  ui: Content["ui"];
}) {
  const t = ui.form;
  // La locale voyage par `bind` : les messages d'erreur sont produits côté
  // serveur, dans la bonne langue, sans dépendre du client.
  const [state, formAction, pending] = useActionState(
    submitContact.bind(null, lang),
    initialContactState,
  );

  // React vide le formulaire après chaque action. `attempt` change à chaque
  // soumission : le remontage réapplique les `defaultValue`, c'est-à-dire la
  // saisie renvoyée par le serveur en cas d'erreur, et rien après un succès.
  return (
    <form
      key={state.attempt}
      action={formAction}
      className="max-w-xl space-y-5"
    >
      <Field
        id="name"
        label={t.nameLabel}
        error={state.errors?.name}
        defaultValue={state.values?.name}
        autoComplete="name"
        disabled={pending}
      />

      <Field
        id="email"
        type="email"
        label={t.emailLabel}
        error={state.errors?.email}
        defaultValue={state.values?.email}
        autoComplete="email"
        disabled={pending}
      />

      <Field
        id="message"
        label={t.messageLabel}
        error={state.errors?.message}
        defaultValue={state.values?.message}
        disabled={pending}
        multiline
      />

      {/* Piège à robots : invisible et hors du parcours clavier. */}
      <div aria-hidden className="hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-5 py-3 text-sm font-medium text-accent transition-colors duration-200 hover:bg-accent/20 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? t.submitting : t.submit}
        </button>

        <p
          aria-live="polite"
          className={`text-sm ${
            state.status === "success" ? "text-accent" : "text-red-300"
          }`}
        >
          {state.message}
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  defaultValue,
  type = "text",
  autoComplete,
  disabled,
  multiline = false,
}: {
  id: ContactField;
  label: string;
  error?: string;
  defaultValue?: string;
  type?: string;
  autoComplete?: string;
  disabled?: boolean;
  multiline?: boolean;
}) {
  const errorId = `${id}-error`;
  const shared = {
    id,
    name: id,
    defaultValue,
    required: true,
    disabled,
    autoComplete,
    "aria-invalid": error ? (true as const) : undefined,
    "aria-describedby": error ? errorId : undefined,
    className: `w-full rounded-md border bg-bgsoft/40 px-4 py-3 text-sm text-heading outline-none transition-colors duration-200 placeholder:text-muted/50 focus:border-accent/60 disabled:opacity-60 ${
      error ? "border-red-400/60" : "border-line"
    }`,
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-mono text-[11px] tracking-[0.16em] text-muted uppercase"
      >
        {label}
      </label>

      {multiline ? (
        <textarea {...shared} rows={5} className={`${shared.className} resize-y`} />
      ) : (
        <input {...shared} type={type} />
      )}

      {error && (
        <p id={errorId} className="mt-2 text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}
