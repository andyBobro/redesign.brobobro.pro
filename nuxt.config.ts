// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint';
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [{
    path: '@/components', // will get any components nested in let's say /components/nested
    pathPrefix: false,
  },],
  css: [
    '@/assets/styles/css/tailwind.css',
    // '@/assets/styles/css/fonts.css',
    '@/assets/styles/css/keyframes.css',
    '@/assets/styles/css/global.css',
  ],
  vite: {
    plugins: [
      // eslintPlugin()
    ]
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@intlify/nuxt3',
    '@pinia/nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        'Press Start 2P': [400],
        VT323: [400],
      },
      outputDir: '@/assets',
      // overwriting: true,
      preload: true,
      stylePath: 'assets/styles/css/fonts.css',
      fontsDir: 'fonts',
      fontsPath: '/assets/fonts'
    }],
  ],
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en',
      fallbackLocale: 'en'
    }
  },
  googleFonts: {
    preload: true,
  }
})
