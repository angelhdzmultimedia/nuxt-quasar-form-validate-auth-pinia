<script setup lang="ts">
// Importaciones (Imports)

// Campos (Fields)
const $q = useQuasar()
const auth = useAuthStore()
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header :elevated="!$q.dark.isActive" class="bg-primary text-white">
      <q-toolbar>
        <q-btn icon="home" to="/" />
        <q-toolbar-title>App Count: {{ auth.count }}</q-toolbar-title>
        <q-btn text-color="primary" color="white" to="/login" label="Login" />
      </q-toolbar>
    </q-header>

    <q-page-container class="window-width window-height">
      <q-page class="column full-width full-height">
        <slot />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
