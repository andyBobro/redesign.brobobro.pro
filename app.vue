<template>
  <div ref="appWrapper" class="flex w-full flex-shrink-0 flex-grow flex-col transition-all">
    <NuxtLayout :name="width > 1200 ? 'default' : 'web'">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useWindowSize } from '@vueuse/core'
import flicker from '@/utils/keyframes/flicker'
const { $anime } = useNuxtApp()
const appWrapper = ref(null)

const { width } = useWindowSize()

onMounted(async () => {
  // $anime({
  //   targets: appWrapper.value,
  //   duration: 250,
  //   loop: true,
  //   keyframes: flicker,
  //   easing: 'linear',
  // })
})
</script>
