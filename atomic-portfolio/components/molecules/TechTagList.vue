<template>
  <div class="flex flex-wrap items-center gap-2">
    <BaseTag v-for="tech in visible" :key="tech">{{ tech }}</BaseTag>
    <span v-if="overflow > 0" class="text-xs font-mono text-[var(--muted)]">+{{ overflow }}</span>
  </div>
</template>

<script setup>
import BaseTag from '@/components/atoms/BaseTag.vue'

const props = defineProps({
  technologies: { type: Array, required: true },
  limit:        { type: Number, default: Infinity },
})

const visible  = computed(() => props.limit === Infinity ? props.technologies : props.technologies.slice(0, props.limit))
const overflow = computed(() => props.limit === Infinity ? 0 : Math.max(0, props.technologies.length - props.limit))
</script>
