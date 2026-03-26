<template>
  <a
    :href="href"
    :target="external ? '_blank' : undefined"
    class="flex items-center gap-4 group p-4 border border-[var(--border)] hover:border-[var(--ink)] transition-colors"
  >
    <span class="text-xl">{{ emoji }}</span>
    <div>
      <p class="font-mono text-xs text-[var(--muted)] uppercase tracking-widest">{{ label }}</p>
      <p class="font-mono text-sm group-hover:text-[var(--accent)] transition-colors">{{ value }}</p>
    </div>
  </a>
</template>

<script setup>
defineProps({
  href:     { type: String, required: true },
  emoji:    { type: String, required: true },
  label:    { type: String, required: true },
  value:    { type: String, required: true },
  external: { type: Boolean, default: false },
})
</script>
