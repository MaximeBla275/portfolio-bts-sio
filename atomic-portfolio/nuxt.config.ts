// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
  preset: 'vercel',
  prerender: {
    crawlLinks: false
  }
},

  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],

  app: {
    head: {
      title: 'Portfolio — Dev Créatif',
      meta: [
        { name: 'description', content: 'Portfolio de développeur fullstack créatif' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap'
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    config: {
      content: [],
      theme: {
        extend: {
          fontFamily: {
            display: ['Playfair Display', 'serif'],
            mono: ['DM Mono', 'monospace'],
          }
        }
      }
    }
  }
})
