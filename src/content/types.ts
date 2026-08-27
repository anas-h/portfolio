export type Experience = {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  highlights: string[];
  stack: string[];
};

/**
 * Nature d'un nœud dans un schéma d'architecture. Détermine sa couleur et sa
 * bordure : `core` est ce qu'Anass a construit, le reste est le décor.
 */
export type NodeKind = "entry" | "core" | "external" | "store";

export type DiagramNode = {
  label: string;
  kind: NodeKind;
};

/**
 * Schéma volontairement abstrait : les projets sont sous NDA, on montre la
 * forme du système et non les écrans.
 */
export type Architecture = {
  caption: string;
  /** Chaîne principale, rendue de gauche à droite. */
  flow: DiagramNode[];
  /** Briques rattachées au flux, sans position imposée. */
  branches?: DiagramNode[];
};

export type Project = {
  slug: string;
  title: string;
  context: string;
  year: string;
  /** Une phrase pour la carte de la grille. */
  summary: string;
  /** Résultat en quelques mots, mis en avant sur la carte. */
  outcome: string;
  /** Ce qu'Anass a tenu sur le projet. */
  role: string;
  problem: string;
  solution: string[];
  impact: string;
  stack: string[];
  architecture: Architecture;
  link?: { label: string; href: string };
};

export type Content = {
  profile: {
    name: string;
    role: string;
    tagline: string;
    location: string;
    photo: string;
    email: string;
    linkedin: string;
    github: string;
    cv: string;
  };
  /** Repères chiffrés du hero. Rien qui ne soit vérifiable dans le contenu. */
  heroStats: { value: string; label: string }[];
  experiences: Experience[];
  projects: Project[];
  stack: { group: string; items: string[] }[];
  education: { year: string; title: string; detail: string }[];
  languages: { name: string; level: string }[];
  /** Libellés d'interface, hors contenu éditorial. */
  ui: {
    skipToContent: string;
    navLabel: string;
    portraitAlt: string;

    navWork: string;
    navStack: string;
    navCv: string;
    navContact: string;

    workTitle: string;
    contactTitle: string;
    contactText: string;

    caseStudy: string;
    readCaseStudy: string;
    backToWork: string;
    roleLabel: string;
    problem: string;
    whatIDid: string;
    result: string;
    architectureTitle: string;
    ndaNote: string;
    stackLabel: string;
    nextProject: string;
    previousProject: string;
    diagramLegend: Record<NodeKind, string>;

    cvTitle: string;
    stackTitle: string;
    educationTitle: string;
    languagesTitle: string;
    viewCv: string;
    viewWork: string;
    downloadCv: string;

    /** Formulaire de contact. */
    form: {
      nameLabel: string;
      emailLabel: string;
      messageLabel: string;
      submit: string;
      submitting: string;
      success: string;
      error: string;
      errorRequired: string;
      errorEmail: string;
      errorTooShort: string;
      orEmailDirect: string;
    };

    footer: string;
    switchLabel: string;
  };
};
