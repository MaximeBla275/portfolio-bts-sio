<template>
  <div>
    <AppNav />
    <slot />
    <AppFooter />
  </div>
</template>

<script setup>
import AppNav    from '@/components/organisms/AppNav.vue'
import AppFooter from '@/components/organisms/AppFooter.vue'
</script>
