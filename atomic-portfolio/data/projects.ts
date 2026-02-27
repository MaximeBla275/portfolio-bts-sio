// ============================================================
// DONNÉES PORTFOLIO — MAXIME BLANCO — BTS SIO SLAM
// Lycée Lamartine, Mâcon — Session 2025-2026
// ============================================================

export interface Competence {
  code: string
  libelle: string
  covered: boolean
  bloc: number
}

export interface Project {
  id: number
  title: string
  subtitle: string
  context: string
  description: string
  objectif: string
  technologies: string[]
  competences: string[]
  type: 'scolaire' | 'stage' | 'personnel'
  stageId?: number
  year: string
  period?: string
  github?: string
  url?: string
  rapport?: string
  emoji: string
  color: string
}

export interface Stage {
  id: number
  entreprise: string
  secteur: string
  ville: string
  periode: string
  annee: '1ère année' | '2ème année'
  description: string
  missions: string[]
  technologies: string[]
  bilan: string
  competences: string[]
  image?: string
  logo?: string
  rapport?: string
  detailPage?: string
  color: string
}

// ============================================================
// COMPÉTENCES OFFICIELLES BTS SIO — Référentiel national
// ============================================================
export const competencesSLAM: Competence[] = [

  // ── Bloc 1 — Gérer le patrimoine informatique ──────────
  { bloc: 1, code: '1.1', libelle: 'Recenser et identifier les ressources numériques', covered: true },
  { bloc: 1, code: '1.2', libelle: 'Exploiter des référentiels, normes et standards adoptés par le prestataire informatique', covered: true },
  { bloc: 1, code: '1.3', libelle: "Mettre en place et vérifier les niveaux d'habilitation associés à un service", covered: true },
  { bloc: 1, code: '1.4', libelle: "Vérifier les conditions de la continuité d'un service informatique", covered: false },
  { bloc: 1, code: '1.5', libelle: 'Gérer des sauvegardes', covered: false },
  { bloc: 1, code: '1.6', libelle: "Vérifier le respect des règles d'utilisation des ressources numériques", covered: false },

  // ── Bloc 2 — Répondre aux incidents et demandes d'assistance ──
  { bloc: 2, code: '2.1', libelle: 'Collecter, suivre et orienter des demandes', covered: true },
  { bloc: 2, code: '2.2', libelle: 'Traiter des demandes concernant les services réseau et système, applicatifs', covered: true },
  { bloc: 2, code: '2.3', libelle: 'Traiter des demandes concernant les applications', covered: true },

  // ── Bloc 3 — Développer la présence en ligne ──────────
  { bloc: 3, code: '3.1', libelle: "Participer à la valorisation de l'image de l'organisation sur les médias numériques", covered: false },
  { bloc: 3, code: '3.2', libelle: "Référencer les services en ligne de l'organisation et mesurer leur visibilité", covered: false },
  { bloc: 3, code: '3.3', libelle: "Participer à l'évolution d'un site Web exploitant les données de l'organisation", covered: true },

  // ── Bloc 4 — Travailler en mode projet ────────────────
  { bloc: 4, code: '4.1', libelle: "Analyser les objectifs et les modalités d'organisation d'un projet", covered: true },
  { bloc: 4, code: '4.2', libelle: 'Planifier les activités', covered: true },
  { bloc: 4, code: '4.3', libelle: "Évaluer les indicateurs de suivi d'un projet et analyser les écarts", covered: true },

  // ── Bloc 5 — Mettre à disposition un service ──────────
  { bloc: 5, code: '5.1', libelle: "Réaliser les tests d'intégration et d'acceptation d'un service", covered: true },
  { bloc: 5, code: '5.2', libelle: 'Déployer un service', covered: true },
  { bloc: 5, code: '5.3', libelle: "Accompagner les utilisateurs dans la mise en place d'un service", covered: false },

  // ── Bloc 6 — Organiser son développement professionnel ─
  { bloc: 6, code: '6.1', libelle: "Mettre en place son environnement d'apprentissage personnel", covered: true },
  { bloc: 6, code: '6.2', libelle: 'Mettre en œuvre des outils et stratégies de veille informationnelle', covered: true },
  { bloc: 6, code: '6.3', libelle: 'Gérer son identité professionnelle', covered: true },
  { bloc: 6, code: '6.4', libelle: 'Développer son projet professionnel', covered: true },
]

