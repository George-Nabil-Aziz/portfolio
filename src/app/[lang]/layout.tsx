import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { dirOf, hasLocale, locales, tr } from "@/i18n";
import { profile } from "@/content/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageParticles, Sparks } from "@/components/fx";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const title = `${tr(profile.name, lang)} — ${tr(profile.role, lang)}`;
  return {
    metadataBase: new URL(profile.siteUrl),
    title: { default: title, template: `%s — ${tr(profile.name, lang)}` },
    description: tr(profile.tagline, lang),
    alternates: { languages: { en: "/en", ar: "/ar" } },
    openGraph: { title, description: tr(profile.tagline, lang), type: "website", locale: lang },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      dir={dirOf(lang)}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${plexArabic.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <PageParticles />
          <Header locale={lang} />
          <main className="flex-1">
            <Sparks>{children}</Sparks>
          </main>
          <Footer locale={lang} />
          <WhatsAppButton locale={lang} />
        </ThemeProvider>
      </body>
    </html>
  );
}
