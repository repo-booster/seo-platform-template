// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/fonts',
  ],

  devtools: { enabled: true },
  
  compatibilityDate: '2025-01-07',

  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light'
  },

  ui: {
    global: true,
  },

  app: {
    head: {
      title: 'Repo-Booster - SEO Analytics Platform',
      link: [
        { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
      ]
    }
  }
})
