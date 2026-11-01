import { type Locale, tr } from "@/i18n";
import { profile } from "@/content/site";
import { ui } from "@/content/ui";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { CopyEmail } from "@/components/CopyEmail";
import { ContactForm } from "@/components/ContactForm";

const linkClass =
  "rounded text-foreground hover:text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function Contact({ locale }: { locale: Locale }) {
  const c = ui.contact;
  return (
    <Section
      id="contact"
      title={tr(ui.sections.contact, locale)}
      intro={tr(ui.sections.contactIntro, locale)}
    >
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal>
          <a
            href={`mailto:${profile.email}`}
            dir="ltr"
            className="block break-all text-2xl font-semibold text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-3xl"
          >
            {profile.email}
          </a>
          <div className="mt-4 flex items-center">
            <CopyEmail email={profile.email} label={tr(c.copy, locale)} copiedLabel={tr(c.copied, locale)} />
          </div>
          <ul className="mt-8 space-y-3">
            <li>
              <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {tr(c.whatsapp, locale)}
              </a>
            </li>
            <li>
              <a href={`tel:${profile.phone}`} dir="ltr" className={linkClass}>
                {profile.phone}
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                GitHub
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
                LinkedIn
              </a>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm
            formspreeId={profile.formspreeId}
            toEmail={profile.email}
            strings={{
              name: tr(c.name, locale),
              email: tr(c.email, locale),
              message: tr(c.message, locale),
              send: tr(c.send, locale),
              sending: tr(c.sending, locale),
              sent: tr(c.sent, locale),
              failed: tr(c.failed, locale),
            }}
          />
        </Reveal>
      </div>
    </Section>
  );
}
