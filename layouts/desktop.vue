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
        <DesktopLink
          :to="{
            name: 'desktop-win',
            params: {
              win: PagesNames.settings
            }
          }"
        >
          {{ PagesNames.settings }}
        </DesktopLink>

        <DesktopLink
          :to="{
            name: 'desktop-win',
            params: {
              win: PagesNames.cv
            }
          }"
        >
          {{ PagesNames.cv }}
        </DesktopLink>
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
import DesktopLink from '@/components/desktopUI/DesktopLink/index.vue';
import { PagesNames } from '@/enums/pagesNames'
import { useWindowModalsStore } from '@/store/components/shared/windowModal.store'
import { remove } from 'lodash';

const modalStore = useWindowModalsStore()
const route = useRoute()

const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})
</script>
