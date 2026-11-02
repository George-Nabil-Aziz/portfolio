import type {
  Job,
  MiniProject,
  Project,
  Service,
  SkillGroup,
  Stat,
} from "./types";

export const profile = {
  name: { en: "George Nabil Aziz", ar: "جورج نبيل عزيز" },
  initials: "GN",
  /** Public address of the deployed site (used for sitemap and link previews). */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://george-nabil.vercel.app",
  role: { en: "Full Stack Developer", ar: "مطور Full Stack" },
  tagline: {
    en: "I build bilingual (Arabic / English) web platforms end to end — React and Vue on the front, ASP.NET Core and Node.js on the back, with tests that prove they work.",
    ar: "أبني منصات ويب ثنائية اللغة (عربي / إنجليزي) من الألف للياء: React و Vue في الواجهة، و ASP.NET Core و Node.js في الخلفية، ومعاها اختبارات تثبت إنها شغالة.",
  },
  location: { en: "Cairo, Egypt", ar: "القاهرة، مصر" },
  available: { en: "Available for work", ar: "متاح للعمل" },
  email: "george.nabil.biy@gmail.com",
  phone: "+201271890173",
  whatsapp: "https://wa.me/201271890173",
  github: "https://github.com/George-Nabil-Aziz",
  linkedin: "https://www.linkedin.com/in/george-nabil-8aa768231/",
  cv: "/George_Nabil_Aziz_CV.pdf",
  /** Formspree form id — create a form at formspree.io and paste its id here. */
  formspreeId: "",
};

export const stats: Stat[] = [
  { value: 3, suffix: "+", label: { en: "Years of experience", ar: "سنين خبرة" } },
  { value: 6000, suffix: "+", label: { en: "Automated tests written", ar: "اختبار آلي كتبتها" } },
  { value: 100, suffix: "+", label: { en: "REST endpoints shipped", ar: "REST endpoint اتسلّمت" } },
  { value: 2, label: { en: "Languages, full RTL", ar: "لغتين مع RTL كامل" } },
];

export const experience: Job[] = [
  {
    company: { en: "Azm Squad", ar: "Azm Squad" },
    role: { en: "Full Stack Engineer", ar: "مهندس Full Stack" },
    period: { en: "Oct 2023 – Present", ar: "أكتوبر 2023 – الآن" },
    points: [
      {
        en: "Build responsive web apps with React, Vue and ASP.NET Core Web API.",
        ar: "بناء تطبيقات ويب متجاوبة بـ React و Vue و ASP.NET Core Web API.",
      },
      {
        en: "Turn Figma designs into clean, maintainable code with Tailwind CSS, Bootstrap and Sass.",
        ar: "تحويل تصميمات Figma لكود نظيف وسهل الصيانة بـ Tailwind CSS و Bootstrap و Sass.",
      },
      {
        en: "Develop and integrate RESTful APIs with ASP.NET Core, EF Core and SQL Server.",
        ar: "تطوير وربط RESTful APIs بـ ASP.NET Core و EF Core و SQL Server.",
      },
    ],
    products: [
      {
        name: "Premium Residency Monitoring System",
        summary: {
          en: "Saudi government platform: monitoring dashboards, compliance tracking, case management and approval workflows. (Aug 2026 – present)",
          ar: "منصة حكومية سعودية: لوحات متابعة، وتتبع الامتثال، وإدارة الحالات، ومسارات الموافقة. (أغسطس 2026 – الآن)",
        },
      },
      {
        name: "ThePass",
        href: "https://thepass.ai/",
        summary: {
          en: "AI-driven recruitment platform: AI video interviews, an applicant tracking system, an exam engine and CSV/Excel/PDF reporting. (Jan 2024 – Apr 2026)",
          ar: "منصة توظيف بالذكاء الاصطناعي: مقابلات فيديو بالـ AI، ونظام تتبع متقدمين (ATS)، ومحرك امتحانات، وتقارير CSV/Excel/PDF. (يناير 2024 – أبريل 2026)",
        },
      },
    ],
  },
  {
    company: { en: "RF Peaks", ar: "RF Peaks" },
    role: { en: "Medical Equipment Maintenance Engineer", ar: "مهندس صيانة أجهزة طبية" },
    period: { en: "Oct 2020 – Jan 2022", ar: "أكتوبر 2020 – يناير 2022" },
    points: [
      {
        en: "Diagnosed hardware and software faults in complex medical systems — the troubleshooting habit I bring to debugging today.",
        ar: "تشخيص أعطال الهاردوير والسوفتوير في أجهزة طبية معقدة — ونفس العقلية دي هي اللي بستخدمها في الـ debugging النهارده.",
      },
      {
        en: "Kept detailed service logs and reports to meet health and safety regulations.",
        ar: "توثيق دقيق لسجلات الصيانة والتقارير بما يطابق معايير الصحة والسلامة.",
      },
    ],
  },
  {
    company: { en: "Military Service", ar: "الخدمة العسكرية" },
    role: { en: "Engineer Officer", ar: "ضابط مهندس" },
    period: { en: "Apr 2018 – Oct 2020", ar: "أبريل 2018 – أكتوبر 2020" },
    points: [
      {
        en: "Led technical teams and delivered engineering tasks under tight deadlines.",
        ar: "قيادة فرق فنية وتسليم مهام هندسية في مواعيد ضيقة.",
      },
    ],
  },
];

