export default defineNuxtConfig({
  ssr: false,
  modules: [['nuxt-quasar-ui', { autoImports: true }], '@pinia/nuxt'],
  quasar: {
    plugins: ['Notify', 'Dark', 'Dialog'],
    extras: {
      font: 'roboto-font',
      fontIcons: ['mdi-v7', 'material-icons', 'fontawesome-v6'],
    },
  },
  imports: {
    dirs: ['stores/**'],
    imports: [
      { from: 'pinia', name: 'storeToRefs' },
      { from: 'pinia', name: 'defineStore' },
    ],
  },
})
