<template>
  <NuxtLayout name="desktop">
    <component v-for="(window, w) in windows" :key="w" :is="window" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { WindowPages } from '@/enums/pagesNames'
import { camelCase, startCase } from 'lodash';

const windows = computed(() => {
  const route = useRoute()
  const winParam = route.params.win as string
  const winArr = winParam.split(',')
  console.log(winArr);
  
  const validWindows = winArr.filter((win) => {
    return Object.values(WindowPages).includes(win)
  })
  return validWindows.map((window) => {
    const modal = startCase(camelCase(window)).replace(/ /g, '');
    return defineAsyncComponent(() => import(`../../modals/${modal}/index.vue`))
  })
})
</script>
