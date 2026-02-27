<template>
  <NuxtLink
    :to="stage.detailPage || `/stages#stage-${stage.id}`"
    class="group block border border-[var(--border)] hover:border-[var(--ink)] transition-colors duration-300 overflow-hidden"
  >
    <!-- Bandeau logo watermark -->
    <div class="h-40 relative overflow-hidden">
      <div class="absolute inset-0" :style="{ backgroundColor: stage.color + '18' }" />
      <div class="absolute inset-0 flex items-center justify-center">
        <img v-if="stage.logo" :src="stage.logo" :alt="stage.entreprise"
          class="w-1/2 object-contain opacity-10 select-none pointer-events-none" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      <!-- Logo + nom -->
      <div class="absolute bottom-4 left-4 flex items-center gap-3 z-10">
        <div class="w-10 h-10 bg-white/10 border border-white/20 flex items-center justify-center p-1.5">
          <img v-if="stage.logo" :src="stage.logo" :alt="stage.entreprise" class="w-full h-full object-contain" />
        </div>
        <div>
          <p class="font-display text-base font-bold text-white leading-tight">{{ stage.entreprise }}</p>
          <p class="font-mono text-xs text-white/50">{{ stage.ville }}</p>
        </div>
      </div>

      <!-- Badge -->
      <div class="absolute top-3 right-3 z-10">
        <span class="font-mono text-xs px-2 py-1 border border-white/20 text-white/60 bg-black/30">
          {{ stage.annee }}
        </span>
      </div>
    </div>

    <!-- Contenu minimal -->
    <div class="p-5">
      <p class="font-mono text-xs text-[var(--muted)] mb-3">{{ stage.periode }}</p>
      <TechTagList :technologies="stage.technologies" :limit="4" />
      <p class="font-mono text-xs text-[var(--muted)] mt-4 group-hover:text-[var(--ink)] transition-colors">
        Voir le compte rendu →
      </p>
    </div>
  </NuxtLink>
</template>

<script setup>
import TechTagList from '@/components/molecules/TechTagList.vue'
defineProps({ stage: { type: Object, required: true } })
</script>
