<template>
  <main class="min-h-screen">

    <!-- ─── Hero ─── -->
    <section class="min-h-screen flex flex-col justify-end pb-16 px-6 md:px-8 pt-28 relative overflow-hidden">
      <div class="absolute top-1/2 right-0 -translate-y-1/2 font-display text-[20vw] font-black opacity-[0.03] select-none pointer-events-none leading-none pr-2">
        MB
      </div>

      <div class="mb-12">
        <div class="inline-flex items-center gap-2 border border-[var(--border)] px-3 py-1.5 text-xs font-mono uppercase tracking-widest text-[var(--muted)]">
          <span class="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
          Disponible · BTS SIO SLAM 2025-2026
        </div>
      </div>

      <h1 class="font-display text-[clamp(4rem,11vw,9rem)] font-black leading-[0.88] tracking-tight mb-12">
        <span class="block">Maxime</span>
        <span class="block italic text-[var(--accent)]">Blanco</span>
      </h1>

      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-8 border-t border-[var(--border)] pt-8">
        <p class="font-mono text-sm text-[var(--muted)] max-w-sm leading-relaxed">
          Développement web front-end<br/>
          Vue.js · Nuxt.js · Laravel · PHP
        </p>

        <div class="flex items-center gap-6">
          <StatCounter :value="projects.length" label="projets" />
          <div class="w-px h-8 bg-[var(--border)]" />
          <StatCounter value="2" label="stages" />
          <div class="w-px h-8 bg-[var(--border)]" />
          <StatCounter :value="`${covered}/${total}`" label="compétences BTS" />
        </div>

        <NuxtLink to="/projets">
          <BaseButton size="md">Voir mes projets →</BaseButton>
        </NuxtLink>
      </div>
    </section>

    <!-- ─── Stack Banner ─── -->
    <MarqueeLine
      :items="stack"
      wrapper-class="border-y border-[var(--border)] overflow-hidden py-3 bg-[var(--ink)]"
      item-class="font-mono text-xs uppercase tracking-[0.3em] text-[var(--cream)] opacity-40 whitespace-nowrap px-3"
    />

    <!-- ─── Stages ─── -->
    <section class="px-6 md:px-8 py-24">
      <div class="flex items-baseline justify-between mb-10">
        <h2 class="font-display text-3xl md:text-4xl font-bold">
          Mes <em class="italic text-[var(--accent)]">stages</em>
        </h2>
        <NuxtLink to="/stages" class="text-xs font-mono uppercase tracking-widest link-hover text-[var(--muted)]">Tout voir →</NuxtLink>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StageCard v-for="stage in stages" :key="stage.id" :stage="stage" />
      </div>
    </section>

    <!-- ─── Projets récents ─── -->
    <section class="px-6 md:px-8 py-24 border-t border-[var(--border)]">
      <div class="flex items-baseline justify-between mb-10">
        <h2 class="font-display text-3xl md:text-4xl font-bold">
          Projets <em class="italic text-[var(--accent)]">récents</em>
        </h2>
        <NuxtLink to="/projets" class="text-xs font-mono uppercase tracking-widest link-hover text-[var(--muted)]">Tous →</NuxtLink>
      </div>
      <div class="space-y-0 stagger" ref="projEl">
        <ProjectCard v-for="(p, i) in projects.slice(0, 4)" :key="p.id" :project="p" :index="i" />
      </div>
    </section>

    <!-- ─── CTA ─── -->
    <section class="px-6 md:px-8 py-28 text-center border-t border-[var(--border)]">
      <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-6">Contact</p>
      <h2 class="font-display text-[clamp(2.5rem,7vw,6rem)] font-black leading-tight mb-10">
        Une question ?<br>
        <em class="italic text-[var(--accent)]">Écrivez-moi.</em>
      </h2>
      <NuxtLink to="/contact">
        <BaseButton variant="solid" size="lg">Me contacter →</BaseButton>
      </NuxtLink>
    </section>

  </main>
</template>

<script setup>
import { projects, competencesSLAM, stages } from '~/data/projects'
import StatCounter  from '@/components/atoms/StatCounter.vue'
import MarqueeLine  from '@/components/atoms/MarqueeLine.vue'
import BaseButton   from '@/components/atoms/BaseButton.vue'
import StageCard    from '@/components/organisms/StageCard.vue'
import ProjectCard  from '@/components/organisms/ProjectCard.vue'

useScrollReveal()

const covered = computed(() => competencesSLAM.filter(c => c.covered).length)
const total = competencesSLAM.length
const stack = ['Laravel', 'Vue.js', 'Nuxt.js', 'PHP', 'C#', 'PowerShell', 'MySQL', 'JavaScript', 'Git']
</script>
