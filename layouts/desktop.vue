<template>
  <transition name="turn">
    <DesktopUI
      v-if="mounted"
      key="UI"
    >
      <template #topBar>
        <DesktopTopBar />
      </template>
      <template #links>
        <DesktopShortcut
          :to="{
            name: 'desktop-app',
            params: {
              app: PagesNames.terminal
            }
          }"
        >
          {{ PagesNames.terminal }}
        </DesktopShortcut>
        <DesktopShortcut
          :to="{
            name: 'desktop-app',
            params: {
              app: PagesNames.settings
            }
          }"
        >
          {{ PagesNames.settings }}
        </DesktopShortcut>

        <DesktopShortcut
          :to="{
            name: 'desktop-app',
            params: {
              app: PagesNames.cv
            }
          }"
        >
          {{ PagesNames.cv }}
        </DesktopShortcut>
      </template>
      <template #default>
        <slot />
      </template>
      <template #bottomBar>
        <DesktopBottomBar />
      </template>
    </DesktopUI>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import DesktopUI from '@/components/desktopUI/DesktopUI/index.vue';
import DesktopTopBar from '@/components/desktopUI/DesktopTopBar/index.vue';
import DesktopBottomBar from '@/components/desktopUI/DesktopBottomBar/index.vue';
import DesktopLink from '@/components/desktopUI/DesktopShortcut/index.vue';
import { PagesNames } from '@/enums/pagesNames'
import { useDesktopAppModalsStore } from '@/store/components/desktopUI/desktopAppModal.store'
import { remove } from 'lodash';

const modalStore = useDesktopAppModalsStore()
const route = useRoute()

const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})
</script>
store/components/desktopUI/desktopAppModal.store
store/components/desktopUI/desktopAppModal.store
