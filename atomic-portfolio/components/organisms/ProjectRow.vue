<template>
  <article class="border-b border-[var(--border)] py-8 flex flex-col md:flex-row gap-6">

    <!-- Left -->
    <div class="flex flex-row md:flex-col gap-3 md:gap-2 min-w-[6rem] items-center md:items-start flex-shrink-0">
      <span class="font-mono text-xs text-[var(--muted)]">{{ String(index + 1).padStart(2, '0') }}</span>
      <BaseTag :variant="project.type">{{ typeLabel }}</BaseTag>
    </div>

    <!-- Main -->
    <div class="flex-1 min-w-0">
      <div class="flex items-start justify-between gap-4 mb-3">
        <div>
          <div class="flex items-center gap-2 mb-1 flex-wrap">
            <span class="text-lg">{{ project.emoji }}</span>
            <h2 class="font-display text-xl md:text-2xl font-bold">{{ project.title }}</h2>
          </div>
          <p class="font-mono text-xs text-[var(--muted)]">{{ project.subtitle }}</p>
        </div>
        <span class="font-mono text-xs text-[var(--muted)] flex-shrink-0 hidden md:block">{{ project.period || project.year }}</span>
      </div>

      <p class="font-mono text-sm text-[var(--muted)] leading-relaxed mb-5 max-w-2xl">{{ project.description }}</p>

      <!-- Bottom row -->
      <div class="flex flex-wrap items-center gap-2">
        <TechTagList :technologies="project.technologies" :limit="4" />
        <div class="ml-auto flex items-center gap-4">
          <a
            v-if="project.url"
            :href="project.url"
            target="_blank"
            class="font-mono text-xs text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
          >
            Voir le site ↗
          </a>
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            class="font-mono text-xs text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
          >
            GitHub ↗
          </a>
          <a
            v-if="project.rapport"
            :href="project.rapport"
            download
            class="font-mono text-xs text-[var(--muted)] hover:text-[var(--ink)] transition-colors flex items-center gap-1"
          >
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
  project: { type: Object, required: true },
  index:   { type: Number, required: true },
})
const typeLabel = computed(() => ({ scolaire: 'Scolaire', stage: 'Stage', personnel: 'Perso' }[props.project.type]))
</script>
