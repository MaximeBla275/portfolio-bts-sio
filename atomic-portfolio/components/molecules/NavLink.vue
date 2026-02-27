<template>
  <NuxtLink
    :to="to"
    class="font-mono text-xs uppercase tracking-widest link-hover text-[var(--ink)] opacity-60 hover:opacity-100 transition-opacity"
    v-bind="$attrs"
  >
    <slot />
  </NuxtLink>
</template>

<script setup>
defineProps({ to: { type: String, required: true } })
</script>
