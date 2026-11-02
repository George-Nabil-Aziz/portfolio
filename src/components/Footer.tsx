import { tr, type Locale } from "@/i18n";
import { profile } from "@/content/site";
import { ui } from "@/content/ui";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p>
          © 2026 {tr(profile.name, locale)}
        </p>
        <p>{tr(ui.footer.built, locale)}</p>
      </div>
    </footer>
  );
}
