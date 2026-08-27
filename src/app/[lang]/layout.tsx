import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { getDictionary, hasLocale, locales } from "@/content/dictionaries";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

/**
 * URL publique du site. `metadataBase` rend absolues les URL canoniques, les
 * alternantes de langue et les images Open Graph — sans elle, un partage sur
 * un réseau social pointe dans le vide. Surchargeable par l'environnement
 * pour une préproduction.
 */
const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://anasshilama.com",
);

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const { profile } = getDictionary(lang);
  const title = `${profile.name} — ${profile.role}`;

  return {
    metadataBase: siteUrl,
    title,
    description: profile.tagline,
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      title,
      description: profile.tagline,
      type: "website",
      url: `/${lang}`,
      siteName: profile.name,
      locale: lang === "fr" ? "fr_FR" : "en_GB",
    },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {/* Sans JS, aucune révélation au scroll : tout doit rester lisible. */}
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
