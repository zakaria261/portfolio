export const personalInfo = {
  name: "Zakaria RAHOU",
  title: "Data Engineering Student",
  description: "Étudiant ingénieur en informatique et sciences des données, diplômé en septembre 2027. Passionné par l'analyse de données, l'intelligence artificielle et le développement logiciel.",
  email: "zakaria_rahou@yahoo.fr",
  phone: "+61 7 67 96 54 30",
  location: "Annecy, France",
  linkedin: "https://linkedin.com/in/zakaria-rahou",
  github: "#",
};

export const skills = [
  {
    title: "Langages de Programmation",
    skills: ["C++", "Java", "Python", "HTML", "CSS", "JavaScript", "TypeScript"],
    icon: "code",
    description: "Maîtrise des langages orientés objet et scripts modernes"
  },
  {
    title: "Frameworks & Bibliothèques",
    skills: ["ASP.NET", "Angular", "React", "Next.js", "Spring Boot", "Node.js"],
    icon: "globe",
    description: "Développement full-stack avec frameworks modernes"
  },
  {
    title: "Data & Bases de Données",
    skills: ["SQL Server", "PostgreSQL", "MongoDB", "Pandas", "NumPy", "Scikit-learn"],
    icon: "database",
    description: "Gestion et analyse de données à grande échelle"
  },
  {
    title: "Outils & DevOps",
    skills: ["Git", "Docker", "CI/CD", "Linux", "Azure", "AWS"],
    icon: "tool",
    description: "Infrastructure moderne et bonnes pratiques DevOps"
  },
  {
    title: "Intelligence Artificielle",
    skills: ["Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "NLP"],
    icon: "brain",
    description: "Algorithmes d'IA et apprentissage automatique"
  },
  {
    title: "Compétences Interpersonnelles",
    skills: ["Travail d'équipe", "Communication", "Gestion du temps", "Adaptabilité", "Leadership"],
    icon: "heart",
    description: "Soft skills essentiels pour collaboration efficace"
  }
];

export const experiences = [
  {
    year: "2023 - 2027",
    title: "Master of Science - Informatique & Ingénierie des Données",
    company: "Polytech Annecy",
    location: "Annecy, France",
    type: "Formation",
    description: "Formation d'ingénieur spécialisée en science des données et intelligence artificielle",
    points: [
      "Cours avancés en apprentissage automatique, traitement du langage naturel et big data",
      "Développement de projets en équipe utilisant des méthodologies agiles",
      "Spécialisation en data engineering et architectures cloud",
      "Cours supplémentaires en gestion de projet, transformation numérique et éthique informatique",
      "Expérience pratique en traitement de données, apprentissage automatique et ingénierie logicielle"
    ],
    skills: ["Python", "Machine Learning", "Big Data", "Cloud Computing", "Data Engineering"]
  },
  {
    year: "2021 - 2023",
    title: "Classes Préparatoires aux Grandes Écoles",
    company: "Université Grenoble Alpes",
    location: "Grenoble, France",
    type: "Formation",
    description: "Programme intensif en Mathématiques & Physique",
    points: [
      "Cours intensifs en mathématiques avancées, physique et sciences de l'ingénieur",
      "Accent sur la résolution de problèmes, la pensée analytique et le raisonnement scientifique",
      "Développement de compétences en calcul et modélisation par une formation et des projets rigoureux",
    ],
    skills: ["Mathématiques", "Physique", "Algorithmique", "Résolution de problèmes"]
  }
];

export const projects = [
  {
    title: "Système de Gestion de Bibliothèque",
    description: "Analyse des besoins municipaux pour la gestion de bibliothèque, incluant le suivi des prêts de livres, CD et DVD. Conception et implémentation des fonctionnalités clés pour rationaliser les opérations.",
    tags: ["Java", "SQL", "Spring Boot", "REST API", "PostgreSQL"],
    image: "/projects/library.jpg",
    link: "#",
    category: "Full Stack",
    featured: true
  },
  {
    title: "Plateforme d'Analyse de Données",
    description: "Extraction et analyse d'une base de données d'entreprise avec visualisations interactives. Développement de dashboards pour insights business en temps réel.",
    tags: ["Python", "Pandas", "Plotly", "Excel", "Data Analysis"],
    image: "/projects/data-analysis.jpg",
    link: "#",
    category: "Data Science",
    featured: true
  },
  {
    title: "Application Web de Projets Académiques",
    description: "Création d'un site web pour présenter des projets académiques (APP). Gestion des informations du site, incluant les listes de participants, sessions, documents, galerie photos et fonctionnalités interactives. Optimisation des requêtes SQL pour améliorer les performances.",
    tags: ["React", "Node.js", "PostgreSQL", "Express", "Tailwind CSS"],
    image: "/projects/academic-projects.jpg",
    link: "#",
    category: "Full Stack",
    featured: true
  },
  {
    title: "Système de Don Humanitaire",
    description: "Assistance à une organisation caritative en développant un système de dons pour la construction de puits. Interface intuitive avec suivi en temps réel des dons.",
    tags: ["React", "Firebase", "Stripe", "Humanitarian"],
    image: "/projects/humanitarian.jpg",
    link: "#",
    category: "Impact Social",
    featured: false
  },
  {
    title: "Modèle de Prédiction ML",
    description: "Développement d'un modèle de machine learning pour prédiction de séries temporelles. Preprocessing, feature engineering et déploiement du modèle.",
    tags: ["Python", "Scikit-learn", "TensorFlow", "ML", "API"],
    image: "/projects/ml-model.jpg",
    link: "#",
    category: "Data Science",
    featured: false
  },
  {
    title: "Mini-Projets Multi-Langages",
    description: "Collection de projets à petite échelle développés individuellement et en collaboration utilisant plusieurs langages de programmation (Python, Java, C, C++).",
    tags: ["Python", "Java", "C++", "Algorithmes", "Teamwork"],
    image: "/projects/mini-projects.jpg",
    link: "#",
    category: "Divers",
    featured: false
  }
];

export const interests = [
  {
    emoji: "🤝",
    title: "Travail en Équipe & Bénévolat",
    description: "Assistance aux organisations footballistique via le développement de jeune joueurs et la gestion d'équipé"
  },
  {
    emoji: "✈️",
    title: "Voyages",
    description: "Voyages en sac à dos en solo autour du monde, découverte de nouvelles cultures (Australie, Asie, Europe)"
  },
  {
    emoji: "🏔️",
    title: "Randonnée",
    description: "Randonnées mensuelles dans les Alpes françaises, alpinisme et photographie de paysages"
  },
  {
    emoji: "📚",
    title: "Lecture & Veille Techno",
    description: "Passionné par les nouvelles technologies, l'IA et le développement durable"
  }
];

export const testimonials = [
  {
    quote: "Zakaria est un développeur talentueux avec une grande capacité d'apprentissage. Son travail sur notre projet a dépassé nos attentes.",
    name: "Jean Dupont",
    title: "CTO, Tech Company",
    image: "/testimonials/person1.jpg"
  },
  {
    quote: "Excellent travail d'équipe et compétences techniques solides. Zakaria a apporté une réelle valeur ajoutée à notre équipe.",
    name: "Marie Martin",
    title: "Project Manager",
    image: "/testimonials/person2.jpg"
  }
];