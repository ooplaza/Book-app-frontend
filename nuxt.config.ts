// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    'nuxt-icon',
  ],

  // Meta Data
  app: {
    head: {
      title: 'Book API',
      meta: [

      ],

      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],

    }
  },

  colorMode: {
    classSuffix: '',
    preference: 'light', // This will set the default preference to light mode
  },

  // For Dark mode
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },

  // When Customizing using css
  css: [
    '@/assets/css/main.css'
  ]
})
