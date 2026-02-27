<template>
  <PageWrapper>
    <!-- HERO -->
    <section class="relative border-b border-[var(--border)] overflow-hidden">
      <div class="h-56 md:h-72 relative flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0" style="background-color: #b4530918" />
        <div class="absolute inset-0 flex items-center justify-center">
          <img
            src="/logos/cookson.svg"
            alt="Cookson-CLAL"
            class="w-2/3 md:w-1/2 max-w-xs object-contain opacity-10 select-none pointer-events-none"
          />
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <!-- Badge haut droite -->
        <div class="absolute top-4 right-4 z-10">
          <a
            href="/rapports/rapport-stage-cookson.pdf"
            download
            class="font-mono text-xs px-3 py-2 border border-white/30 text-white/70 hover:text-white hover:border-white transition-all flex items-center gap-2"
          >
            ↓ Télécharger le rapport
          </a>
        </div>
        <!-- Infos bas gauche -->
        <div class="absolute bottom-4 left-6 z-10 flex items-center gap-3">
          <img src="/logos/cookson.svg" alt="Cookson-CLAL" class="w-10 h-10 object-contain bg-white/10 p-1 rounded" />
          <div>
            <p class="font-display font-black text-white text-lg leading-tight">Cookson-CLAL</p>
            <p class="font-mono text-xs text-white/50">Dardilly (69) · Mai — Juillet 2025</p>
          </div>
        </div>
      </div>
    </section>

    <div class="max-w-5xl mx-auto px-6 py-16 space-y-20">

      <!-- FICHE RAPIDE -->
      <section>
        <SectionHeader label="Informations" title="Fiche du stage" accent-word="stage" />
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div v-for="info in infos" :key="info.label" class="border border-[var(--border)] p-4">
            <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-1">{{ info.label }}</p>
            <p class="font-mono text-sm font-medium">{{ info.value }}</p>
          </div>
        </div>
      </section>

      <!-- PRÉSENTATION ENTREPRISE -->
      <section>
        <SectionHeader label="02 — Présentation" title="L'entreprise" accent-word="entreprise" />
        <div class="mt-8 grid md:grid-cols-2 gap-10">
          <div class="space-y-4">
            <p class="font-mono text-sm text-[var(--muted)] leading-relaxed">
              Cookson-CLAL est une entreprise spécialisée dans l'achat et la vente de <strong class="text-[var(--ink)]">métaux précieux</strong>
              (or, argent, platine) ainsi que dans la fabrication d'outillage et de fournitures pour bijoutiers.
            </p>
            <p class="font-mono text-sm text-[var(--muted)] leading-relaxed">
              Elle fait partie du groupe international <strong class="text-[var(--ink)]">HM Precious Metals</strong>,
              dont le siège social est basé en Allemagne. Le site de Dardilly (69) concentre les activités
              commerciales et de service client pour la France.
            </p>
            <p class="font-mono text-sm text-[var(--muted)] leading-relaxed">
              L'informatique de l'entreprise s'appuie sur un parc Windows géré par un administrateur systèmes &amp; réseaux,
              avec des outils métier spécifiques au secteur industriel.
            </p>
          </div>
          <div class="space-y-3">
            <div v-for="item in entrepriseInfos" :key="item.label" class="flex gap-4 p-3 border border-[var(--border)]">
              <span class="text-lg">{{ item.icon }}</span>
              <div>
                <p class="font-mono text-xs text-[var(--muted)] uppercase tracking-widest">{{ item.label }}</p>
                <p class="font-mono text-sm font-medium">{{ item.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTEXTE -->
      <section>
        <SectionHeader label="01 — Contexte" title="Problématique" accent-word="Problématique" />
        <div class="mt-8 grid md:grid-cols-2 gap-6">
          <div class="border border-[var(--border)] p-6 space-y-3">
            <h3 class="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">Situation existante</h3>
            <ul class="space-y-2">
              <li v-for="pb in problemes" :key="pb" class="flex gap-3 font-mono text-sm">
                <span class="text-red-500 mt-0.5">✕</span>
                <span class="text-[var(--muted)]">{{ pb }}</span>
              </li>
            </ul>
          </div>
          <div class="border border-[var(--border)] p-6 space-y-3" style="border-color: #b45309">
            <h3 class="font-mono text-xs uppercase tracking-widest" style="color: #b45309">Objectif du stage</h3>
            <p class="font-mono text-sm text-[var(--muted)] leading-relaxed">
              Réécrire le script de connexion réseau (login) de l'entreprise, initialement écrit en <strong class="text-[var(--ink)]">VBScript</strong>
              et devenu obsolète, en le traduisant en <strong class="text-[var(--ink)]">PowerShell</strong>.
            </p>
            <p class="font-mono text-sm text-[var(--muted)] leading-relaxed">
              Ce script est critique : il s'exécute à chaque démarrage de session Windows pour tous les employés,
              configurant les lecteurs réseau, les applications et les autorisations selon le groupe de l'utilisateur.
            </p>
          </div>
        </div>
      </section>

      <!-- ENVIRONNEMENT TECHNIQUE -->
      <section>
        <SectionHeader label="04 — Technique" title="L'informatique dans l'entreprise" accent-word="informatique" />
        <div class="mt-8 grid md:grid-cols-2 gap-6">
          <div v-for="tech in technologies" :key="tech.nom" class="border border-[var(--border)] p-5">
            <div class="flex items-start justify-between mb-3">
              <h3 class="font-mono text-sm font-bold">{{ tech.nom }}</h3>
              <span class="font-mono text-xs px-2 py-0.5 border border-[var(--border)] text-[var(--muted)]">{{ tech.date }}</span>
            </div>
            <p class="font-mono text-xs text-[var(--muted)] leading-relaxed">{{ tech.desc }}</p>
          </div>
        </div>
      </section>

      <!-- MÉTHODOLOGIE DE TRAVAIL -->
      <section>
        <SectionHeader label="05 — Travaux" title="Déroulé de la mission" accent-word="mission" />
        <div class="mt-8 grid md:grid-cols-4 gap-4">
          <div v-for="(etape, i) in etapes" :key="etape.titre" class="border border-[var(--border)] p-5 relative">
            <span class="font-display font-black text-5xl text-[var(--border)] absolute top-3 right-3 leading-none select-none">
              0{{ i + 1 }}
            </span>
            <h3 class="font-mono text-xs font-bold uppercase tracking-widest mb-2">{{ etape.titre }}</h3>
            <p class="font-mono text-xs text-[var(--muted)] leading-relaxed">{{ etape.desc }}</p>
          </div>
        </div>
      </section>

      <!-- DÉTAIL DES TRAVAUX -->
      <section>
        <SectionHeader label="Détail" title="Ce que j'ai réalisé" accent-word="réalisé" />
        <div class="mt-8 space-y-6">
          <div v-for="travail in travaux" :key="travail.titre" class="border border-[var(--border)] p-6">
            <div class="flex items-center gap-3 mb-3">
              <span class="font-mono text-xs px-2 py-0.5 text-white text-[10px] uppercase tracking-widest" style="background: #b45309">{{ travail.tag }}</span>
              <h3 class="font-mono text-sm font-bold">{{ travail.titre }}</h3>
            </div>
            <p class="font-mono text-sm text-[var(--muted)] leading-relaxed">{{ travail.desc }}</p>
          </div>
        </div>
      </section>

      <!-- TECHNOLOGIES UTILISÉES -->
      <section>
        <SectionHeader label="Stack" title="Technologies utilisées" accent-word="Technologies" />
        <div class="mt-8 flex flex-wrap gap-3">
          <TechTagList :tags="stack" />
        </div>
      </section>

      <!-- COMPÉTENCES BTS -->
      <section>
        <SectionHeader label="BTS SIO" title="Compétences validées" accent-word="Compétences" />
        <div class="mt-8 grid md:grid-cols-2 gap-4">
          <div v-for="comp in competences" :key="comp.code" class="border border-[var(--border)] p-4 flex gap-4">
            <span class="font-mono text-xs px-2 py-1 h-fit" style="background: #b4530922; color: #b45309; border: 1px solid #b4530944">{{ comp.code }}</span>
            <div>
              <p class="font-mono text-sm font-medium">{{ comp.intitule }}</p>
              <p class="font-mono text-xs text-[var(--muted)] mt-1">{{ comp.detail }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- BILAN -->
      <section>
        <SectionHeader label="Bilan" title="Ce que j'en retiens" accent-word="retiens" />
        <div class="mt-8 grid md:grid-cols-3 gap-6">
          <div v-for="point in bilan" :key="point.titre" class="border border-[var(--border)] p-5">
            <p class="text-2xl mb-3">{{ point.icon }}</p>
            <h3 class="font-mono text-xs font-bold uppercase tracking-widest mb-2">{{ point.titre }}</h3>
            <p class="font-mono text-xs text-[var(--muted)] leading-relaxed">{{ point.desc }}</p>
          </div>
        </div>
      </section>

      <!-- RAPPORT PDF -->
      <section class="border border-[var(--border)] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-1">Document complet</p>
          <h3 class="font-display font-black text-2xl">Rapport de stage</h3>
          <p class="font-mono text-sm text-[var(--muted)] mt-2">Cookson-CLAL · Mai — Juillet 2025 · 1ère année BTS SIO</p>
        </div>
        <div class="flex gap-3">
          <a href="/rapports/rapport-stage-cookson.pdf" target="_blank">
            <BaseButton variant="outline">Ouvrir ↗</BaseButton>
          </a>
          <a href="/rapports/rapport-stage-cookson.pdf" download>
            <BaseButton variant="solid">↓ Télécharger</BaseButton>
          </a>
        </div>
      </section>

    </div>
  </PageWrapper>
</template>

<script setup>
import PageWrapper    from '@/components/templates/PageWrapper.vue'
import SectionHeader  from '@/components/molecules/SectionHeader.vue'
import TechTagList    from '@/components/molecules/TechTagList.vue'
import BaseButton     from '@/components/atoms/BaseButton.vue'

const infos = [
  { label: 'Entreprise',   value: 'Cookson-CLAL' },
  { label: 'Lieu',         value: 'Dardilly (69)' },
  { label: 'Période',      value: 'Mai — Juil. 2025' },
  { label: 'Promotion',    value: 'BTS SIO 1ère année' },
]

const entrepriseInfos = [
  { icon: '🏭', label: 'Secteur',   value: 'Industrie — Métaux précieux & bijouterie' },
  { icon: '🌍', label: 'Groupe',    value: 'HM Precious Metals (Siège Allemagne)' },
  { icon: '📍', label: 'Adresse',   value: '69570 Dardilly' },
  { icon: '🌐', label: 'Site web',  value: 'www.cookson-clal.com' },
]

const problemes = [
  'Le script VBScript de login était partiellement obsolète',
  'Certaines applications et automatisations ne fonctionnaient plus',
  'Les utilisateurs devaient effectuer des étapes manuelles supplémentaires au démarrage',
  'Le service informatique était surchargé par des tickets mineurs',
  'Des interventions importantes étaient interrompues faute de session stable',
]

const technologies = [
  { nom: 'AS400',             date: 'IBM — 1988', desc: 'ERP historique de l\'entreprise utilisé pour la gestion des stocks et des commandes de métaux précieux. Interface textuelle via terminal.' },
  { nom: 'LANSA',             date: 'IBM — post AS400', desc: 'Langage et environnement de développement lié à IBM, utilisé en complément de l\'AS400 pour les interfaces plus récentes.' },
  { nom: 'VBScript',          date: 'Microsoft — 1991', desc: 'Langage de script Microsoft, plus simple d\'utilisation. Utilisé historiquement pour le script de login Windows — devenu partiellement obsolète.' },
  { nom: 'PowerShell',        date: 'Microsoft — 2006', desc: 'Langage de scripting moderne pour l\'automatisation des tâches Windows. Remplaçant naturel du VBScript, plus puissant et maintenu activement.' },
]

const etapes = [
  { titre: 'Organisation',           desc: 'Planification des tâches et prise de connaissance de l\'environnement IT de l\'entreprise.' },
  { titre: 'Compréhension/Traduction', desc: 'Analyse du script VBScript existant, compréhension de sa logique et réécriture en PowerShell.' },
  { titre: 'Phase de test',          desc: 'Tests sur machine virtuelle puis sur poste physique, vérification des accès et autorisations par groupe.' },
  { titre: 'Mise en place',          desc: 'Déploiement sur les postes utilisateurs réels, vérification de la signature mail et finalisation.' },
]

const travaux = [
  {
    tag: '01 — Traduction',
    titre: 'Réécriture VBScript → PowerShell',
    desc: 'Le travail principal consistait à analyser et comprendre la logique du script VBScript existant (gestion des lecteurs réseau, groupes utilisateurs, applications au démarrage) puis à le réécrire complètement en PowerShell. Les deux langages ont beaucoup de similarités structurelles, ce qui a facilité la traduction. Le script gère notamment le montage de lecteurs réseau par département (Finance, Commerce, Informatique, Laboratoire, Lyon, Management, etc.).',
  },
  {
    tag: '02 — Tests',
    titre: 'Phase de test multi-environnements',
    desc: 'Chaque groupe d\'utilisateurs (par département) a été testé individuellement pour vérifier : le bon montage des lecteurs réseau, le lancement des applications métier, les autorisations Active Directory, et la stabilité sur différents profils. Les tests ont été réalisés d\'abord sur machine virtuelle pour isoler les erreurs, puis sur un poste physique en conditions réelles.',
  },
  {
    tag: '03 — Déploiement',
    titre: 'Mise en place et vérification de la signature mail',
    desc: 'Une fois le script validé, il a été rendu fonctionnel au démarrage de session via les Group Policy Objects (GPO) Windows. La signature de mail Outlook a également été intégrée et vérifiée : elle est générée automatiquement avec les informations de l\'utilisateur connecté (nom, poste, adresse, logo Cookson-CLAL).',
  },
]

const stack = ['PowerShell', 'VBScript', 'Windows Server', 'Active Directory', 'GPO', 'AS400', 'LANSA']

const competences = [
  { code: '1.1', intitule: 'Recenser et identifier les ressources numériques', detail: 'Inventaire du parc logiciel et des scripts existants' },
  { code: '1.2', intitule: 'Exploiter des référentiels, normes et standards', detail: 'Compréhension et application des standards PowerShell et GPO' },
  { code: '2.2', intitule: 'Collecter, suivre et orienter des demandes', detail: 'Analyse des besoins utilisateurs liés aux dysfonctionnements du script' },
  { code: '2.3', intitule: 'Traiter des demandes concernant les applications', detail: 'Résolution des problèmes d\'applications au démarrage de session' },
  { code: '5.1', intitule: 'Réaliser les tests d\'intégration et d\'acceptation', detail: 'Tests par groupes utilisateurs sur VM et postes physiques' },
  { code: '6.1', intitule: 'Mettre en place son environnement d\'apprentissage personnel', detail: 'Apprentissage autonome de PowerShell et VBScript en contexte professionnel' },
]

const bilan = [
  { icon: '🧠', titre: 'Compréhension de l\'IT en entreprise', desc: 'Ce stage m\'a permis de découvrir concrètement comment l\'informatique s\'intègre dans une entreprise industrielle, avec des contraintes réelles (production, utilisateurs non-techniques, sécurité des données).' },
  { icon: '💻', titre: 'Montée en compétence technique', desc: 'J\'ai appris à lire et comprendre du VBScript existant, à maîtriser PowerShell pour l\'automatisation Windows, et à travailler sur Active Directory et les GPO.' },
  { icon: '⚖️', titre: 'Responsabilité et rigueur', desc: 'Le script impactant tous les postes de l\'entreprise, chaque modification demandait une rigueur absolue. Cette pression m\'a appris à tester méthodiquement avant tout déploiement.' },
]
</script>
