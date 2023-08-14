<template>
  <div
    ref="appWrapper"
    class="flex w-full flex-shrink-0 flex-grow flex-col transition-all"
    :class="{
      'touch-only': pageStore.isOnlyTouchDevice
    }"
  >
    <NuxtLayout :name="layoutName">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount } from 'vue';
import { usePageStore } from '@/store/page.store'

const route = useRoute()
const pageStore = usePageStore()

const layoutsMap = {
  desktop: 'desktop',
  'desktop-app': 'desktop',
}

const layoutName = computed(() => {
  if (layoutsMap[route.name]) {
    return layoutsMap[route.name]
  }

  return 'default'
})
</script>
