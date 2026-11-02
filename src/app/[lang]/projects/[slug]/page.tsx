import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, locales, tr, type L } from "@/i18n";
import { featured } from "@/content/site";
import { ui } from "@/content/ui";
import { Reveal } from "@/components/Reveal";

const screenshotSoon: L = {
  en: "Screenshots coming soon",
  ar: "لقطات الشاشة قريبًا",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => featured.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/projects/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const project = featured.find((p) => p.slug === slug);
  if (!hasLocale(lang) || !project) return {};
  return { title: project.name, description: tr(project.tagline, lang) };
}

export default async function ProjectPage({ params }: PageProps<"/[lang]/projects/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const project = featured.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
      <a
        href={`/${lang}#projects`}
        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
      >
        <span aria-hidden className="inline-block rtl:rotate-180">
          ←
        </span>
        {tr(ui.project.back, lang)}
      </a>

      <h1 className="mt-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {project.name}
      </h1>
      <p className="mt-3 text-lg font-medium text-accent">{tr(project.tagline, lang)}</p>
      <p className="mt-6 leading-relaxed text-muted">{tr(project.summary, lang)}</p>

      {(project.repo || project.live) && (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {tr(ui.project.code, lang)}
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              {tr(ui.project.live, lang)}
            </a>
          )}
        </div>
      )}

      {project.metrics && project.metrics.length > 0 && (
        <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {project.metrics.map((m) => (
            <div key={m.label.en}>
              <dt className="sr-only">{tr(m.label, lang)}</dt>
              <dd className="text-3xl font-bold text-accent">
                {m.value.toLocaleString("en-US")}
                {m.suffix}
              </dd>
              <p className="mt-1 text-sm text-muted" aria-hidden>
                {tr(m.label, lang)}
              </p>
            </div>
          ))}
        </dl>
      )}

      <div className="mt-10 flex aspect-video items-center justify-center rounded-2xl border border-dashed border-border bg-surface text-sm text-muted">
        {tr(screenshotSoon, lang)}
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">{tr(ui.project.stack, lang)}</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <li
              key={s}
              className="rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent"
            >
              {s}
            </li>
          ))}
        </ul>
      </section>

      {project.caseStudy?.map((section) => (
        <Reveal key={section.heading.en} className="mt-12">
          <h2 className="text-2xl font-semibold text-foreground">{tr(section.heading, lang)}</h2>
          <div className="mt-4 space-y-4">
            {section.body.map((para, i) => (
              <p key={i} className="leading-relaxed text-muted">
                {tr(para, lang)}
              </p>
            ))}
          </div>
        </Reveal>
      ))}
    </article>
  );
}
