<template>
  <PageWrapper>
    <SectionHeader
      label="Compétence 6.1 & 6.4"
      title="Certifications & parcours"
      accent-word="Certifications"
    />

    <!-- Certifications officielles -->
    <div class="mb-16">
      <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted-light)] mb-8">Certifications obtenues</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <!-- CNIL -->
        <div class="border border-[var(--border)] p-6">
          <div class="flex items-start gap-4 mb-5">
            <span class="text-3xl flex-shrink-0">🔒</span>
            <div>
              <div class="flex items-start justify-between gap-3">
                <h2 class="font-display text-xl font-bold">MOOC CNIL — Atelier RGPD</h2>
                <span class="font-mono text-xs px-2 py-1 border border-[var(--border)] text-[var(--accent)] flex-shrink-0">2025</span>
              </div>
              <p class="font-mono text-xs text-[var(--muted)] mt-1">Commission Nationale de l'Informatique et des Libertés</p>
            </div>
          </div>
          <p class="font-mono text-base text-[var(--muted)] leading-relaxed mb-6">
            Formation en ligne de la CNIL sur le RGPD, composée de 3 modules indépendants. J'ai suivi les trois et obtenu un certificat pour chacun. Ça couvre les bases du règlement, comment l'appliquer concrètement dans un projet informatique, et les droits des personnes sur leurs données.
          </p>
          <!-- 3 modules avec téléchargement -->
          <div class="space-y-3">
            <div v-for="mod in modulescnil" :key="mod.num"
              class="flex items-center justify-between border border-[var(--border)] px-4 py-3">
              <div>
                <p class="font-mono text-sm font-medium">Module {{ mod.num }} — {{ mod.titre }}</p>
                <p class="font-mono text-xs text-[var(--muted)] mt-0.5">{{ mod.desc }}</p>
              </div>
              <a :href="mod.pdf" download
                class="font-mono text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors flex-shrink-0 ml-4">
                📄 certificat
              </a>
            </div>
          </div>
        </div>

        <!-- ANSSI -->
        <div class="border border-[var(--border)] p-6">
          <div class="flex items-start gap-4 mb-5">
            <span class="text-3xl flex-shrink-0">🛡️</span>
            <div>
              <div class="flex items-start justify-between gap-3">
                <h2 class="font-display text-xl font-bold">SecNumAcadémie — ANSSI</h2>
                <span class="font-mono text-xs px-2 py-1 border border-[var(--border)] text-[var(--accent)] flex-shrink-0">2025</span>
              </div>
              <p class="font-mono text-xs text-[var(--muted)] mt-1">Agence Nationale de la Sécurité des Systèmes d'Information</p>
            </div>
          </div>
          <p class="font-mono text-base text-[var(--muted)] leading-relaxed mb-6">
            MOOC gratuit de l'ANSSI sur la cybersécurité. Au programme : sécurité du poste de travail, bonnes pratiques sur Internet, messagerie, réseaux et protocoles. C'est une formation courte mais dense, surtout utile dans le cadre du BTS SIO où la sécurité fait partie du référentiel (Bloc 1).
          </p>
          <div class="flex items-center justify-between border border-[var(--border)] px-4 py-3">
            <div>
              <p class="font-mono text-sm font-medium">Attestation de réussite</p>
              <p class="font-mono text-xs text-[var(--muted)] mt-0.5">ANSSI — SecNumAcadémie</p>
            </div>
            <a href="/certificats/attestation-anssi.pdf" download
              class="font-mono text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors flex-shrink-0 ml-4">
              📄 attestation
            </a>
          </div>
        </div>

      </div>
    </div>

    <!-- Auto-apprentissage -->
    <div class="mb-16">
      <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted-light)] mb-8">Ce que j'ai appris en dehors des cours</p>
      <div class="space-y-4">
        <div v-for="item in apprentissage" :key="item.titre"
          class="border border-[var(--border)] p-5 flex gap-5">
          <span class="text-2xl flex-shrink-0">{{ item.emoji }}</span>
          <div>
            <div class="flex items-start justify-between gap-3 mb-1">
              <h3 class="font-mono text-sm font-medium">{{ item.titre }}</h3>
              <span class="font-mono text-xs text-[var(--muted)] flex-shrink-0">{{ item.periode }}</span>
            </div>
            <p class="font-mono text-xs text-[var(--accent)] mb-2">{{ item.source }}</p>
            <p class="font-mono text-xs text-[var(--muted)] leading-relaxed">{{ item.texte }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Ce portfolio -->
    <div class="block-inv p-8 md:p-12">
      <p class="font-mono text-xs uppercase tracking-widest mb-4" style="color: var(--accent)">— Projet personnel</p>
      <h2 class="font-display text-2xl md:text-3xl font-bold mb-5">Ce portfolio</h2>
      <p class="font-mono text-base text-[var(--block-muted)] leading-relaxed max-w-2xl mb-8">
        Ce portfolio est un projet que j'ai développé moi-même avec Nuxt.js 3, Vue.js 3 et Tailwind CSS. L'idée c'était de ne pas utiliser un template mais de partir de zéro, avec une architecture Atomic Design que j'avais envie de mettre en pratique. C'est à la fois un outil pour l'E5 et un projet à part entière.
      </p>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="stat in stats" :key="stat.label" class="border border-[var(--block-border)] p-4 text-center">
          <p class="font-display text-2xl font-bold mb-1" style="color: var(--accent)">{{ stat.valeur }}</p>
          <p class="font-mono text-xs text-[var(--block-muted)]">{{ stat.label }}</p>
        </div>
      </div>
    </div>

  </PageWrapper>
</template>

<script setup>
import PageWrapper   from '@/components/templates/PageWrapper.vue'
import SectionHeader from '@/components/molecules/SectionHeader.vue'

const modulescnil = [
  {
    num: 1,
    titre: 'Comprendre le RGPD',
    desc: 'Principes fondamentaux, champ d\'application, acteurs',
    pdf: '/certificats/certificat-cnil-module1.pdf',
  },
  {
    num: 2,
    titre: 'Les bases légales et les droits',
    desc: 'Bases légales du traitement, droits des personnes',
    pdf: '/certificats/certificat-cnil-module2.pdf',
  },
  {
    num: 3,
    titre: 'Gérer les risques et la conformité',
    desc: 'Analyse de risques, registre des traitements, DPO',
    pdf: '/certificats/certificat-cnil-module3.pdf',
  },
]

const apprentissage = [
  {
    emoji: '🟠',
    titre: 'Laravel — approfondissement',
    source: 'Documentation officielle + Laracasts',
    periode: '2025',
    texte: 'J\'ai creusé Laravel au-delà du cours : Eloquent ORM, middleware, API Resources, Sanctum. Tout ça j\'ai pu le mettre en pratique directement sur le projet ADA et lors du stage Xefi.',
  },
  {
    emoji: '🟢',
    titre: 'Vue.js 3 & Nuxt.js 3 — Composition API',
    source: 'Documentation officielle + Vue School',
    periode: '2025-2026',
    texte: 'La Composition API (ref, reactive, composables) et les spécificités Nuxt.js (SSR, auto-imports, layouts). Appris en autonomie avant le stage Xefi, ce qui m\'a permis de ne pas partir de zéro.',
  },
  {
    emoji: '🐳',
    titre: 'Docker — premiers pas',
    source: 'Documentation Docker + stage Xefi',
    periode: 'Janvier 2026',
    texte: 'Découvert vraiment lors du stage : conteneurs, volumes, docker-compose, environnement WSL2. Avant ça j\'en avais entendu parler mais sans jamais l\'utiliser concrètement.',
  },
]

const stats = [
  { valeur: 'Nuxt 3',  label: 'Framework' },
  { valeur: '9',       label: 'projets' },
  { valeur: '16',      label: 'articles de veille' },
  { valeur: 'Vercel',  label: 'Déploiement' },
]
</script>
