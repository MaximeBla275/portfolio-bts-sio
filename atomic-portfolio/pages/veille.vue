<template>
  <PageWrapper>

    <!-- Header -->
    <SectionHeader
      label="Compétence 6.2 — Veille informationnelle"
      title="L'IA dans le développement"
      accent-word="développement"
    />

    <!-- Intro -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      <div class="md:col-span-2 border border-[var(--border)] p-6">
        <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted-light)] mb-3">Pourquoi ce sujet ?</p>
        <p class="font-mono text-base text-[var(--muted)] leading-relaxed mb-4">
          Pendant mon stage chez Xefi, j'ai travaillé dans un environnement où l'IA faisait déjà partie du quotidien des développeurs : complétion de code, aide au debugging, documentation... J'ai voulu comprendre ce que ça changeait vraiment.
        </p>
        <p class="font-mono text-base text-[var(--muted)] leading-relaxed">
          Cette veille porte sur <strong class="text-[var(--ink)]">ce que l'IA apporte concrètement aux développeurs</strong> — et ce qu'elle n'apporte pas. Gains de productivité, outils, limites, risques de sécurité, et ce que ça signifie pour le métier dans les prochaines années.
        </p>
      </div>
      <div class="space-y-3">
        <div class="border border-[var(--border)] p-4 text-center">
          <p class="font-display text-3xl font-bold text-[var(--accent)]">16</p>
          <p class="font-mono text-xs text-[var(--muted)] mt-1 leading-relaxed">articles analysés<br>de sources variées</p>
        </div>
        <div class="border border-[var(--border)] p-4 text-center">
          <p class="font-display text-3xl font-bold text-[var(--accent)]">5</p>
          <p class="font-mono text-xs text-[var(--muted)] mt-1 leading-relaxed">axes thématiques<br>couverts</p>
        </div>
      </div>
    </div>

    <!-- Outils de veille -->
    <div class="mb-14">
      <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted-light)] mb-5">Organisation de la veille — Sources utilisées</p>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        <div v-for="outil in outils" :key="outil.name"
          class="border border-[var(--border)] p-4 hover:border-[var(--ink)] transition-colors">
          <span class="text-2xl block mb-2">{{ outil.emoji }}</span>
          <p class="font-mono text-xs font-medium">{{ outil.name }}</p>
        </div>
      </div>
      <p class="font-mono text-xs text-[var(--muted)] mt-4 max-w-2xl leading-relaxed">
        Veille organisée via des flux RSS (Feedly), newsletters techniques (TLDR Tech, Next.ink), alertes Google sur les mots-clés "IA développeurs 2025", et suivi des rapports annuels (Stack Overflow, JetBrains, Google DORA). Les articles ont été sélectionnés pour leur pertinence avec le domaine SIO SLAM et leur fiabilité (sources spécialisées IT ou études avec méthodologie claire).
      </p>
    </div>

    <!-- Plan de la veille -->
    <div class="mb-14 border border-[var(--border)] p-6">
      <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted-light)] mb-5">Plan de la veille</p>
      <div class="grid grid-cols-1 sm:grid-cols-5 gap-3">
        <div v-for="(axe, i) in axes" :key="axe.label"
          class="border border-[var(--border)] p-4 cursor-pointer hover:border-[var(--ink)] transition-colors"
          @click="filtreActif = filtreActif === axe.label ? null : axe.label"
          :class="filtreActif === axe.label ? 'border-[var(--ink)] block-inv' : ''">
          <span class="text-xl block mb-2">{{ axe.emoji }}</span>
          <p class="font-mono text-xs font-medium leading-snug">{{ axe.label }}</p>
          <p class="font-mono text-xs mt-1" :class="filtreActif === axe.label ? 'text-[var(--block-muted)]' : 'text-[var(--muted)]'">
            {{ veilleItems.filter(v => v.axe === axe.label).length }} articles
          </p>
        </div>
      </div>
      <p class="font-mono text-xs text-[var(--muted)] mt-3">Cliquez sur un axe pour filtrer · {{ filtreActif ? '1 axe actif' : 'Tous les articles' }}</p>
    </div>

    <!-- Articles -->
    <div>
      <div class="flex items-center justify-between mb-8">
        <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted-light)]">
          Articles & analyses
          <span class="ml-2 text-[var(--accent)]">({{ articlesAffiches.length }}/{{ veilleItems.length }})</span>
        </p>
        <button v-if="filtreActif" @click="filtreActif = null"
          class="font-mono text-xs border border-[var(--border)] px-3 py-1.5 hover:border-[var(--ink)] transition-colors">
          ✕ Effacer le filtre
        </button>
      </div>

      <div class="space-y-6">
        <article v-for="(item, i) in articlesAffiches" :key="item.id"
          class="border border-[var(--border)] hover:border-[var(--ink)] transition-colors duration-300 overflow-hidden">

          <!-- Header -->
          <div class="flex items-start justify-between gap-4 px-6 pt-6 pb-4 border-b border-[var(--border)]">
            <div class="flex items-start gap-4 flex-1 min-w-0">
              <span class="font-mono text-xs text-[var(--muted)] min-w-[2rem] mt-0.5">{{ String(item.id).padStart(2, '0') }}</span>
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-2 flex-wrap">
                  <span class="font-mono text-xs px-2 py-0.5 border border-[var(--border)] text-[var(--accent)]">
                    {{ axes.find(a => a.label === item.axe)?.emoji }} {{ item.axe }}
                  </span>
                </div>
                <h3 class="font-display text-lg md:text-xl font-bold leading-tight mb-1">{{ item.titre }}</h3>
                <div class="flex items-center gap-3 flex-wrap">
                  <span class="font-mono text-xs text-[var(--accent)]">{{ item.source }}</span>
                  <span class="font-mono text-xs text-[var(--muted)]">·</span>
                  <span class="font-mono text-xs text-[var(--muted)]">{{ item.date }}</span>
                </div>
              </div>
            </div>
            <a :href="item.url" target="_blank" rel="noopener noreferrer"
              class="flex-shrink-0 group flex items-center gap-2 border border-[var(--border)] px-4 py-2 font-mono text-xs uppercase tracking-widest hover:bg-[var(--ink)] hover:text-[var(--cream)] hover:border-[var(--ink)] transition-all duration-200">
              Lire <span class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </a>
          </div>

          <!-- Résumé -->
          <div class="px-6 py-5 border-b border-[var(--border)]">
            <div class="flex gap-4">
              <div class="w-1 bg-[var(--accent)] flex-shrink-0 rounded" />
              <div>
                <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted-light)] mb-2">Résumé</p>
                <p class="font-mono text-base text-[var(--muted)] leading-relaxed">{{ item.resume }}</p>
              </div>
            </div>
          </div>

          <!-- Analyse perso -->
          <div class="px-6 py-5">
            <div class="flex gap-4">
              <div class="w-1 bg-[var(--ink)] flex-shrink-0 rounded opacity-30" />
              <div>
                <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted-light)] mb-2">Mon analyse</p>
                <p class="font-mono text-base text-[var(--muted)] leading-relaxed italic">{{ item.analyse }}</p>
              </div>
            </div>
          </div>

          <!-- Tags -->
          <div class="px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)]">
            <TechTagList :technologies="item.tags" />
            <a :href="item.url" target="_blank" rel="noopener noreferrer"
              class="font-mono text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
              {{ item.url.replace('https://', '').replace('http://', '').split('/')[0] }} →
            </a>
          </div>
        </article>
      </div>
    </div>

    <!-- Synthèse -->
    <div class="mt-16 block-inv p-8 md:p-12">
      <p class="font-mono text-xs uppercase tracking-widest mb-4" style="color: var(--accent)">— Synthèse & recommandations</p>
      <h2 class="font-display text-2xl md:text-3xl font-bold mb-8">Ce que j'en retiens pour ma carrière</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono text-base text-[var(--block-muted)] leading-relaxed mb-10">
        <div>
          <p class="text-[var(--block-text)] font-medium mb-3">✅ Ce qui fonctionne vraiment</p>
          <p>L'IA excelle sur les tâches répétitives et bien définies : autocomplétion, génération de tests, conversion de code, documentation. Lors de mon stage Xefi, j'aurais pu l'utiliser pour accélérer les migrations Laravel ou les fichiers de traduction i18n — des tâches volumineuses mais peu créatives.</p>
        </div>
        <div>
          <p class="text-[var(--block-text)] font-medium mb-3">⚠️ Les limites à ne pas ignorer</p>
          <p>96 % des développeurs ne font pas totalement confiance au code généré (Hurter & Co). L'IA introduit des failles dans 45 % des cas (Veracode). L'étude METR montre même une baisse de productivité chez les développeurs très expérimentés. La revue humaine reste indispensable — comme chez HOPLA.</p>
        </div>
        <div>
          <p class="text-[var(--block-text)] font-medium mb-3">🎯 Mon positionnement professionnel</p>
          <p>L'IA est un amplificateur de compétences existantes, pas un substitut. Ma priorité : consolider mes bases (Laravel, Vue.js, architecture MVC) pour pouvoir superviser efficacement ce que l'IA produit. Les profils qui se démarqueront ne seront pas ceux qui délèguent tout à l'IA, mais ceux qui savent quoi lui déléguer.</p>
        </div>
      </div>

      <!-- Recommandations concrètes -->
      <div class="border-t border-[var(--block-border)] pt-8">
        <p class="font-mono text-xs uppercase tracking-widest mb-6" style="color: var(--accent)">Recommandations concrètes pour le domaine SIO SLAM</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="reco in recommandations" :key="reco.titre"
            class="border border-[var(--block-border)] p-4">
            <p class="font-mono text-sm text-[var(--block-text)] font-medium mb-1">{{ reco.emoji }} {{ reco.titre }}</p>
            <p class="font-mono text-xs text-[var(--block-muted)] leading-relaxed">{{ reco.texte }}</p>
          </div>
        </div>
      </div>

      <!-- Conclusion -->
      <div class="border-t border-[var(--block-border)] pt-8 mt-8">
        <p class="font-mono text-xs uppercase tracking-widest mb-4" style="color: var(--accent)">Conclusion</p>
        <p class="font-mono text-base text-[var(--block-muted)] leading-relaxed max-w-3xl">
          Ce qui ressort de ces 16 articles, c'est que l'IA est utile surtout quand on sait déjà ce qu'on fait. Les développeurs qui en tirent le plus parti ne sont pas ceux qui lui délèguent tout, mais ceux qui comprennent ce qu'elle produit et savent quand la corriger. Pour moi en BTS SIO SLAM, ça veut dire continuer à vraiment apprendre Laravel, Vue.js et l'architecture — pas juste copier du code généré.
        </p>
      </div>
    </div>

  </PageWrapper>
