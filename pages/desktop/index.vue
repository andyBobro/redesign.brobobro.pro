<template>
  <NuxtLayout name="desktop" />
</template>

<script setup lang="ts">
import DesktopUI from '@/components/desktop/DesktopUI/index.vue';
import DesktopTopBar from '@/components/desktop/DesktopTopBar/index.vue';
import DesktopBottomBar from '@/components/desktop/DesktopBottomBar/index.vue';
import DesktopLink from '@/components/desktop/DesktopLink/index.vue';
import { PagesNames, WindowPages } from '@/enums/pagesNames'
import { useWindowModalsStore } from '@/store/components/shared/windowModal.store'

const winModalStore = useWindowModalsStore()
// definePageMeta({
//   layout: "desktop",
// })

// onBeforeRouteLeave((to, from, next) => {
//   console.log(to);
  
//   if (to.name && to.params.win in WindowPages) {
//     winModalStore.setModalState(to.name, {
//       closed: false
//     })
//     return;
//   }

//   next()
// })
</script>
