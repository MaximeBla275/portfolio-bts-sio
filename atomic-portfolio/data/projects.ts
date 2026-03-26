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
  { bloc: 1, code: '1.1', libelle: 'Recenser et identifier les ressources numériques', covered: true },
  { bloc: 1, code: '1.2', libelle: 'Exploiter des référentiels, normes et standards adoptés par le prestataire informatique', covered: true },
  { bloc: 1, code: '1.3', libelle: "Mettre en place et vérifier les niveaux d'habilitation associés à un service", covered: true },
  { bloc: 1, code: '1.4', libelle: "Vérifier les conditions de la continuité d'un service informatique", covered: true },
  { bloc: 1, code: '1.5', libelle: 'Gérer des sauvegardes', covered: false },
  { bloc: 1, code: '1.6', libelle: "Vérifier le respect des règles d'utilisation des ressources numériques", covered: true },
  { bloc: 2, code: '2.1', libelle: 'Collecter, suivre et orienter des demandes', covered: true },
  { bloc: 2, code: '2.2', libelle: 'Traiter des demandes concernant les services réseau et système, applicatifs', covered: true },
  { bloc: 2, code: '2.3', libelle: 'Traiter des demandes concernant les applications', covered: true },
  { bloc: 3, code: '3.1', libelle: "Participer à la valorisation de l'image de l'organisation sur les médias numériques", covered: true },
  { bloc: 3, code: '3.2', libelle: "Référencer les services en ligne de l'organisation et mesurer leur visibilité", covered: true },
  { bloc: 3, code: '3.3', libelle: "Participer à l'évolution d'un site Web exploitant les données de l'organisation", covered: true },
  { bloc: 4, code: '4.1', libelle: "Analyser les objectifs et les modalités d'organisation d'un projet", covered: true },
  { bloc: 4, code: '4.2', libelle: 'Planifier les activités', covered: true },
  { bloc: 4, code: '4.3', libelle: "Évaluer les indicateurs de suivi d'un projet et analyser les écarts", covered: true },
  { bloc: 5, code: '5.1', libelle: "Réaliser les tests d'intégration et d'acceptation d'un service", covered: true },
  { bloc: 5, code: '5.2', libelle: 'Déployer un service', covered: true },
  { bloc: 5, code: '5.3', libelle: "Accompagner les utilisateurs dans la mise en place d'un service", covered: true },
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
      'Ajout de nouvelles fonctionnalités : montage des lecteurs réseau, lancement des applications métier, gestion des permissions, signature email automatique',
      "Tests en machine virtuelle puis sur postes physiques, validation avec l'équipe IT",
      "Déploiement via GPO (Group Policy Object) sur l'ensemble du parc",
    ],
    technologies: ['PowerShell', 'VBScript', 'Windows Server', 'Active Directory', 'GPO', 'AS400', 'LANSA'],
    bilan: "Stage très formateur sur l'environnement professionnel IT en entreprise industrielle. J'ai appris à analyser du code existant, à le moderniser et à gérer une migration technique en production. La rigueur des tests était primordiale car le script impacte tous les postes de l'entreprise.",
    competences: ['1.1', '1.2', '2.2', '2.3', '4.1', '5.1', '5.2', '6.1'],
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
    description: "Stage de deuxième année au sein de la division HOPLA de Xefi Grand Lyon. Stage orienté développement web fullstack : contribution à de vrais projets utilisés par l'entreprise, dans un environnement professionnel Docker/WSL2/GitLab.",
    missions: [
      "Projet 1 — Backend Laravel (mini-Pronote) : API REST complète, gestion des rôles élève/professeur/admin, base de données MySQL",
      "Projet 2 — Machine à sous Vue.js/Nuxt.js : logique de jeu, animations, composants Vuetify réutilisables",
      "Projet 3 — Radio interne Xefi (production) : ajout de la gestion des utilisateurs bannis dans le dashboard admin",
      "Projet 4 — Guides WeDrop multilingues : tutoriels pas-à-pas intégrés à l'application en 6 langues (vue-i18n)",
      "Livraison et revue de code validée par deux développeurs seniors sur GitLab",
    ],
    technologies: ['Laravel', 'Vue.js', 'Nuxt.js', 'Vuetify', 'vue-i18n', 'Docker', 'WSL2', 'Postman', 'PhpStorm', 'MySQL', 'GitLab'],
    bilan: "Stage très enrichissant, aussi bien techniquement qu'humainement. Avoir travaillé sur un vrai produit utilisé par de vraies entreprises, avec une vraie équipe et de vraies contraintes de qualité, est quelque chose que la formation seule ne peut pas apporter.",
    competences: ['1.1', '1.2', '1.3', '2.1', '2.3', '3.2', '3.3', '4.1', '4.2', '4.3', '5.1', '5.2', '5.3', '6.1', '6.2', '6.3', '6.4'],
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
  {
    id: 1,
    title: 'Script Login PowerShell',
    subtitle: 'Migration VBScript → PowerShell — Cookson-CLAL',
    context: "Stage de 1ère année chez Cookson-CLAL. Le script de connexion réseau était écrit en VBScript obsolète, causant des dysfonctionnements sur les postes Windows modernes : montage des lecteurs réseau défaillant, applications qui ne se lançaient pas, signatures email absentes.",
    description: "Réécriture complète du script de login réseau en PowerShell. Le nouveau script gère le montage des lecteurs réseau selon le profil utilisateur, le lancement automatique des applications métier, la gestion des permissions, et la signature email. Déployé via GPO sur l'ensemble du parc Active Directory.",
    objectif: "Moderniser le script de connexion pour corriger les dysfonctionnements sur Windows 10/11 et étendre les fonctionnalités tout en maintenant la compatibilité avec l'infrastructure AS400/LANSA existante.",
    technologies: ['PowerShell', 'VBScript', 'Windows Server', 'Active Directory', 'GPO'],
    competences: ['1.1', '1.2', '1.4', '1.6', '2.2', '2.3', '4.1', '5.1', '5.2', '6.1'],
    type: 'stage',
    stageId: 1,
    year: '2025',
    period: 'Mai — Juil. 2025',
    rapport: '/rapports/rapport-stage-cookson.pdf',
    emoji: '⚙️',
    color: '#b45309',
  },
  {
    id: 2,
    title: 'Mini-Pronote — Backend Laravel',
    subtitle: 'API REST / Laravel / MySQL — Xefi HOPLA',
    context: "Premier projet du stage Xefi Grand Lyon (division HOPLA). Projet de montée en compétences Laravel avant d'intégrer les projets en production.",
    description: "Application backend Laravel avec API REST complète pour gérer utilisateurs, classes, devoirs et notes. Gestion des rôles différenciés (élève, professeur, administrateur) avec droits d'accès. Base de données MySQL dans un conteneur Docker. Toutes les routes testées avec Postman. Code versionné et livré sur GitLab.",
    objectif: "Valider les compétences Laravel (MVC, migrations, seeders, Eloquent ORM, routes API, middleware) et la maîtrise de l'environnement Docker/WSL2 professionnel.",
    technologies: ['Laravel', 'PHP', 'MySQL', 'Docker', 'WSL2', 'Postman', 'PhpStorm', 'GitLab'],
    competences: ['1.3', '2.1', '2.3', '4.1', '4.2', '5.1', '5.2', '6.1'],
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
    context: "Deuxième projet du stage Xefi. Exercice pédagogique pour maîtriser Vue.js, Nuxt.js et les composants Vuetify avant d'intégrer WeDrop.",
    description: "Application frontend simulant une machine à sous : trois chiffres aléatoires s'affichent à chaque partie, jackpot si identiques, crédits dynamiques, messages de résultat. Séparation logique/affichage, composants Vuetify réutilisables, gestion d'état réactive.",
    objectif: "Maîtriser la gestion d'état Vue.js, la séparation logique/affichage, les composants réutilisables Vuetify et les mécanismes asynchrones JavaScript.",
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
    context: "Troisième projet du stage Xefi, réalisé sur un projet en production. La radio interne est une plateforme de lives internes utilisée quotidiennement par les collaborateurs Xefi.",
    description: "Ajout d'une fonctionnalité complète au dashboard admin : affichage de la liste des utilisateurs bannis par live avec leurs informations, boutons de débannissement ou confirmation du ban, mise à jour dynamique de l'interface. Travail sur codebase existante en équipe, revue de code par des seniors sur GitLab.",
    objectif: "Contribuer à un vrai projet en production, implémenter une feature complète de la base de données à l'interface, en respectant les standards de l'équipe HOPLA.",
    technologies: ['Vue.js', 'Nuxt.js', 'Vuetify', 'Laravel', 'MySQL', 'Postman', 'GitLab'],
    competences: ['2.3', '3.3', '4.1', '4.2', '4.3', '5.1', '5.2', '6.3'],
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
    context: "Quatrième projet du stage Xefi. WeDrop est la solution de partage de fichiers de Xefi (type WeTransfer). Mission : concevoir et intégrer un système de guides utilisateurs interactifs directement dans l'application.",
    description: "Système de guides interactifs étape par étape intégrés dans WeDrop, guidant l'utilisateur sur chaque fonctionnalité clé. Architecture Atomic Design (atoms → molecules → organisms). Disponible en 6 langues (FR, EN, ES, DE, IT, NL) via vue-i18n. Validé par deux développeurs seniors après revue de code sur GitLab.",
    objectif: "Créer un module complet, maintenable et multilingue, intégré à un produit en production, en respectant l'architecture et les standards qualité de l'équipe HOPLA.",
    technologies: ['Vue.js', 'Nuxt.js', 'Vuetify', 'vue-i18n', 'GitLab', 'Docker'],
    competences: ['2.1', '3.2', '3.3', '4.1', '4.2', '4.3', '5.1', '5.2', '5.3', '6.2', '6.4'],
    type: 'stage',
    stageId: 2,
    year: '2026',
    period: 'Janv. — Fév. 2026',
    rapport: '/rapports/rapport-stage-xefi.pdf',
    emoji: '🌍',
    color: '#059669',
  },
  // ── PROJETS SCOLAIRES 1ÈRE ANNÉE ─────────────────────────
  {
    id: 6,
    title: 'LFP1 — Site Ligue 1',
    subtitle: 'C# Visual Studio + PHP / MySQL — 1ère année',
    context: "Projet scolaire de 1ère année (AP). Développement d'une application de gestion et suivi des résultats de Ligue 1. Réalisé en binôme avec Blanchard Da Cunha Léo.",
    description: "Développement d'une application Visual Studio C# pour l'administrateur et d'un site PHP de consultation reliés à une même base MySQL. J'ai travaillé sur la gestion des clubs et des rencontres, la mise à jour du calendrier, la saisie des scores, le calcul du classement et l'édition PDF demandée dans le sujet.",
    objectif: "Développer l'application Visual Studio C# demandée pour l'administration des données de Ligue 1, tout en alimentant un site web PHP de consultation à partir d'une base MySQL commune.",
    technologies: ['C#', 'Visual Studio', 'PHP', 'MySQL', 'PHPMyAdmin'],
    competences: ['3.1', '3.3', '4.1', '4.2', '4.3', '5.1'],
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
    subtitle: 'HTML / CSS / PHP / Bootstrap — Comptes utilisateurs & commentaires — 1ère année',
    context: "Suite du projet LFP1, 1ère année. Ajout d'un système complet de comptes utilisateurs, d'authentification et de commentaires sur les matchs. Réalisé en binôme avec Blanchard Da Cunha Léo.",
    description: "Évolution du projet LFP vers un vrai site HTML / CSS / PHP relié à MySQL avec PDO. J'ai mis en place l'affichage du classement, des clubs et des résultats, la création de compte, l'authentification, puis l'ajout et l'affichage de commentaires sur les rencontres. Le site a ensuite été publié sur un hébergeur distant gratuit.",
    objectif: "Créer le site internet demandé pour la LFP en HTML, CSS et PHP, avec accès MySQL via PDO, hébergement distant et ajout des fonctionnalités de compte et de commentaire prévues dans le sujet.",
    technologies: ['HTML', 'CSS', 'PHP', 'Bootstrap', 'MySQL', 'PDO', 'PHPMyAdmin'],
    competences: ['1.3', '1.4', '3.1', '3.2', '3.3', '4.1', '4.2', '5.1', '5.2'],
    type: 'scolaire',
    year: '2025',
    period: 'Mai 2025',
    rapport: '/rapports/rapport-lfp2.pdf',
    emoji: '🏟️',
    color: '#15803d',
  },
  // ── PROJETS SCOLAIRES 2ÈME ANNÉE ─────────────────────────
  {
    id: 8,
    title: 'ADA Phase 1 — WinForms C#',
    subtitle: 'Application desktop — C# / Entity Framework / SqlServer — 2ème année',
    context: "Projet scolaire de 2ème année (mode Scrum). Développement d'une application desktop C# Entity pour la gestion d'une agence de location de véhicules ADA. Réalisé en binôme avec El Yahyaoui Yacine.",
    description: "Application WinForms C# avec Entity Framework répondant aux user stories ADA : connexion sécurisée, visualisation et filtrage du parc véhicules par catégorie, ajout/suppression de véhicules, gestion des fiches clients, consultation et filtrage des contrats par date. Base de données SqlServer centralisée. Développée en mode Scrum avec sprints.",
    objectif: "Répondre à l'ensemble des user stories ADA dans une application desktop C# Entity Framework en respectant l'architecture MVC, les conventions de nommage et les délais.",
    technologies: ['C#', 'Visual Studio', 'WinForms', 'Entity Framework', 'SqlServer'],
    competences: ['1.1', '1.2', '1.3', '2.3', '4.1', '4.2', '4.3', '5.1', '6.1'],
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
    subtitle: 'Site web location véhicules — Laravel / Bootstrap / MySQL — 2ème année',
    context: "Suite du projet ADA, 2ème année. Réécriture de la solution en site web Laravel accessible depuis un navigateur. Base de données migrée de SqlServer vers MySQL. Réalisé en binôme avec El Yahyaoui Yacine.",
    description: "Site web Laravel/MySQL avec Bootstrap : sélection d'une agence avec ses infos et véhicules, catalogue par genre et catégorie, création de compte client, authentification avec menu adaptatif, réservation en ligne avec vérification des disponibilités, consultation de l'historique des contrats. Architecture MVC Laravel, Eloquent ORM, conventions de nommage respectées.",
    objectif: "Développer un site web complet en Laravel/Bootstrap avec authentification, gestion des réservations et consultation des données métier ADA, en respectant l'architecture MVC.",
    technologies: ['Laravel', 'PHP', 'Bootstrap', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    competences: ['1.2', '1.3', '3.1', '3.2', '3.3', '4.1', '4.2', '4.3', '5.1', '5.2', '5.3'],
    type: 'scolaire',
    year: '2025',
    period: 'Sept. — Déc. 2025',
    rapport: '/rapports/rapport-ada2.pdf',
    emoji: '🌐',
    color: '#b45309',
  },
]

