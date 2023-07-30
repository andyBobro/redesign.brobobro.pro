// import { defineNuxtPlugin } from '@nuxt/kit'
import anime from 'animejs'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('anime', {
    mounted(el, binding) {
      const o = {
        targets: el,
        ...binding.value,
      }

      anime(o)
    },
  })

  return {
    provide: {
      anime,
    },
  }
})