export const blocsCompetences = [
  { numero: 1, emoji: '🗄️', titre: 'Gérer le patrimoine informatique',                                         competences: competencesSLAM.filter(c => c.bloc === 1) },
  { numero: 2, emoji: '🛠️', titre: "Répondre aux incidents et aux demandes d'assistance et d'évolution",       competences: competencesSLAM.filter(c => c.bloc === 2) },
  { numero: 3, emoji: '🌐', titre: "Développer la présence en ligne de l'organisation",                        competences: competencesSLAM.filter(c => c.bloc === 3) },
  { numero: 4, emoji: '📋', titre: 'Travailler en mode projet',                                                 competences: competencesSLAM.filter(c => c.bloc === 4) },
  { numero: 5, emoji: '🚀', titre: 'Mettre à disposition des utilisateurs un service informatique',             competences: competencesSLAM.filter(c => c.bloc === 5) },
  { numero: 6, emoji: '🎯', titre: 'Organiser son développement professionnel',                                 competences: competencesSLAM.filter(c => c.bloc === 6) },
]

// ============================================================
// STAGES
// ============================================================
export const stages: Stage[] = [
  {
    id: 1,
    entreprise: 'Cookson-CLAL',
    secteur: 'Industrie — Métaux précieux & bijouterie',
    ville: 'Dardilly (69)',
    periode: 'Mai — Juillet 2025 · 1ère année',
    annee: '1ère année',
    description: "Stage de première année au sein du service informatique de Cookson-CLAL, entreprise spécialisée dans les métaux précieux. Mission principale : modernisation du script de connexion réseau de l'entreprise.",
    missions: [
      'Analyse et compréhension du script de login existant écrit en VBScript (obsolète)',
      'Réécriture complète du script en PowerShell moderne',
      "Correction des options défaillantes suite à l'obsolescence du VBScript",
      'Ajout de nouvelles fonctionnalités au script de connexion',
      "Tests en environnement de production et validation avec l'équipe IT",
    ],
    technologies: ['PowerShell', 'VBScript', 'Windows Server', 'Active Directory'],
    bilan: "Stage très formateur sur l'environnement professionnel IT en entreprise industrielle. J'ai appris à analyser du code existant, à le moderniser et à gérer une migration technique en production.",
    competences: ['1.1', '1.2', '2.2', '2.3', '5.1', '6.1'],
    rapport: '/rapports/rapport-stage-cookson.pdf',
    logo: '/logos/cookson.svg',
    detailPage: '/stages/cookson',
    color: '#b45309',
  },
  {
    id: 2,
    entreprise: 'Xefi Grand Lyon — HOPLA',
    secteur: 'ESN — Développement web & services IT',
    ville: 'Rillieux-la-Pape (69)',
    periode: 'Janvier — Février 2026 · 2ème année',
    annee: '2ème année',
    description: "Stage de deuxième année au sein de la division HOPLA de Xefi Grand Lyon. Stage orienté développement web fullstack : contribution à de vrais projets utilisés par l'entreprise.",
    missions: [
      "Projet 1 — Backend Laravel (mini-Pronote) : API REST complète, gestion des rôles élève/professeur/admin",
      "Projet 2 — Machine à sous Vue.js/Nuxt.js : gestion d'état et composants Vuetify",
      "Projet 3 — Radio interne Xefi (production) : ajout gestion utilisateurs bannis",
      "Projet 4 — Guides WeDrop multilingue : tutoriels intégrés en 6 langues via vue-i18n",
      "Livraison et revue de code validée par deux développeurs seniors sur GitLab",
    ],
    technologies: ['Laravel', 'Vue.js', 'Nuxt.js', 'Vuetify', 'vue-i18n', 'Docker', 'WSL2', 'Postman', 'PhpStorm', 'MySQL', 'GitLab'],
    bilan: "Stage très enrichissant techniquement et humainement. Travailler sur de vrais produits utilisés par de vraies entreprises, avec une vraie équipe et de vraies contraintes de qualité, est quelque chose que la formation seule ne peut pas apporter.",
    competences: ['1.1', '1.2', '1.3', '2.1', '2.3', '3.3', '4.1', '4.2', '4.3', '5.1', '5.2', '6.1', '6.2', '6.3', '6.4'],
    rapport: '/rapports/rapport-stage-xefi.pdf',
    logo: '/logos/xefi.svg',
    detailPage: '/stages/xefi',
    color: '#1d4ed8',
  },
]

