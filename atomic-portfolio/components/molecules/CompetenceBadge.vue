<template>
  <div
    :class="[
      'flex items-center gap-3 py-2 px-3 border transition-colors',
      covered ? 'border-white/10 bg-white/5' : 'border-white/5 opacity-30',
    ]"
  >
    <span :class="['w-2 h-2 rounded-full flex-shrink-0', covered ? 'bg-[var(--accent)]' : 'bg-white/20']" />
    <span class="font-mono text-xs text-white/50 min-w-[4.5rem]">{{ code }}</span>
    <span class="font-mono text-xs leading-relaxed">{{ libelle }}</span>
  </div>
</template>

<script setup>
defineProps({
  code:    { type: String, required: true },
  libelle: { type: String, required: true },
  covered: { type: Boolean, default: false },
})
</script>
