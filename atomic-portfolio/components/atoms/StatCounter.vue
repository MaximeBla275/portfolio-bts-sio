<template>
  <div class="text-center">
    <p class="font-display text-3xl font-bold">{{ value }}</p>
    <p class="text-xs font-mono text-[var(--muted)] uppercase tracking-widest">{{ label }}</p>
  </div>
</template>

<script setup>
defineProps({
  value: { type: [String, Number], required: true },
  label: { type: String, required: true },
})
</script>
