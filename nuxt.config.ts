export default defineNuxtConfig({
  ssr: false,
  modules: ['nuxt-quasar-ui'],
  quasar: {
    plugins: ['Notify', 'Dark', 'Dialog'],
    extras: {
      font: 'roboto-font',
      fontIcons: ['mdi-v7', 'material-icons', 'fontawesome-v6'],
    },
  },
})
