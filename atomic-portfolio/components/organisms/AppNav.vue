<template>
  <nav class="fixed top-0 left-0 right-0 z-50">
    <div class="flex items-center justify-between px-6 md:px-8 py-4 bg-[var(--cream)]/90 backdrop-blur-sm border-b border-[var(--border)]/60 transition-colors duration-300">
      <NuxtLink to="/" class="font-display text-lg font-bold tracking-tight flex items-center gap-2">
        <span class="text-[var(--accent)]">M</span>B.
        <span class="hidden sm:inline font-mono text-xs text-[var(--muted)] font-normal">BTS SIO SLAM</span>
      </NuxtLink>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-8">
        <NavLink v-for="link in links" :key="link.path" :to="link.path">{{ link.label }}</NavLink>
      </div>

      <!-- Right actions -->
      <div class="hidden md:flex items-center gap-3">
        <!-- Dark mode toggle -->
        <button
          @click="toggleTheme"
          class="w-8 h-8 flex items-center justify-center border border-[var(--border)] hover:border-[var(--ink)] transition-colors"
          :aria-label="isDark ? 'Mode clair' : 'Mode sombre'"
        >
          <span class="text-sm">{{ isDark ? '☀️' : '🌙' }}</span>
        </button>
        <a href="/rapports/CV_Maxime_Blanco.pdf" download="CV_Maxime_Blanco.pdf">
          <BaseButton size="sm">📄 CV</BaseButton>
        </a>
      </div>

      <!-- Burger Mobile -->
      <div class="md:hidden flex items-center gap-3">
        <button @click="toggleTheme" class="w-8 h-8 flex items-center justify-center border border-[var(--border)]">
          <span class="text-sm">{{ isDark ? '☀️' : '🌙' }}</span>
        </button>
        <button @click="open = !open" class="flex flex-col gap-1.5 p-2" aria-label="Menu">
          <span :class="['block w-6 h-px bg-[var(--ink)] transition-all duration-300', open && 'rotate-45 translate-y-2']" />
          <span :class="['block w-6 h-px bg-[var(--ink)] transition-all duration-300', open && 'opacity-0']" />
          <span :class="['block w-6 h-px bg-[var(--ink)] transition-all duration-300', open && '-rotate-45 -translate-y-2']" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide">
      <div v-if="open" class="md:hidden bg-[var(--cream)] border-b border-[var(--border)] px-6 py-6 flex flex-col gap-4">
        <NuxtLink
          v-for="link in links" :key="link.path" :to="link.path"
          @click="open = false"
          class="font-display text-2xl font-bold hover:text-[var(--accent)] transition-colors"
        >
          {{ link.label }}
        </NuxtLink>
        <a href="/rapports/CV_Maxime_Blanco.pdf" download class="font-mono text-sm text-[var(--muted)] mt-2">📄 CV</a>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import NavLink    from '@/components/molecules/NavLink.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'

const open   = ref(false)
const isDark = ref(false)
const route  = useRoute()

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark') { isDark.value = true; document.documentElement.setAttribute('data-theme', 'dark') }
})

function toggleTheme() {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

watch(() => route.path, () => { open.value = false })

const links = [
  { label: 'Projets',     path: '/projets' },
  { label: 'Stages',      path: '/stages' },
  { label: 'Compétences', path: '/competences' },
  { label: 'Veille',      path: '/veille' },
  { label: 'Contact',     path: '/contact' },
]
</script>

<style scoped>
.slide-enter-active, .slide-leave-active { transition: all 0.25s ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
