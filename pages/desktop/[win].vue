<template>
  <div>
    <keep-alive>
      <component
        :is="window"
        v-for="(window, w) in windows"
        :key="w"
      />
    </keep-alive>
  </div>
</template>

<script setup lang="ts">
import { onMounted, nextTick, defineAsyncComponent } from 'vue';
import { onBeforeRouteLeave } from 'vue-router'
import { useWindowModalsStore } from '@/store/components/shared/windowModal.store'
import { PagesNames, WindowPages } from '@/enums/pagesNames'
import { camelCase, startCase } from 'lodash';
import { appsStringDiff } from '@/utils/desktopUI/apps'

const route = useRoute()
const modalStore = useWindowModalsStore()

const windows = computed(() => {
  const winParam = route.params.win as WindowPages;
  const winArr = winParam?.split(',')

  if (!winArr) {
    return []
  }

  return winArr.reduce((_, win) => {
    if (Object.values(WindowPages).includes(win as WindowPages)) {
      const modal = startCase(camelCase(win)).replace(/ /g, '');
      _.push(defineAsyncComponent(() => import(`../../modals/${modal}/index.vue`)))

      return _
    }
  }, [])
})

// onMounted(() => {
//   nextTick(() => {
//     const apps = route.params.win.split(',')
//     console.log(apps);

//     apps.forEach((app) => {
//       console.log(app);

//       modalStore.setModalState(app, {
//         opened: true
//       })

//       console.log(modalStore.getById[app]);
//     })
//   })
// })

onBeforeRouteLeave((to, from, next) => {
  console.log('onBeforeRouteLeave');
  
  const { added, removed } = appsStringDiff(from.params.win, to.params.win)

  console.log(to, from, added, removed);

  added?.forEach((app) => {
    modalStore.setModalState(app, {
      opened: true
    })
  })
  removed?.forEach((app) => {
    modalStore.setModalState(app, {
      opened: false
    })
  })

  if (to.name === 'desktop') {
    return next()
  }

  return false
})
</script>
