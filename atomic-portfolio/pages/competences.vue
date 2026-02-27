<template>
  <PageWrapper>
    <SectionHeader
      label="Référentiel BTS SIO"
      title="Tableau des compétences"
      accent-word="compétences"
      :description="`Cartographie des compétences du référentiel officiel BTS SIO et leur couverture par mes projets et stages. ${covered} compétences acquises sur ${total}.`"
    />

    <!-- Progress -->
    <div class="mb-14 p-6 md:p-8 border border-[var(--border)]">
      <div class="flex items-center justify-between mb-3">
        <span class="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">Taux de couverture</span>
        <span class="font-display text-3xl font-bold text-[var(--accent)]">{{ Math.round((covered / total) * 100) }}%</span>
      </div>
      <ProgressBar :value="covered" :max="total" />
    </div>

    <!-- Blocs -->
    <div class="space-y-14">
      <CompetenceBloc
        v-for="bloc in blocsCompetences"
        :key="bloc.numero"
        :bloc="bloc"
        :projects="projects"
      />
    </div>

    <!-- Legend -->
    <div class="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="border border-[var(--border)] p-6">
        <h3 class="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-4">Légende</h3>
        <div class="space-y-2">
          <div class="flex items-center gap-3">
            <BaseTag variant="success">✓ Acquise</BaseTag>
            <span class="font-mono text-xs text-[var(--muted)]">Démontrée dans au moins un projet ou stage</span>
          </div>
          <div class="flex items-center gap-3">
            <BaseTag variant="pending">○ À acquérir</BaseTag>
            <span class="font-mono text-xs text-[var(--muted)]">Non encore démontrée formellement</span>
          </div>
        </div>
      </div>
      <div class="border border-[var(--border)] p-6">
        <h3 class="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-2">Épreuves E4 / E5</h3>
        <p class="font-mono text-xs text-[var(--muted)] leading-relaxed">
          Ce tableau correspond au tableau de synthèse des réalisations professionnelles demandé pour les épreuves E4 et E5 du BTS SIO SLAM.
          Chaque compétence est liée à un ou plusieurs projets documentés.
        </p>
      </div>
    </div>
  </PageWrapper>
</template>

<script setup>
import { competencesSLAM, blocsCompetences, projects } from '~/data/projects'
import PageWrapper     from '@/components/templates/PageWrapper.vue'
import SectionHeader   from '@/components/molecules/SectionHeader.vue'
import ProgressBar     from '@/components/atoms/ProgressBar.vue'
import BaseTag         from '@/components/atoms/BaseTag.vue'
import CompetenceBloc  from '@/components/organisms/CompetenceBloc.vue'

const covered = computed(() => competencesSLAM.filter(c => c.covered).length)
const total = competencesSLAM.length
</script>
