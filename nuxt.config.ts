// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxtjs/color-mode', '@nuxt/fonts', '@nuxtjs/seo', 'nuxt-link-checker', 'nuxt-lucide-icons'],

  devtools: { enabled: true },
  ssr: true,

  experimental: {
    payloadExtraction: false
  },

  nitro: {
    devProxy: {
      '/ws': {
        target: 'ws://localhost:3000',
        ws: true
      }
    }
  },

  runtimeConfig: {
    public: {
      googleClientId: process.env.GOOGLE_CLIENT_ID,
      googleRedirectUri: process.env.GOOGLE_REDIRECT_URI
    }
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Repo-Booster - SEO Analytics Platform',
      titleTemplate: '%s | Repo-Booster',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'robots', content: 'index, follow' },
        { 
          name: 'description', 
          content: 'Comprehensive SEO analytics and optimization platform. Track rankings, analyze competitors, and improve your search visibility.'
        },
        {
          name: 'keywords',
          content: 'SEO, analytics, rank tracking, competitor analysis, backlinks, keyword research, site audit'
        },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Repo-Booster' },
        { property: 'og:url', content: 'https://app.repo-booster.com' },
        { property: 'og:title', content: 'Repo-Booster - SEO Analytics Platform' },
        { 
          property: 'og:description', 
          content: 'Comprehensive SEO analytics and optimization platform. Track rankings, analyze competitors, and improve your search visibility.'
        },
        { property: 'og:image', content: 'https://app.repo-booster.com/og-image.jpg' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@RepoBooster' },
        { name: 'twitter:title', content: 'Repo-Booster - SEO Analytics Platform' },
        {
          name: 'twitter:description',
          content: 'Comprehensive SEO analytics and optimization platform. Track rankings, analyze competitors, and improve your search visibility.'
        },
        { name: 'twitter:image', content: 'https://app.repo-booster.com/twitter-card.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://app.repo-booster.com' },
        { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
      ]
    }
  },

  typescript: {
    strict: false
  },

  compatibilityDate: '2025-01-07'
})
