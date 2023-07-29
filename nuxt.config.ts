// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint';
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/styles/css/tailwind.css',
    '@/assets/styles/css/fonts.css',
    '@/assets/styles/css/global.css',
    '@/assets/styles/css/keyframes.css',
  ],
  vite: {
    plugins: [
      eslintPlugin()
    ]
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@intlify/nuxt3'
  ],
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en',
      fallbackLocale: 'en'
    }
  }
})
