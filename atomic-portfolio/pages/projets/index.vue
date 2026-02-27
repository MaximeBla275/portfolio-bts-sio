<template>
  <PageWrapper>
    <SectionHeader label="Réalisations" title="Projets & réalisations" accent-word="réalisations" />

    <FilterBar v-model="activeFilter" :filters="filters" class="mb-10" />

    <div class="space-y-0 stagger" ref="el">
      <ProjectRow
        v-for="(project, i) in filteredProjects"
        :key="project.id"
        :project="project"
        :index="i"
      />
    </div>

    <div v-if="filteredProjects.length === 0" class="text-center py-20 text-[var(--muted)] font-mono text-sm">
      Aucun projet pour ce filtre.
    </div>
  </PageWrapper>
</template>

<script setup>
import { projects } from '~/data/projects'
import PageWrapper  from '@/components/templates/PageWrapper.vue'
import SectionHeader from '@/components/molecules/SectionHeader.vue'
import FilterBar    from '@/components/molecules/FilterBar.vue'
import ProjectRow   from '@/components/organisms/ProjectRow.vue'

useScrollReveal()

const activeFilter = ref('all')

const filters = computed(() => [
  { value: 'all',       emoji: '🗂️', label: 'Tous',       count: projects.length },
  { value: 'stage',     emoji: '🏢', label: 'Stages',     count: projects.filter(p => p.type === 'stage').length },
  { value: 'scolaire',  emoji: '📚', label: 'Scolaires',  count: projects.filter(p => p.type === 'scolaire').length },
  { value: 'personnel', emoji: '💡', label: 'Personnels', count: projects.filter(p => p.type === 'personnel').length },
])

const filteredProjects = computed(() =>
  activeFilter.value === 'all' ? projects : projects.filter(p => p.type === activeFilter.value)
)
</script>
