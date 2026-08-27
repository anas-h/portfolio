import Link from "next/link";
import { locales, type Locale } from "@/content/dictionaries";

export default function LangSwitcher({
  current,
  label,
}: {
  current: Locale;
  label: string;
}) {
  return (
    <nav
      aria-label={label}
      className="flex items-center gap-1 rounded-md border border-line p-1"
    >
      {locales.map((locale) => {
        const isActive = locale === current;
        return (
          <Link
            key={locale}
            href={`/${locale}`}
            hrefLang={locale}
            aria-current={isActive ? "true" : undefined}
            className={`rounded px-2.5 py-1 font-mono text-[11px] tracking-wider uppercase transition-colors duration-200 ${
              isActive
                ? "bg-accent/15 text-accent"
                : "text-muted hover:text-heading"
            }`}
          >
            {locale}
          </Link>
        );
      })}
    </nav>
  );
}
