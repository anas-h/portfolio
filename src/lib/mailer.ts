/**
 * Envoi du formulaire de contact.
 *
 * Passe par l'API HTTP de Resend plutôt que par un SDK : le projet n'a
 * volontairement aucune dépendance au-delà du framework, et `fetch` suffit.
 * Pour changer de fournisseur, seule cette fonction est à réécrire.
 *
 * Variables d'environnement attendues :
 *   RESEND_API_KEY      clé d'API
 *   CONTACT_TO_EMAIL    destinataire (ta boîte)
 *   CONTACT_FROM_EMAIL  expéditeur, sur un domaine vérifié chez Resend
 */

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export class MailerNotConfiguredError extends Error {}

export async function sendContactMessage({
  name,
  email,
  message,
}: ContactPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey || !to) {
    throw new MailerNotConfiguredError(
      "RESEND_API_KEY et CONTACT_TO_EMAIL doivent être définis pour envoyer le formulaire.",
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      // Répondre depuis la boîte mail renvoie directement à l'expéditeur.
      reply_to: email,
      subject: `Portfolio — message de ${name}`,
      text: `${name} <${email}>\n\n${message}`,
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Resend a répondu ${response.status} : ${await response.text()}`,
    );
  }
}
