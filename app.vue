<script setup lang="ts">
// Importaciones (Imports)
import { Dark } from 'quasar'

// Enlaces de Ciclo de Vida (Lifecycle Hooks)

onMounted(() => {
  Dark.set(true)
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
