<template>
  <div class="flex flex-wrap gap-2">
    <button
      v-for="f in filters"
      :key="f.value"
      @click="$emit('update:modelValue', f.value)"
      :class="[
        'font-mono text-xs uppercase tracking-widest px-4 py-2 border transition-all duration-200 flex items-center gap-2',
        modelValue === f.value
          ? 'bg-[var(--ink)] text-[var(--cream)] border-[var(--ink)]'
          : 'border-[var(--border)] text-[var(--muted)] hover:border-[var(--ink)] hover:text-[var(--ink)]',
      ]"
    >
      {{ f.emoji }} {{ f.label }}
      <span class="opacity-50">({{ f.count }})</span>
    </button>
  </div>
</template>

<script setup>
defineProps({
  filters:     { type: Array,  required: true },
  modelValue:  { type: String, required: true },
})
defineEmits(['update:modelValue'])
</script>
