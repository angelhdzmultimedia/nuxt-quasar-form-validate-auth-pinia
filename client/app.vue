<script setup lang="ts">
// Importaciones (Imports)

// Campos (Fields)
const $q = useQuasar()
// Enlaces de Ciclo de Vida (Lifecycle Hooks)

onMounted(() => {
  $q.dark.set(true)
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
