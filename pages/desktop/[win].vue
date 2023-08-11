<template>
  <NuxtLayout name="desktop">
    <component v-for="(window, w) in windows" :key="w" :is="window" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { computed, onMounted, defineAsyncComponent } from 'vue'
import DesktopUI from '@/components/desktop/DesktopUI/index.vue';
import DesktopTopBar from '@/components/desktop/DesktopTopBar/index.vue';
import DesktopBottomBar from '@/components/desktop/DesktopBottomBar/index.vue';
import DesktopLink from '@/components/desktop/DesktopLink/index.vue';
import { PagesNames, WindowPages } from '@/enums/pagesNames'
import { useWindowModalsStore } from '@/store/components/shared/windowModal.store'
import { camelCase, startCase } from 'lodash';


const winModalStore = useWindowModalsStore()

const windows = computed(() => {
  const route = useRoute()
  const winParam = route.params.win
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
