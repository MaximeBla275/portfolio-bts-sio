<template>
  <div :class="['h-1 rounded', trackClass]">
    <div
      class="h-full bg-[var(--accent)] rounded transition-all duration-1000"
      :style="{ width: `${Math.round((value / max) * 100)}%` }"
    />
  </div>
</template>

<script setup>
defineProps({
  value:      { type: Number, required: true },
  max:        { type: Number, required: true },
  trackClass: { type: String, default: 'bg-[var(--border)]' },
})
</script>
