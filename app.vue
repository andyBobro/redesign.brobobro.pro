<template>
  <div ref="appWrapper" class="flex w-full flex-shrink-0 flex-grow flex-col transition-all">
    <NuxtLayout :name="layoutName">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const route = useRoute()

const layoutsMap = {
  desktop: 'desktop',
  'desktop-win': 'desktop',
}

const layoutName = computed(() => {
  if (layoutsMap[route.name]) {
    return layoutsMap[route.name]
  }

  return 'default'
})
</script>
