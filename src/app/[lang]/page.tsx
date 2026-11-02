import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { WorkProjects } from "@/components/sections/WorkProjects";
import { Featured } from "@/components/sections/Featured";
import { Experience } from "@/components/sections/Experience";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { MoreProjects } from "@/components/sections/MoreProjects";
import { Contact } from "@/components/sections/Contact";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <>
      <Hero locale={lang} />
      <Stats locale={lang} />
      <WorkProjects locale={lang} />
      <Featured locale={lang} />
      <Experience locale={lang} />
      <Services locale={lang} />
      <Skills locale={lang} />
      <MoreProjects locale={lang} />
      <Contact locale={lang} />
    </>
  );
}
