<template>
  <div class="flex flex-col w-full h-full overflow-hidden">
    <slot name="topBar" />
    <div class="relative flex-grow p-16">
      <div class="grid grid-cols-2">
        <slot name="links" />
      </div>
      <div class="absolute flex bottom-0 left-0 right-0" v-if="windows.length">
        <slot name="modals" />
      </div>
    </div>
    <slot name="bottomBar" />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import DesktopLink from '@/components/desktop/DesktopLink/index.vue';
import WindowModal from '@/components/shared/WindowModal/index.vue'
import { PagesNames, PagesRoutes, WindowPages } from '@/enums/pagesNames';

const windows = Object.values(WindowPages)

const windowsMap = {
  [WindowPages.terminal]: defineAsyncComponent(() => import('@/components/shared/BroTerm/index.vue')),
}
</script>
