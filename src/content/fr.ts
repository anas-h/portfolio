import type { Content } from "./types";

export const fr: Content = {
  profile: {
    name: "Anass Hilama",
    role: "Développeur Full Stack Senior",
    tagline:
      "Je construis depuis plus de 10 ans des parcours et des API critiques pour la banque, l'assurance et le retail. Aujourd'hui, j'y branche de l'IA.",
    location: "Île-de-France",
    photo: "/anass.jpg",
    email: "hilama.anas@gmail.com",
    linkedin: "https://www.linkedin.com/in/anas_hilama",
    github: "https://github.com/anas-h",
    cv: "/cv.pdf",
  },

  heroStats: [
    { value: "2015", label: "Premières lignes en production" },
    { value: "Banque · Assurance · Retail", label: "Secteurs" },
  ],

  experiences: [
    {
      period: "Jan. 2024 — Aujourd'hui",
      role: "Développeur Senior Symfony / Next.js",
      company: "Mediaposte",
      location: "Montrouge",
      type: "Mission",
      highlights: [
        "Conception d'un moteur de templating alimentant les smart catalogues, avec consolidation d'une base de connaissances pour chaque produit exposé.",
        "Automatisation de la génération des visuels promotionnels via l'API Abyssale, en remplacement d'une production manuelle.",
        "Développement et exposition des API REST, documentées sous Swagger, avec gestion fine des droits, rôles et utilisateurs.",
        "Mise en place d'un tableau de bord statistique et des tests unitaires associés.",
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
      period: "Déc. 2021 — Déc. 2023",
      role: "Développeur Senior Symfony / Vue.js",
      company: "Carrefour Banque & Assurance",
      location: "Évry",
      type: "Mission",
      highlights: [
        "Migration des parcours de souscription de Drupal vers Symfony et Vue.js, et des API exposées par Convertigo vers Symfony 6.",
        "Mutualisation des composants entre le parcours carte bancaire et le parcours prêt personnel, pour supprimer la double maintenance.",
        "Garant de la qualité de code entre les squads : revues de PR, standards partagés, suivi des MEP.",
        "Réalisation de PoC Symfony / Vue.js en amont des cadrages, pour challenger la faisabilité technique.",
      ],
      stack: ["PHP 8", "Symfony 6", "Vue.js", "Drupal", "REST", "Git", "Scrum"],
    },
    {
      period: "Jan. 2020 — Nov. 2023",
      role: "Développeur PHP / Symfony",
      company: "Groupama — G2S",
      location: "Puteaux",
      type: "Mission",
      highlights: [
        "Développement d'un back-office sur Sonata Admin et mise en responsive du thème.",
        "Conception et exposition des API REST, documentées sous Swagger.",
        "Analyse technique des besoins métier avec les PO et PM, participation aux cadrages amont.",
        "Tests unitaires, gestion des incidents et suivi des mises en production.",
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
      period: "Jan. 2019 — Déc. 2019",
      role: "Développeur PHP / Symfony / Angular",
      company: "INNAX",
      location: "Rueil-Malmaison",
      type: "Mission",
      highlights: [
        "Consolidation des données provenant de différents laboratoires au sein d'un référentiel unique.",
        "Mise en place d'un tableau de bord statistique et de la gestion des droits, rôles et utilisateurs.",
        "Développement des API REST et intégration du thème.",
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
      period: "Mai 2015 — Déc. 2018",
      role: "Développeur PHP / Symfony / Angular",
      company: "Kindy",
      location: "CDI",
      type: "CDI",
      highlights: [
        "Conception et développement du moteur de prix, corrélant le prix des produits au comportement des leads.",
        "Développement des API REST et de leur documentation Swagger.",
        "Analyse technique des besoins métier et participation aux cadrages.",
      ],
      stack: ["PHP 7.3", "Symfony 4", "Angular 2", "MariaDB", "Apache"],
    },
  ],

  projects: [
    {
      slug: "smart-catalogues",
      title: "Smart catalogues & génération d'assets",
      context: "Mediaposte",
      year: "2024 — Aujourd'hui",
      summary:
        "Industrialisation de la production des catalogues promotionnels : moteur de gabarits, référentiel produit consolidé et génération automatique des visuels.",
      outcome: "La campagne devient de la configuration",
      role: "Développeur senior — moteur de templating, API REST, base de connaissances produit.",
      problem:
        "La production des catalogues promotionnels reposait sur un travail manuel répété à chaque campagne, sans référentiel produit consolidé ni visibilité sur les résultats.",
      solution: [
        "Conception d'un moteur de templating permettant de composer les smart catalogues à partir de gabarits réutilisables.",
        "Consolidation d'une base de connaissances couvrant chaque produit exposé dans les catalogues.",
        "Génération automatique des visuels promotionnels via l'API Abyssale.",
        "Tableau de bord statistique et gestion des droits, rôles et utilisateurs.",
      ],
      impact:
        "Une chaîne de production de catalogues industrialisée, où la création d'une campagne relève de la configuration plutôt que de la fabrication manuelle.",
      stack: ["Symfony 5", "Next.js", "TypeScript", "API Abyssale", "MariaDB"],
      architecture: {
        caption:
          "Un référentiel produit en amont, des gabarits réutilisables au milieu, la génération d'assets en aval : le manuel disparaît de la chaîne.",
        flow: [
          { label: "Base de connaissances produit", kind: "store" },
          { label: "Moteur de templating (Symfony)", kind: "core" },
          { label: "API Abyssale", kind: "external" },
          { label: "Visuels de campagne", kind: "entry" },
        ],
        branches: [
          { label: "Tableau de bord statistique", kind: "core" },
          { label: "Droits, rôles & utilisateurs", kind: "core" },
        ],
      },
    },
    {
      slug: "carte-pass",
      title: "Parcours de souscription Carte PASS",
      context: "Carrefour Banque & Assurance",
      year: "2021 — 2023",
      summary:
        "Migration de deux parcours de souscription bancaire hors d'un Drupal vieillissant, vers un socle Symfony et Vue.js mutualisé.",
      outcome: "Deux parcours, une seule base de code",
      role: "Développeur senior — migration, architecture du parcours, garant qualité entre squads.",
      problem:
        "Les parcours de souscription carte bancaire et prêt personnel tournaient sur un Drupal vieillissant, avec des formulaires longs sur lesquels les abandons se concentraient, et deux bases de code à maintenir en parallèle.",
      solution: [
        "Migration complète du parcours de Drupal vers Symfony et Vue.js, et des API exposées par Convertigo vers Symfony 6.",
        "Refonte en formulaire multi-étapes avec une UX travaillée, pour découper la saisie plutôt que de la présenter d'un bloc.",
        "Mise en place d'un mécanisme de Save & Retrieve : le client reçoit un mail et reprend son parcours exactement à l'étape où il s'est arrêté.",
        "Mutualisation des composants entre les deux parcours, pour ramener la double maintenance à une seule base commune.",
        "Exposition d'une API SourcingData qui collecte les données saisies et les met à disposition de l'équipe data.",
      ],
      impact:
        "Un socle unique pour deux parcours, une reprise de saisie possible après interruption, et une stack maintenable alignée sur le reste du SI.",
      stack: ["Symfony 6", "Vue.js", "REST", "Drupal", "MySQL"],
      architecture: {
        caption:
          "Un parcours multi-étapes en Vue.js posé sur des API Symfony, avec la reprise de saisie et l'alimentation data branchées de côté.",
        flow: [
          { label: "Client", kind: "entry" },
          { label: "Parcours multi-étapes (Vue.js)", kind: "core" },
          { label: "API Symfony 6", kind: "core" },
          { label: "SI bancaire", kind: "external" },
        ],
        branches: [
          { label: "Save & Retrieve — e-mail de reprise", kind: "core" },
          { label: "API SourcingData → équipe data", kind: "core" },
          { label: "Composants mutualisés carte / prêt", kind: "core" },
        ],
      },
      link: {
        label: "Voir le parcours en ligne",
        href: "https://www.carrefour-banque.fr/carte-pass/demande-carte-pass",
      },
    },
    {
      slug: "signature-electronique",
      title: "Signature électronique & pièces justificatives",
      context: "Carrefour Banque & Assurance",
      year: "2022 — 2023",
      summary:
        "Dématérialisation complète de la fin de parcours crédit : FIPEN générée à la volée, signature électronique et contrôle des pièces au dépôt.",
      outcome: "Fin de parcours 100 % dématérialisée",
      role: "Développeur senior — parcours de signature, génération documentaire, intégration QuickSign.",
      problem:
        "Finaliser une souscription de crédit à distance impose deux obligations lourdes : remettre au client une FIPEN conforme, et collecter des pièces justificatives réellement exploitables — le tout sans casser le parcours.",
      solution: [
        "Développement d'un parcours multi-étapes dédié à la signature et à la collecte des pièces.",
        "Génération à la volée du PDF de la FIPEN (fiche précontractuelle d'information emprunteur) à partir des données saisies dans le parcours.",
        "Transmission des informations client à QuickSign pour créer la transaction de signature électronique.",
        "Interface d'upload des pièces justificatives en Vue.js, avec vérification de chaque document via l'API LADRAD de QuickSign.",
      ],
      impact:
        "Un parcours de signature conforme et intégralement dématérialisé, avec un contrôle des pièces effectué au moment du dépôt plutôt qu'en aval.",
      stack: ["Symfony", "Vue.js", "QuickSign", "API LADRAD", "PDF"],
      architecture: {
        caption:
          "Deux obligations réglementaires traitées dans le même parcours : produire le document contractuel, et contrôler les pièces avant de les accepter.",
        flow: [
          { label: "Fin de parcours crédit", kind: "entry" },
          { label: "Génération FIPEN (PDF)", kind: "core" },
          { label: "Transaction de signature", kind: "core" },
          { label: "QuickSign", kind: "external" },
        ],
        branches: [
          { label: "Upload des pièces (Vue.js)", kind: "core" },
          { label: "API LADRAD — contrôle au dépôt", kind: "external" },
        ],
      },
      link: {
        label: "Voir Carrefour Banque",
        href: "https://www.carrefour-banque.fr/",
      },
    },
    {
      slug: "detection-fraude",
      title: "Détection de fraude sur les parcours",
      context: "Carrefour Banque & Assurance",
      year: "2022 — 2023",
      summary:
        "Détection de fraude branchée dans le parcours lui-même — signal à la connexion, vérification des données saisies, remédiation automatique du compte.",
      outcome: "Contrôle pendant le parcours, pas après",
      role: "Développeur senior — intégration des signaux de fraude et API de remédiation.",
      problem:
        "Un parcours de souscription ouvert au public est une cible : usurpation d'identité, comptes compromis, données de contact fabriquées de toutes pièces.",
      solution: [
        "Intégration de Human, qui analyse à la connexion l'identifiant internet, l'adresse IP et le User-Agent pour lever un signal de fraude.",
        "Développement d'une API appelée par Human lorsqu'une fraude est détectée, forçant l'utilisateur concerné à modifier son mot de passe à la connexion suivante.",
        "Consommation des webservices LucyDiamond et LucyPhone (Streamind) pour vérifier que les données saisies correspondent à des données réelles.",
      ],
      impact:
        "Une détection branchée directement sur le parcours plutôt qu'en contrôle a posteriori, avec remédiation automatique côté compte utilisateur.",
      stack: ["Symfony", "REST", "Human", "LucyDiamond", "LucyPhone"],
      architecture: {
        caption:
          "Le signal de fraude ne s'arrête pas à une alerte : il déclenche une action sur le compte concerné dès la connexion suivante.",
        flow: [
          { label: "Connexion au parcours", kind: "entry" },
          { label: "Human — ID internet, IP, User-Agent", kind: "external" },
          { label: "API de remédiation (Symfony)", kind: "core" },
          { label: "Compte utilisateur", kind: "store" },
        ],
        branches: [
          { label: "LucyDiamond — vérification identité", kind: "external" },
          { label: "LucyPhone — vérification contact", kind: "external" },
        ],
      },
      link: {
        label: "Voir Carrefour Banque",
        href: "https://www.carrefour-banque.fr/",
      },
    },
    {
      slug: "granvillage",
      title: "Granvillage — la marketplace en circuit court",
      context: "Groupama — G2S",
      year: "2020 — 2023",
      summary:
        "Plateforme mettant en relation directe producteurs et consommateurs : le back-office par lequel les agriculteurs tiennent leur activité, et les API qui alimentent le parcours d'achat.",
      outcome: "Les producteurs pilotent leur activité eux-mêmes",
      role: "Développeur senior — back-office, API REST, analyse technique avec les PO et PM.",
      problem:
        "Une marketplace en circuit court ne tient que si les producteurs gèrent eux-mêmes leur catalogue, leurs commandes et leurs livraisons — depuis une exploitation, souvent sur mobile, sans solliciter un support technique à chaque opération.",
      solution: [
        "Développement du back-office sur Sonata Admin et mise en responsive du thème, pour qu'il reste utilisable en dehors d'un bureau.",
        "Conception et exposition des API REST consommées par le parcours d'achat, documentées sous Swagger.",
        "Analyse technique des besoins métier avec les PO et les PM, et participation aux cadrages amont.",
        "Tests unitaires, traitement des incidents et suivi des mises en production sur OpenShift.",
      ],
      impact:
        "Un back-office tenu directement par les producteurs, et des API documentées sur lesquelles le parcours consommateur s'appuie.",
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
          "Un back-office Symfony / Sonata tenu par les producteurs, posé sur des API REST que consomme le parcours d'achat.",
        flow: [
          { label: "Producteur", kind: "entry" },
          { label: "Back-office Sonata Admin", kind: "core" },
          { label: "API REST (Symfony 5)", kind: "core" },
          { label: "Catalogue & commandes (MySQL)", kind: "store" },
        ],
        branches: [
          { label: "Parcours d'achat consommateur", kind: "external" },
          { label: "Documentation Swagger", kind: "core" },
          { label: "Déploiement OpenShift", kind: "external" },
        ],
      },
      link: {
        label: "Voir Granvillage",
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
        "API REST",
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
      group: "Données",
      items: ["MySQL", "MariaDB", "PostgreSQL", "SQLite", "Redis"],
    },
    {
      group: "DevOps & Qualité",
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
      group: "Méthodes",
      items: [
        "Agile Scrum",
        "TDD",
        "DDD",
        "SOLID",
        "Clean Code",
        "Revue de code",
        "Refactoring",
      ],
    },
  ],

  education: [
    {
      year: "2020",
      title: "Certification DevOps",
      detail: "Intégration continue, conteneurisation, chaîne de déploiement.",
    },
    {
      year: "2015",
      title: "Diplôme d'ingénieur d'État en informatique",
      detail: "Formation généraliste en génie logiciel et systèmes.",
    },
    {
      year: "2012",
      title: "Classes préparatoires aux grandes écoles",
      detail: "Filière MPSI / MP — mathématiques et physique.",
    },
  ],

  languages: [
    { name: "Français", level: "Bilingue" },
    { name: "Anglais", level: "Avancé" },
  ],

  ui: {
    skipToContent: "Aller au contenu",
    navLabel: "Navigation principale",
    portraitAlt: "Portrait d'Anass Hilama",

    navWork: "Travaux",
    navStack: "Stack",
    navCv: "Parcours",
    navContact: "Contact",

    workTitle: "Travaux",
    contactTitle: "Contact",
    contactText:
      "Une mission, un poste ou simplement une question technique — la boîte mail est ouverte, je réponds toujours.",

    caseStudy: "Projet",
    readCaseStudy: "Voir le projet en détail",
    backToWork: "Tous les travaux",
    roleLabel: "Mon rôle",
    problem: "Le problème",
    whatIDid: "Ce que j'ai fait",
    result: "Le résultat",
    architectureTitle: "Architecture",
    ndaNote:
      "Schéma volontairement abstrait : ces projets sont couverts par un accord de confidentialité, aucune interface réelle n'est reproduite.",
    stackLabel: "Stack",
    nextProject: "Projet suivant",
    previousProject: "Projet précédent",
    diagramLegend: {
      core: "Ce que j'ai construit",
      external: "Service tiers",
      store: "Donnée persistée",
      entry: "Entrée / sortie",
    },

    cvTitle: "Parcours",
    stackTitle: "Stack",
    educationTitle: "Formation",
    languagesTitle: "Langues",
    viewCv: "Voir le parcours complet",
    viewWork: "Voir les travaux",
    downloadCv: "Télécharger le CV",

    form: {
      nameLabel: "Nom",
      emailLabel: "E-mail",
      messageLabel: "Message",
      submit: "Envoyer",
      submitting: "Envoi…",
      success: "Message envoyé. Je reviens vers vous rapidement.",
      error: "L'envoi a échoué. Réessayez, ou écrivez-moi directement.",
      errorRequired: "Ce champ est obligatoire.",
      errorEmail: "Adresse e-mail invalide.",
      errorTooShort: "Message trop court — 20 caractères minimum.",
      orEmailDirect: "Ou directement par e-mail",
    },

    footer:
      "Conçu et développé par Anass Hilama. Next.js, TypeScript et Tailwind CSS.",
    switchLabel: "Changer de langue",
  },
};
