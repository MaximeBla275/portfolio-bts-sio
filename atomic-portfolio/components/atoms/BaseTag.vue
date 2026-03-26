<template>
  <span :class="['text-xs font-mono px-2 py-0.5 border', variantClass]">
    <slot />
  </span>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    // 'default' | 'scolaire' | 'stage' | 'personnel' | 'accent' | 'success' | 'pending'
  }
})

const variantClass = computed(() => ({
  default:   'border-[var(--border)] text-[var(--muted)]',
  scolaire:  'bg-blue-50 text-blue-600 border border-blue-200',
  stage:     'bg-green-50 text-green-600 border border-green-200',
  personnel: 'bg-orange-50 text-orange-600 border border-orange-200',
  accent:    'bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20',
  success:   'bg-green-50 text-green-700 border border-green-200',
  pending:   'bg-gray-50 text-gray-400 border border-gray-200',
}[props.variant]))
</script>
