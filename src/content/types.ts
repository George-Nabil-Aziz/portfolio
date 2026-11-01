import type { L } from "@/i18n";

export type Link = { label: L; href: string };

export type Stat = { value: number; suffix?: string; label: L };

export type Job = {
  company: L;
  role: L;
  period: L;
  points: L[];
  /** Products shipped at this job (shown as nested items). */
  products?: { name: string; summary: L; href?: string }[];
};

export type Service = { icon: string; title: L; text: L };

export type SkillGroup = { title: L; items: string[] };

export type CaseStudySection = { heading: L; body: L[] };

export type Project = {
  slug: string;
  name: string;
  tagline: L;
  summary: L;
  stack: string[];
  repo?: string;
  live?: string;
  /** Big numbers shown on the card and the case study. */
  metrics?: Stat[];
  caseStudy?: CaseStudySection[];
};

export type MiniProject = { name: string; href: string };
