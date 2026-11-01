import type { Locale } from "@/i18n";
import { tr } from "@/i18n";
import { experience } from "@/content/site";
import { ui } from "@/content/ui";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Experience({ locale }: { locale: Locale }) {
  return (
    <Section id="experience" title={tr(ui.sections.experience, locale)}>
      <ol className="border-s border-border">
        {experience.map((job, i) => (
          <li key={i} className="relative pb-12 ps-8 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -start-[6px] top-2 size-2.5 rounded-full bg-accent ring-4 ring-background"
            />
            <Reveal>
              <h3 className="text-lg font-semibold">{tr(job.role, locale)}</h3>
              <p className="mt-0.5 text-sm text-muted">
                <span className="font-medium text-accent">{tr(job.company, locale)}</span>
                {" · "}
                {tr(job.period, locale)}
              </p>
              <ul className="mt-4 list-disc space-y-2 ps-5 text-muted marker:text-accent">
                {job.points.map((pt, j) => (
                  <li key={j}>{tr(pt, locale)}</li>
                ))}
              </ul>
              {job.products && (
                <div className="ms-2 mt-5 space-y-3 sm:ms-4">
                  {job.products.map((pr) => (
                    <div
                      key={pr.name}
                      className="rounded-xl border border-border bg-surface p-4"
                    >
                      <h4 className="font-medium">
                        {pr.href ? (
                          <a
                            href={pr.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                          >
                            {pr.name}
                          </a>
                        ) : (
                          pr.name
                        )}
                      </h4>
                      <p className="mt-1 text-sm text-muted">{tr(pr.summary, locale)}</p>
                    </div>
                  ))}
                </div>
              )}
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
