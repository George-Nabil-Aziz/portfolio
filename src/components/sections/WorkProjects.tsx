import type { Locale } from "@/i18n";
import { tr } from "@/i18n";
import { workProjects } from "@/content/site";
import { ui } from "@/content/ui";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { GlowCard } from "@/components/fx";

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function WorkProjects({ locale }: { locale: Locale }) {
  return (
    <Section
      id="work"
      title={tr(ui.sections.work, locale)}
      intro={tr(ui.sections.workIntro, locale)}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {workProjects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08} className="h-full">
            <GlowCard className="h-full rounded-2xl">
              <article className="flex h-full flex-col p-6 sm:p-8">
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  {p.company}
                  {p.period && <> · {tr(p.period, locale)}</>}
                </p>
                <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{p.name}</h3>
                <p className="mt-1 font-medium text-accent">{tr(p.tagline, locale)}</p>
                <p className="mt-4 leading-relaxed text-muted">{tr(p.summary, locale)}</p>
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
                {p.live && (
                  <div className="mt-auto pt-6 text-sm font-medium">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-accent hover:underline ${focus}`}
                    >
                      {p.live.replace(/^https?:\/\/|\/$/g, "")} ↗
                    </a>
                  </div>
                )}
              </article>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
