import Image from "next/image";
import SocialLinks from "./SocialLinks";
import type { Content } from "@/content/types";

/**
 * Ouverture pleine largeur : identité à gauche, portrait à droite, repères
 * chiffrés en bandeau. Remplace l'ancienne colonne latérale fixe.
 */
export default function Hero({ content }: { content: Content }) {
  const { profile, heroStats, ui } = content;

  return (
    <section id="top" className="pt-8 pb-10 lg:pt-12 lg:pb-14">
      <div className="flex flex-col-reverse items-start gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="max-w-2xl">
          <p
            className="rise font-mono text-xs tracking-[0.2em] text-accent uppercase"
            style={{ animationDelay: "60ms" }}
          >
            {profile.location}
          </p>

          <h1
            className="rise mt-4 text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] font-semibold tracking-tight text-heading"
            style={{ animationDelay: "140ms" }}
          >
            {profile.name}
          </h1>

          <p
            className="rise mt-4 text-xl font-medium tracking-tight text-heading/85"
            style={{ animationDelay: "220ms" }}
          >
            {profile.role}
          </p>

          <p
            className="rise mt-6 max-w-xl text-lg leading-relaxed"
            style={{ animationDelay: "300ms" }}
          >
            {profile.tagline}
          </p>

          <div
            className="rise no-print mt-5 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "380ms" }}
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-5 py-3 text-sm font-medium text-accent transition-colors duration-200 hover:bg-accent/20"
            >
              {ui.viewWork}
            </a>
            <a
              href="#cv"
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-medium text-heading transition-colors duration-200 hover:border-muted"
            >
              {ui.viewCv}
            </a>
            <SocialLinks profile={profile} className="ml-1" />
          </div>
        </div>

        <Image
          src={profile.photo}
          alt={ui.portraitAlt}
          width={320}
          height={320}
          priority
          className="rise h-28 w-28 shrink-0 rounded-full object-cover ring-1 ring-line sm:h-36 sm:w-36 lg:h-48 lg:w-48"
          style={{ animationDelay: "120ms" }}
        />
      </div>

      <dl
        className="rise mt-8 grid gap-px overflow-hidden rounded-lg border border-line/60 bg-line/60 sm:grid-cols-2"
        style={{ animationDelay: "460ms" }}
      >
        {heroStats.map((stat) => (
          <div key={stat.label} className="bg-bg px-5 py-3">
            <dt className="font-mono text-[11px] tracking-[0.16em] text-muted/70 uppercase">
              {stat.label}
            </dt>
            <dd className="mt-2 text-lg font-medium tracking-tight text-heading">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
