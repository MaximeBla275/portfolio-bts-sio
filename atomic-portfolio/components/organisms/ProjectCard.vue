<template>
  <article class="border-b border-[var(--border)] py-6 flex gap-5 px-2">
    <span class="font-mono text-xs text-[var(--muted)] min-w-[2.5rem] mt-0.5 flex-shrink-0">
      {{ String(index + 1).padStart(2, '0') }}
    </span>
    <div class="flex-1 min-w-0">
      <div class="flex items-start justify-between gap-3">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-1 flex-wrap">
            <span class="text-base">{{ project.emoji }}</span>
            <h3 class="font-display text-lg font-bold">{{ project.title }}</h3>
            <BaseTag :variant="project.type">{{ typeLabel }}</BaseTag>
          </div>
          <p class="font-mono text-xs text-[var(--muted)] line-clamp-2 max-w-lg">{{ project.description }}</p>
        </div>
        <span class="font-mono text-xs text-[var(--muted)] flex-shrink-0 hidden sm:block">{{ project.period || project.year }}</span>
      </div>

      <div class="flex flex-wrap items-center gap-3 mt-3">
        <TechTagList :technologies="project.technologies" :limit="3" />
        <div class="ml-auto flex items-center gap-3">
          <a v-if="project.url" :href="project.url" target="_blank"
            class="font-mono text-xs text-[var(--muted)] hover:text-[var(--ink)] transition-colors" @click.stop>
            Voir ↗
          </a>
          <a v-if="project.rapport" :href="project.rapport" download
            class="font-mono text-xs text-[var(--muted)] hover:text-[var(--ink)] transition-colors" @click.stop>
            📄 rapport
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import BaseTag     from '@/components/atoms/BaseTag.vue'
import TechTagList from '@/components/molecules/TechTagList.vue'

const props = defineProps({
  project: { type: Object,  required: true },
  index:   { type: Number,  required: true },
})
const typeLabel = computed(() => ({ scolaire: 'Scolaire', stage: 'Stage', personnel: 'Perso' }[props.project.type]))
</script>
