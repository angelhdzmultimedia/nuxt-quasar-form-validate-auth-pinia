<script setup lang="ts">
import { Dialog } from 'quasar'
import LoginPage from '~/pages/login.vue'

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
