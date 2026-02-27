<template>
  <PageWrapper>

    <!-- Header -->
    <SectionHeader
      label="Compétence 6.2 — Veille informationnelle"
      title="L'IA dans le développement"
      accent-word="développement"
    />

    <!-- Intro + contexte -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      <div class="md:col-span-2 border border-[var(--border)] p-6">
        <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-3">Pourquoi ce sujet ?</p>
        <p class="font-mono text-sm text-[var(--muted)] leading-relaxed mb-4">
          L'intelligence artificielle transforme en profondeur le quotidien des développeurs. Lors de mon stage chez Xefi (division HOPLA), j'ai travaillé dans un environnement où l'IA était déjà présente : outils de complétion, revue de code, documentation…
        </p>
        <p class="font-mono text-sm text-[var(--muted)] leading-relaxed">
          Cette veille porte sur <strong class="text-[var(--ink)]">l'utilité concrète de l'IA pour les développeurs</strong> : gains de productivité, outils adoptés, limites réelles et enjeux à long terme pour le métier.
        </p>
      </div>
      <div class="space-y-3">
        <div class="border border-[var(--border)] p-4 text-center">
          <p class="font-display text-3xl font-bold text-[var(--accent)]">90%</p>
          <p class="font-mono text-xs text-[var(--muted)] mt-1 leading-relaxed">des développeurs utilisent l'IA en 2025</p>
          <p class="font-mono text-xs text-white/30 mt-1">Source : Google DORA 2025</p>
        </div>
        <div class="border border-[var(--border)] p-4 text-center">
          <p class="font-display text-3xl font-bold text-[var(--accent)]">+55%</p>
          <p class="font-mono text-xs text-[var(--muted)] mt-1 leading-relaxed">de productivité avec GitHub Copilot</p>
          <p class="font-mono text-xs text-white/30 mt-1">Source : GitHub COO, 2024</p>
        </div>
      </div>
    </div>

    <!-- Outils de veille -->
    <div class="mb-14">
      <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-5">Outils de veille utilisés</p>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div v-for="outil in outils" :key="outil.name"
          class="border border-[var(--border)] p-4 hover:border-[var(--ink)] transition-colors">
          <span class="text-2xl block mb-2">{{ outil.emoji }}</span>
          <p class="font-mono text-sm font-medium">{{ outil.name }}</p>
          <p class="font-mono text-xs text-[var(--muted)] mt-1">{{ outil.desc }}</p>
        </div>
      </div>
    </div>

    <!-- Articles -->
    <div>
      <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-8">Articles & analyses</p>

      <div class="space-y-6">
        <article
          v-for="(item, i) in veilleItems"
          :key="item.id"
          class="border border-[var(--border)] hover:border-[var(--ink)] transition-colors duration-300 overflow-hidden"
        >
          <!-- Header article -->
          <div class="flex items-start justify-between gap-4 px-6 pt-6 pb-4 border-b border-[var(--border)]">
            <div class="flex items-start gap-4 flex-1 min-w-0">
              <span class="font-mono text-xs text-[var(--muted)] min-w-[2rem] mt-0.5">{{ String(i + 1).padStart(2, '0') }}</span>
              <div class="flex-1">
                <h3 class="font-display text-lg md:text-xl font-bold leading-tight mb-1">{{ item.titre }}</h3>
                <div class="flex items-center gap-3 flex-wrap">
                  <span class="font-mono text-xs text-[var(--accent)]">{{ item.source }}</span>
                  <span class="font-mono text-xs text-[var(--muted)]">·</span>
                  <span class="font-mono text-xs text-[var(--muted)]">{{ item.date }}</span>
                </div>
              </div>
            </div>
            <!-- Lien externe -->
            <a
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-shrink-0 group flex items-center gap-2 border border-[var(--border)] px-4 py-2 font-mono text-xs uppercase tracking-widest hover:bg-[var(--ink)] hover:text-[var(--cream)] hover:border-[var(--ink)] transition-all duration-200"
            >
              Lire l'article
              <span class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </a>
          </div>

          <!-- Résumé / preview -->
          <div class="px-6 py-5 bg-black/[0.01]">
            <div class="flex gap-4">
              <div class="w-1 bg-[var(--accent)] flex-shrink-0 rounded" />
              <div>
                <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-2">Résumé</p>
                <p class="font-mono text-sm text-[var(--muted)] leading-relaxed">{{ item.resume }}</p>
              </div>
            </div>
          </div>

          <!-- Footer tags + lien -->
          <div class="px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)]">
            <TechTagList :technologies="item.tags" />
            <a
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="font-mono text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors link-hover"
            >
              {{ item.url.replace('https://', '').split('/')[0] }} →
            </a>
          </div>
        </article>
      </div>
    </div>

    <!-- Synthèse personnelle -->
    <div class="mt-16 bg-[var(--ink)] text-[var(--cream)] p-8 md:p-12">
      <p class="font-mono text-xs uppercase tracking-widest mb-4" style="color: var(--accent)">— Synthèse personnelle</p>
      <h2 class="font-display text-2xl md:text-3xl font-bold mb-6">Ce que j'en retiens</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-sm text-white/70 leading-relaxed">
        <div>
          <p class="text-white font-medium mb-2">✅ Les vraies utilités</p>
          <p>L'IA excelle pour les tâches répétitives : autocomplétion, génération de tests unitaires, conversion de code, documentation. Lors de mon stage, j'aurais pu l'utiliser pour accélérer les migrations Laravel ou les fichiers de traduction i18n.</p>
        </div>
        <div>
          <p class="text-white font-medium mb-2">⚠️ Les limites à connaître</p>
          <p>96 % des développeurs ne font pas totalement confiance au code généré. L'IA peut produire du code qui semble correct mais contient des failles ou de la duplication. La revue humaine reste indispensable — comme on l'a pratiqué chez HOPLA.</p>
        </div>
        <div>
          <p class="text-white font-medium mb-2">🎯 Mon positionnement</p>
          <p>L'IA est un amplificateur, pas un remplaçant. Elle me permet d'aller plus vite sur ce que je maîtrise déjà, mais c'est la compréhension des bases (Laravel, Vue.js, architecture) qui reste indispensable pour en tirer parti correctement.</p>
        </div>
      </div>
    </div>

  </PageWrapper>
</template>

<script setup>
import { veilleItems } from '~/data/projects'
import PageWrapper   from '@/components/templates/PageWrapper.vue'
import SectionHeader from '@/components/molecules/SectionHeader.vue'
import TechTagList   from '@/components/molecules/TechTagList.vue'

const outils = [
  { name: 'Blog du Modérateur',      emoji: '📰', desc: 'Source de 2 articles (Google DORA, JetBrains)' },
  { name: 'Le Monde Informatique',   emoji: '💻', desc: 'Source — Interview COO GitHub Copilot' },
  { name: 'Programmez.com',          emoji: '📖', desc: 'Source — Ingénierie augmentée 2025' },
  { name: 'Hurter & Co',             emoji: '📊', desc: 'Source — Analyse copilotes IA 2026' },
  { name: 'dev.to',                  emoji: '✍️', desc: 'Articles communauté dev, retours terrain' },
  { name: 'Stack Overflow Survey',   emoji: '📈', desc: 'Enquête annuelle développeurs mondiale' },
]
</script>
