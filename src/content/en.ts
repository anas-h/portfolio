import type { Content } from "./types";

export const en: Content = {
  profile: {
    name: "Anass Hilama",
    role: "Senior Full Stack Developer",
    tagline:
      "For more than 10 years I've been building critical journeys and APIs for banking, insurance and retail. Now I'm wiring AI into them.",
    location: "Paris area, France",
    photo: "/anass.jpg",
    email: "hilama.anas@gmail.com",
    linkedin: "https://www.linkedin.com/in/anas_hilama",
    github: "https://github.com/anas-h",
    cv: "/cv.pdf",
  },

  heroStats: [
    { value: "2015", label: "First lines shipped to production" },
    { value: "Banking · Insurance · Retail", label: "Sectors" },
  ],

  experiences: [
    {
      period: "Jan. 2024 — Present",
      role: "Senior Symfony / Next.js Developer",
      company: "Mediaposte",
      location: "Montrouge",
      type: "Contract",
      highlights: [
        "Designed a templating engine powering the smart catalogues, backed by a consolidated knowledge base for every product on display.",
        "Automated the generation of promotional visuals through the Abyssale API, replacing a manual production process.",
        "Built and exposed the REST APIs, documented with Swagger, with fine-grained permission, role and user management.",
        "Delivered a statistics dashboard along with its unit tests.",
      ],
      stack: [
        "PHP 8.1",
        "Symfony 5",
        "Next.js",
        "TypeScript",
        "MariaDB",
        "Docker",
        "Lando",
        "SonarQube",
      ],
    },
    {
      period: "Dec. 2021 — Dec. 2023",
      role: "Senior Symfony / Vue.js Developer",
      company: "Carrefour Banque & Assurance",
      location: "Évry",
      type: "Contract",
      highlights: [
        "Migrated the subscription journeys from Drupal to Symfony and Vue.js, and the Convertigo-exposed APIs to Symfony 6.",
        "Shared components between the credit card journey and the personal loan journey, removing duplicate maintenance.",
        "Owned code quality across squads: PR reviews, shared standards, release follow-up.",
        "Built Symfony / Vue.js proofs of concept ahead of scoping, to challenge technical feasibility.",
      ],
      stack: ["PHP 8", "Symfony 6", "Vue.js", "Drupal", "REST", "Git", "Scrum"],
    },
    {
      period: "Jan. 2020 — Nov. 2023",
      role: "PHP / Symfony Developer",
      company: "Groupama — G2S",
      location: "Puteaux",
      type: "Contract",
      highlights: [
        "Built a back-office on Sonata Admin and made the theme responsive.",
        "Designed and exposed the REST APIs, documented with Swagger.",
        "Ran technical analysis of business needs with POs and PMs, contributing to upfront scoping.",
        "Unit testing, incident handling and release follow-up.",
      ],
      stack: [
        "PHP 7.4",
        "Symfony 5",
        "Sonata Admin",
        "MySQL",
        "Docker",
        "OpenShift",
        "SonarQube",
      ],
    },
    {
      period: "Jan. 2019 — Dec. 2019",
      role: "PHP / Symfony / Angular Developer",
      company: "INNAX",
      location: "Rueil-Malmaison",
      type: "Contract",
      highlights: [
        "Consolidated data coming from several laboratories into a single reference store.",
        "Delivered a statistics dashboard and permission, role and user management.",
        "Built the REST APIs and integrated the theme.",
      ],
      stack: [
        "PHP 7.3",
        "Symfony 4",
        "Angular 5",
        "TypeScript",
        "MariaDB",
        "OpenShift",
      ],
    },
    {
      period: "May 2015 — Dec. 2018",
      role: "PHP / Symfony / Angular Developer",
      company: "Kindy",
      location: "Permanent",
      type: "Permanent",
      highlights: [
        "Designed and built the pricing engine, correlating product prices with lead behaviour.",
        "Built the REST APIs and their Swagger documentation.",
        "Ran technical analysis of business needs and took part in scoping.",
      ],
      stack: ["PHP 7.3", "Symfony 4", "Angular 2", "MariaDB", "Apache"],
    },
  ],

  projects: [
    {
      slug: "smart-catalogues",
      title: "Smart catalogues & asset generation",
      context: "Mediaposte",
      year: "2024 — Present",
      summary:
        "Industrialising promotional catalogue production: a template engine, a consolidated product reference and automatic visual generation.",
      outcome: "A campaign becomes configuration",
      role: "Senior developer — templating engine, REST APIs, product knowledge base.",
      problem:
        "Producing promotional catalogues relied on manual work repeated for every campaign, with no consolidated product reference and no visibility on results.",
      solution: [
        "Designed a templating engine to compose smart catalogues from reusable layouts.",
        "Consolidated a knowledge base covering every product featured in the catalogues.",
        "Automated the generation of promotional visuals through the Abyssale API.",
        "Statistics dashboard and permission, role and user management.",
      ],
      impact:
        "An industrialised catalogue production chain, where launching a campaign is a matter of configuration rather than manual assembly.",
      stack: ["Symfony 5", "Next.js", "TypeScript", "Abyssale API", "MariaDB"],
      architecture: {
        caption:
          "A product reference upstream, reusable templates in the middle, asset generation downstream: the manual step leaves the chain.",
        flow: [
          { label: "Product knowledge base", kind: "store" },
          { label: "Templating engine (Symfony)", kind: "core" },
          { label: "Abyssale API", kind: "external" },
          { label: "Campaign visuals", kind: "entry" },
        ],
        branches: [
          { label: "Statistics dashboard", kind: "core" },
          { label: "Permissions, roles & users", kind: "core" },
        ],
      },
    },
    {
      slug: "carte-pass",
      title: "PASS Card application journey",
      context: "Carrefour Banque & Assurance",
      year: "2021 — 2023",
      summary:
        "Moving two banking application journeys off an ageing Drupal, onto a shared Symfony and Vue.js foundation.",
      outcome: "Two journeys, one codebase",
      role: "Senior developer — migration, journey architecture, code quality owner across squads.",
      problem:
        "The credit card and personal loan application journeys ran on an ageing Drupal, with long forms where drop-off concentrated, and two codebases to maintain in parallel.",
      solution: [
        "Full migration of the journey from Drupal to Symfony and Vue.js, and of the Convertigo-exposed APIs to Symfony 6.",
        "Rebuilt as a multi-step form with a carefully designed UX, breaking up data entry instead of presenting it all at once.",
        "Introduced a Save & Retrieve mechanism: the customer receives an email and resumes the journey at the exact step they left it.",
        "Shared components across both journeys, collapsing duplicate maintenance into a single common base.",
        "Exposed a SourcingData API collecting submitted data and making it available to the data team.",
      ],
      impact:
        "One foundation for two journeys, data entry that survives an interruption, and a maintainable stack aligned with the rest of the IS.",
      stack: ["Symfony 6", "Vue.js", "REST", "Drupal", "MySQL"],
      architecture: {
        caption:
          "A multi-step Vue.js journey sitting on Symfony APIs, with resumable data entry and the data feed wired in on the side.",
        flow: [
          { label: "Customer", kind: "entry" },
          { label: "Multi-step journey (Vue.js)", kind: "core" },
          { label: "Symfony 6 APIs", kind: "core" },
          { label: "Banking IS", kind: "external" },
        ],
        branches: [
          { label: "Save & Retrieve — resume email", kind: "core" },
          { label: "SourcingData API → data team", kind: "core" },
          { label: "Shared card / loan components", kind: "core" },
        ],
      },
      link: {
        label: "See the live journey",
        href: "https://www.carrefour-banque.fr/carte-pass/demande-carte-pass",
      },
    },
    {
      slug: "signature-electronique",
      title: "Electronic signature & supporting documents",
      context: "Carrefour Banque & Assurance",
      year: "2022 — 2023",
      summary:
        "Fully paperless end of the credit journey: FIPEN generated on the fly, electronic signature, and documents checked at upload time.",
      outcome: "Journey end fully paperless",
      role: "Senior developer — signature journey, document generation, QuickSign integration.",
      problem:
        "Completing a credit application remotely carries two heavy obligations: handing the customer a compliant FIPEN, and collecting supporting documents that are actually usable — without breaking the journey.",
      solution: [
        "Built a dedicated multi-step journey for signature and document collection.",
        "Generated the FIPEN PDF (pre-contractual borrower information sheet) on the fly from the data captured in the journey.",
        "Sent customer information to QuickSign to create the electronic signature transaction.",
        "Built the document upload interface in Vue.js, with each file checked through QuickSign's LADRAD API.",
      ],
      impact:
        "A compliant, fully paperless signature journey, with document checks performed at upload time rather than downstream.",
      stack: ["Symfony", "Vue.js", "QuickSign", "LADRAD API", "PDF"],
      architecture: {
        caption:
          "Two regulatory obligations handled inside the same journey: produce the contractual document, and check documents before accepting them.",
        flow: [
          { label: "End of credit journey", kind: "entry" },
          { label: "FIPEN generation (PDF)", kind: "core" },
          { label: "Signature transaction", kind: "core" },
          { label: "QuickSign", kind: "external" },
        ],
        branches: [
          { label: "Document upload (Vue.js)", kind: "core" },
          { label: "LADRAD API — check at upload", kind: "external" },
        ],
      },
      link: {
        label: "Visit Carrefour Banque",
        href: "https://www.carrefour-banque.fr/",
      },
    },
    {
      slug: "detection-fraude",
      title: "Fraud detection on application journeys",
      context: "Carrefour Banque & Assurance",
      year: "2022 — 2023",
      summary:
        "Fraud detection wired into the journey itself — a signal at login, verification of submitted data, automatic account remediation.",
      outcome: "Checks during the journey, not after",
      role: "Senior developer — fraud signal integration and remediation API.",
      problem:
        "A publicly open application journey is a target: identity theft, compromised accounts, contact details fabricated from scratch.",
      solution: [
        "Integrated Human, which analyses the internet ID, IP address and User-Agent at login to raise a fraud signal.",
        "Built an API called by Human when fraud is detected, forcing the affected user to change their password at next login.",
        "Consumed the LucyDiamond and LucyPhone web services (Streamind) to verify that submitted data matches real-world data.",
      ],
      impact:
        "Detection wired directly into the journey rather than run as an after-the-fact control, with automatic remediation on the user account.",
      stack: ["Symfony", "REST", "Human", "LucyDiamond", "LucyPhone"],
      architecture: {
        caption:
          "The fraud signal doesn't stop at an alert: it triggers an action on the account concerned from the very next login.",
        flow: [
          { label: "Journey login", kind: "entry" },
          { label: "Human — internet ID, IP, User-Agent", kind: "external" },
          { label: "Remediation API (Symfony)", kind: "core" },
          { label: "User account", kind: "store" },
        ],
        branches: [
          { label: "LucyDiamond — identity check", kind: "external" },
          { label: "LucyPhone — contact check", kind: "external" },
        ],
      },
      link: {
        label: "Visit Carrefour Banque",
        href: "https://www.carrefour-banque.fr/",
      },
    },
    {
      slug: "granvillage",
      title: "Granvillage — the short-supply-chain marketplace",
      context: "Groupama — G2S",
      year: "2020 — 2023",
      summary:
        "A platform connecting farmers and consumers directly: the back-office growers run their business from, and the APIs feeding the shopping journey.",
      outcome: "Growers run their own business",
      role: "Senior developer — back-office, REST APIs, technical analysis with the POs and PMs.",
      problem:
        "A short-supply-chain marketplace only works if growers manage their own catalogue, orders and deliveries — from a farm, often on a phone, without calling technical support for every operation.",
      solution: [
        "Built the back-office on Sonata Admin and made the theme responsive, so it stays usable away from a desk.",
        "Designed and exposed the REST APIs consumed by the shopping journey, documented with Swagger.",
        "Ran technical analysis of business needs with the POs and PMs, and took part in upstream scoping.",
        "Unit tests, incident handling and release follow-up on OpenShift.",
      ],
      impact:
        "A back-office growers operate themselves, and documented APIs the consumer journey relies on.",
      stack: [
        "PHP 7.4",
        "Symfony 5",
        "Sonata Admin",
        "MySQL",
        "Docker",
        "OpenShift",
        "SonarQube",
      ],
      architecture: {
        caption:
          "A Symfony / Sonata back-office run by the growers, sitting on REST APIs the shopping journey consumes.",
        flow: [
          { label: "Grower", kind: "entry" },
          { label: "Sonata Admin back-office", kind: "core" },
          { label: "REST API (Symfony 5)", kind: "core" },
          { label: "Catalogue & orders (MySQL)", kind: "store" },
        ],
        branches: [
          { label: "Consumer shopping journey", kind: "external" },
          { label: "Swagger documentation", kind: "core" },
          { label: "OpenShift deployment", kind: "external" },
        ],
      },
      link: {
        label: "Visit Granvillage",
        href: "https://www.granvillage.com/",
      },
    },
  ],

  stack: [
    {
      group: "Backend",
      items: [
        "PHP 7 → 8.3",
        "Symfony 4 → 7",
        "Laravel",
        "Doctrine",
        "REST APIs",
        "Swagger / OpenAPI",
        "Sonata Admin",
        "Microservices",
      ],
    },
    {
      group: "Frontend",
      items: [
        "Vue.js",
        "Angular",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5 / CSS3",
        "LESS",
        "Bootstrap",
      ],
    },
    {
      group: "Data",
      items: ["MySQL", "MariaDB", "PostgreSQL", "SQLite", "Redis"],
    },
    {
      group: "DevOps & Quality",
      items: [
        "Docker",
        "OpenShift",
        "Jenkins",
        "GitLab CI",
        "SonarQube",
        "PHPUnit",
        "Selenium",
        "Xdebug",
      ],
    },
    {
      group: "Practices",
      items: [
        "Agile Scrum",
        "TDD",
        "DDD",
        "SOLID",
        "Clean Code",
        "Code review",
        "Refactoring",
      ],
    },
  ],

  education: [
    {
      year: "2020",
      title: "DevOps Certification",
      detail: "Continuous integration, containerisation, deployment pipeline.",
    },
    {
      year: "2015",
      title: "State Engineering Degree in Computer Science",
      detail: "Generalist training in software engineering and systems.",
    },
    {
      year: "2012",
      title: "Classes préparatoires aux grandes écoles",
      detail: "MPSI / MP track — mathematics and physics.",
    },
  ],

  languages: [
    { name: "French", level: "Bilingual" },
    { name: "English", level: "Advanced" },
  ],

  ui: {
    skipToContent: "Skip to content",
    navLabel: "Site sections",
    portraitAlt: "Portrait of Anass Hilama",

    navWork: "Work",
    navStack: "Stack",
    navCv: "Background",
    navContact: "Contact",

    workTitle: "Work",
    contactTitle: "Contact",
    contactText:
      "A contract, a role, or simply a technical question \u2014 my inbox is open, and I always reply.",

    caseStudy: "Project",
    readCaseStudy: "See the project in detail",
    backToWork: "All work",
    roleLabel: "My role",
    problem: "The problem",
    whatIDid: "What I did",
    result: "The outcome",
    architectureTitle: "Architecture",
    ndaNote:
      "Deliberately abstract diagram: these projects are covered by a non-disclosure agreement, and no real interface is reproduced.",
    stackLabel: "Stack",
    nextProject: "Next project",
    previousProject: "Previous project",
    diagramLegend: {
      core: "What I built",
      external: "Third-party service",
      store: "Persisted data",
      entry: "Input / output",
    },

    cvTitle: "Background",
    stackTitle: "Stack",
    educationTitle: "Education",
    languagesTitle: "Languages",
    viewCv: "See the full background",
    viewWork: "See the work",
    downloadCv: "Download CV",

    form: {
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      submit: "Send",
      submitting: "Sending…",
      success: "Message sent. I'll get back to you shortly.",
      error: "Sending failed. Try again, or email me directly.",
      errorRequired: "This field is required.",
      errorEmail: "Invalid email address.",
      errorTooShort: "Message too short — 20 characters minimum.",
      orEmailDirect: "Or by email directly",
    },

    footer:
      "Designed and built by Anass Hilama. Next.js, TypeScript and Tailwind CSS.",
    switchLabel: "Change language",
  },
};