export const services: Service[] = [
  {
    icon: "layout",
    title: { en: "Business websites", ar: "مواقع الشركات" },
    text: {
      en: "Fast, responsive company and landing sites that rank on Google and work on every screen.",
      ar: "مواقع شركات و landing pages سريعة ومتجاوبة، بتظهر في جوجل وبتشتغل على كل الشاشات.",
    },
  },
  {
    icon: "dashboard",
    title: { en: "Dashboards & admin systems", ar: "لوحات تحكم وأنظمة إدارة" },
    text: {
      en: "CRMs, booking and order systems with roles, reports and exports — built on a real backend.",
      ar: "أنظمة CRM وحجوزات وطلبات، فيها صلاحيات وتقارير وتصدير، ومبنية على backend حقيقي.",
    },
  },
  {
    icon: "figma",
    title: { en: "Figma to code", ar: "تحويل Figma لكود" },
    text: {
      en: "Pixel-accurate, maintainable front ends from your designs, in React, Next.js or Vue.",
      ar: "واجهات مطابقة للتصميم وسهلة الصيانة، بـ React أو Next.js أو Vue.",
    },
  },
  {
    icon: "language",
    title: { en: "Arabic / English apps", ar: "تطبيقات عربي / إنجليزي" },
    text: {
      en: "Proper RTL, bilingual content and light/dark themes from day one — not bolted on later.",
      ar: "RTL صح، ومحتوى بلغتين، و light/dark من أول يوم، مش حاجة بتتركب في الآخر.",
    },
  },
];

