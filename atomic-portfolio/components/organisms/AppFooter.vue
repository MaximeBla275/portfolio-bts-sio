<template>
  <footer class="border-t border-[var(--border)] mt-24">
    <!-- Decorative marquee -->
    <MarqueeLine
      :items="items"
      :repeats="2"
      wrapper-class="overflow-hidden border-b border-[var(--border)] py-3"
      item-class="font-display text-4xl md:text-5xl font-black italic opacity-[0.06] whitespace-nowrap"
    />

    <div class="px-6 md:px-8 py-8 flex flex-col md:flex-row justify-between items-start gap-6">
      <div>
        <p class="font-display text-xl font-bold mb-1">Maxime Blanco</p>
        <p class="text-xs font-mono text-[var(--muted)] uppercase tracking-widest">BTS SIO SLAM · Lycée Lamartine, Mâcon · 2025</p>
      </div>

      <div class="flex flex-col gap-2 text-xs font-mono text-[var(--muted)]">
        <NuxtLink to="/competences" class="link-hover hover:text-[var(--ink)] transition-colors">Tableau de compétences</NuxtLink>
        <NuxtLink to="/stages"      class="link-hover hover:text-[var(--ink)] transition-colors">Stages & formation</NuxtLink>
        <NuxtLink to="/veille"      class="link-hover hover:text-[var(--ink)] transition-colors">Veille technologique</NuxtLink>
      </div>

      <div class="flex gap-5">
        <a href="https://github.com/MaximeBla275" target="_blank"
          class="text-xs font-mono uppercase tracking-widest link-hover text-[var(--muted)] hover:text-[var(--ink)] transition-colors">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/maxime-blanco-ab24a9328" target="_blank"
          class="text-xs font-mono uppercase tracking-widest link-hover text-[var(--muted)] hover:text-[var(--ink)] transition-colors">
          LinkedIn
        </a>
      </div>

      <p class="text-xs font-mono text-[var(--muted)]">© {{ new Date().getFullYear() }}</p>
    </div>
  </footer>
</template>

<script setup>
import MarqueeLine from '@/components/atoms/MarqueeLine.vue'

const items = ['PowerShell', 'Laravel', 'Vue.js', 'Nuxt.js', 'C#', 'MySQL', 'Docker', 'PHP', 'JavaScript', 'Git']
</script>
