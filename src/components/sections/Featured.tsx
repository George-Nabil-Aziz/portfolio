import Link from "next/link";
import type { Locale } from "@/i18n";
import { tr } from "@/i18n";
import { featured } from "@/content/site";
import { ui } from "@/content/ui";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { GlowCard } from "@/components/fx";

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function Featured({ locale }: { locale: Locale }) {
  return (
    <Section
      id="projects"
      title={tr(ui.sections.featured, locale)}
      intro={tr(ui.sections.featuredIntro, locale)}
    >
      <div className="flex flex-col gap-6">
        {featured.map((p) => (
          <Reveal key={p.slug}>
            <GlowCard className="rounded-2xl">
            <article className="p-6 sm:p-8">
              <h3 className="text-xl font-semibold sm:text-2xl">{p.name}</h3>
              <p className="mt-1 font-medium text-accent">{tr(p.tagline, locale)}</p>
              <p className="mt-4 max-w-3xl leading-relaxed text-muted">
                {tr(p.summary, locale)}
              </p>
              {p.metrics && (
                <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {p.metrics.map((m, i) => (
                    <div key={i} className="flex flex-col">
                      <dd className="order-first text-2xl font-bold text-accent">
                        {m.value.toLocaleString("en-US")}
                        {m.suffix}
                      </dd>
                      <dt className="text-sm text-muted">{tr(m.label, locale)}</dt>
                    </div>
                  ))}
                </dl>
              )}
              <ul className="mt-6 flex flex-wrap gap-2" dir="ltr">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
                <Link
                  href={`/${locale}/projects/${p.slug}`}
                  className={`inline-flex items-center gap-1 text-accent hover:underline ${focus}`}
                >
                  {tr(ui.project.caseStudy, locale)}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="size-4 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted hover:text-accent hover:underline ${focus}`}
                  >
                    {tr(ui.project.code, locale)}
                  </a>
                )}
              </div>
            </article>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
