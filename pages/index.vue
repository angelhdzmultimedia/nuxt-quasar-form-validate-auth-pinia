<script setup lang="ts">
// Importaciones (Imports)
import { Dialog } from 'quasar'
import LoginPage from '~/pages/login.vue'

// Métodos (Methods)
function displayLoginForm() {
  Dialog.create({
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
