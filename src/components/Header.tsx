"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { tr, type Locale } from "@/i18n";
import { profile } from "@/content/site";
import { ui } from "@/content/ui";

const navItems = [
  ["work", "#work"],
  ["experience", "#experience"],
  ["services", "#services"],
  ["skills", "#skills"],
  ["contact", "#contact"],
] as const;

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const other: Locale = locale === "en" ? "ar" : "en";
  const switchHref = pathname.replace(/^\/(en|ar)/, `/${other}`);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="flex items-center gap-2 font-semibold">
          <span className="grid size-8 place-items-center rounded-lg bg-accent text-sm text-background">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{tr(profile.name, locale)}</span>
        </Link>

        <nav className="ms-auto hidden items-center gap-1 md:flex">
          {navItems.map(([key, hash]) => (
            <Link
              key={key}
              href={`/${locale}${hash}`}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              {tr(ui.nav[key], locale)}
            </Link>
          ))}
        </nav>

        <div className="ms-auto flex items-center gap-1 md:ms-2">
          <Link
            href={switchHref}
            hrefLang={other}
            className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-surface"
          >
            {tr(ui.language.switchTo, locale)}
          </Link>
          <ThemeToggle label={tr(ui.theme.toggle, locale)} />
        </div>
      </div>
    </header>
  );
}

function ThemeToggle({ label }: { label: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  // Icons are switched by the `dark` class, so the server render never mismatches.
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="grid size-10 place-items-center rounded-md transition-colors hover:bg-surface"
    >
      <svg viewBox="0 0 24 24" className="hidden size-5 dark:block" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg viewBox="0 0 24 24" className="size-5 dark:hidden" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    </button>
  );
}
