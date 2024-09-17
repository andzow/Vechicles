// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/style/main.css'],
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  ssr: true,
})
