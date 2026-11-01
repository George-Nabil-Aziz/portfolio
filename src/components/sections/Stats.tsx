import type { Locale } from "@/i18n";
import { tr } from "@/i18n";
import { stats } from "@/content/site";
import { CountUp } from "@/components/CountUp";

export function Stats({ locale }: { locale: Locale }) {
  return (
    <section className="border-y border-border bg-surface/50">
      <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-y-8 px-4 py-10 sm:px-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col text-center">
            <dd className="order-first text-3xl font-bold text-accent sm:text-4xl">
              <CountUp value={s.value} suffix={s.suffix} />
            </dd>
            <dt className="mt-1 text-sm text-muted">{tr(s.label, locale)}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