</template>

<script setup>
import { ref, computed } from 'vue'
import { veilleItems } from '~/data/projects'
import PageWrapper   from '@/components/templates/PageWrapper.vue'
import SectionHeader from '@/components/molecules/SectionHeader.vue'
import TechTagList   from '@/components/molecules/TechTagList.vue'

const filtreActif = ref(null)

const axes = [
  { label: 'Adoption & chiffres',  emoji: '📊' },
  { label: 'Outils & pratiques',   emoji: '🛠️' },
  { label: 'Limites & nuances',    emoji: '⚠️' },
  { label: 'Sécurité',             emoji: '🔒' },
  { label: 'Avenir du métier',     emoji: '🚀' },
]

const articlesAffiches = computed(() =>
  filtreActif.value
    ? veilleItems.filter(v => v.axe === filtreActif.value)
    : veilleItems
)

const outils = [
  { name: 'Feedly',              emoji: '📡' },
  { name: 'Google Alerts',       emoji: '🔔' },
  { name: 'Next.ink',            emoji: '📰' },
  { name: 'Blog du Modérateur',  emoji: '💻' },
  { name: 'TLDR Tech',           emoji: '✉️' },
  { name: 'Korben',              emoji: '🛡️' },
]

const recommandations = [
  {
    emoji: '🔍',
    titre: 'Toujours relire et tester le code généré',
    texte: "45 % du code IA contient des failles (Veracode). Intégrer systématiquement des tests Postman, une revue de code et des validators de sécurité dans le workflow.",
  },
  {
    emoji: '🧱',
    titre: 'Consolider les bases avant de déléguer',
    texte: "L'IA amplifie les compétences existantes. Maîtriser Laravel, Vue.js et les architectures MVC en profondeur pour superviser efficacement les productions IA.",
  },
  {
    emoji: '📋',
    titre: 'Apprendre à spécifier plutôt qu\'à exécuter',
    texte: "Le rôle du développeur évolue vers l'orchestration. Savoir rédiger des prompts précis et des specs exploitables devient une compétence clé.",
  },
  {
    emoji: '🔐',
    titre: 'Anticiper les risques sécurité des outils IA',
    texte: "Les IDE IA eux-mêmes ont des CVE (IDEsaster, déc. 2025). Maintenir à jour les outils, limiter les permissions et ne pas exposer les fichiers sensibles.",
  },
]
</script>
