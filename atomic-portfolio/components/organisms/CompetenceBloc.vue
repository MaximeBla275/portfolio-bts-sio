<template>
  <div>
    <div class="flex items-center gap-4 mb-5">
      <div class="flex-shrink-0 w-10 h-10 border border-[var(--border)] flex items-center justify-center">
        <span class="text-lg">{{ bloc.emoji }}</span>
      </div>
      <div>
        <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">Bloc {{ bloc.numero }}</p>
        <h2 class="font-display text-xl md:text-2xl font-bold">{{ bloc.titre }}</h2>
      </div>
    </div>

    <!-- Table desktop -->
    <div class="border border-[var(--border)] overflow-hidden hidden md:block">
      <div class="grid grid-cols-12 bg-[var(--ink)] text-[var(--cream)] px-4 py-3">
        <span class="col-span-1 font-mono text-xs uppercase tracking-widest opacity-50">N°</span>
        <span class="col-span-5 font-mono text-xs uppercase tracking-widest opacity-50">Compétence</span>
        <span class="col-span-4 font-mono text-xs uppercase tracking-widest opacity-50">Projets liés</span>
        <span class="col-span-2 font-mono text-xs uppercase tracking-widest opacity-50 text-right">Statut</span>
      </div>
      <div
        v-for="comp in bloc.competences"
        :key="comp.code"
        :class="['grid grid-cols-12 px-4 py-4 border-t border-[var(--border)] items-center', !comp.covered && 'opacity-40']"
      >
        <span class="col-span-1 font-mono text-xs text-[var(--accent)] font-bold">{{ comp.code }}</span>
        <span class="col-span-5 font-mono text-xs leading-relaxed pr-4">{{ comp.libelle }}</span>
        <div class="col-span-4 flex flex-wrap gap-1">
          <span
            v-for="proj in getProjectsForComp(comp.code)"
            :key="proj.id"
            class="text-xs font-mono px-1.5 py-0.5 border border-[var(--border)] text-[var(--muted)]"
          >
            {{ proj.emoji }} {{ proj.title.split('—')[0].trim() }}
          </span>
        </div>
        <div class="col-span-2 flex justify-end">
          <BaseTag :variant="comp.covered ? 'success' : 'pending'">
            {{ comp.covered ? '✓ Acquise' : '○ À acquérir' }}
          </BaseTag>
        </div>
      </div>
    </div>

    <!-- Cards mobile -->
    <div class="md:hidden space-y-2">
      <div
        v-for="comp in bloc.competences"
        :key="comp.code"
        :class="['border border-[var(--border)] p-4', !comp.covered && 'opacity-40']"
      >
        <div class="flex items-start justify-between gap-2 mb-2">
          <span class="font-mono text-xs font-bold text-[var(--accent)]">{{ comp.code }}</span>
          <BaseTag :variant="comp.covered ? 'success' : 'pending'">
            {{ comp.covered ? '✓' : '○' }}
          </BaseTag>
        </div>
        <p class="font-mono text-xs leading-relaxed mb-2">{{ comp.libelle }}</p>
        <div class="flex flex-wrap gap-1">
          <span
            v-for="proj in getProjectsForComp(comp.code)"
            :key="proj.id"
            class="text-xs font-mono px-1.5 py-0.5 border border-[var(--border)] text-[var(--muted)]"
          >
            {{ proj.emoji }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseTag from '@/components/atoms/BaseTag.vue'

const props = defineProps({
  bloc:     { type: Object, required: true },
  projects: { type: Array,  default: () => [] },
})

function getProjectsForComp(code) {
  return props.projects.filter(p => p.competences.includes(code))
}
</script>
