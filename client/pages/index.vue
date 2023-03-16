<script setup lang="ts">
// Importaciones (Imports)
import LoginPage from '~/pages/login.vue'

// Fields
const $q = useQuasar()

// Métodos (Methods)
function displayLoginForm() {
  $q.dialog({
    component: LoginPage,
  })
}
</script>

<template>
  <main class="full-width full-height items-center justify-center column">
    <span class="text-h6">Welcome</span>
    <q-btn @click="displayLoginForm" color="primary" label="Login" />
  </main>
</template>
