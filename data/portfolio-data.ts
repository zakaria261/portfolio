export const personalInfo = {
  name: "Zakaria RAHOU",
  title: "Computer Science & Data Engineering Student",
  description:
    "Étudiant ingénieur en informatique et sciences des données spécialisé en visualisation scientifique, intelligence artificielle et développement logiciel. Approche rigoureuse, méthodologie scientifique et capacités avancées en analyse de données.",
  email: "zakaria_rahou@yahoo.fr",
  phone: "+33 7 67 96 54 30",
  location: "Annecy, France",
  linkedin: "https://linkedin.com/in/zakaria-rahou",
  github: "https://github.com/zakaria261",
};

// -------------------------------------------------------------

export const skills = [
  {
    title: "Langages de Programmation",
    skills: ["Python", "Java", "C++", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
    icon: "code",
    description: "Langages orientés objet, scripts scientifiques et développement moderne",
  },
  {
    title: "Frameworks & Bibliothèques",
    skills: ["React", "Next.js", "Angular", "Vite", "Node.js", "Spring Boot"],
    icon: "globe",
    description: "Développement full-stack et interfaces orientées composants",
  },
  {
    title: "Data, IA & Visualisation",
    skills: [
      "NetworkX",
      "Plotly",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "OpenPyXL",
    ],
    icon: "database",
    description: "Traitement, analyse et représentation scientifique des données",
  },
  {
    title: "Bases de Données",
    skills: ["PostgreSQL", "MongoDB", "SQLite"],
    icon: "storage",
    description: "Modélisation, optimisation de requêtes et gestion de données",
  },
  {
    title: "Outils & DevOps",
    skills: ["Git", "Docker", "Vercel", "Linux", "Excel"],
    icon: "tool",
    description: "Conteneurisation, déploiement et environnement de développement moderne",
  },
  {
    title: "Intelligence Artificielle",
    skills: ["Machine Learning", "Deep Learning", "NLP", "Speech Processing"],
    icon: "brain",
    description: "Conception et entraînement de modèles d'IA, pipelines ML",
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
      "Data science, intelligence artificielle et développement logiciel",
      "Gestion de projet, transformation digitale et éthique IT",
      "Expérience pratique en traitement de données, machine learning et génie logiciel",
      "Projets hands-on et collaborations industrielles",
    ],
    skills: ["Python", "Machine Learning", "Data Engineering", "Software Development"],
  },
  {
    year: "2021 - 2023",
    title: "Classes Préparatoires aux Grandes Écoles",
    company: "Université Grenoble Alpes",
    location: "Grenoble, France",
    type: "Formation",
    description: "Programme intensif en mathématiques, physique et sciences de l'ingénieur.",
    points: [
      "Cours avancés en mathématiques, physique et sciences de l'ingénieur",
      "Résolution de problèmes, pensée analytique et raisonnement scientifique",
      "Développement de compétences computationnelles et de modélisation",
    ],
    skills: ["Mathématiques", "Physique", "Algorithmique", "Modélisation"],
  },
];

// -------------------------------------------------------------

