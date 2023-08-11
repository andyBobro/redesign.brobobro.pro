<template>
  <component
    :is="linkComponent"
    class="inline-flex flex-col items-center"
    v-bind="{...$props}"
  >
    <div class="w-32 h-32 bg-stone-200 rounded-full mb-8" />
    <div>
      <slot />
    </div>
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { PagesRoutes } from '@/enums/pagesNames';

// interface RouteTo {

// }

interface Props {
  to?: any,
  href?: string | void,
  icon?: string,
}

const {
  to,
  href,
  icon,
} = defineProps<Props>()

const linkComponent = computed(() => {
  if (to || href) {
    return  defineNuxtLink({})
  }

  return 'button'
})
</script>