// ============================================================
// VEILLE TECHNOLOGIQUE — 16 articles — L'IA dans le développement
// ============================================================
export const veilleItems = [
  // ── AXE 1 : ADOPTION & CHIFFRES ───────────────────────────
  {
    id: 1,
    axe: 'Adoption & chiffres',
    titre: "Les développeurs et l'IA en 2025 : ce que révèle le rapport DORA de Google",
    resume: "Le rapport DORA de Google (environ 5 000 réponses) révèle que 90 % des développeurs utilisent l'IA en 2025, soit +14 % en un an. Plus de la moitié y consacrent plus de 2 heures par jour. Point clé : l'IA agit comme un amplificateur — elle renforce les équipes performantes et aggrave les difficultés des équipes fragiles. Google formule 7 recommandations concrètes pour une adoption efficace.",
    analyse: "Ce qui m'a frappé dans ce rapport c'est l'idée que l'IA amplifie ce qui existe déjà — les bonnes équipes vont plus vite, les équipes en difficulté galèrent encore plus. Ça veut dire qu'utiliser l'IA sans comprendre ce qu'on fait, ça peut franchement aggraver les choses.",
    source: 'Blog du Modérateur',
    date: 'Septembre 2025',
    url: 'https://www.blogdumoderateur.com/developpeurs-ia-2025-rapport-google/',
    tags: ['IA', 'Productivité', 'Rapport Google', 'DORA'],
  },
  {
    id: 2,
    axe: 'Adoption & chiffres',
    titre: "Comment les développeurs utilisent l'IA en 2025 — Étude JetBrains",
    resume: "L'étude State of Developer Ecosystem 2025 de JetBrains (éditeur de PhpStorm, WebStorm) montre que 91 % des entreprises ont intégré l'IA. ChatGPT domine avec 41 % d'utilisation régulière, suivi de GitHub Copilot et Cursor. Les développeurs préfèrent déléguer les tâches routinières mais garder le contrôle sur les tâches créatives. 51 % sont optimistes mais presque tous expriment des inquiétudes sur la qualité du code.",
    analyse: "J'utilise JetBrains PhpStorm au quotidien depuis mon stage chez Xefi. Cette étude montre que les outils que j'ai appris à maîtriser (PhpStorm, GitLab) sont au cœur des pratiques professionnelles. La distinction entre tâches routinières délégables et tâches créatives à garder est une vraie leçon de méthode.",
    source: 'Blog du Modérateur',
    date: 'Octobre 2025',
    url: 'https://www.blogdumoderateur.com/comment-developpeurs-utilisent-ia-2025/',
    tags: ['IA', 'JetBrains', 'Étude', 'ChatGPT', 'GitHub Copilot'],
  },
  {
    id: 3,
    axe: 'Adoption & chiffres',
    titre: "Développeurs 2025 : salaires, IA et tendances clés — Rapport Stack Overflow",
    resume: "Stack Overflow a interrogé près de 50 000 développeurs dans le monde. En France, 64 % considèrent que l'IA ne menace pas leur emploi (contre 68 % en 2024, une légère baisse). Les profils juniors et généralistes sont plus inquiets. Les métiers les plus demandés restent back-end et full-stack. L'IA pousse les développeurs à se repositionner sur des rôles plus analytiques et moins mécaniques.",
    analyse: "La baisse de confiance chez les juniors dans ce rapport, je la comprends. Le marché est de plus en plus saturé et l'IA fait peur. Ma réponse là-dessus c'est de ne pas rester généraliste : avoir une vraie maîtrise de Laravel et Vue.js plutôt que de survoler plein de trucs.",
    source: 'Free-Work',
    date: 'Octobre 2025',
    url: 'https://www.free-work.com/fr/tech-it/blog/metiers-it/developpeurs-en-2025-salaires-ia-teletravail-ce-que-revele-le-dernier-rapport-stack-overflow',
    tags: ['Emploi', 'Stack Overflow', 'Salaires', 'Marché'],
  },
  // ── AXE 2 : OUTILS & PRATIQUES ────────────────────────────
  {
    id: 4,
    axe: 'Outils & pratiques',
    titre: "GitHub Copilot rend les développeurs 55 % plus productifs — Interview du COO de GitHub",
    resume: "Kyle Daigle, COO de GitHub, explique comment Copilot est passé de simple outil d'autocomplétion à assistant complet. Il cite une hausse de productivité de 55 % mesurée en interne. Ce gain est réinvesti dans des tâches plus stratégiques. Copilot représentait plus de 40 % de la croissance des revenus de GitHub en 2024.",
    analyse: "Ce chiffre de 55 % est souvent cité mais mérite d'être mis en contexte : il s'agit d'une mesure interne de GitHub, favorable à son propre produit. D'autres études montrent des résultats plus nuancés. Cela dit, sur des tâches précises comme la génération de tests unitaires ou les commentaires de documentation — que j'ai pratiquées en stage — le gain est réel.",
    source: 'Le Monde Informatique',
    date: 'Mars 2024',
    url: 'https://www.lemondeinformatique.fr/actualites/lire-kyle-daigle-coo-de-github--copilot-rend-les-developpeurs-55-plus-productifs-93136.html',
    tags: ['GitHub Copilot', 'Productivité', 'Microsoft'],
  },
  {
    id: 5,
    axe: 'Outils & pratiques',
    titre: "Développement web en 2025 : les IA qui vont changer votre façon de coder",
    resume: "Tour d'horizon des outils IA pour développeurs web en 2025 : Cursor (IDE IA spécialisé), GitHub Copilot (complétion temps réel, leader du marché), Codeium (gratuit, 70+ langages), ChatGPT (généraliste, debugging, documentation). L'article conclut que l'IA permet aux développeurs de se concentrer sur l'architecture et la stratégie plutôt que sur l'exécution.",
    analyse: "J'ai utilisé plusieurs de ces outils lors de mes projets. Cursor et GitHub Copilot sont particulièrement utiles pour la génération de boilerplate Laravel et les composants Vue.js répétitifs. Mais j'ai remarqué qu'il faut toujours relire attentivement le code généré : en stage chez Xefi, la revue de code par les seniors a permis d'identifier des inexactitudes que l'IA avait introduites.",
    source: 'Digidop',
    date: 'Octobre 2025',
    url: 'https://www.digidop.com/fr/blog/ia-et-developpement-web-revolution-technologique-en-cours',
    tags: ['Cursor', 'GitHub Copilot', 'Outils IA', 'IDE'],
  },
  {
    id: 6,
    axe: 'Outils & pratiques',
    titre: "Copilotes IA : créer plus vite, coder moins — Analyse des gains et des risques",
    resume: "62 % des ingénieurs déclarent au moins 25 % de gain de productivité avec les copilotes IA. Environ 42 % du code serait déjà généré par IA, avec une projection à 65 % en 2027. Mais 96 % des développeurs n'ont pas totalement confiance au code produit par l'IA. L'article couvre aussi les risques juridiques liés aux droits d'auteur et les bonnes pratiques de gouvernance.",
    analyse: "Le chiffre de 96 % de méfiance est révélateur : même ceux qui utilisent l'IA ne lui font pas entièrement confiance. C'est la bonne posture. Lors de mon stage Xefi, chaque livraison passait par une revue de code humaine — ce n'est pas par hasard. L'IA est un accélérateur, pas un substitut au jugement du développeur.",
    source: 'Hurter & Co',
    date: 'Février 2026',
    url: 'https://www.hurterandco.group/copilotes-ia-creer-plus-vite-coder-moins/',
    tags: ['Copilote IA', 'Productivité', 'Risques', 'Gouvernance'],
  },
  {
    id: 7,
    axe: 'Outils & pratiques',
    titre: "IA et développement logiciel en 2025 — Vers une ingénierie augmentée",
    resume: "Synthèse sur les tendances 2025 : intégration des LLMs dans les IDE (Copilot, CodiumAI, extensions JetBrains), pratiques GitOps, pipelines CI/CD automatisées et montée du DevSecOps. L'auteur défend que le développeur de 2025 n'est plus un simple producteur de fonctionnalités mais un artisan de la résilience et de la sécurité des systèmes.",
    analyse: "Cette vision de l'ingénieur augmenté correspond à ce que j'ai observé en stage chez Xefi : les développeurs seniors n'utilisent pas l'IA pour écrire du code à leur place, mais pour aller plus vite sur ce qu'ils maîtrisent déjà. L'architecture, les décisions techniques et la sécurité restent entièrement humaines.",
    source: 'Programmez.com',
    date: 'Mai 2025',
    url: 'https://www.programmez.com/actualites/chronique-ia-developpement-logiciel-en-2025-vers-une-ingenierie-augmentee-37641',
    tags: ['IA générative', 'LLM', 'DevOps', 'Ingénierie logicielle'],
  },
  // ── AXE 3 : LIMITES & NUANCES ─────────────────────────────
  {
    id: 8,
    axe: 'Limites & nuances',
    titre: "La productivité des développeurs semble baisser quand ils utilisent l'IA générative — Étude METR",
    resume: "L'institut METR (Model Evaluation and Threat Research) a conduit une expérience avec 16 développeurs expérimentés sur 246 tâches réelles (Cursor Pro, Claude 3.5/3.7). Résultat surprenant : globalement, les développeurs ont mis 1,34 fois plus de temps avec l'IA que sans. Pourtant, ils estimaient avant l'étude un gain de 24 %. Ce résultat s'applique surtout aux tâches longues (1 à 6 heures) et aux profils très expérimentés.",
    analyse: "Cette étude casse un peu le mythe. Voir des développeurs expérimentés aller moins vite avec l'IA qu'sans, c'est contre-intuitif. Ça confirme que l'IA est surtout utile sur des tâches courtes et bien définies — pas sur des problèmes complexes où il faut réfléchir. À garder en tête.",
    source: 'Next.ink',
    date: 'Février 2025',
    url: 'https://next.ink/192648/la-productivite-des-developpeurs-semble-baisser-quand-ils-utilisent-lia-generative/',
    tags: ['Productivité', 'Étude METR', 'Limites IA', 'Expérience'],
  },
  {
    id: 9,
    axe: 'Limites & nuances',
    titre: "Développeurs et IA : des gains de productivité annulés par les frictions organisationnelles — Atlassian",
    resume: "L'étude State of DevEx 2025 d'Atlassian (3 500 développeurs dans 6 pays) révèle que 68 % déclarent gagner plus de 10 heures par semaine grâce à l'IA. Mais 50 % de ce temps gagné est perdu à cause de frictions organisationnelles : documentation introuvable, changements de contexte entre outils, manque de direction claire. Le METR confirme que l'IA a en réalité ralenti les développeurs de 19 % dans leurs tests.",
    analyse: "Ce paradoxe est frappant : on gagne du temps avec l'IA, mais on en perd ailleurs. C'est une leçon d'organisation autant que de technique. Lors de mon stage Xefi, la clarté des specs et la bonne documentation de l'existant m'ont permis d'utiliser l'IA efficacement. Sans ça, les allers-retours auraient annulé tout gain.",
    source: 'LeMagIT',
    date: 'Juillet 2025',
    url: 'https://www.lemagit.fr/actualites/366627990/Developpeurs-et-IA-des-gains-de-productivite-annules-par-les-frictions-organisationnelles-etude-A',
    tags: ['Productivité', 'Atlassian', 'DevEx', 'Organisation'],
  },
  // ── AXE 4 : SÉCURITÉ ──────────────────────────────────────
  {
    id: 10,
    axe: 'Sécurité',
    titre: "Le code généré par l'IA introduit des failles dans 45 % des cas — Rapport Veracode 2025",
    resume: "Veracode a analysé 80 tâches de codage réalisées avec plus de 100 LLMs différents. Résultat : l'IA introduit des vulnérabilités de sécurité dans 45 % des cas. Java est le langage le plus risqué (72 % de taux d'échec), suivi de Python, JavaScript et C# (38-45 %). Les modèles choisissent l'option non sécurisée dans 45 % des cas quand les deux sont disponibles.",
    analyse: "Ces chiffres doivent être connus de tout développeur qui utilise l'IA pour coder. En stage, j'ai écrit du code PHP/Laravel et Vue.js avec l'assistance de l'IA — sachant maintenant que près d'une fois sur deux, du code généré peut être non sécurisé, la relecture et la revue humaine ne sont pas optionnelles. C'est exactement ce que pratiquait l'équipe HOPLA.",
    source: 'Business Wire / ecinews.fr',
    date: 'Juillet 2025',
    url: 'https://www.ecinews.fr/fr/le-code-genere-par-lia-presente-des-risques-pour-la-securite/',
    tags: ['Sécurité', 'Veracode', 'Vulnérabilités', 'Code IA'],
  },
  {
    id: 11,
    axe: 'Sécurité',
    titre: "API fantômes : quand l'IA génère des backdoors à votre insu — Korben",
    resume: "Une étude Apiiro révèle que les assistants IA ont multiplié par 10 les vulnérabilités dans des dépôts étudiés en 6 mois. L'IA peut générer des endpoints non documentés (phantom APIs) sans authentification, halluciner des noms de packages inexistants récupérés par des attaquants, et exposer des credentials cloud deux fois plus souvent. Les outils de sécurité traditionnels ne détectent pas ces comportements.",
    analyse: "Le concept de phantom API est particulièrement préoccupant pour les projets Laravel que j'ai développés : l'IA peut générer des routes API fonctionnelles mais non sécurisées. Lors de mon projet Mini-Pronote, j'ai systématiquement testé toutes les routes avec Postman et ajouté des middlewares d'authentification — une bonne habitude à conserver.",
    source: 'Korben',
    date: 'Décembre 2025',
    url: 'https://korben.info/code-ia-securite-vulnerabilites-copilot.html',
    tags: ['Sécurité', 'API', 'Vulnérabilités', 'Laravel'],
  },
  {
    id: 12,
    axe: 'Sécurité',
    titre: "30+ failles dans les IDE IA — L'affaire IDEsaster (décembre 2025)",
    resume: "Le 6 décembre 2025, le chercheur Ari Marzouk a révélé plus de 30 vulnérabilités dans des IDE assistés par IA (GitHub Copilot CVE-2025-64660, Cursor CVE-2025-61590…). Ces failles combinent injection de prompt et fonctionnalités légitimes des IDE pour exécuter du code arbitraire, voler des données ou modifier des fichiers de configuration sans interaction utilisateur.",
    analyse: "Cette découverte montre que les outils IA eux-mêmes ne sont pas infaillibles en termes de sécurité. En formation BTS SIO, la cybersécurité est une compétence transversale (bloc 1). Utiliser un IDE IA signifie donc aussi comprendre les risques associés à cet outil, et ne pas lui accorder une confiance aveugle sur les fichiers sensibles.",
    source: 'Next2i',
    date: 'Décembre 2025',
    url: 'https://www.next2i.fr/blog/2025/12/08/plus-de-30-failles-decouvertes-dans-les-outils-de-codage-ia-vol-de-donnees-et-execution-de-code-a-distance/',
    tags: ['Sécurité', 'IDE', 'CVE', 'Cybersécurité'],
  },
  // ── AXE 5 : AVENIR DU MÉTIER ──────────────────────────────
  {
    id: 13,
    axe: "Avenir du métier",
    titre: "Quel avenir pour les développeurs web à l'ère de l'IA ? — LBKE",
    resume: "Les données APEC montrent une baisse de 18 % des recrutements IT cadres en 2024, avec une poursuite du recul en 2025. Les profils juniors sont les plus touchés (-19 %). Paradoxe : les développeurs restent parmi les profils les plus recherchés selon France Travail, mais les entreprises ne veulent plus d'exécutants — elles cherchent des profils autonomes, capables de concevoir, documenter et collaborer.",
    analyse: "Ces chiffres font un peu froid dans le dos quand on est en train de finir un BTS. Mais ce que je retiens c'est que le marché cherche des gens qui comprennent un contexte métier, pas juste des exécutants. Les stages, les projets documentés, ce portfolio — c'est exactement ce genre de chose qui fait la différence.",
    source: 'LBKE',
    date: 'Septembre 2025',
    url: 'https://www.lbke.fr/actus/2025/developpeur-web-ia-crise-ou-mutation',
    tags: ['Emploi', 'Marché', 'Juniors', 'Avenir'],
  },
  {
    id: 14,
    axe: "Avenir du métier",
    titre: "Développeur à l'ère des agents IA : mutation, industrialisation — Eventuallycoding",
    resume: "Article de janvier 2026 d'un développeur expérimenté : 2025 a été l'année des agents IA (Claude Code, Windsurf). Le métier de développeur se transforme en métier de rédaction et vérification. Certaines fonctionnalités qui prenaient 1-2 semaines se font en 2-6h. L'auteur nuance : les gains en productivité ne se sont pas encore traduits en augmentations de salaires, comme lors de la première révolution industrielle.",
    analyse: "Cette comparaison avec les Luddites est perturbante mais honnête. L'auteur, avec 20 ans d'expérience, voit son propre métier se transformer. Pour moi qui débute, c'est un signal fort : il faut investir dans la compréhension des systèmes complexes, l'architecture, et la capacité à spécifier clairement ce qu'on veut que l'IA produise — pas seulement dans l'exécution.",
    source: 'Eventuallycoding',
    date: 'Janvier 2026',
    url: 'https://eventuallycoding.com/p/2026-01-engineering-job-mutation',
    tags: ['Agents IA', 'Mutation', 'Avenir', 'Métier'],
  },
  {
    id: 15,
    axe: "Avenir du métier",
    titre: "IA native dans le développement logiciel : de nouveaux rôles émergent",
    resume: "En 2025, les développeurs ne se contentent plus d'écrire du code : ils deviennent des managers d'agents intelligents. L'IA native s'intègre dans les pipelines CI/CD, les IDE et les outils de tests. Les compétences les plus recherchées évoluent vers l'architecture logicielle, l'analyse de systèmes complexes, le pilotage d'agents et la maîtrise des enjeux éthiques et sécuritaires.",
    analyse: "Ce changement de rôle — du producteur de code à l'orchestrateur de valeur — est une direction que je veux anticiper. Comprendre Laravel en profondeur (et pas seulement générer du code avec l'IA) me permettra de superviser correctement ce que l'IA produit. C'est exactement ce que j'ai pratiqué chez Xefi : comprendre l'architecture avant d'implémenter.",
    source: 'HitechPros',
    date: 'Janvier 2026',
    url: 'https://www.hitechpros.com/2026/01/14/ia-native-developpement-logiciel/',
    tags: ['Agents IA', 'Architecture', 'Nouveaux rôles', 'Compétences'],
  },
  {
    id: 16,
    axe: "Avenir du métier",
    titre: "Vos développeurs sont-ils prêts pour 2026 ? — Castelis / Hunik Academy",
    resume: "Article de février 2026 : la transformation IA n'est plus une simple évolution d'outils mais une rupture. Les équipes avancées voient des cycles de développement plus courts et une meilleure qualité de code. Mais sans gouvernance claire, les gains à court terme masquent des fragilités : code jetable, dette technique. Le rôle du développeur devient orchestrateur : formuler des spécifications exploitables par l'IA, superviser les productions automatisées, valider dans un cadre maîtrisé.",
    analyse: "La notion de gouvernance est cruciale. En stage, travailler avec une revue de code systématique et des standards qualité (GitLab, conventions Laravel, tests Postman) représentait exactement cette gouvernance. C'est ce qui distingue une équipe qui tire vraiment parti de l'IA d'une équipe qui accumule de la dette technique à grande vitesse.",
    source: 'Castelis',
    date: 'Février 2026',
    url: 'https://www.castelis.com/actualites/ia/vos-developpeurs-sont-ils-prets-pour-2026/',
    tags: ['Gouvernance', 'Formation', 'Qualité', 'DevOps'],
  },
]

