import { type Locale, tr } from "@/i18n";
import { skills } from "@/content/site";
import { ui } from "@/content/ui";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Skills({ locale }: { locale: Locale }) {
  return (
    <Section id="skills" title={tr(ui.sections.skills, locale)}>
      <div className="grid gap-8 md:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal key={g.title.en} delay={i * 0.08}>
            <h3 className="text-lg font-semibold">{tr(g.title, locale)}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
