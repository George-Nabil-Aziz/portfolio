import type { L } from "@/i18n";

/** Fixed interface text (headings, buttons, labels). Content lives in site.ts. */
export const ui = {
  nav: {
    work: { en: "Work", ar: "أعمالي" },
    experience: { en: "Experience", ar: "الخبرة" },
    services: { en: "Services", ar: "الخدمات" },
    skills: { en: "Skills", ar: "المهارات" },
    contact: { en: "Contact", ar: "تواصل" },
  },
  hero: {
    viewWork: { en: "View my work", ar: "شوف شغلي" },
    contact: { en: "Get in touch", ar: "تواصل معايا" },
    downloadCv: { en: "Download CV", ar: "تحميل الـ CV" },
  },
  sections: {
    featured: { en: "Featured projects", ar: "مشاريع مميزة" },
    featuredIntro: {
      en: "Two complete platforms, designed, built and tested end to end.",
      ar: "منصتين كاملتين، اتصمموا واتبنوا واتختبروا من الأول للآخر.",
    },
    experience: { en: "Experience", ar: "الخبرة" },
    services: { en: "What I can build for you", ar: "أقدر أعملك إيه" },
    servicesIntro: {
      en: "Freelance or full-time — this is the work I do best.",
      ar: "فريلانس أو دوام كامل، دي الحاجات اللي بعملها أحسن حاجة.",
    },
    skills: { en: "Skills", ar: "المهارات" },
    more: { en: "More projects", ar: "مشاريع تانية" },
    templates: { en: "Website templates", ar: "قوالب مواقع" },
    mini: { en: "Mini projects", ar: "مشاريع صغيرة" },
    contact: { en: "Let's work together", ar: "يلا نشتغل سوا" },
    contactIntro: {
      en: "Have a project or a role in mind? Email or WhatsApp is the fastest way to reach me.",
      ar: "عندك مشروع أو وظيفة؟ الإيميل أو الواتساب أسرع طريقة توصلّي بيها.",
    },
  },
  project: {
    caseStudy: { en: "Read case study", ar: "اقرأ التفاصيل" },
    code: { en: "Source code", ar: "الكود" },
    live: { en: "Live demo", ar: "شوفه أونلاين" },
    back: { en: "Back to all work", ar: "رجوع لكل الأعمال" },
    stack: { en: "Tech stack", ar: "التقنيات" },
  },
  contact: {
    name: { en: "Your name", ar: "اسمك" },
    email: { en: "Your email", ar: "إيميلك" },
    message: { en: "Message", ar: "رسالتك" },
    send: { en: "Send message", ar: "ابعت الرسالة" },
    sending: { en: "Sending…", ar: "بيتبعت…" },
    sent: { en: "Thanks — I'll reply within a day.", ar: "شكراً، هرد عليك خلال يوم." },
    failed: { en: "Something went wrong. Please email me instead.", ar: "حصلت مشكلة. ابعتلي إيميل بدلها." },
    copy: { en: "Copy email", ar: "انسخ الإيميل" },
    copied: { en: "Copied", ar: "اتنسخ" },
    whatsapp: { en: "Chat on WhatsApp", ar: "كلمني واتساب" },
  },
  theme: {
    toggle: { en: "Toggle theme", ar: "تغيير الثيم" },
  },
  language: {
    switchTo: { en: "العربية", ar: "English" },
  },
  footer: {
    built: { en: "Built with Next.js, Tailwind CSS and Motion.", ar: "معمول بـ Next.js و Tailwind CSS و Motion." },
  },
} satisfies Record<string, Record<string, L>>;
