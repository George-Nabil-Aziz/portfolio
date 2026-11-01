import type { ReactNode } from "react";

/** Standard page section: anchor id, heading, optional intro, content. */
export function Section({
  id,
  title,
  intro,
  children,
}: {
  id?: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        {intro && <p className="mt-3 max-w-2xl text-muted">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
