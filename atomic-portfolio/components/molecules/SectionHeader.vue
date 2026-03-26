<template>
  <div :class="['mb-12 border-b border-[var(--border)] pb-12', light && 'text-[var(--cream)]']">
    <SectionLabel class="mb-4" :class="light && '!text-[var(--accent)]'">{{ label }}</SectionLabel>
    <h1 class="font-display font-black leading-tight" :class="sizeClass" v-html="titleHtml" />
    <p v-if="description" class="font-mono text-sm mt-5 max-w-xl leading-relaxed" :class="light ? 'text-white/60' : 'text-[var(--muted)]'">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
import SectionLabel from '@/components/atoms/SectionLabel.vue'

const props = defineProps({
  label:       { type: String, required: true },
  title:       { type: String, required: true },
  accentWord:  { type: String, default: '' },
  description: { type: String, default: '' },
  size:        { type: String, default: 'page' }, // 'page' | 'section'
  light:       { type: Boolean, default: false },
})

const sizeClass = computed(() => ({
  page:    'text-[clamp(3rem,8vw,7rem)]',
  section: 'text-4xl md:text-5xl',
}[props.size]))

const titleHtml = computed(() => {
  if (!props.accentWord) return props.title
  return props.title.replace(
    props.accentWord,
    `<em class="italic text-[var(--accent)]">${props.accentWord}</em>`
  )
})
</script>
