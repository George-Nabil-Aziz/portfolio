import { type Locale, tr } from "@/i18n";
import { services } from "@/content/site";
import { ui } from "@/content/ui";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

const svgProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function ServiceIcon({ name }: { name: string }) {
  switch (name) {
    case "layout":
      return (
        <svg {...svgProps}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M9 9v11" />
        </svg>
      );
    case "dashboard":
      return (
        <svg {...svgProps}>
          <rect x="3" y="3" width="7" height="9" rx="1" />
          <rect x="14" y="3" width="7" height="5" rx="1" />
          <rect x="14" y="12" width="7" height="9" rx="1" />
          <rect x="3" y="16" width="7" height="5" rx="1" />
        </svg>
      );
    case "figma":
      return (
        <svg {...svgProps}>
          <path d="M8 3h4a3 3 0 0 1 0 6H8zM8 9h4a3 3 0 0 1 0 6H8zM8 3a3 3 0 0 0 0 6M8 9a3 3 0 0 0 0 6M8 15a3 3 0 1 0 3 3v-3z" />
          <circle cx="15" cy="12" r="3" />
        </svg>
      );
    default:
      return (
        <svg {...svgProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
        </svg>
      );
  }
}

export function Services({ locale }: { locale: Locale }) {
  return (
    <Section
      id="services"
      title={tr(ui.sections.services, locale)}
      intro={tr(ui.sections.servicesIntro, locale)}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.icon} delay={i * 0.08} className="h-full">
            <div className="h-full rounded-2xl border border-border bg-surface p-6">
              <div className="flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <ServiceIcon name={s.icon} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{tr(s.title, locale)}</h3>
              <p className="mt-2 text-muted">{tr(s.text, locale)}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
