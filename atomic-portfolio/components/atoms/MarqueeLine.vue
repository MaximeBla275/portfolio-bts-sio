<template>
  <div class="overflow-hidden" :class="[wrapperClass]">
    <div class="marquee-track flex gap-10 items-center" :class="[trackClass]">
      <template v-for="i in repeats" :key="i">
        <span
          v-for="item in items"
          :key="item"
          class="whitespace-nowrap px-2"
          :class="[itemClass]"
        >
          {{ item }}
        </span>
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items:        { type: Array,  required: true },
  repeats:      { type: Number, default: 3 },
  wrapperClass: { type: String, default: 'py-3 bg-[var(--ink)]' },
  trackClass:   { type: String, default: '' },
  itemClass:    { type: String, default: 'font-mono text-xs uppercase tracking-[0.3em] text-[var(--cream)] opacity-50' },
})
</script>
