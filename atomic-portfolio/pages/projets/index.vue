<template>
  <PageWrapper>
    <SectionHeader label="Réalisations" title="Projets & réalisations" accent-word="réalisations" />

    <FilterBar v-model="activeFilter" :filters="filters" class="mb-10" />

    <div ref="listEl" class="space-y-0">
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
import PageWrapper   from '@/components/templates/PageWrapper.vue'
import SectionHeader from '@/components/molecules/SectionHeader.vue'
import FilterBar     from '@/components/molecules/FilterBar.vue'
import ProjectRow    from '@/components/organisms/ProjectRow.vue'

const activeFilter = ref('all')
const listEl = ref(null)

const filters = computed(() => [
  { value: 'all',       emoji: '🗂️', label: 'Tous',       count: projects.length },
  { value: 'stage',     emoji: '🏢', label: 'Stages',     count: projects.filter(p => p.type === 'stage').length },
  { value: 'scolaire',  emoji: '📚', label: 'Scolaires',  count: projects.filter(p => p.type === 'scolaire').length },
  { value: 'personnel', emoji: '💡', label: 'Personnels', count: projects.filter(p => p.type === 'personnel').length },
])

const filteredProjects = computed(() =>
  activeFilter.value === 'all' ? projects : projects.filter(p => p.type === activeFilter.value)
)

// À chaque changement de filtre, on re-révèle tous les éléments visibles
watch(activeFilter, async () => {
  await nextTick()
  if (!listEl.value) return
  Array.from(listEl.value.children).forEach((child, i) => {
    child.style.opacity = '0'
    child.style.transform = 'translateY(16px)'
    child.style.transition = 'opacity 0.4s ease, transform 0.4s ease'
    setTimeout(() => {
      child.style.opacity = '1'
      child.style.transform = 'translateY(0)'
    }, i * 60)
  })
})

// Au premier chargement
onMounted(async () => {
  await nextTick()
  if (!listEl.value) return
  Array.from(listEl.value.children).forEach((child, i) => {
    child.style.opacity = '0'
    child.style.transform = 'translateY(16px)'
    child.style.transition = 'opacity 0.4s ease, transform 0.4s ease'
    setTimeout(() => {
      child.style.opacity = '1'
      child.style.transform = 'translateY(0)'
    }, 80 + i * 60)
  })
})
</script>
