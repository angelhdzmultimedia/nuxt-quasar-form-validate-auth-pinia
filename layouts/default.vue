<script setup lang="ts"></script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn icon="home" to="/" />
        <q-toolbar-title>App </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container class="window-width window-height">
      <q-page class="column full-width full-height">
        <slot />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
