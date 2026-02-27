<template>
  <PageWrapper>
    <SectionHeader label="Expériences professionnelles" title="Mes stages" accent-word="stages" />

    <div class="space-y-24">
      <StageDetail
        v-for="stage in stages"
        :key="stage.id"
        :stage="stage"
        :related-projects="getProjectsByStage(stage.id)"
        :all-competences="competencesSLAM"
      />
    </div>

    <!-- Formation -->
    <div class="mt-24 bg-[var(--ink)] text-[var(--cream)] p-8 md:p-12">
      <h2 class="font-display text-3xl font-bold mb-8">Parcours scolaire</h2>
      <div class="space-y-0">
        <div
          v-for="item in formation"
          :key="item.title"
          class="border-t border-white/10 py-5 grid grid-cols-1 md:grid-cols-4 gap-3"
        >
          <span class="font-mono text-xs text-white/40 uppercase tracking-widest">{{ item.year }}</span>
          <div class="md:col-span-2">
            <p class="font-mono text-sm font-medium">{{ item.title }}</p>
            <p class="font-mono text-xs text-white/50 mt-1">{{ item.etablissement }}</p>
          </div>
          <span v-if="item.mention" class="self-start text-xs font-mono px-2 py-1 border border-white/20 text-white/60 w-fit">
            {{ item.mention }}
          </span>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>

<script setup>
import { stages, projects, competencesSLAM } from '~/data/projects'
import PageWrapper   from '@/components/templates/PageWrapper.vue'
import SectionHeader from '@/components/molecules/SectionHeader.vue'
import StageDetail   from '@/components/organisms/StageDetail.vue'

function getProjectsByStage(stageId) {
  return projects.filter(p => p.stageId === stageId)
}

const formation = [
  { year: '2024 — 2026', title: 'BTS SIO option SLAM', etablissement: 'Lycée Lamartine — Mâcon (71)', mention: 'En cours' },
  { year: '2021 — 2024', title: 'BAC STI2D',           etablissement: 'Lycée Louis Armand — Villefranche-sur-Saône', mention: 'Obtenu 2024' },
]
</script>
