<template>
  <button
    :class="[
      'border-2 px-16 py-8 transition-all',
      {
        'border-solid border-white hover:bg-white hover:text-black':
          theme === 'default',
      },
    ]"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script setup>
import { THEMES } from '@/utils/constants'
const { theme } = defineProps({
  theme: {
    type: String,
    validator(theme) {
      return THEMES.includes(theme)
    },
    default: THEMES.default,
  },
})
</script>
