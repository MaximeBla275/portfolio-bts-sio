<template>
  <component
    :is="tag"
    :href="href"
    :to="to"
    :download="download || undefined"
    :target="target"
    :disabled="disabled || undefined"
    :class="['inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest transition-all duration-200 cursor-pointer', variantClass, sizeClass]"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  tag:      { type: String, default: 'button' },
  to:       { type: String, default: null },
  href:     { type: String, default: null },
  download: { type: [Boolean, String], default: false },
  target:   { type: String, default: null },
  disabled: { type: Boolean, default: false },
  variant:  { type: String, default: 'outline' },
  // 'outline' | 'solid' | 'ghost' | 'ghost-light'
  size:     { type: String, default: 'md' },
  // 'sm' | 'md' | 'lg'
})

const variantClass = computed(() => ({
  outline:      'border border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--cream)]',
  solid:        'bg-[var(--ink)] text-[var(--cream)] hover:bg-[var(--accent)]',
  ghost:        'text-[var(--muted)] hover:text-[var(--ink)] link-hover',
  'ghost-light':'text-white/60 border border-white/20 hover:bg-white/10',
}[props.variant]))

const sizeClass = computed(() => ({
  sm: 'px-3 py-1.5',
  md: 'px-6 py-3',
  lg: 'px-8 py-4',
}[props.size]))

const tag = computed(() => {
  if (props.to)   return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return props.tag
})
</script>
