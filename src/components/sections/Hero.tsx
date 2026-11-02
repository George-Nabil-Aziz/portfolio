import type { Locale } from "@/i18n";
import { tr } from "@/i18n";
import { profile } from "@/content/site";
import { ui } from "@/content/ui";
import { BlurText } from "@/components/BlurText";
import { HeroAurora, Magnetic, Rotating, Shiny } from "@/components/fx";

const rotating = ["ASP.NET Core", "React", "Angular", "Vue", "Next.js", "SQL Server"];

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const btn =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors " +
  focus;
const outline = `${btn} border border-border hover:border-accent hover:text-accent`;

const labels = {
  github: { en: "GitHub profile", ar: "حساب GitHub" },
  linkedin: { en: "LinkedIn profile", ar: "حساب LinkedIn" },
};

const mask = "radial-gradient(ellipse at center, black 30%, transparent 75%)";

export function Hero({ locale }: { locale: Locale }) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[70%]"
        style={{
          maskImage: "linear-gradient(to bottom, black 40%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent)",
        }}
      >
        <HeroAurora />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 text-foreground opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 sm:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex size-2 rounded-full bg-green-500" />
          </span>
          <Shiny text={tr(profile.available, locale)} />
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          <BlurText text={tr(profile.name, locale)} />
        </h1>
        <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xl font-medium sm:text-2xl">
          <span className="text-accent">{tr(profile.role, locale)}</span>
          <span dir="ltr" className="inline-flex">
            <Rotating
              texts={rotating}
              className="overflow-hidden rounded-lg bg-accent px-3 py-0.5 text-white dark:text-zinc-950"
            />
          </span>
        </p>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          {tr(profile.tagline, locale)}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Magnetic>
            <a href="#work" className={`${btn} bg-accent text-white hover:opacity-90 dark:text-zinc-950`}>
              {tr(ui.hero.viewWork, locale)}
            </a>
          </Magnetic>
          <a href="#contact" className={outline}>
            {tr(ui.hero.contact, locale)}
          </a>
          <a href={profile.cv} download className={outline}>
            {tr(ui.hero.downloadCv, locale)}
          </a>
          <span className="ms-1 flex items-center gap-1">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={tr(labels.github, locale)}
              className={`rounded-full p-2 text-muted transition-colors hover:text-accent ${focus}`}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={tr(labels.linkedin, locale)}
              className={`rounded-full p-2 text-muted transition-colors hover:text-accent ${focus}`}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
