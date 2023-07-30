// import { defineNuxtPlugin } from '@nuxt/kit'
import * as lodash from 'lodash'

export default defineNuxtPlugin((/* nuxtApp */) => {
  return {
    provide: {
      lodash,
    },
  }
})
