<template>
  <PageWrapper>
    <!-- Header -->
    <div class="mb-10 border-b border-[var(--border)] pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <NuxtLink to="/stages" class="inline-flex items-center gap-2 font-mono text-xs text-[var(--muted)] hover:text-[var(--ink)] transition-colors mb-4 link-hover">
          ← Retour aux stages
        </NuxtLink>
        <SectionLabel class="mb-3">Compte rendu de stage — 2ème année</SectionLabel>
        <h1 class="font-display text-[clamp(2rem,5vw,4rem)] font-black leading-tight">
          Xefi Grand Lyon<br>
          <em class="italic text-[var(--accent)]">Division HOPLA</em>
        </h1>
        <p class="font-mono text-sm text-[var(--muted)] mt-3">
          Laravel · Docker · WSL2 · Vue.js · Nuxt.js · Vuetify · vue-i18n · GitLab · Postman
        </p>
      </div>

      <BaseButton
        tag="a"
        href="/rapports/rapport-stage-xefi.pdf"
        download="CR_Stage_Maxime_Blanco_Xefi.pdf"
        variant="solid"
        size="md"
        class="flex-shrink-0"
      >
        📄 Télécharger le PDF
      </BaseButton>
    </div>

    <!-- Résumé rapide des 4 projets -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
      <div v-for="projet in projetsResume" :key="projet.titre"
        class="border border-[var(--border)] p-4 hover:border-[var(--ink)] transition-colors">
        <span class="text-2xl block mb-2">{{ projet.emoji }}</span>
        <p class="font-display text-sm font-bold mb-1">{{ projet.titre }}</p>
        <p class="font-mono text-sm text-[var(--muted)] leading-relaxed">{{ projet.desc }}</p>
      </div>
    </div>

    <!-- PDF Viewer -->
    <div class="border border-[var(--border)] overflow-hidden">
      <!-- Toolbar -->
      <div class="flex items-center justify-between px-4 py-3 block-inv">
        <div class="flex items-center gap-3">
          <span class="text-lg">📄</span>
          <span class="font-mono text-xs">CR_Stage_Maxime_Blanco_Xefi.pdf</span>
        </div>
        <div class="flex items-center gap-3">
          <span class="font-mono text-xs text-[var(--block-muted)]">17 pages</span>
          <a
            href="/rapports/rapport-stage-xefi.pdf"
            download="CR_Stage_Maxime_Blanco_Xefi.pdf"
            class="font-mono text-xs uppercase tracking-widest border border-[var(--block-border)] px-3 py-1.5 hover:bg-white/10 transition-all"
          >
            ↓ Télécharger
          </a>
          <a
            href="/rapports/rapport-stage-xefi.pdf"
            target="_blank"
            class="font-mono text-xs uppercase tracking-widest border border-[var(--block-border)] px-3 py-1.5 hover:bg-white/10 transition-all"
          >
            ↗ Ouvrir
          </a>
        </div>
      </div>

      <!-- Embedded PDF -->
      <div class="w-full bg-[#525659]" style="height: 85vh;">
        <iframe
          src="/rapports/rapport-stage-xefi.pdf"
          class="w-full h-full"
          type="application/pdf"
          title="Compte rendu de stage — Maxime Blanco — Xefi Grand Lyon / HOPLA"
        />
      </div>
    </div>

    <!-- Fallback message (shown if iframe not supported) -->
    <noscript>
      <div class="mt-4 border border-[var(--border)] p-6 text-center">
        <p class="font-mono text-base text-[var(--muted)] mb-4">
          La prévisualisation PDF n'est pas disponible dans votre navigateur.
        </p>
        <BaseButton tag="a" href="/rapports/rapport-stage-xefi.pdf" target="_blank" variant="outline">
          Ouvrir le PDF dans un nouvel onglet →
        </BaseButton>
      </div>
    </noscript>

    <!-- Compétences validées -->
    <div class="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted-light)] mb-4">Compétences validées lors de ce stage</p>
        <div class="space-y-2">
          <div v-for="comp in competencesXefi" :key="comp.code"
            class="flex items-start gap-3 py-2 px-3 border border-[var(--border)]">
            <span class="w-2 h-2 rounded-full bg-[var(--accent)] flex-shrink-0 mt-1.5" />
            <span class="font-mono text-xs text-[var(--accent)] min-w-[2.5rem]">{{ comp.code }}</span>
            <span class="font-mono text-sm text-[var(--muted)] leading-relaxed">{{ comp.libelle }}</span>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <div class="border border-[var(--border)] p-6">
          <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted-light)] mb-3">Entreprise</p>
          <p class="font-display text-xl font-bold mb-1">Xefi Grand Lyon</p>
          <p class="font-mono text-sm text-[var(--muted)]">Division HOPLA — Développement logiciel web</p>
          <p class="font-mono text-sm text-[var(--muted)] mt-1">Rillieux-la-Pape (69) · Janvier — Février 2026</p>
        </div>
        <div class="border border-[var(--border)] p-6">
          <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted-light)] mb-3">Bilan</p>
          <p class="font-mono text-sm text-[var(--muted)] leading-relaxed italic">
            "Avoir travaillé sur un vrai produit utilisé par de vraies entreprises, avec une vraie équipe
            et de vraies contraintes de délais et de qualité, est quelque chose que la formation seule
            ne peut pas apporter."
          </p>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>

<script setup>
import { competencesSLAM, stages } from '~/data/projects'
import PageWrapper  from '@/components/templates/PageWrapper.vue'
import SectionLabel from '@/components/atoms/SectionLabel.vue'
import BaseButton   from '@/components/atoms/BaseButton.vue'

const stage = stages.find(s => s.id === 2)

const competencesXefi = computed(() =>
  stage.competences.map(code => competencesSLAM.find(c => c.code === code)).filter(Boolean)
)

const projetsResume = [
  { emoji: '🎓', titre: 'Mini-Pronote',        desc: 'Backend Laravel — API REST, rôles, BDD MySQL, Docker' },
  { emoji: '🎰', titre: 'Machine à sous',       desc: 'Frontend Vue.js/Nuxt.js — Gestion d\'état, Vuetify' },
  { emoji: '📻', titre: 'Radio interne Xefi',   desc: 'Projet en production — Gestion des bans, interface admin' },
  { emoji: '🌍', titre: 'Guides WeDrop',         desc: 'Guides interactifs multilingues — 6 langues, vue-i18n' },
]
</script>
