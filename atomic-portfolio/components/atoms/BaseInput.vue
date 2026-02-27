<template>
  <div>
    <label v-if="label" class="font-mono text-xs uppercase tracking-widest text-[var(--muted)] block mb-2">
      {{ label }} <span v-if="required" class="opacity-60">*</span>
    </label>
    <component
      :is="type === 'textarea' ? 'textarea' : 'input'"
      v-bind="type !== 'textarea' ? { type } : {}"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :rows="rows"
      class="w-full bg-transparent border-b border-[var(--border)] pb-3 font-mono text-base outline-none focus:border-[var(--ink)] transition-colors placeholder:text-[var(--muted)] placeholder:opacity-40 resize-none"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue:  { type: String,  default: '' },
  label:       { type: String,  default: '' },
  type:        { type: String,  default: 'text' },
  placeholder: { type: String,  default: '' },
  required:    { type: Boolean, default: false },
  rows:        { type: Number,  default: 5 },
})
defineEmits(['update:modelValue'])
</script>
