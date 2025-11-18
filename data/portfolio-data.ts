export const personalInfo = {
  name: "Zakaria RAHOU",
  title: "Computer Science & Data Engineering Student",
  description:
    "Étudiant ingénieur en informatique et sciences des données spécialisé en visualisation scientifique, intelligence artificielle et développement logiciel. Approche rigoureuse, méthodologie scientifique et capacités avancées en analyse de données.",
  email: "zakaria_rahou@yahoo.fr",
  phone: "+33 7 67 96 54 30",
  location: "Annecy, France",
  linkedin: "https://linkedin.com/in/zakaria-rahou",
  github: "#",
};

// -------------------------------------------------------------

export const skills = [
  {
    title: "Langages de Programmation",
    skills: ["Python", "Java", "C++", "JavaScript", "TypeScript", "HTML", "CSS"],
    icon: "code",
    description: "Langages orientés objet, scripts scientifiques et développement moderne",
  },
  {
    title: "Frameworks & Bibliothèques",
    skills: ["React", "Next.js", "Angular", "Vite", "Node.js", "Spring Boot", "ASP.NET"],
    icon: "globe",
    description: "Développement full-stack et interfaces orientées composants",
  },
  {
    title: "Data, IA & Visualisation",
    skills: [
      "Tableau",
      "Power BI",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
    ],
    icon: "database",
    description: "Traitement, analyse et représentation scientifique des données",
  },
  {
    title: "Bases de Données",
    skills: ["PostgreSQL", "SQL Server", "MongoDB", "SQLite"],
    icon: "storage",
    description: "Modélisation, optimisation de requêtes et gestion de données",
  },
  {
    title: "Outils & DevOps",
    skills: ["Git", "Docker", "CI/CD", "Linux"],
    icon: "tool",
    description: "Conteneurisation, automatisation et environnement de développement moderne",
  },
  {
    title: "Intelligence Artificielle",
    skills: ["Machine Learning", "Deep Learning", "NLP"],
    icon: "brain",
    description: "Conception et entraînement de modèles d’IA",
  },
  {
    title: "Compétences Interpersonnelles",
    skills: ["Travail d'équipe", "Communication", "Adaptabilité", "Gestion du temps"],
    icon: "heart",
    description: "Collaboration efficace et résolution de problèmes complexes",
  },
];

// -------------------------------------------------------------

export const experiences = [
  {
    year: "2023 - 2027",
    title: "Master of Science - Informatique & Ingénierie des Données",
    company: "Polytech Annecy",
    location: "Annecy, France",
    type: "Formation",
    description:
      "Formation axée sur l'analyse scientifique, la modélisation, la data engineering et l'intelligence artificielle.",
    points: [
      "Analyse de données, apprentissage automatique et traitement du signal",
      "Data visualisation avancée avec Tableau et Power BI",
      "Développement logiciel scientifique et architectures distribuées",
      "Méthodologie scientifique, reproductibilité et bonnes pratiques",
    ],
    skills: ["Python", "Machine Learning", "Tableau", "Data Engineering"],
  },
  {
    year: "2021 - 2023",
    title: "Classes Préparatoires aux Grandes Écoles",
    company: "Université Grenoble Alpes",
    location: "Grenoble, France",
    type: "Formation",
    description: "Programme intensif en mathématiques, physique et algorithmique.",
    points: [
      "Méthodologie scientifique rigoureuse et modélisation",
      "Résolution avancée de problèmes complexes",
      "Renforcement en algorithmique et logique mathématique",
    ],
    skills: ["Mathématiques", "Physique", "Algorithmique"],
  },
];

// -------------------------------------------------------------