export const projects = [
  {
    title: "Dashboard de Suivi des Compétences Étudiantes",
    description:
      "Tableau de bord interactif pour analyser et visualiser la progression des compétences des étudiants Polytech (S5-S10). Modélisation de graphes avec NetworkX, visualisations 3D interactives (rotation, zoom, hover) avec Plotly, et interface moderne avec Shadcn UI.",
    tags: ["NetworkX", "Plotly 3D", "Python", "Shadcn UI", "Data Viz"],
    image: "/projects/dataviz.jpg",
    link: "#",
    category: "Data Science",
    featured: true,
  },
  {
    title: "Portfolio Numérique Interactif",
    description:
      "Portfolio personnel moderne et totalement interactif développé avec Next.js. Architecture orientée composants avec rendu optimisé, UX épurée et layout responsive. Déployé sur Vercel pour performance et fiabilité.",
    tags: ["Next.js", "React", "Tailwind", "Vercel"],
    image: "/projects/portfolio.jpg",
    link: "https://portfolio-beige-delta-89.vercel.app",
    category: "Full Stack",
    featured: true,
  },
  {
    title: "Assistant IA de Gestion Budgétaire",
    description:
      "Assistant intelligent qui analyse automatiquement les transactions financières des utilisateurs. Identification de patterns de dépenses, insights automatisés et recommandations personnalisées. Déploiement dans un environnement Docker reproductible.",
    tags: ["Next.js", "React", "MongoDB", "Gemini API", "Docker", "NLP"],
    image: "/projects/budget-ai.jpg",
    link: "#",
    category: "IA & Full Stack",
    featured: true,
  },
  {
    title: "Site Commercial ThermoElite & Système de Génération de Leads",
    description:
      "Site web commercial pour ThermoElite (confinement par rétraction thermique). Interface responsive présentant services et cas d'usage. Formulaire de génération de leads envoyant les messages clients directement par email. Déployé sur Vercel.",
    tags: ["Next.js", "React", "Tailwind", "Email API", "Vercel"],
    image: "/projects/thermoelite.jpg",
    link: "https://thermo-elite-website.vercel.app",
    category: "Full Stack",
    featured: true,
  },
  {
    title: "Assistant Vocal pour Restaurants",
    description:
      "Interface vocale pour gestion de commandes avec traitement speech-to-text et NLP en temps réel. Flux conversationnels intelligents et gestion des commandes par la voix. Intégration Gemini API et Twilio pour traitement du signal vocal.",
    tags: ["Next.js", "JavaScript", "Gemini API", "Twilio", "NLP", "Speech Processing"],
    image: "/projects/voice-assistant.jpg",
    link: "#",
    category: "IA & Full Stack",
    featured: true,
  },
  {
    title: "Traitement de Données & Analyse Business – France Plomberie Chauffage",
    description:
      "Traitement et nettoyage de datasets (clients, prospects, leads, fournisseurs) avec Python Pandas. Automatisation des transformations et export structuré vers Excel via OpenPyXL. Production de résumés et KPI pour aide à la décision opérationnelle.",
    tags: ["Python", "Pandas", "OpenPyXL", "Excel", "Data Analysis"],
    image: "/projects/business-analysis.jpg",
    link: "#",
    category: "Data Science",
    featured: false,
  },
  {
    title: "Application Web pour Projets Académiques (APP)",
    description:
      "Site web collaboratif pour présenter les projets académiques de Polytech. Gestion des informations : listes participants, sessions, documents, galerie photos et fonctionnalités interactives. Optimisation des requêtes SQL pour améliorer les performances base de données.",
    tags: ["Web Development", "SQL", "JavaScript", "Database Optimization"],
    image: "/projects/academic-app.jpg",
    link: "#",
    category: "Full Stack",
    featured: false,
  },
  {
    title: "Logiciel de Gestion de Bibliothèque",
    description:
      "Analyse des besoins pour gestion de bibliothèque municipale (livres, CD, DVD). Conception et implémentation des fonctionnalités clés : suivi des emprunts, gestion du catalogue, recherche avancée. Modélisation UML et développement full-stack.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "UML"],
    image: "/projects/library.jpg",
    link: "#",
    category: "Full Stack",
    featured: false,
  },
  {
    title: "Mini-Projets Multi-Langages",
    description:
      "Collection de projets individuels et en équipe utilisant Python, Java et C. Focus sur les algorithmes, structures de données, optimisation et résolution de problèmes. Développement collaboratif avec bonnes pratiques Git.",
    tags: ["Python", "Java", "C", "Algorithmique", "Git"],
    image: "/projects/mini-projects.jpg",
    link: "#",
    category: "Divers",
    featured: false,
  },
];

// -------------------------------------------------------------

export const interests = [
  {
    emoji: "✈️",
    title: "Expérience Internationale",
    description:
      "1 an en Australie + voyages extensifs. Forte adaptabilité cross-culturelle et ouverture d'esprit internationale.",
  },
  {
    emoji: "🤝",
    title: "Leadership Sportif",
    description:
      "Entraîneur de football pour jeunes — gestion d'équipe, mentorat et communication.",
  },
  {
    emoji: "🏔️",
    title: "Randonnée",
    description:
      "Randonnées mensuelles dans les Alpes. Passion pour la nature et la photographie de paysages.",
  },
  {
    emoji: "📚",
    title: "Veille Technologique",
    description:
      "Suivi actif des avancées en IA, machine learning, data engineering et développement durable.",
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