export const skills: SkillGroup[] = [
  {
    title: { en: "Frontend", ar: "الواجهة الأمامية" },
    items: ["React", "Next.js", "Vue 3", "TypeScript", "JavaScript", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Pinia", "Sass", "Bootstrap"],
  },
  {
    title: { en: "Backend", ar: "الخلفية" },
    items: ["C#", "ASP.NET Core", "Web API", "EF Core", "LINQ", "SQL Server", "SignalR", "Hangfire", "Node.js", "Express", "PostgreSQL"],
  },
  {
    title: { en: "Architecture & quality", ar: "المعمارية والجودة" },
    items: ["Clean Architecture", "Onion Architecture", "SOLID", "Design Patterns", "Repository Pattern", "TDD", "xUnit", "Vitest", "Playwright"],
  },
];

export const workProjects: Project[] = [
  {
    slug: "pr-rasd",
    name: "Premium Residency Monitoring System",
    company: "Azm Squad",
    period: { en: "Aug 2026 – present", ar: "أغسطس 2026 – الآن" },
    tagline: {
      en: "Saudi government platform that monitors Premium Residency holders",
      ar: "منصة حكومية سعودية لرصد ومتابعة حاملي الإقامة المميزة",
    },
    summary: {
      en: "Monitoring dashboards, compliance tracking, case management and multi-step approval workflows — bilingual, with government SSO and integrations with external agencies.",
      ar: "لوحات متابعة، وتتبع الامتثال، وإدارة الحالات، ومسارات موافقة متعددة الخطوات، بلغتين، مع SSO حكومي وربط مع جهات خارجية.",
    },
    stack: ["Angular 22", "Transloco", "ASP.NET Core", "EF Core", "SQL Server", "MediatR", "Hangfire", "MassTransit", "RabbitMQ", "Redis", "SAML SSO", "Docker", "Kubernetes"],
  },
  {
    slug: "thepass",
    name: "ThePass",
    company: "Azm Squad",
    period: { en: "Jan 2024 – Apr 2026", ar: "يناير 2024 – أبريل 2026" },
    tagline: {
      en: "AI-driven recruitment platform",
      ar: "منصة توظيف بالذكاء الاصطناعي",
    },
    summary: {
      en: "AI video interviews, an applicant tracking system, an exam engine and CSV / Excel / PDF reporting for hiring teams.",
      ar: "مقابلات فيديو بالـ AI، ونظام تتبع متقدمين (ATS)، ومحرك امتحانات، وتقارير CSV / Excel / PDF لفرق التوظيف.",
    },
    stack: ["Vue 3", "React", "Tailwind CSS", "ASP.NET Core", "Web API", "EF Core", "SQL Server"],
    live: "https://thepass.ai/",
  },
];

export const featured: Project[] = [
  {
    slug: "crm",
    name: "Customer Support CRM",
    tagline: {
      en: "Bilingual help-desk platform with SLA automation, five channels and AI",
      ar: "منصة دعم فني ثنائية اللغة فيها SLA تلقائي، وخمس قنوات، وذكاء اصطناعي",
    },
    summary: {
      en: "Every customer request on any channel becomes a ticket. Agents resolve tickets against SLA targets, supervisors watch the workload, managers read the reports — in Arabic or English.",
      ar: "أي طلب من العميل على أي قناة بيتحول لتذكرة. الموظفين بيحلوا التذاكر في حدود الـ SLA، والمشرفين بيتابعوا الشغل، والمديرين بيقروا التقارير، بالعربي أو الإنجليزي.",
    },
    stack: ["ASP.NET Core 10", "EF Core", "SQL Server", "SignalR", "Hangfire", "React 19", "TypeScript", "Tailwind v4", "shadcn/ui", "Claude API"],
    repo: "https://github.com/George-Nabil-Aziz/Azm-Squad-CRM",
    metrics: [
      { value: 5266, label: { en: "Automated tests", ar: "اختبار آلي" } },
      { value: 64, label: { en: "User stories delivered", ar: "User story اتسلّمت" } },
      { value: 13, label: { en: "Features", ar: "Feature" } },
      { value: 0, label: { en: "Build warnings", ar: "Build warnings" } },
    ],
    caseStudy: [
      {
        heading: { en: "The problem", ar: "المشكلة" },
        body: [
          {
            en: "Support requests arrive by email, WhatsApp, SMS, web forms and live chat. Without one system, requests get lost, response times are unknown and nobody can tell which agent is overloaded.",
            ar: "طلبات الدعم بتيجي من الإيميل والواتساب والـ SMS والفورمز واللايف شات. من غير نظام واحد، الطلبات بتضيع، ومحدش عارف وقت الرد، ومحدش عارف مين من الموظفين عليه ضغط.",
          },
        ],
      },
      {
        heading: { en: "What I built", ar: "اللي بنيته" },
        body: [
          {
            en: "Tickets with numbers, priorities, categories and a status workflow; SLA due times calculated from business hours, with a Hangfire job that warns before a breach and escalates after it.",
            ar: "تذاكر بأرقام وأولويات وتصنيفات و status workflow؛ ومواعيد SLA بتتحسب من ساعات العمل، و Hangfire job بيحذّر قبل التأخير وبيصعّد بعده.",
          },
          {
            en: "Five channels: SMTP/IMAP email threading, WhatsApp Cloud API with signed webhooks, Twilio-compatible SMS, embeddable web forms with captcha and rate limiting, and real-time live chat over SignalR.",
            ar: "خمس قنوات: إيميل SMTP/IMAP بيتربط بالتذكرة، و WhatsApp Cloud API بـ webhooks موقعة، و SMS متوافق مع Twilio، وفورمز تتحط في أي موقع بـ captcha و rate limiting، ولايف شات real-time بـ SignalR.",
          },
          {
            en: "AI with the Claude API: ticket summaries, suggested replies grounded in the knowledge base, auto-categorisation above a 0.8 confidence threshold and a portal chatbot — with emails and phones masked before anything leaves the server.",
            ar: "ذكاء اصطناعي بالـ Claude API: ملخصات للتذاكر، وردود مقترحة من قاعدة المعرفة، وتصنيف تلقائي فوق نسبة ثقة 0.8، و chatbot للعملاء، مع إخفاء الإيميلات والأرقام قبل ما أي حاجة تخرج من السيرفر.",
          },
          {
            en: "A customer portal with one-time-code login and CSAT surveys, reports with real .xlsx export, a public API with scoped keys, HMAC-signed outgoing webhooks and an ERP lookup.",
            ar: "بوابة عملاء بدخول بكود لمرة واحدة واستبيان رضا (CSAT)، وتقارير بتصدير .xlsx حقيقي، و Public API بمفاتيح محددة الصلاحيات، و webhooks موقعة بـ HMAC، وربط مع ERP.",
          },
        ],
      },
      {
        heading: { en: "Architecture", ar: "المعمارية" },
        body: [
          {
            en: "Clean Architecture: Api → Application → Domain ← Infrastructure. The Domain has no EF Core or ASP.NET dependency, so SLA maths and status rules are unit-tested without a database. Every error becomes an RFC 7807 ProblemDetails response.",
            ar: "Clean Architecture: Api ← Application ← Domain ← Infrastructure. الـ Domain مالوش أي علاقة بـ EF Core أو ASP.NET، فحسابات الـ SLA وقواعد الحالات بتتختبر من غير database. وأي خطأ بيرجع كـ ProblemDetails حسب RFC 7807.",
          },
          {
            en: "The server is the security boundary: permissions are enforced by API policies, internal notes are filtered in the API, and the React client only hides what a user cannot do.",
            ar: "السيرفر هو حد الأمان: الصلاحيات متطبقة في الـ API، والملاحظات الداخلية بتتفلتر في الـ API، والـ React بيخفي بس اللي المستخدم مش مسموحله بيه.",
          },
        ],
      },
      {
        heading: { en: "How it was built", ar: "اتبنى إزاي" },
        body: [
          {
            en: "Test-first, one story at a time: every acceptance criterion became at least one test before any code — 1,436 unit, 682 integration and 3,148 client tests.",
            ar: "الاختبار الأول، story ورا story: كل acceptance criterion بقى اختبار واحد على الأقل قبل أي كود: 1,436 unit و 682 integration و 3,148 client test.",
          },
          {
            en: "AI-assisted delivery with Claude Code: up to four agents worked in parallel, each in its own git worktree, and every merge had to pass both test suites, the build and the linter.",
            ar: "تسليم بمساعدة Claude Code: لحد أربع agents شغالين بالتوازي، كل واحد في git worktree خاص بيه، وكل merge لازم يعدّي الاختبارات والـ build والـ linter.",
          },
        ],
      },
    ],
  },
  {
    slug: "foodflow",
    name: "FoodFlow",
    tagline: {
      en: "Food delivery marketplace for customers, restaurants, drivers and admins",
      ar: "منصة توصيل أكل للعملاء والمطاعم والسواقين والإدارة",
    },
    summary: {
      en: "Customers browse and order, restaurant owners run their menus and fulfil orders, drivers accept and deliver, and admins approve and police the marketplace.",
      ar: "العملاء بيتصفحوا ويطلبوا، وأصحاب المطاعم بيديروا المنيو وينفذوا الطلبات، والسواقين بيقبلوا ويوصّلوا، والإدارة بتوافق وبتراقب المنصة.",
    },
    stack: ["Vue 3", "Pinia", "Tailwind CSS", "Node.js", "Express", "Knex", "PostgreSQL", "Playwright"],
    repo: "https://github.com/George-Nabil-Aziz/foodflow-delivery",
    metrics: [
      { value: 100, label: { en: "REST endpoints", ar: "REST endpoint" } },
      { value: 698, label: { en: "Automated tests", ar: "اختبار آلي" } },
      { value: 40, label: { en: "Route-level views", ar: "شاشة" } },
      { value: 9, label: { en: "Bugs caught by E2E", ar: "Bug لقطها الـ E2E" } },
    ],
    caseStudy: [
      {
        heading: { en: "The problem", ar: "المشكلة" },
        body: [
          {
            en: "A delivery marketplace has four kinds of users with conflicting goals, money that must never be wrong, and orders that move through many states while several people act on them at once.",
            ar: "منصة التوصيل فيها أربع أنواع مستخدمين أهدافهم بتتعارض، وفلوس مينفعش تغلط، وطلبات بتعدّي على حالات كتير وأكتر من شخص بيتعامل معاها في نفس الوقت.",
          },
        ],
      },
      {
        heading: { en: "Architecture", ar: "المعمارية" },
        body: [
          {
            en: "A modular monolith: one Node process with hard boundaries between ten domain modules, enforced by an ESLint rule. Inside a module the flow is strictly route → controller → service → repository.",
            ar: "Modular monolith: process واحد لـ Node بحدود صارمة بين عشر modules، ومتطبقة بقاعدة ESLint. وجوه كل module الترتيب ثابت: route ← controller ← service ← repository.",
          },
          {
            en: "PostgreSQL enforces the business rules: partial unique indexes (one active cart per customer, one active delivery per driver), check constraints, and SELECT … FOR UPDATE locks instead of check-then-act.",
            ar: "PostgreSQL هو اللي بيطبّق قواعد البيزنس: partial unique indexes (سلة واحدة نشطة لكل عميل، وتوصيلة واحدة نشطة لكل سواق)، و check constraints، و SELECT … FOR UPDATE بدل check-then-act.",
          },
          {
            en: "Order status is a pure state machine — 7 statuses, 16 actor-qualified transitions — and an exhaustive 281-case sweep covers every combination. Money is NUMERIC in the database and BigInt minor units in JavaScript; no float ever touches a price.",
            ar: "حالة الطلب state machine صافية: 7 حالات و 16 انتقال مرتبطين بمين اللي بيعمل الحركة، و 281 test case بيغطوا كل الاحتمالات. والفلوس NUMERIC في الـ database و BigInt في JavaScript، ومفيش float بيلمس أي سعر.",
          },
        ],
      },
      {
        heading: { en: "Security", ar: "الأمان" },
        body: [
          {
            en: "Rotating refresh tokens with family-wide revocation on reuse, 15-minute access tokens, server-side price recomputation, Zod-stripped input, per-route rate limits, and 404 instead of 403 so the API never confirms another user's id exists.",
            ar: "Refresh tokens بتتغير مع كل استخدام وبتتلغي العيلة كلها لو اتعاد استخدام واحد، و access tokens صلاحيتها 15 دقيقة، والسيرفر بيعيد حساب الأسعار، والمدخلات بتتنضف بـ Zod، و rate limits لكل route، و 404 بدل 403 عشان الـ API ميأكدش إن id مستخدم تاني موجود.",
          },
        ],
      },
      {
        heading: { en: "Nine bugs the earlier tests missed", ar: "تسع bugs الاختبارات اللي قبلها فاتتها" },
        body: [
          {
            en: "Writing 14 Playwright end-to-end scenarios surfaced nine real defects that 610 earlier tests had missed, because their fixtures created states the product itself could never reach.",
            ar: "كتابة 14 سيناريو E2E بـ Playwright كشفت تسع bugs حقيقية فاتت 610 اختبار قبلهم، لأن بيانات الاختبارات دي كانت بتعمل حالات المنتج نفسه عمره ما يوصلها.",
          },
          {
            en: "Among them: a new restaurant could never be approved (a deadlock between two rules), quick double taps silently dropped cart items, order-number collisions crashed checkout, and modals did not trap keyboard focus.",
            ar: "منها: مطعم جديد عمره ما كان هيتوافق عليه (deadlock بين قاعدتين)، والضغط مرتين بسرعة كان بيوقّع منتج من السلة، وتكرار رقم الطلب كان بيوقّع الـ checkout، والـ modals مكانتش بتحبس الـ focus.",
          },
        ],
      },
    ],
  },
];

export const moreProjects: Project[] = [
  {
    slug: "taskflow",
    name: "TaskFlow",
    tagline: { en: "Full-stack task manager", ar: "تطبيق إدارة مهام Full-stack" },
    summary: {
      en: "JWT auth with per-user task isolation, priorities with filtering and sorting, dark mode without a flash, and 117 automated tests.",
      ar: "تسجيل دخول بـ JWT وكل مستخدم شايف مهامه بس، وأولويات بفلترة وترتيب، و dark mode من غير flash، و 117 اختبار آلي.",
    },
    stack: ["React", "Vite", "Node.js", "Express", "Vitest", "Jest"],
    repo: "https://github.com/George-Nabil-Aziz/todo-list-task-flow",
  },
  {
    slug: "category-product",
    name: "CategoryProduct",
    tagline: { en: ".NET products & categories manager", ar: "إدارة منتجات وتصنيفات بـ .NET" },
    summary: {
      en: "A full-stack .NET application with CRUD, business logic and database integration.",
      ar: "تطبيق .NET full-stack فيه CRUD و business logic وربط بقاعدة بيانات.",
    },
    stack: ["ASP.NET Core", "EF Core", "SQL Server"],
    repo: "https://github.com/George-Nabil-Aziz/CategoryProduct",
  },
];

export const templates: Project[] = [
  {
    slug: "porto",
    name: "Porto",
    tagline: { en: "Bicycle shop storefront", ar: "متجر دراجات" },
    summary: { en: "", ar: "" },
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://george-nabil-aziz.github.io/Porto",
  },
  {
    slug: "nola-cakes",
    name: "Nola Cakes",
    tagline: { en: "Bakery website", ar: "موقع مخبز" },
    summary: { en: "", ar: "" },
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://nola-cakes.netlify.app/",
  },
  {
    slug: "food-blog",
    name: "Food Blog",
    tagline: { en: "Recipes & culinary blog", ar: "مدونة وصفات أكل" },
    summary: { en: "", ar: "" },
    stack: ["HTML", "CSS"],
    live: "https://george-nabil-aziz.github.io/Food-Blog",
  },
  {
    slug: "axit",
    name: "Axit App",
    tagline: { en: "Multi-purpose business template", ar: "قالب شركات متعدد الاستخدام" },
    summary: { en: "", ar: "" },
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://axit-app.netlify.app/",
  },
  {
    slug: "leon",
    name: "Leon",
    tagline: { en: "Business portfolio template", ar: "قالب بورتفوليو للشركات" },
    summary: { en: "", ar: "" },
    stack: ["HTML", "CSS"],
    live: "https://html-css-template-1-leon.netlify.app/",
  },
  {
    slug: "kasper",
    name: "Kasper",
    tagline: { en: "Creative agency template", ar: "قالب لوكالات الإبداع" },
    summary: { en: "", ar: "" },
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://kasper-template-html-css-js.netlify.app/",
  },
];

export const miniProjects: MiniProject[] = [
  { name: "To Do Login", href: "https://to-do-login-application.netlify.app/" },
  { name: "Hangman", href: "https://hangman-game-play.netlify.app/" },
  { name: "Typing Speed Test", href: "https://typing-speed-test-application.netlify.app/" },
  { name: "Memory Game", href: "https://memory-gameplay.netlify.app/" },
  { name: "Weather App", href: "https://great-stack-challenge-weather-app.netlify.app/" },
  { name: "Quiz App", href: "https://great-stack-challenge-quiz-app.netlify.app/" },
  { name: "Notes App", href: "https://great-stack-challenge-notes-app.netlify.app/" },
];