// ============================================================
// PROJETS
// ============================================================
export const projects: Project[] = [

  // ── STAGE COOKSON ─────────────────────────────────────────
  {
    id: 1,
    title: 'Script Login PowerShell',
    subtitle: 'Migration VBScript → PowerShell — Cookson-CLAL',
    context: "Stage de 1ère année chez Cookson-CLAL. Le script de connexion réseau était écrit en VBScript obsolète causant des dysfonctionnements sur les postes Windows modernes.",
    description: "Réécriture complète du script de login réseau : passage de VBScript vers PowerShell. Correction des options défaillantes, ajout de nouvelles fonctionnalités, intégration dans l'infrastructure Active Directory.",
    objectif: "Moderniser le script de connexion pour le rendre compatible avec les systèmes Windows actuels.",
    technologies: ['PowerShell', 'VBScript', 'Windows Server', 'Active Directory'],
    competences: ['1.1', '1.2', '2.2', '2.3', '5.1'],
    type: 'stage',
    stageId: 1,
    year: '2025',
    period: 'Mai — Juil. 2025',
    rapport: '/rapports/rapport-stage-cookson.pdf',
    emoji: '⚙️',
    color: '#b45309',
  },

  // ── STAGE XEFI ────────────────────────────────────────────
  {
    id: 2,
    title: 'Mini-Pronote — Backend Laravel',
    subtitle: 'API REST / Laravel / MySQL — Xefi HOPLA',
    context: "Premier projet du stage Xefi Grand Lyon (division HOPLA). Validation des compétences backend Laravel.",
    description: "Application backend Laravel avec API REST complète pour gérer utilisateurs, classes, devoirs et notes. Gestion des rôles (élève, professeur, admin). Base de données MySQL dans Docker. Tests Postman.",
    objectif: "Valider les compétences Laravel (MVC, migrations, Eloquent ORM, routes API) et la maîtrise de Docker/WSL2.",
    technologies: ['Laravel', 'PHP', 'MySQL', 'Docker', 'WSL2', 'Postman', 'PhpStorm', 'GitLab'],
    competences: ['1.3', '2.1', '4.1', '5.1', '5.2', '6.1'],
    type: 'stage',
    stageId: 2,
    year: '2026',
    period: 'Janv. — Fév. 2026',
    rapport: '/rapports/rapport-stage-xefi.pdf',
    emoji: '🎓',
    color: '#1d4ed8',
  },
  {
    id: 3,
    title: 'Machine à sous — Vue.js',
    subtitle: 'Interface frontend interactive — Nuxt.js / Vuetify — Xefi HOPLA',
    context: "Deuxième projet du stage Xefi. Exercice pédagogique pour maîtriser Vue.js et Nuxt.js.",
    description: "Application frontend simulant une machine à sous : trois chiffres aléatoires, jackpot si identiques, crédits dynamiques, messages de résultat. Composants Vuetify réutilisables.",
    objectif: "Maîtriser la gestion d'état Vue.js, la séparation logique/affichage et les composants réutilisables.",
    technologies: ['Vue.js', 'Nuxt.js', 'Vuetify', 'JavaScript', 'Docker'],
    competences: ['4.1', '4.2', '5.1', '6.1'],
    type: 'stage',
    stageId: 2,
    year: '2026',
    period: 'Janv. — Fév. 2026',
    rapport: '/rapports/rapport-stage-xefi.pdf',
    emoji: '🎰',
    color: '#7c3aed',
  },
  {
    id: 4,
    title: 'Radio interne Xefi',
    subtitle: 'Dashboard admin — Gestion utilisateurs bannis — Xefi HOPLA',
    context: "Troisième projet du stage Xefi, sur un projet en production réelle. La radio interne Xefi est une plateforme de lives internes.",
    description: "Ajout au dashboard admin : liste des utilisateurs bannis par live, boutons débannir/conserver, mise à jour dynamique. Travail sur codebase existante avec revue de code sur GitLab.",
    objectif: "Contribuer à un vrai projet en production, implémenter une feature complète de la BDD à l'interface.",
    technologies: ['Vue.js', 'Nuxt.js', 'Vuetify', 'Laravel', 'MySQL', 'Postman', 'GitLab'],
    competences: ['2.3', '3.3', '4.1', '4.2', '4.3', '5.2', '6.3'],
    type: 'stage',
    stageId: 2,
    year: '2026',
    period: 'Janv. — Fév. 2026',
    rapport: '/rapports/rapport-stage-xefi.pdf',
    emoji: '📻',
    color: '#0891b2',
  },
  {
    id: 5,
    title: 'Guides WeDrop — Multilingue',
    subtitle: '6 langues / vue-i18n — Xefi HOPLA',
    context: "Quatrième projet du stage Xefi. WeDrop est la solution de partage de fichiers de Xefi. Mission : créer des guides utilisateurs intégrés.",
    description: "Guides interactifs étape par étape intégrés dans WeDrop. Architecture Atomic Design. Disponible en 6 langues (FR, EN, ES, DE, IT, NL) via vue-i18n. Validé après revue de code sur GitLab.",
    objectif: "Créer un module complet, maintenable et multilingue intégré à un produit en production.",
    technologies: ['Vue.js', 'Nuxt.js', 'Vuetify', 'vue-i18n', 'GitLab', 'Docker'],
    competences: ['2.1', '3.3', '4.1', '4.2', '4.3', '5.2', '6.2', '6.4'],
    type: 'stage',
    stageId: 2,
    year: '2026',
    period: 'Janv. — Fév. 2026',
    rapport: '/rapports/rapport-stage-xefi.pdf',
    emoji: '🌍',
    color: '#059669',
  },

  // ── PROJETS SCOLAIRES 1ÈRE ANNÉE ──────────────────────────
  {
    id: 6,
    title: 'LFP1 — Site Ligue 1',
    subtitle: 'C# / ASP.NET / MySQL — 1ère année',
    context: "Projet scolaire de 1ère année. Site web de gestion et suivi des résultats de Ligue 1. Avec Blanchard Da Cunha Léo.",
    description: "Site web C# ASP.NET : CRUD matchs et équipes, affichage des classements en temps réel, interface responsive. Base de données MySQL via PHPMyAdmin. Développement en binôme avec séparation back/front.",
    objectif: "Maîtriser le développement web C# ASP.NET, la gestion d'une BDD relationnelle et le travail en équipe.",
    technologies: ['C#', 'ASP.NET', 'Visual Studio', 'MySQL', 'PHPMyAdmin'],
    competences: ['3.3', '4.1', '4.2', '5.1'],
    type: 'scolaire',
    year: '2024',
    period: 'Sept. 2024 — Mai 2025',
    rapport: '/rapports/rapport-lfp1.pdf',
    emoji: '⚽',
    color: '#16a34a',
  },
  {
  id: 7,
  title: 'LFP2 — Ligue 1 + Comptes',
  subtitle: 'C# / ASP.NET — Comptes utilisateurs & commentaires — 1ère année',
  context: "Suite du projet LFP1, 1ère année. Ajout d'un système de comptes utilisateurs, d'authentification et de commentaires. Avec Blanchard Da Cunha Léo.",
  description: "Évolution du site LFP1 : authentification complète (création de compte, connexion/déconnexion), espace commentaires sur les matchs, journaux de match détaillés.",
  objectif: "Ajouter une couche communautaire au site LFP1 : authentification, gestion de comptes et interactions utilisateurs.",
  technologies: ['C#', 'ASP.NET', 'Visual Studio', 'MySQL', 'PHPMyAdmin'],
  competences: ['3.3', '4.1', '4.2', '5.1'],
  type: 'scolaire',
  year: '2025',
  period: 'Mai 2025',
  rapport: '/rapports/rapport-lfp2.pdf',
  emoji: '🏟️',
  color: '#15803d',
},

  // ── PROJETS SCOLAIRES 2ÈME ANNÉE ──────────────────────────
  {
    id: 8,
    title: 'ADA Phase 1 — WinForms C#',
    subtitle: 'Application desktop location véhicules — C# / 2ème année',
    context: "Projet scolaire de 2ème année. Application desktop C# pour la gestion d'une agence de location de véhicules ADA. Avec El Yahyaoui Yacine.",
    description: "Application WinForms C# complète : connexion sécurisée, gestion du parc véhicules (ajout/suppression, filtrage par catégorie), gestion des clients, consultation et filtrage des contrats de location. Développée en mode Scrum.",
    objectif: "Répondre aux user stories du cahier des charges ADA : gestion des agences, véhicules, clients et contrats depuis une application desktop.",
    technologies: ['C#', 'Visual Studio', 'WinForms', 'MySQL', 'PHPMyAdmin'],
    competences: ['1.1', '4.1', '4.2', '5.1', '6.1'],
    type: 'scolaire',
    year: '2025',
    period: 'Sept. — Déc. 2025',
    rapport: '/rapports/rapport-ada1.pdf',
    emoji: '🚗',
    color: '#c8371a',
  },
  {
    id: 9,
    title: 'ADA Phase 2 — Site Laravel',
    subtitle: 'Site web location véhicules — Laravel / MySQL — 2ème année',
    context: "Suite du projet ADA, 2ème année. Réécriture en site web Laravel avec réservation en ligne. Avec El Yahyaoui Yacine.",
    description: "Site web Laravel/MySQL : catalogue véhicules par genre et catégorie, création de compte client, authentification, réservation en ligne avec vérification des disponibilités sur période, historique des contrats. Architecture MVC respectant les conventions Laravel.",
    objectif: "Développer un site web complet en Laravel avec authentification, gestion des réservations et consultation des données métier ADA.",
    technologies: ['Laravel', 'PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
    competences: ['3.3', '4.1', '4.2', '5.1', '5.2', '6.4'],
    type: 'scolaire',
    year: '2025',
    period: 'Sept. — Déc. 2025',
    rapport: '/rapports/rapport-ada2.pdf',
    emoji: '🌐',
    color: '#b45309',
  },
]

// ============================================================
// VEILLE TECHNO
// ============================================================
export const veilleItems = [
  {
    id: 1,
    titre: "Les développeurs et l'IA en 2025 : ce que révèle le rapport DORA de Google",
    resume: "Le rapport annuel DORA de Google (basé sur ~5 000 réponses mondiales) révèle que 90 % des développeurs utilisent l'IA en 2025, soit +14 % en un an. Point clé : l'IA agit comme un amplificateur — elle renforce les équipes solides et aggrave les failles des équipes en difficulté.",
    source: 'Blog du Modérateur',
    date: 'Septembre 2025',
    url: 'https://www.blogdumoderateur.com/developpeurs-ia-2025-rapport-google/',
    tags: ['IA', 'Productivité', 'Rapport Google', 'DORA', 'Développeurs'],
  },
  {
    id: 2,
    titre: "Comment les développeurs utilisent l'IA en 2025 — Étude JetBrains",
    resume: "L'étude State of Developer Ecosystem 2025 de JetBrains montre que 91 % des entreprises ont intégré l'IA, et 85 % des développeurs y recourent pour coder. ChatGPT domine avec 41 % d'utilisation régulière, suivi de GitHub Copilot et Cursor.",
    source: 'Blog du Modérateur',
    date: 'Octobre 2025',
    url: 'https://www.blogdumoderateur.com/comment-developpeurs-utilisent-ia-2025/',
    tags: ['IA', 'JetBrains', 'Étude', 'ChatGPT', 'GitHub Copilot'],
  },
  {
    id: 3,
    titre: "GitHub Copilot rend les développeurs 55 % plus productifs — Interview du COO de GitHub",
    resume: "Kyle Daigle, COO de GitHub, explique comment Copilot est passé de simple outil d'autocomplétion à assistant complet. Il cite une hausse de productivité de 55 % mesurée en interne chez GitHub.",
    source: 'Le Monde Informatique',
    date: 'Mars 2024',
    url: 'https://www.lemondeinformatique.fr/actualites/lire-kyle-daigle-coo-de-github--copilot-rend-les-developpeurs-55-plus-productifs-93136.html',
    tags: ['GitHub Copilot', 'Productivité', 'IA générative', 'Microsoft'],
  },
  {
    id: 4,
    titre: "IA et développement logiciel en 2025 — Vers une ingénierie augmentée",
    resume: "Synthèse sur les tendances 2025 : intégration des LLMs dans les IDE, pratiques GitOps, pipelines CI/CD automatisées et montée du DevSecOps. Le développeur de 2025 est un artisan de la résilience et de la sécurité des systèmes.",
    source: 'Programmez.com',
    date: 'Mai 2025',
    url: 'https://www.programmez.com/actualites/chronique-ia-developpement-logiciel-en-2025-vers-une-ingenierie-augmentee-37641',
    tags: ['IA générative', 'LLM', 'IDE', 'DevOps', 'Ingénierie logicielle'],
  },
  {
    id: 5,
    titre: "Copilotes IA : créer plus vite, coder moins — Analyse des gains et des risques",
    resume: "62 % des ingénieurs déclarent au moins 25 % de gain de productivité, ~42 % du code serait déjà généré par IA. Mais 96 % des développeurs n'ont pas totalement confiance au code produit par l'IA. L'article couvre aussi les risques juridiques et les bonnes pratiques.",
    source: 'Hurter & Co',
    date: 'Février 2026',
    url: 'https://www.hurterandco.group/copilotes-ia-creer-plus-vite-coder-moins/',
    tags: ['Copilote IA', 'Productivité', 'Risques', 'Sécurité', 'Code généré'],
  },
]
