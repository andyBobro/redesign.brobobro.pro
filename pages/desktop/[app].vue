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
import { useDesktopAppModalsStore } from '@/store/components/desktopUI/desktopAppModal.store'
import { PagesNames, WindowPages } from '@/enums/pagesNames'
import lodash from 'lodash';
import { appsStringDiff } from '@/utils/desktopUI/apps'

const route = useRoute()
const modalStore = useDesktopAppModalsStore()

const windows = computed(() => {
  const winParam = route.params.app as WindowPages;
  const winArr = winParam?.split(',')

  if (!winArr) {
    return []
  }

  return winArr.reduce((_, app) => {
    if (Object.values(WindowPages).includes(app as WindowPages)) {
      const modal = lodash.startCase(lodash.camelCase(app)).replace(/ /g, '');
      _.push(defineAsyncComponent(() => import(`../../modals/${modal}/index.vue`)))

      return _
    }
  }, [])
})

// onMounted(() => {
//   nextTick(() => {
//     const apps = route.params.app.split(',')
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
  
  const { added, removed } = appsStringDiff(from.params.app, to.params.app)

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
