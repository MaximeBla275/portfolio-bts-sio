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
        <p class="font-mono text-base text-[var(--muted)] max-w-sm leading-relaxed">
          Développeur web fullstack<br/>
          Vue.js · Nuxt.js · Laravel · PHP · C#
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

    <!-- ─── Présentation BTS + choix SLAM ─── -->
    <section class="px-6 md:px-8 py-20 border-t border-[var(--border)]">

      <div class="mb-12">
        <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted-light)] mb-3">Formation</p>
        <h2 class="font-display text-3xl md:text-4xl font-bold">
          BTS SIO — <em class="italic text-[var(--accent)]">option SLAM</em>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        <div>
          <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted-light)] mb-4">Le BTS SIO</p>
          <h3 class="font-display text-xl font-bold mb-4">Services Informatiques<br>aux Organisations</h3>
          <p class="font-mono text-base text-[var(--muted)] leading-relaxed mb-4">
            Le BTS SIO est une formation en deux ans orientée vers les métiers de l’informatique en entreprise. Il prépare à comprendre les besoins d’une organisation et à proposer des solutions techniques adaptées.
          </p>
          <p class="font-mono text-base text-[var(--muted)] leading-relaxed">
            La formation se divise en deux spécialités : <strong class="text-[var(--ink)]">SISR</strong>, centrée sur les réseaux et l’infrastructure, et <strong class="text-[var(--ink)]">SLAM</strong>, orientée vers le développement d’applications.
          </p>
        </div>

        <div class="border border-[var(--border)] p-6 bg-[var(--card)]">
          <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted-light)] mb-4">Pourquoi l'option SLAM ?</p>
          <p class="font-mono text-base text-[var(--muted)] leading-relaxed mb-4">
            <strong class="text-[var(--ink)]">SLAM — Solutions Logicielles et Applications Métier</strong> correspond à la partie développement du BTS SIO. Cette option permet d’apprendre à concevoir, développer et faire évoluer des applications répondant à des besoins concrets.
          </p>
          <p class="font-mono text-base text-[var(--muted)] leading-relaxed">
            J’ai choisi cette spécialité parce qu’elle me permet de travailler sur l’ensemble d’un projet : de la réflexion autour du besoin jusqu’à la réalisation technique, avec une attention portée à la logique métier, aux données et à l’interface utilisateur.
          </p>
        </div>
      </div>

      <div class="border-t border-[var(--border)] pt-10">
        <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted-light)] mb-8">Ce qu'on apprend en option SLAM</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="border border-[var(--border)] p-5 bg-[var(--card)]">
            <div class="text-2xl mb-3">⚙️</div>
            <h4 class="font-display text-base font-bold mb-2">Développement d'applications</h4>
            <p class="font-mono text-base text-[var(--muted)] leading-relaxed">
              Concevoir et développer des applications capables de répondre à un besoin métier, avec des fonctionnalités comme l’authentification, la gestion des utilisateurs ou le traitement d’actions spécifiques.
            </p>
          </div>

          <div class="border border-[var(--border)] p-5 bg-[var(--card)]">
            <div class="text-2xl mb-3">🗄️</div>
            <h4 class="font-display text-base font-bold mb-2">Gestion des données</h4>
            <p class="font-mono text-base text-[var(--muted)] leading-relaxed">
              Structurer, stocker et exploiter les données d’une application à l’aide de bases de données relationnelles, de requêtes SQL et d’une organisation cohérente de l’information.
            </p>
          </div>

          <div class="border border-[var(--border)] p-5 bg-[var(--card)]">
            <div class="text-2xl mb-3">🌐</div>
            <h4 class="font-display text-base font-bold mb-2">Conception web</h4>
            <p class="font-mono text-base text-[var(--muted)] leading-relaxed">
              Créer des interfaces claires, dynamiques et adaptées aux utilisateurs, en tenant compte de l’ergonomie, de la lisibilité et du comportement responsive.
            </p>
          </div>

          <div class="border border-[var(--border)] p-5 bg-[var(--card)]">
            <div class="text-2xl mb-3">🛠️</div>
            <h4 class="font-display text-base font-bold mb-2">Maintenance et évolution</h4>
            <p class="font-mono text-base text-[var(--muted)] leading-relaxed">
              Corriger des anomalies, améliorer des applications existantes et ajouter de nouvelles fonctionnalités en s’appuyant sur une base de code déjà en place.
            </p>
          </div>

          <div class="border border-[var(--border)] p-5 bg-[var(--card)]">
            <div class="text-2xl mb-3">📋</div>
            <h4 class="font-display text-base font-bold mb-2">Gestion de projet</h4>
            <p class="font-mono text-base text-[var(--muted)] leading-relaxed">
              Analyser les besoins, découper un projet en tâches, travailler à partir de consignes ou de user stories et suivre une démarche de réalisation structurée.
            </p>
          </div>

          <div class="border border-[var(--border)] p-5 bg-[var(--card)]">
            <div class="text-2xl mb-3">🔍</div>
            <h4 class="font-display text-base font-bold mb-2">Tests et qualité</h4>
            <p class="font-mono text-base text-[var(--muted)] leading-relaxed">
              Vérifier le bon fonctionnement d’une solution, repérer les erreurs, valider les résultats attendus et améliorer progressivement la qualité globale de l’application.
            </p>
          </div>
        </div>
      </div>

    </section>

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
      <p class="font-mono text-xs uppercase tracking-widest text-[var(--muted-light)] mb-6">Contact</p>
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
import StatCounter from '@/components/atoms/StatCounter.vue'
import MarqueeLine from '@/components/atoms/MarqueeLine.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'
import StageCard from '@/components/organisms/StageCard.vue'
import ProjectCard from '@/components/organisms/ProjectCard.vue'

useScrollReveal()

const covered = computed(() => competencesSLAM.filter(c => c.covered).length)
const total = competencesSLAM.length
const stack = ['Laravel', 'Vue.js', 'Nuxt.js', 'PHP', 'C#', 'PowerShell', 'MySQL', 'JavaScript', 'Git']
</script>
