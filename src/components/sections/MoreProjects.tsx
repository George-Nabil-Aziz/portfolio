import { type Locale, tr } from "@/i18n";
import { moreProjects, templates, miniProjects } from "@/content/site";
import { ui } from "@/content/ui";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

const linkClass =
  "inline-flex items-center gap-1.5 rounded text-sm font-medium text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

function ExternalIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function MoreProjects({ locale }: { locale: Locale }) {
  return (
    <Section title={tr(ui.sections.more, locale)}>
      <div className="grid gap-4 md:grid-cols-2">
        {moreProjects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="text-sm text-accent">{tr(p.tagline, locale)}</p>
              <p className="mt-3 text-muted">{tr(p.summary, locale)}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li key={s} className="rounded-full border border-border px-3 py-1 text-sm">
                    {s}
                  </li>
                ))}
              </ul>
              {p.repo && (
                <div className="mt-5">
                  <a href={p.repo} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {tr(ui.project.code, locale)}
                    <ExternalIcon />
                  </a>
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>

      <h3 className="mt-14 text-xl font-semibold">{tr(ui.sections.templates, locale)}</h3>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((t, i) => (
          <Reveal key={t.slug} delay={(i % 3) * 0.06} className="h-full">
            <article className="flex h-full flex-col rounded-xl border border-border bg-surface p-4">
              <h4 className="font-semibold">{t.name}</h4>
              <p className="mt-1 text-sm text-muted">{tr(t.tagline, locale)}</p>
              {t.live && (
                <div className="mt-auto pt-4">
                  <a href={t.live} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {tr(ui.project.live, locale)}
                    <ExternalIcon />
                  </a>
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>

      <h3 className="mt-14 text-xl font-semibold">{tr(ui.sections.mini, locale)}</h3>
      <ul className="mt-5 flex flex-wrap gap-2">
        {miniProjects.map((m) => (
          <li key={m.href}>
            <a
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-sm hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {m.name}
              <ExternalIcon size={12} />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
