<template>
  <PageWrapper v-if="project">

    <!-- ── Navigation retour ─────────────────────────────── -->
    <NuxtLink
      to="/projets"
      class="inline-flex items-center gap-2 font-mono text-xs text-[var(--muted)] hover:text-[var(--ink)] transition-colors mb-8 link-hover"
    >
      ← Retour aux projets
    </NuxtLink>

    <!-- ── Header ───────────────────────────────────────── -->
    <div class="border-b border-[var(--border)] pb-10 mb-10">
      <div class="flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div class="flex-1">
          <div class="flex items-center gap-3 mb-3 flex-wrap">
            <BaseTag :variant="project.type">{{ typeLabel }}</BaseTag>
            <span class="font-mono text-xs text-[var(--muted)]">{{ project.period || project.year }}</span>
          </div>
          <div class="flex items-center gap-3 mb-2">
            <span class="text-4xl">{{ project.emoji }}</span>
            <h1 class="font-display text-[clamp(1.8rem,4vw,3rem)] font-black leading-tight">
              {{ project.title }}
            </h1>
          </div>
          <p class="font-mono text-base text-[var(--muted)]">{{ project.subtitle }}</p>
        </div>

        <!-- Bouton rapport — bien visible -->
        <div class="flex flex-col gap-2 flex-shrink-0">
          <a
            v-if="project.rapport && project.stageId !== 2"
            :href="project.rapport"
            download
            class="inline-flex items-center gap-2 bg-[var(--accent)] text-white font-mono text-sm px-5 py-3 hover:opacity-90 transition-opacity"
          >
            📄 Télécharger le rapport
          </a>
          <!-- Pour les projets Xefi : lien vers la page stage -->
          <div v-if="project.stageId === 2" class="border border-[var(--border)] p-4 max-w-xs">
            <p class="font-mono text-xs text-[var(--muted)] mb-3 leading-relaxed">
              Ces 4 projets font partie du même stage.<br>
              Le rapport de stage Xefi est disponible sur la page dédiée.
            </p>
            <NuxtLink
              to="/stages/xefi"
              class="inline-flex items-center gap-2 bg-[var(--accent)] text-white font-mono text-sm px-4 py-2.5 hover:opacity-90 transition-opacity w-full justify-center"
            >
              📄 Rapport stage Xefi →
            </NuxtLink>
          </div>
          <!-- Lien site si disponible -->
          <a
            v-if="project.url"
            :href="project.url"
            target="_blank"
            class="inline-flex items-center gap-2 border border-[var(--border)] font-mono text-xs px-4 py-2 hover:border-[var(--ink)] transition-colors"
          >
            🌐 Voir le site ↗
          </a>
        </div>
      </div>
    </div>

    <!-- ── Corps ─────────────────────────────────────────── -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">

      <!-- Colonne principale (2/3) -->
      <div class="lg:col-span-2 space-y-10">

        <!-- Contexte -->
        <section>
          <h2 class="font-display text-xl font-bold mb-5 flex items-center gap-2">
            <span class="text-[var(--accent)]">01</span> Contexte
          </h2>
          <p class="font-mono text-base text-[var(--muted)] leading-relaxed mb-6">{{ project.context }}</p>

          <!-- Zone visuelle contexte -->
          <div v-if="project.screenshots?.length" class="border border-[var(--border)] bg-[var(--card)] overflow-hidden">
            <button
              type="button"
              class="aspect-video overflow-hidden relative w-full block bg-black/5 cursor-zoom-in"
              @click="openLightbox(project.screenshots[0])"
              :aria-label="`Ouvrir l'image ${project.screenshots[0].caption || 'du projet'} en grand`"
            >
              <img
                :src="project.screenshots[0].src"
                :alt="project.screenshots[0].caption || `Capture du projet ${project.title}`"
                class="w-full h-full object-contain"
                @error="(e) => e.target.style.display='none'"
              />
            </button>
          </div>
        </section>

        <!-- Ce qui était demandé — user stories / cahier des charges -->
        <section v-if="project.userStories?.length">
          <h2 class="font-display text-xl font-bold mb-5 flex items-center gap-2">
            <span class="text-[var(--accent)]">02</span> Ce qui était demandé
          </h2>
          <p class="font-mono text-base text-[var(--muted)] leading-relaxed mb-5">{{ project.objectif }}</p>
          <ul class="space-y-3">
            <li
              v-for="(us, i) in project.userStories"
              :key="i"
              class="flex gap-3 font-mono text-base text-[var(--muted)] leading-relaxed border-l-2 border-[var(--border)] pl-4 py-1"
            >
              <span class="text-[var(--accent)] flex-shrink-0 font-bold">{{ String(i+1).padStart(2,'0') }}</span>
              <span>{{ us }}</span>
            </li>
          </ul>
        </section>

        <!-- Ce que j'ai réalisé -->
        <section>
          <h2 class="font-display text-xl font-bold mb-5 flex items-center gap-2">
            <span class="text-[var(--accent)]">{{ project.userStories?.length ? '03' : '02' }}</span> Ce que j'ai réalisé
          </h2>
          <p class="font-mono text-base text-[var(--muted)] leading-relaxed mb-6">{{ project.description }}</p>
          <ul v-if="project.features?.length" class="space-y-3 mt-4">
            <li
              v-for="(feat, i) in project.features"
              :key="i"
              class="flex gap-3 font-mono text-base text-[var(--muted)]"
            >
              <span class="text-[var(--accent)] flex-shrink-0 mt-0.5 font-bold">✓</span>
              <div class="min-w-0">
                <span>{{ feat }}</span>
                <div v-if="getFeatureCompCodes(i).length" class="flex flex-wrap gap-1 mt-1.5">
                  <span
                    v-for="code in getFeatureCompCodes(i)"
                    :key="`feat-${i}-${code}`"
                    class="font-mono text-[10px] px-1.5 py-0.5 border border-[var(--border)] rounded-sm text-[var(--muted)] bg-[var(--card)]"
                  >
                    {{ code }}
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <!-- Captures d'écran / visuels -->
        <section v-if="project.screenshots?.length > 1">
          <h2 class="font-display text-xl font-bold mb-5 flex items-center gap-2">
            <span class="text-[var(--accent)]">📸</span> Captures d’écran
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              v-for="(sc, i) in project.screenshots.slice(1)"
              :key="i"
              type="button"
              class="border border-[var(--border)] overflow-hidden text-left cursor-zoom-in"
              @click="openLightbox(sc)"
              :aria-label="`Ouvrir l'image ${sc.caption || i + 2} en grand`"
            >
              <div class="relative bg-[var(--card)] aspect-video overflow-hidden">
                <img
                  :src="sc.src"
                  :alt="sc.caption || `Capture ${i + 2} du projet ${project.title}`"
                  class="w-full h-full object-contain"
                  @error="(e) => e.target.style.display='none'"
                />
              </div>
              <div v-if="sc.caption" class="px-3 py-2 border-t border-[var(--border)]">
                <p class="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)] mb-1">
                  Étape {{ i + 2 }}
                </p>
                <p class="font-mono text-sm text-[var(--muted)] leading-relaxed">
                  {{ sc.caption }}
                </p>
              </div>
            </button>
          </div>
        </section>

        <!-- Architecture logicielle -->
        <section v-if="project.architecture">
          <h2 class="font-display text-xl font-bold mb-5 flex items-center gap-2">
            <span class="text-[var(--accent)]">04</span> Architecture de la solution
          </h2>
          <div class="border border-[var(--border)] p-6">
            <p class="font-mono text-sm text-[var(--muted)] leading-relaxed mb-6">{{ project.architecture.description }}</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                v-for="comp in project.architecture.composants"
                :key="comp.nom"
                class="border border-[var(--border)] p-4 hover:border-[var(--ink)] transition-colors"
              >
                <p class="font-mono text-xs uppercase tracking-widest mb-1" :style="{ color: project.color }">{{ comp.role }}</p>
                <p class="font-mono text-sm font-bold mb-1">{{ comp.nom }}</p>
                <p class="font-mono text-xs text-[var(--muted)] leading-relaxed">{{ comp.detail }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Base de données -->
        <section v-if="project.bdd">
          <h2 class="font-display text-xl font-bold mb-5 flex items-center gap-2">
            <span class="text-[var(--accent)]">05</span> Base de données
          </h2>
          <div class="border border-[var(--border)] p-6">
            <p class="font-mono text-sm text-[var(--muted)] leading-relaxed mb-5">{{ project.bdd.description }}</p>
            <div class="flex flex-col gap-2">
              <div
                v-for="table in project.bdd.tables"
                :key="table"
                class="font-mono text-xs border border-[var(--border)] px-4 py-2.5 hover:border-[var(--ink)] transition-colors"
              >
                <span class="mr-2" :style="{ color: project.color }">📋</span>{{ table }}
              </div>
            </div>
          </div>
        </section>

        <!-- Difficultés & ce que j'ai appris -->
        <section v-if="project.apports">
          <h2 class="font-display text-xl font-bold mb-5 flex items-center gap-2">
            <span class="text-[var(--accent)]">💡</span> Ce que ça m'a appris
          </h2>
          <div class="border-l-2 pl-5" :style="{ borderColor: project.color }">
            <p class="font-mono text-base text-[var(--muted)] leading-relaxed italic">"{{ project.apports }}"</p>
          </div>
        </section>

      </div>

      <!-- Colonne latérale (1/3) -->
      <aside class="space-y-8">

        <!-- Technologies -->
        <div class="border border-[var(--border)] p-5">
          <h3 class="font-display text-sm font-bold mb-4 uppercase tracking-widest">Technologies</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="font-mono text-xs border border-[var(--border)] px-2 py-1 bg-[var(--card)]"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Compétences BTS -->
        <div class="border border-[var(--border)] p-5">
          <h3 class="font-display text-sm font-bold mb-4 uppercase tracking-widest">Compétences couvertes</h3>
          <ul class="space-y-2">
            <li
              v-for="code in projectCompetenceCodes"
              :key="code"
              class="flex items-start gap-2"
            >
              <span
                class="font-mono text-xs font-bold px-1.5 py-0.5 flex-shrink-0"
                :style="`background:${project.color}20; color:${project.color}`"
              >
                {{ code }}
              </span>
              <span class="font-mono text-xs text-[var(--muted)] leading-snug">{{ getCompLabel(code) }}</span>
            </li>
          </ul>
        </div>

        <!-- Infos projet -->
        <div class="border border-[var(--border)] p-5 space-y-3">
          <h3 class="font-display text-sm font-bold mb-4 uppercase tracking-widest">Infos</h3>
          <div v-if="project.period" class="flex justify-between font-mono text-xs">
            <span class="text-[var(--muted)]">Période</span>
            <span>{{ project.period }}</span>
          </div>
          <div class="flex justify-between font-mono text-xs">
            <span class="text-[var(--muted)]">Type</span>
            <span>{{ typeLabel }}</span>
          </div>
        </div>

        <!-- Navigation entre projets -->
        <div class="space-y-2">
          <NuxtLink
            v-if="prevProject"
            :to="`/projets/${prevProject.id}`"
            class="flex items-center gap-2 font-mono text-xs text-[var(--muted)] hover:text-[var(--ink)] transition-colors border border-[var(--border)] px-4 py-3 hover:border-[var(--ink)]"
          >
            ← {{ prevProject.title }}
          </NuxtLink>
          <NuxtLink
            v-if="nextProject"
            :to="`/projets/${nextProject.id}`"
            class="flex items-center justify-between gap-2 font-mono text-xs text-[var(--muted)] hover:text-[var(--ink)] transition-colors border border-[var(--border)] px-4 py-3 hover:border-[var(--ink)]"
          >
            <span>{{ nextProject.title }}</span> →
          </NuxtLink>
        </div>

      </aside>
    </div>


    <Teleport to="body">
      <div
        v-if="lightboxImage"
        class="fixed inset-0 z-[9999] bg-black/90 p-4 md:p-8 flex items-center justify-center"
        @click.self="closeLightbox"
      >
        <button
          type="button"
          class="absolute top-4 right-4 border border-white/20 bg-black/60 text-white font-mono text-xs px-3 py-2 hover:bg-black/80"
          @click="closeLightbox"
        >
          Fermer ✕
        </button>

        <figure class="max-w-6xl w-full max-h-full flex flex-col items-center gap-4">
          <img
            :src="lightboxImage.src"
            :alt="lightboxImage.caption || `Capture du projet ${project?.title || ''}`"
            class="max-w-full max-h-[80vh] object-contain"
          />
          <figcaption
            v-if="lightboxImage.caption"
            class="font-mono text-xs md:text-sm text-white/80 text-center"
          >
            {{ lightboxImage.caption }}
          </figcaption>
        </figure>
      </div>
    </Teleport>
  </PageWrapper>

  <!-- 404 projet -->
  <PageWrapper v-else>
    <p class="font-mono text-base text-[var(--muted)]">Projet introuvable.</p>
    <NuxtLink to="/projets" class="font-mono text-xs text-[var(--accent)] mt-4 inline-block">← Retour aux projets</NuxtLink>
  </PageWrapper>
</template>

<script setup>
import { projects, competencesSLAM, projectExtras } from '~/data/projects'
import PageWrapper from '@/components/templates/PageWrapper.vue'
import BaseTag from '@/components/atoms/BaseTag.vue'

const route = useRoute()
const id = parseInt(route.params.id)

// Fusionne le projet de base avec ses extras détaillés
const project = computed(() => {
  const base = projects.find(p => p.id === id)
  if (!base) return null
  return { ...base, ...(projectExtras[id] ?? {}) }
})

const prevProject = computed(() => projects.find(p => p.id === id - 1))
const nextProject = computed(() => projects.find(p => p.id === id + 1))
const lightboxImage = ref(null)

const projectCompetenceCodes = computed(() => {
  const baseCodes = Array.isArray(project.value?.competences) ? project.value.competences : []
  const featureCodes = Array.isArray(project.value?.featureCompetences)
    ? project.value.featureCompetences.flat().filter(Boolean)
    : []

  const available = competencesSLAM.map(c => c.code)
  const merged = [...new Set((featureCodes.length ? featureCodes : baseCodes).filter(code => available.includes(code)))]
  return available.filter(code => merged.includes(code))
})

const typeLabel = computed(() => ({
  scolaire: 'Scolaire', stage: 'Stage', personnel: 'Perso'
}[project.value?.type]))

function getCompLabel(code) {
  return competencesSLAM.find(c => c.code === code)?.libelle ?? ''
}

function getFeatureCompCodes(index) {
  const list = project.value?.featureCompetences?.[index]
  return Array.isArray(list) ? list : []
}

function getTaskCompCodes(index) {
  const list = project.value?.gestion?.taskCompetences?.[index]
  return Array.isArray(list) ? list : []
}

function openLightbox(image) {
  lightboxImage.value = image
}

function closeLightbox() {
  lightboxImage.value = null
}

function onKeydown(event) {
  if (event.key === 'Escape') closeLightbox()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
})

useSeoMeta({
  title: () => project.value ? `${project.value.title} — Portfolio Maxime Blanco` : 'Projet',
})
</script>