// ============================================================
// DONNÉES DÉTAILLÉES PAR PROJET
// (userStories, features, apports, binome, methode, architecture, bdd, gestion, screenshots)
// Enrichissements post-audit prof — tirés des sujets officiels et rapports de stage
// ============================================================

export const projectExtras: Record<number, {
  userStories?: string[]
  features?: string[]
  featureCompetences?: string[][]
  apports?: string
  binome?: string
  methode?: string
  screenshots?: { src: string; caption: string }[]
  architecture?: { description: string; composants: { role: string; nom: string; detail: string }[] }
  bdd?: { description: string; tables: string[] }
  gestion?: { equipe?: string; duree?: string; taches?: string[]; taskCompetences?: string[][] }
}> = {

  // ── 1 : Script PowerShell — Cookson-CLAL ──────────────────
  1: {
    methode: 'Individuel',
    features: [
      "Lecture et analyse du script VBScript existant, identification des fonctions défaillantes",
      "Réécriture complète en PowerShell : montage des lecteurs réseau selon le profil Active Directory",
      "Lancement automatique des applications métier (AS400, LANSA) au démarrage de session",
      "Génération de la signature email dynamique dans Outlook",
      "Phase de tests sur machines virtuelles puis sur postes physiques",
      "Déploiement via GPO (Group Policy Object) sur l\'ensemble du parc Windows Server",
    ],
    featureCompetences: [
      ['4.1'],
      ['2.2', '2.3'],
      ['2.2', '5.2'],
      ['2.3', '1.6'],
      ['5.1'],
      ['1.4', '5.2'],
    ],
    apports: "Ce stage m\'a appris à travailler sur du code existant et à le moderniser sans tout casser — une contrainte réelle quand le script impacte tous les postes de l\'entreprise au démarrage de session. J\'ai aussi découvert l\'environnement Windows Server / Active Directory / GPO, que je n\'avais jamais pratiqué en cours. La rigueur des tests était primordiale.",
    architecture: {
      description: "Le script PowerShell s\'exécute à chaque ouverture de session Windows. Il interroge Active Directory pour récupérer le groupe de l\'utilisateur, puis monte les lecteurs réseau, lance les applications métier et génère la signature email. Déployé via GPO sur tout le parc.",
      composants: [
        { role: "Script déployé", nom: "PowerShell (GPO)", detail: "Remplace le VBScript obsolète. S\'exécute à chaque login Windows sur tous les postes." },
        { role: "Annuaire", nom: "Active Directory", detail: "Fournit les groupes utilisateurs. Les GPO distribuent le script sur le parc." },
        { role: "ERP Métier", nom: "AS400 / LANSA", detail: "Applications IBM lancées automatiquement selon le profil Active Directory." },
        { role: "Serveur de fichiers", nom: "Windows Server", detail: "Héberge les lecteurs réseau montés dynamiquement par département." },
        { role: "Messagerie", nom: "Outlook / Exchange", detail: "Signature email générée automatiquement avec les infos de l\'utilisateur connecté." },
      ],
    },
    gestion: {
      equipe: "1 personne — Maxime Blanco",
      duree: "Mai — Juillet 2025 (2 mois)",
      taches: [
        "Sem. 1-2 : Découverte environnement IT, analyse du script VBScript",
        "Sem. 3-4 : Réécriture PowerShell, tests en machine virtuelle",
        "Sem. 5-6 : Tests multi-profils sur postes physiques, corrections",
        "Sem. 7-8 : Déploiement GPO, documentation et rapport",
      ],
    taskCompetences: [
      ['4.1'],
      ['2.2', '2.3'],
      ['5.1'],
      ['1.4', '5.2'],
    ],
    },
  },

  // ── 2 : Mini-Pronote — Xefi ───────────────────────────────
  2: {
    methode: "Individuel",
    screenshots: [
      { src: "/screens/mini-pronote/schema-bdd.png",     caption: "Schéma de la base de données — tables Classe, Users, devoirs, notes et tables pivot" },
      { src: "/screens/mini-pronote/routes-postman.png", caption: "Test des routes API REST dans Postman — collection complète (GET, POST, PUT, DELETE)" },
      { src: "/screens/mini-pronote/docker-env.png",     caption: "Docker Desktop — conteneur MySQL actif sous WSL2" },
      { src: "/screens/mini-pronote/github-projet.png",  caption: "Dépôt GitHub du projet scolaire Laravel (PHP 55% + Blade 44%, 6 commits)" },
    ],
    features: [
      "Modèles Eloquent avec relations (User, Classe, Devoir, Note)",
      "Gestion des rôles différenciés : élève, professeur, administrateur",
      "Routes API REST complètes testées avec Postman",
      "Migrations et seeders pour l\'initialisation de la base",
      "Middleware d\'authentification sur toutes les routes protégées",
      "Environnement Docker/WSL2 — configuration complète depuis zéro",
    ],
    featureCompetences: [
      ['4.1'],
      ['1.3', '4.1'],
      ['2.3', '5.1'],
      ['4.1'],
      ['1.3', '5.1'],
      ['6.1'],
    ],
    apports: "Premier projet chez Xefi : j\'avais fait du Laravel en cours sur ADA, mais là c\'était différent — Docker, Postman pour tester chaque route, Eloquent ORM avec des relations complexes. J\'ai compris comment une vraie API REST est structurée, et j\'ai pris l\'habitude de la revue de code GitLab dès le premier projet.",
    architecture: {
      description: "Architecture MVC Laravel avec API REST. L\'application tourne dans un conteneur Docker sous WSL2, base MySQL dans un conteneur séparé. Toutes les routes sont testées via Postman.",
      composants: [
        { role: "Framework Backend", nom: "Laravel (PHP)", detail: "Architecture MVC. Routes API REST, modèles Eloquent ORM, migrations, seeders, middlewares." },
        { role: "Base de données", nom: "MySQL (Docker)", detail: "Base relationnelle dans un conteneur Docker. Gestion via CLI ou PHPMyAdmin." },
        { role: "Environnement Dev", nom: "Docker / WSL2", detail: "Conteneurisation de l\'app et de la BDD. WSL2 pour Linux sous Windows — standard chez Xefi." },
        { role: "Tests API", nom: "Postman", detail: "Collection complète testant toutes les routes REST avec les différents rôles." },
        { role: "Versioning", nom: "GitLab", detail: "Dépôt privé Xefi. Revue de code par 2 développeurs seniors avant validation." },
      ],
    },
    bdd: {
      description: "5 tables liées par clés étrangères. La gestion des rôles (élève / professeur / admin) est stockée dans la table users.",
      tables: [
        "users (id, name, email, role, password)",
        "classes (id, nom, niveau)",
        "classe_user (pivot)",
        "devoirs (id, titre, description, classe_id, prof_id, date_rendu)",
        "notes (id, devoir_id, eleve_id, valeur, commentaire)",
      ],
    },
    gestion: {
      equipe: "1 personne — Maxime Blanco",
      duree: "~1 semaine (stage Xefi, jan.–fév. 2026)",
      taches: [
        "Jour 1 : Setup Docker/WSL2, initialisation projet Laravel",
        "Jours 2-3 : Modèles, migrations, seeders, routes de base",
        "Jours 4-5 : Middlewares rôles, tests Postman, corrections",
        "Jour 6 : Livraison du projet et dernières corrections",
      ],
    taskCompetences: [
      ['6.1'],
      ['4.1'],
      ['1.3', '5.1'],
      ['5.1', '5.2'],
    ],
    },
  },

  // ── 3 : Machine à sous — Xefi ─────────────────────────────
  3: {
    methode: "Individuel",
    screenshots: [
      { src: "/screens/machine-sous/interface-jeu.png",    caption: "Interface 'Mon Casino' — affichage 0-0-0, boutons ADD CREDIT / PLAY / RESET" },
      { src: "/screens/machine-sous/composable-logique.png", caption: "Composable useCredits.ts — logique de gestion des crédits (addCredit, resetCredits, minusCredit)" },
      { src: "/screens/machine-sous/structure-front.png",  caption: "Structure du projet PhpStorm — arborescence Nuxt.js avec composants Vuetify" },
    ],
    features: [
      "Affichage de 3 rouleaux avec résultats aléatoires à chaque partie",
      "Détection du jackpot (3 chiffres identiques) avec animation",
      "Système de crédits dynamiques (gains / pertes)",
      "Composants Vuetify réutilisables (boutons, cartes, messages)",
      "Gestion d\'état réactive avec la Composition API (ref, reactive)",
      "Séparation logique de jeu / affichage",
    ],
    featureCompetences: [
      ['3.3'],
      ['5.1'],
      ['3.3'],
      ['3.3'],
      ['4.1'],
      ['4.1'],
    ],
    apports: "Le passage de l\'Options API (ce qu\'on voit en cours) à la Composition API Vue.js m\'a demandé un peu de temps, mais c\'est beaucoup plus propre pour les projets de taille réelle. Vuetify m\'a aussi appris à utiliser un système de composants éprouvé plutôt que de tout recréer.",
    architecture: {
      description: "Application frontend Vue.js/Nuxt.js avec Vuetify. La logique de jeu est isolée dans un composable TypeScript, séparée des composants d\'affichage. Tourne dans un conteneur Docker.",
      composants: [
        { role: "Framework Frontend", nom: "Nuxt.js / Vue.js", detail: "Architecture par composants réactifs. Gestion d\'état avec refs et computed." },
        { role: "UI Library", nom: "Vuetify", detail: "Composants Material Design réutilisables. Personnalisés pour l\'interface de la machine à sous." },
        { role: "Logique de jeu", nom: "Composable TS", detail: "useCredits.ts — addCredit, minusCredit, resetCredits. Séparation logique/affichage." },
        { role: "Environnement", nom: "Docker / WSL2", detail: "Même stack que Mini-Pronote. Développement et tests en conteneur." },
      ],
    },
    gestion: {
      equipe: "1 personne — Maxime Blanco",
      duree: "~3-4 jours (stage Xefi, jan.–fév. 2026)",
      taches: [
        "Jour 1 : Setup Nuxt.js, premiers composants Vuetify",
        "Jours 2-3 : Logique de jeu (composable), animations, crédits",
        "Jour 4 : Livraison du projet et ajustements finaux",
      ],
    taskCompetences: [
      ['6.1'],
      ['4.1', '3.3'],
      ['5.1'],
    ],
    },
  },

  // ── 4 : Radio interne Xefi ────────────────────────────────
  4: {
    methode: "Contribution sur projet en production",
    screenshots: [
      { src: "/screens/radio-xefi/code-getbanned.png",   caption: "Composant GetBannedUsersForm.vue — arborescence projet radioxefi + code de récupération des bannis" },
      { src: "/screens/radio-xefi/routes-get-post.png",  caption: "Routes GET et POST de la radio Xefi — structure API existante" },
      { src: "/screens/radio-xefi/routes-delete.png",    caption: "Routes DELETE — débannissement d\'un utilisateur ou de tous les bannis d\'un live" },
      { src: "/screens/radio-xefi/schema-tables.png",    caption: "Schéma des tables de la radio interne Xefi" },
    ],
    features: [
      "Affichage de la liste des utilisateurs bannis par live (nom, date, motif)",
      "Bouton de débannissement avec confirmation",
      "Bouton de confirmation de ban permanent",
      "Mise à jour dynamique de la liste sans rechargement",
      "Intégration dans le dashboard admin existant sans casser l\'existant",
    ],
    featureCompetences: [
      ['2.3', '3.3'],
      ['5.1'],
      ['2.3'],
      ['3.3'],
      ['5.2'],
    ],
    apports: "C\'est le projet qui m\'a le plus appris sur la réalité du travail en équipe : lire du code que t\'as pas écrit, comprendre l\'architecture avant de toucher quoi que ce soit, et livrer une feature qui s\'intègre proprement à l\'existant. La revue de code était plus stricte que sur les autres projets — c\'est normal, c\'est en production.",
    architecture: {
      description: "Contribution à une application fullstack existante en production. Le frontend Nuxt.js/Vuetify intègre le nouveau composant dans le dashboard admin. Les routes API Laravel existantes sont étendues.",
      composants: [
        { role: "Backend (existant)", nom: "Laravel API", detail: "Nouvelles routes GET /api/banned-users et DELETE /api/banned-users/{id} ajoutées." },
        { role: "Frontend (nouveau)", nom: "GetBannedUsersForm.vue", detail: "Composant Vue.js affichant la liste des bannis par live, avec boutons d\'action." },
        { role: "Base de données", nom: "MySQL", detail: "Table banned-users existante avec relations vers users et livestreams." },
        { role: "Versioning", nom: "GitLab (feature branch)", detail: "Merge request validée par les seniors Ruddy Morel et Benjamin Sebert." },
      ],
    },
    gestion: {
      equipe: "1 personne + revue par 2 seniors (Xefi HOPLA)",
      duree: "~1 semaine (stage Xefi, jan.–fév. 2026)",
      taches: [
        "Jours 1-2 : Lecture et compréhension de la codebase radioxefi",
        "Jours 3-4 : Développement routes API + composant frontend",
        "Jour 5 : Tests, corrections et intégration de la fonctionnalité",
      ],
    taskCompetences: [
      ['4.1'],
      ['2.3', '3.3'],
      ['5.1', '5.2'],
    ],
    },
  },

  // ── 5 : Guides WeDrop — Xefi ──────────────────────────────
  5: {
    methode: "Individuel — revue de code GitLab",
    screenshots: [
      { src: "/screens/wedrop/guides-avant.png",        caption: "WeDrop AVANT — page guides utilisateur avec 3 tutoriels basiques (Mon Drive, Partagés avec moi, Ma corbeille)" },
      { src: "/screens/wedrop/guides-apres-admin.png",  caption: "WeDrop APRÈS — vue admin avec 5 guides + filtres par catégorie (Tous / Administration / Espace personnel / Espace partagé)" },
      { src: "/screens/wedrop/guides-espagnol.png",     caption: "Interface complète traduite en espagnol — internationalisation vue-i18n en temps réel" },
      { src: "/screens/wedrop/fichiers-i18n.png",       caption: "Fichiers de traduction vue-i18n côte à côte — FR et EN (6 langues au total)" },
      { src: "/screens/wedrop/arborescence.png",        caption: "Architecture Atomic Design du module userguide — atoms, molecules, organisms, composables, i18n" },
      { src: "/screens/wedrop/merge-request.png",       caption: "Merge Request GitLab !258 'Add user guides' — validée par Ruddy Morel et Benjamin Sebert" },
    ],
    features: [
      "Guides interactifs étape par étape intégrés dans l\'application WeDrop",
      "Architecture Atomic Design respectée : atoms → molecules → organisms",
      "Internationalisation complète via vue-i18n (FR, EN, DE, ES, IT, NL)",
      "Chaque texte externalisé dans des fichiers de traduction séparés",
      "Composants réutilisables pour d\'éventuels futurs guides",
      "Revue de code complète par 2 développeurs seniors, merge en production",
    ],
    featureCompetences: [
      ['5.3'],
      ['3.3'],
      ['3.2', '6.2'],
      ['3.2'],
      ['3.3'],
      ['5.1', '5.2'],
    ],
    apports: "Le projet le plus complet et le plus autonome du stage. J\'avais les specs, l\'archi existante, et je devais livrer un module fonctionnel intégré à un vrai produit. Voir son code dans une vraie appli utilisée par de vraies entreprises, c\'est différent d\'un TP. L\'Atomic Design prend tout son sens quand tu travailles sur un projet existant avec d\'autres.",
    architecture: {
      description: "Module intégré à WeDrop en respectant son architecture Atomic Design existante. Le multilingue est géré via vue-i18n avec des fichiers JSON par langue (fr.json, en.json, de.json, es.json, it.json, nl.json).",
      composants: [
        { role: "Atoms", nom: "CategoryButton, DurationBadge, GuideCard, StartGuideButton", detail: "Composants élémentaires réutilisables pour les guides." },
        { role: "Molecules", nom: "AdminCardsGrid, PersonalCardsGrid, SharedCardsGrid...", detail: "Grilles de guides filtrées par catégorie et par rôle utilisateur." },
        { role: "Organism", nom: "UserGuideDashboard.vue", detail: "Composant principal orchestrant l\'affichage des guides et les filtres." },
        { role: "Internationalisation", nom: "vue-i18n + locales/", detail: "6 fichiers JSON (fr, en, de, es, it, nl). Changement de langue instantané." },
        { role: "Versioning", nom: "GitLab MR !258", detail: "Branche add_user_guides → develop. Validée par Ruddy Morel et Benjamin Sebert." },
      ],
    },
    gestion: {
      equipe: "1 personne + revue par Ruddy Morel & Benjamin Sebert (Xefi HOPLA)",
      duree: "~10 jours (stage Xefi, jan.–fév. 2026)",
      taches: [
        "Jours 1-2 : Prise en main WeDrop, conception architecture guides",
        "Jours 3-5 : Développement composants Atomic Design",
        "Jours 6-8 : Intégration vue-i18n, traductions 6 langues",
        "Jours 9-10 : Tests, corrections, merge request GitLab",
      ],
    taskCompetences: [
      ['4.1'],
      ['3.3'],
      ['3.2', '6.2'],
      ['5.1', '5.2'],
    ],
    },
  },

  // ── 6 : LFP1 ──────────────────────────────────────────────
  6: {
    binome: "Blanchard Da Cunha Léo",
    methode: "Scrum / Agile",
    userStories: [
      "En tant qu’administrateur, je veux voir le classement des clubs à partir du nombre de points cumulés, des buts marqués, des buts encaissés et de la différence de buts, avec un affichage du 1er au dernier.",
      "En tant qu’administrateur, je veux sélectionner un club dans une liste déroulante pour afficher ses informations et pouvoir les corriger en cas d’erreur.",
      "En tant qu’administrateur, je veux choisir une journée du championnat pour afficher la liste des rencontres prévues et pouvoir modifier la date et l’heure d’un match.",
      "En tant qu’administrateur, je veux ajouter une rencontre au calendrier en choisissant la journée, la date, l’heure et les deux clubs encore disponibles pour cette journée.",
      "En tant qu’administrateur, je veux saisir les scores des rencontres d’une journée et mettre à jour immédiatement les points ainsi que les buts marqués et encaissés de chaque club.",
      "En tant qu’administrateur, je veux éditer une fiche PDF qui regroupe les clubs et leurs informations principales."
    ],
    features: [
      "Affichage du classement des clubs avec les points, les buts marqués, les buts encaissés et la différence de buts, comme demandé dans le sujet.",
      "Mise en place d’un écran permettant de sélectionner un club dans une liste puis de consulter ou corriger ses informations.",
      "Création d’une vue pour afficher le calendrier d’une journée et modifier la date ou l’heure d’une rencontre lorsque le calendrier évolue.",
      "Ajout d’une fonctionnalité de création de rencontre avec choix de la journée, de la date, de l’heure et des clubs concernés.",
      "Saisie des résultats d’une journée avec mise à jour des statistiques de chaque club pour alimenter correctement le classement.",
      "Génération d’une fiche PDF des clubs, car l’édition PDF faisait partie des attentes du projet.",
      "Connexion à la base MySQL commune afin que l’application d’administration et le site PHP utilisent les mêmes données."
    ],
    featureCompetences: [
      ['3.3', '5.1'],
      ['3.3'],
      ['4.2'],
      ['3.3', '4.2'],
      ['5.1'],
      ['5.2'],
      ['4.1'],
    ],
    apports: "Ce projet m’a surtout appris à relier une application d’administration à une base de données commune, puis à exploiter ces données sur un site de consultation. J’ai aussi mieux compris pourquoi le sujet insistait sur la mise à jour automatique des statistiques : sans cette logique, le classement ne reste pas cohérent au fil des journées.",
    architecture: {
      description: "Architecture 2 couches : une application Visual Studio C# pour l’administration, et un site web PHP pour la consultation. Les deux s’appuient sur une même base MySQL.",
      composants: [
        { role: "Application Admin", nom: "C# / Visual Studio", detail: "Interface utilisée pour gérer les clubs, le calendrier, les résultats et l’édition PDF." },
        { role: "Site Consultation", nom: "PHP", detail: "Site web de consultation des classements et des résultats à partir de la base commune." },
        { role: "Base de données", nom: "MySQL / PHPMyAdmin", detail: "Tables partagées entre l’application d’administration et le site web." },
        { role: "Configuration", nom: "App.config + ODBC MySQL", detail: "Chaîne de connexion stockée dans la configuration du projet pour rester modifiable après installation." },
      ],
    },
    bdd: {
      description: "Base MySQL utilisée pour stocker les clubs, les journées et les rencontres. Les statistiques de classement sont exploitées à partir des résultats saisis.",
      tables: [
        "club (id, nom, nbpoints, butsmarques, butsencaisses, ...)",
        "journee (id, numero, date)",
        "rencontre (id, journee_id, club_dom_id, club_ext_id, date, heure, score_dom, score_ext)",
      ],
    },
    gestion: {
      equipe: "Maxime Blanco + Blanchard Da Cunha Léo",
      duree: "Septembre 2024 — Mai 2025",
      taches: [
        "Développement en binôme avec organisation agile et documentation du projet.",
        "Travail sur la logique de gestion des données, des résultats et du classement côté application.",
        "Mise en commun de la base MySQL et vérifications fonctionnelles sur l’ensemble du projet.",
      ],
    taskCompetences: [
      ['4.2'],
      ['4.1', '5.1'],
      ['5.1'],
    ],
    },
  },

  // ── 7 : LFP2 ──────────────────────────────────────────────
  7: {
    binome: "Blanchard Da Cunha Léo",
    methode: "Scrum / Agile",
    screenshots: [
      { src: '/screens/lfp2/connexion.png', caption: 'Connexion utilisateur' },
      { src: '/screens/lfp2/accueil.png', caption: 'Page d’accueil du site' },
      { src: '/screens/lfp2/resultat-championnat.png', caption: 'Classement du championnat' },
      { src: '/screens/lfp2/matchs-journees.png', caption: 'Résultats des matchs par journée' },
      { src: '/screens/lfp2/creation-compte.png', caption: 'Création de compte' },
      { src: '/screens/lfp2/commentaires-rencontre.png', caption: 'Commentaires sur une rencontre' },
    ],
    userStories: [
      "En tant qu’internaute, je veux visualiser le classement des clubs avec les points, les buts marqués, les buts encaissés et la différence de buts, classés du 1er au dernier.",
      "En tant qu’internaute, je veux sélectionner un club dans une liste de liens pour consulter ses informations.",
      "En tant qu’internaute, je veux choisir une journée du championnat dans une liste déroulante pour afficher les résultats des rencontres de cette journée.",
      "En tant qu’internaute, je veux créer un compte avec un pseudo unique et un mot de passe.",
      "En tant qu’internaute, je veux m’authentifier avec mon pseudo et mon mot de passe.",
      "En tant qu’internaute authentifié, je veux ouvrir la page d’une rencontre pour consulter les commentaires existants et déposer un nouveau commentaire."
    ],
    features: [
      "Création des pages permettant d’afficher le classement, les clubs et les résultats d’une journée depuis la base MySQL.",
      "Mise en place d’un accès à la base via PDO, c’est-à-dire une interface PHP sécurisée et plus propre pour dialoguer avec MySQL.",
      "Développement du formulaire de création de compte avec contrôle de l’unicité du pseudo avant l’enregistrement.",
      "Développement de l’authentification avec vérification des identifiants, ouverture de session et adaptation de l’interface selon l’état de connexion.",
      "Ajout d’une page de rencontre permettant de lire les commentaires déjà publiés et d’en ajouter un nouveau quand l’utilisateur est connecté.",
      "Organisation du projet avec séparation des fichiers PHP, HTML, CSS et includes pour garder une structure plus claire.",
      "Déploiement du site sur un hébergeur gratuit afin d’obtenir une URL publique, comme demandé dans les consignes."
    ],
    featureCompetences: [
      ['3.1', '3.3'],
      ['4.1'],
      ['1.3', '3.1'],
      ['1.3', '5.1'],
      ['3.3', '5.1'],
      ['4.1'],
      ['1.4', '5.2'],
    ],
    apports: "LFP2 m’a permis de mieux comprendre la logique d’un site dynamique relié à une base de données. J’ai aussi vu l’intérêt d’utiliser PDO pour centraliser la connexion et éviter de répéter le code partout, ainsi que l’importance des sessions quand on ajoute un système de compte.",
    architecture: {
      description: "Site web HTML / CSS / PHP connecté à MySQL via PDO, avec hébergement distant. La partie publique affiche les données de Ligue 1 et la partie compte gère l’authentification et les commentaires.",
      composants: [
        { role: "Backend", nom: "PHP / PDO", detail: "PDO est l’outil utilisé en PHP pour se connecter à MySQL et exécuter les requêtes de manière centralisée." },
        { role: "Base de données", nom: "MySQL", detail: "Extension de la base LFP avec les tables nécessaires aux utilisateurs et aux commentaires." },
        { role: "Frontend", nom: "HTML / CSS / Bootstrap", detail: "Interface du site, formulaires de connexion et pages de consultation." },
        { role: "Hébergement", nom: "InfinityFree / free.nf", detail: "Publication du site sur un hébergeur gratuit pour le rendre accessible en ligne." },
      ],
    },
    bdd: {
      description: "Extension de la base initiale avec les tables nécessaires à la gestion des comptes et des commentaires sur les rencontres.",
      tables: [
        "club, journee, rencontre (issues de la phase 1)",
        "utilisateur (id, pseudo, mot_de_passe, ...)",
        "commentaire (id, rencontre_id, utilisateur_id, contenu, date)",
      ],
    },
    gestion: {
      equipe: "Maxime Blanco + Blanchard Da Cunha Léo",
      duree: "Mai 2025",
      taches: [
        "Travail en binôme sur l’évolution du projet LFP vers un site web plus complet.",
        "Ajout des fonctionnalités de compte, de connexion et de commentaire prévues dans le sujet.",
        "Tests, corrections et mise en ligne du site sur hébergement distant.",
      ],
    taskCompetences: [
      ['4.1'],
      ['1.3', '3.3'],
      ['5.1', '5.2'],
    ],
    },
  },

  // ── 8 : ADA Phase 1 ───────────────────────────────────────
  8: {
    binome: "El Yahyaoui Yacine",
    methode: "Scrum / Agile — sprints",
    screenshots: [
      { src: '/screens/ada-phase1/connexion-agence.png', caption: 'Formulaire de connexion responsable d\'agence (US1)' },
      { src: '/screens/ada-phase1/fiche-agence.png', caption: 'Modification des informations et horaires de l\'agence (US2)' },
      { src: '/screens/ada-phase1/parc-vehicules.png', caption: 'Visualisation du parc véhicules avec zone de filtrage (US3 / US4)' },
      { src: '/screens/ada-phase1/gestion-clients.png', caption: 'Création et modification des fiches clients (US5)' },
    ],
    userStories: [
      "US1 — Connexion : saisir identifiant et mot de passe de l\'agence pour accéder à l\'accueil",
      "US2 — Agence : modifier les informations de l\'agence (nom, adresse, téléphone, heures d\'ouverture)",
      "US3 — Parc véhicules : voir tous les véhicules, filtrer par catégorie, consulter les attributs",
      "US4 — Véhicules : ajouter un nouveau véhicule ou supprimer un véhicule existant",
      "US5 — Clients : créer une nouvelle fiche client ou modifier une fiche existante",
      "US6 — Contrats : voir tous les contrats de location avec détails, filtrer par date",
    ],
    features: [
      "Connexion sécurisée par identifiant / mot de passe de l\'agence",
      "Gestion des informations agence : nom, adresse, téléphone, heures d\'ouverture (7 jours)",
      "Parc véhicules avec filtrage par catégorie et affichage des attributs",
      "Ajout et suppression de véhicules",
      "Gestion des fiches clients (création, modification)",
      "Consultation et filtrage des contrats par date de début ou de fin",
      "Architecture MVC avec Entity Framework, base de données SqlServer",
    ],
    featureCompetences: [
      ['1.3'],
      ['3.3'],
      ['3.3'],
      ['3.3'],
      ['3.3'],
      ['5.1'],
      ['4.1'],
    ],
    apports: "Première application desktop C# Entity en mode Scrum. Travailler avec des sprints et des user stories formelles m\'a appris à décomposer un projet en livrables progressifs. La gestion de la base SqlServer avec Entity Framework était plus complexe que MySQL direct, mais très formatrice pour comprendre les ORM.",
    architecture: {
      description: "Application desktop Windows Forms C# (2-tiers). Accès direct à la base SqlServer via Entity Framework. Visual Studio 2022 comme IDE principal.",
      composants: [
        { role: "Application Desktop", nom: "C# / WinForms", detail: "Interface graphique Windows native. Formulaires, DataGridView, contrôles natifs par user story." },
        { role: "ORM", nom: "Entity Framework", detail: "Accès à la base SqlServer. Mapping objet-relationnel, requêtes LINQ." },
        { role: "Base de données", nom: "SQL Server Management Studio", detail: "Base relationnelle locale modélisant agences, véhicules, clients et contrats." },
        { role: "IDE", nom: "Visual Studio 2022", detail: "Développement, débogage et tests de l\'application WinForms." },
      ],
    },
    bdd: {
      description: "Base SqlServer relationnelle modélisant le système ADA : agences, parc de véhicules par catégorie, fiches clients et contrats.",
      tables: [
        "agence (id, nom, adresse, telephone, horaires_json)",
        "categorie (id, libelle, attributs)",
        "vehicule (id, marque, modele, categorie_id, agence_id)",
        "client (id, nom, prenom, adresse, telephone, email)",
        "contrat (id, client_id, vehicule_id, date_debut, date_fin)",
      ],
    },
    gestion: {
      equipe: "Maxime Blanco + El Yahyaoui Yacine",
      duree: "Septembre — Décembre 2025 (~1 mois effectif)",
      taches: [
        "Maxime : US1 (connexion), US2 (agence), US3 (parc véhicules)",
        "Yacine : US4 (ajout/suppression véhicule), US5 (clients), US6 (contrats)",
        "En commun : Conception BDD, architecture WinForms, tests, rapport",
      ],
    taskCompetences: [
      ['1.3', '3.3'],
      ['3.3'],
      ['4.1', '5.1'],
    ],
    },
  },

  // ── 9 : ADA Phase 2 ───────────────────────────────────────
  9: {
    binome: "El Yahyaoui Yacine",
    methode: "Scrum / Agile — sprints",
    screenshots: [
      { src: '/screens/ada-phase2/agence-informations.png', caption: 'Sélection d\'une agence et affichage de ses informations' },
      { src: '/screens/ada-phase2/agence-vehicules.png', caption: 'Liste des véhicules disponibles pour l\'agence sélectionnée' },
      { src: '/screens/ada-phase2/catalogue-selection.png', caption: 'Choix du genre de véhicule dans le catalogue' },
      { src: '/screens/ada-phase2/categorie-details.png', caption: 'Détail d\'une catégorie avec ses attributs' },
      { src: '/screens/ada-phase2/creation-compte.png', caption: 'Création d\'un compte client' },
      { src: '/screens/ada-phase2/connexion-client.png', caption: 'Connexion d\'un client avec menu adaptatif' },
      { src: '/screens/ada-phase2/reservation-formulaire.png', caption: 'Formulaire de réservation avec agence et dates' },
      { src: '/screens/ada-phase2/reservation-resultats.png', caption: 'Résultats des véhicules disponibles sur la période' },
      { src: '/screens/ada-phase2/reservation-confirmee.png', caption: 'Confirmation de la réservation enregistrée' },
      { src: '/screens/ada-phase2/historique-locations.png', caption: 'Historique des locations du client connecté' },
    ],
    userStories: [
      "US1 — Agences : sélectionner une agence et voir ses informations complètes + véhicules disponibles",
      "US2 — Catalogue : choisir un genre puis une catégorie pour voir les véhicules et leurs détails",
      "US3 — Compte : créer un compte client",
      "US4 — Connexion : se connecter / se déconnecter avec menu adaptatif",
      "US5 — Réservation : saisir des dates, voir les véhicules disponibles sur cette période, réserver",
      "US6 — Historique : consulter tous ses contrats de location passés et en cours avec les détails",
    ],
    features: [
      "Architecture MVC Laravel avec Eloquent ORM (migration depuis SqlServer vers MySQL)",
      "Catalogue véhicules par genre puis par catégorie avec photos et attributs",
      "Système d\'authentification complet (inscription, connexion, déconnexion)",
      "Menu adaptatif selon l\'état de connexion",
      "Moteur de réservation : saisie des dates + vérification des disponibilités sur la période",
      "Historique des contrats avec détails (dates, kilométrage, montant, agence, véhicule)",
      "Interface Bootstrap, code indenté et commenté, conventions de nommage Laravel respectées",
    ],
    featureCompetences: [
      ['3.3', '4.1'],
      ['3.1', '3.3'],
      ['1.3', '3.1'],
      ['1.3'],
      ['5.1'],
      ['3.3', '5.2'],
      ['4.1'],
    ],
    apports: "ADA Phase 2 a été ma première vraie application Laravel complète, quelques mois avant le stage Xefi. Gérer la migration de la base SqlServer vers MySQL, implémenter la vérification des disponibilités avec des requêtes Eloquent complexes, et livrer un site fonctionnel en équipe — c\'est ce qui m\'a donné confiance avant d\'arriver chez Xefi.",
    architecture: {
      description: "Application web Laravel (MVC). WampServer héberge le projet en local. Architecture Routes → Contrôleurs → Modèles Eloquent → Vues Blade.",
      composants: [
        { role: "Framework Backend", nom: "Laravel / PHP", detail: "Architecture MVC. Routes, contrôleurs, modèles Eloquent ORM, vues Blade." },
        { role: "Base de données", nom: "MySQL / PHPMyAdmin", detail: "Migration depuis SqlServer. Gestion via PHPMyAdmin sous WampServer." },
        { role: "Serveur local", nom: "WampServer", detail: "Stack WAMP (Windows, Apache, MySQL, PHP). Hébergement local." },
        { role: "Frontend", nom: "Bootstrap / Blade", detail: "Templates Blade Laravel avec Bootstrap pour le responsive." },
      ],
    },
    bdd: {
      description: "Base MySQL modélisant le système ADA web : agences, catalogue hiérarchisé (genres → catégories → véhicules), clients et réservations.",
      tables: [
        "agence (id, nom, adresse, telephone, email, horaires)",
        "genre (id, libelle)",
        "categorie (id, genre_id, libelle, photo)",
        "vehicule (id, categorie_id, agence_id, marque, modele, photo)",
        "client (id, nom, prenom, email, password)",
        "contrat (id, client_id, vehicule_id, agence_id, date_debut, date_fin, nbkm, montant)",
      ],
    },
    gestion: {
      equipe: "Maxime Blanco + El Yahyaoui Yacine",
      duree: "Septembre — Décembre 2025 (~1 mois effectif)",
      taches: [
        "Maxime : US1 (agences), US2 (catalogue), US5 (réservation + vérif dispo)",
        "Yacine : US3 (inscription), US4 (authentification), US6 (historique contrats)",
        "En commun : Conception BDD, architecture Laravel, tests, rapport",
      ],
    taskCompetences: [
      ['3.3', '5.1'],
      ['1.3', '5.1'],
      ['4.1', '5.2'],
    ],
    },
  },
}