export const projects = [
  {
    title: "Plateforme de Visualisation Scientifique – Compétences Polytech S5–S10",
    description:
      "Conception d’un tableau de bord scientifique permettant d’analyser la progression des compétences des étudiants. Préparation des données, modélisation, extraction de KPI et visualisation interactive.",
    tags: ["Tableau", "Power BI", "Python", "Pandas", "Data Viz"],
    image: "/projects/dataviz.jpg",
    link: "#",
    category: "Data Science",
    featured: true,
  },
  {
    title: "Assistant IA pour la Gestion Budgétaire",
    description:
      "Outil intelligent analysant automatiquement les transactions financières, avec recommandations IA, extraction de patterns et dashboards analytiques. Déploiement conteneurisé avec Docker.",
    tags: ["Python", "NLP", "Machine Learning", "Data Analysis", "Docker"],
    image: "/projects/budget-ai.jpg",
    link: "#",
    category: "IA",
    featured: true,
  },
  {
    title: "Assistant Vocal pour Restaurants",
    description:
      "Système de prise de commande par la voix utilisant traitement du signal et NLP. Interface front-end en Vite et architecture modulaire.",
    tags: ["NLP", "Speech Processing", "Node.js", "Vite"],
    image: "/projects/voice-assistant.jpg",
    link: "#",
    category: "Full Stack / IA",
    featured: true,
  },
  {
    title: "Portfolio Numérique – CV Scientifique",
    description:
      "Développement d’un portfolio interactif moderne en Next.js avec présentation scientifique des projets, animations légères et design épuré.",
    tags: ["Next.js", "React", "Tailwind", "Vite"],
    image: "/projects/portfolio.jpg",
    link: "#",
    category: "Full Stack",
    featured: true,
  },
  {
    title: "Système de Gestion de Bibliothèque",
    description:
      "Analyse scientifique du besoin, modélisation UML et développement d’un système de gestion documentaire pour bibliothèque municipale.",
    tags: ["Java", "Spring Boot", "PostgreSQL"],
    image: "/projects/library.jpg",
    link: "#",
    category: "Full Stack",
    featured: false,
  },
  {
    title: "Modèle de Prédiction Machine Learning",
    description:
      "Préprocessing, feature engineering et développement d’un modèle de prédiction sur séries temporelles. Analyse scientifique et expérimentation.",
    tags: ["Python", "TensorFlow", "Scikit-learn"],
    image: "/projects/ml.jpg",
    link: "#",
    category: "IA",
    featured: false,
  },
  {
    title: "Mini-Projets Multi-Langages",
    description:
      "Collection de projets individuels et en équipe utilisant divers langages : optimisation, algorithmes et structures de données.",
    tags: ["Python", "Java", "C++", "Algorithmique"],
    image: "/projects/mini-projects.jpg",
    link: "#",
    category: "Divers",
    featured: false,
  },
];

// -------------------------------------------------------------

export const interests = [
  {
    emoji: "🤝",
    title: "Travail en Équipe & Bénévolat",
    description:
      "Contribution à des projets associatifs et accompagnement d’équipes sportives et humanitaires.",
  },
  {
    emoji: "✈️",
    title: "Voyages",
    description:
      "Voyages en sac à dos dans le monde : Australie, Asie, Europe. Découverte scientifique et culturelle.",
  },
  {
    emoji: "🏔️",
    title: "Randonnée",
    description:
      "Randonnées mensuelles dans les Alpes, passion pour la nature et la photographie de paysages.",
  },
  {
    emoji: "📚",
    title: "Lecture & Veille Technologique",
    description:
      "IA, innovation scientifique, développement durable, avancées technologiques.",
  },
];

// -------------------------------------------------------------

export const testimonials = [
  {
    quote:
      "Zakaria est un développeur talentueux avec une grande capacité d'apprentissage. Son approche scientifique apporte une réelle rigueur aux projets.",
    name: "Jean Dupont",
    title: "CTO, Tech Company",
    image: "/testimonials/person1.jpg",
  },
  {
    quote:
      "Excellente méthodologie, rigueur et compétences techniques solides. Zakaria a eu un vrai impact dans notre équipe.",
    name: "Marie Martin",
    title: "Project Manager",
    image: "/testimonials/person2.jpg",
  },
];
