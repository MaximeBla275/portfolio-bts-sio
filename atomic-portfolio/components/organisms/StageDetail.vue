<template>
  <article :id="`stage-${stage.id}`">
    <!-- Image preview card -->
    <div class="mb-8 border border-[var(--border)] overflow-hidden">
      <div class="h-52 md:h-72 relative flex items-center justify-center overflow-hidden">
        <!-- Fond couleur de base -->
        <div class="absolute inset-0" :style="{ backgroundColor: stage.color + '18' }" />

        <!-- Logo en grand watermark centré -->
        <div class="absolute inset-0 flex items-center justify-center">
          <img
            v-if="stage.logo"
            :src="stage.logo"
            :alt="stage.entreprise"
            class="w-2/3 md:w-1/2 max-w-xs object-contain opacity-10 select-none pointer-events-none"
          />
          <span
            v-else
            class="font-display font-black text-[clamp(6rem,20vw,12rem)] opacity-5 select-none"
            :style="{ color: stage.color }"
          >
            {{ stage.entreprise.slice(0, 2).toUpperCase() }}
          </span>
        </div>

        <!-- Overlay dégradé bas pour lisibilité -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <!-- Overlay info -->
        <div class="absolute inset-0 flex flex-col justify-between p-6 z-10">
          <div class="flex items-start justify-between">
            <BaseTag :variant="stage.annee === '1ère année' ? 'scolaire' : 'stage'" class="px-3 py-1.5">
              {{ stage.annee }}
            </BaseTag>
            <div class="flex gap-2">
              <NuxtLink v-if="stage.detailPage" :to="stage.detailPage">
                <BaseButton variant="outline" size="sm" class="!border-white/40 !text-white hover:!border-white hover:!bg-white/10">
                  📖 Compte rendu
                </BaseButton>
              </NuxtLink>
              <BaseButton v-if="stage.rapport" tag="a" :href="stage.rapport" :download="true" variant="solid" size="sm">
                📄 Télécharger
              </BaseButton>
            </div>
          </div>

          <!-- Logo + nom entreprise en bas -->
          <div class="flex items-end justify-between gap-4">
            <div class="flex items-center gap-4">
              <!-- Logo -->
              <div class="w-14 h-14 bg-white/95 flex items-center justify-center p-2 flex-shrink-0">
                <img
                  v-if="stage.logo"
                  :src="stage.logo"
                  :alt="stage.entreprise"
                  class="w-full h-full object-contain"
                />
                <span v-else class="font-display text-2xl font-black" :style="{ color: stage.color }">
                  {{ stage.entreprise.charAt(0) }}
                </span>
              </div>
              <div>
                <p class="font-display text-2xl md:text-3xl font-black text-white leading-tight">{{ stage.entreprise }}</p>
                <p class="font-mono text-xs text-white/60">{{ stage.secteur }}</p>
              </div>
            </div>
            <p class="font-mono text-xs text-white/50 text-right hidden sm:block">{{ stage.ville }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- Missions -->
      <div class="md:col-span-2 space-y-8">
        <div>
          <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-2">Période</p>
          <p class="font-mono text-sm">{{ stage.periode }}</p>
        </div>
        <div>
          <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-4">Description</p>
          <p class="font-mono text-sm text-[var(--muted)] leading-relaxed">{{ stage.description }}</p>
        </div>
        <div>
          <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-4">Missions réalisées</p>
          <ul class="space-y-3">
            <li v-for="(mission, i) in stage.missions" :key="i" class="flex gap-3 font-mono text-sm">
              <span class="text-[var(--accent)] flex-shrink-0 mt-0.5">→</span>
              <span class="text-[var(--muted)] leading-relaxed">{{ mission }}</span>
            </li>
          </ul>
        </div>
        <!-- Projets liés -->
        <div>
          <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-4">Projets réalisés durant ce stage</p>
          <div class="space-y-3">
            <NuxtLink v-for="proj in relatedProjects" :key="proj.id" to="/projets"
              class="group flex items-center justify-between border border-[var(--border)] px-4 py-3 hover:border-[var(--ink)] transition-colors">
              <div class="flex items-center gap-3">
                <span class="text-lg">{{ proj.emoji }}</span>
                <div>
                  <p class="font-mono text-sm font-medium group-hover:text-[var(--accent)] transition-colors">{{ proj.title }}</p>
                  <p class="font-mono text-xs text-[var(--muted)]">{{ proj.subtitle }}</p>
                </div>
              </div>
              <span class="text-[var(--muted)] group-hover:translate-x-1 transition-transform">→</span>
            </NuxtLink>
          </div>
        </div>
        <!-- Bilan -->
        <div class="border-l-2 border-[var(--accent)] pl-5">
          <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-2">Bilan personnel</p>
          <p class="font-mono text-sm text-[var(--muted)] leading-relaxed italic">"{{ stage.bilan }}"</p>
        </div>
      </div>

      <!-- Aside -->
      <div class="space-y-8">
        <div>
          <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-3">Technologies</p>
          <TechTagList :technologies="stage.technologies" />
        </div>
        <div>
          <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-3">Compétences validées</p>
          <div class="space-y-2">
            <div v-for="code in stage.competences" :key="code" class="flex items-start gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0 mt-1.5" />
              <div>
                <span class="font-mono text-xs text-[var(--accent)]">{{ code }}</span>
                <span class="font-mono text-xs text-[var(--muted)] ml-2">{{ getCompLabel(code) }}</span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="stage.rapport" class="border border-[var(--border)] p-4 space-y-3">
          <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">Document</p>
          <!-- Lien vers page dédiée si stage Xefi -->
          <NuxtLink
            v-if="stage.id === 2"
            to="/stages/xefi"
            class="flex items-center gap-3 font-mono text-sm hover:text-[var(--accent)] transition-colors group"
          >
            <span class="text-xl">📖</span>
            <div>
              <span class="block">Lire le compte rendu</span>
              <span class="font-mono text-xs text-[var(--muted)]">Visualisation & téléchargement</span>
            </div>
            <span class="ml-auto text-[var(--muted)] group-hover:translate-x-1 transition-transform">→</span>
          </NuxtLink>
          <a :href="stage.rapport" download class="flex items-center gap-3 font-mono text-sm hover:text-[var(--accent)] transition-colors">
            <span class="text-xl">📄</span>
            <div>
              <span class="block">Télécharger le PDF</span>
              <span class="font-mono text-xs text-[var(--muted)]">PDF · Rapport complet</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import BaseTag     from '@/components/atoms/BaseTag.vue'
import BaseButton  from '@/components/atoms/BaseButton.vue'
import TechTagList from '@/components/molecules/TechTagList.vue'

const props = defineProps({
  stage:           { type: Object, required: true },
  relatedProjects: { type: Array,  default: () => [] },
  allCompetences:  { type: Array,  default: () => [] },
})

function getCompLabel(code) {
  return props.allCompetences.find(c => c.code === code)?.libelle || ''
}
</script>
