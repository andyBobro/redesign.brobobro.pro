<template>
  <DesktopUI>
    <template #topBar>
      <DesktopTopBar />
    </template>
    <template #links>
      <DesktopLink
        :to="{
          name: 'desktop-win',
          params: {
            win: PagesNames.terminal
          }
        }"
      >
        {{ PagesNames.terminal }}
      </DesktopLink>
    </template>
    <template #default>
      <slot />
    </template>
    <template #modals>
      <keep-alive>
        <component
          :is="window"
          v-for="(window, w) in windows"
          :key="w"
        />
      </keep-alive>
    </template>
    <template #bottomBar>
      <DesktopBottomBar />
    </template>
  </DesktopUI>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import DesktopUI from '@/components/desktopUI/DesktopUI/index.vue';
import DesktopTopBar from '@/components/desktopUI/DesktopTopBar/index.vue';
import DesktopBottomBar from '@/components/desktopUI/DesktopBottomBar/index.vue';
import DesktopLink from '@/components/desktopUI/DesktopLink/index.vue';
import { PagesNames, WindowPages } from '@/enums/pagesNames'
import { camelCase, startCase } from 'lodash';

const windows = computed(() => {
  const route = useRoute()
  const winParam = route.params.win as WindowPages
  const winArr = winParam?.split(',')
  
  if (!winArr) return []

  return winArr.reduce((_, win) => {
    if (Object.values(WindowPages).includes(win as WindowPages)) {
      const modal = startCase(camelCase(win)).replace(/ /g, '');
      _.push(defineAsyncComponent(() => import(`../modals/${modal}/index.vue`)))

      return _
    }
  }, [])
})
</script>
