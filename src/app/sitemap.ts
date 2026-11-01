import type { MetadataRoute } from "next";
import { locales } from "@/i18n";
import { featured, profile } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", ...featured.map((p) => `/projects/${p.slug}`)];
  return paths.flatMap((path) =>
    locales.map((lang) => ({
      url: `${profile.siteUrl}/${lang}${path}`,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${profile.siteUrl}/${l}${path}`])),
      },
    })),
  );
}
