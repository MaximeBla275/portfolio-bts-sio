<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// Restore theme on first load (before hydration flash)
if (process.client) {
  const saved = localStorage.getItem('theme')
  if (saved) document.documentElement.setAttribute('data-theme', saved)
}
</script>
