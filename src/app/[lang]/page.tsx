import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ExperienceList from "@/components/ExperienceList";
import ProjectCarousel from "@/components/ProjectCarousel";
import StackSection from "@/components/StackSection";
import EducationLanguages from "@/components/EducationLanguages";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import Spotlight from "@/components/Spotlight";
import { getDictionary, hasLocale } from "@/content/dictionaries";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const content = getDictionary(lang);
  const { profile, ui } = content;

  return (
    <>
      <Spotlight />
      <div aria-hidden className="bg-grid pointer-events-none fixed inset-0" />

      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
      >
        {ui.skipToContent}
      </a>

      <Header content={content} lang={lang} />

      <div className="relative mx-auto max-w-6xl px-3 lg:px-5">
        <main id="contenu">
          <Hero content={content} />

          {/* La piste du carrousel déborde à droite : les cartes suivantes
              restent visibles, ce qui signale qu'on peut faire défiler. */}
          <Section id="work" title={ui.workTitle}>
            <div className="-mr-3 lg:-mr-5">
              <ProjectCarousel projects={content.projects} ui={ui} />
            </div>
          </Section>

          <Section id="stack" title={ui.stackTitle}>
            <StackSection stack={content.stack} />
          </Section>

          <Section id="cv" title={ui.cvTitle}>
            <div className="space-y-8">
              <ExperienceList experiences={content.experiences} />

              <EducationLanguages
                education={content.education}
                languages={content.languages}
                ui={ui}
              />
            </div>
          </Section>

          <Section id="contact" title={ui.contactTitle}>
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10">
              <div>
                <p className="mb-4 max-w-xl leading-relaxed">{ui.contactText}</p>
                <ContactForm lang={lang} ui={ui} />
              </div>

              <div className="no-print lg:pt-2">
                <p className="font-mono text-[11px] tracking-[0.16em] text-muted/70 uppercase">
                  {ui.form.orEmailDirect}
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-3 block text-sm font-medium text-accent transition-colors duration-200 hover:text-heading"
                >
                  {profile.email}
                </a>

                <a
                  href={profile.cv}
                  className="mt-4 inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-medium text-heading transition-colors duration-200 hover:border-muted"
                >
                  {ui.downloadCv}
                </a>

                <SocialLinks profile={profile} className="mt-4" />
              </div>
            </div>
          </Section>
        </main>

        <footer className="border-t border-line/50 py-5 font-mono text-xs leading-relaxed text-muted/60">
          <p>{ui.footer}</p>
        </footer>
      </div>
    </>
  );
}
