<template>
  <div
    ref="termWrap"
    class="relative flex max-h-full h-full max-w-full w-full flex-col text-heading-5"
  >
    <Output
      ref="termOutput"
    />
    <Input
      ref="termInput"
      class="sticky bottom-0 left-0"
      @run="onRunCmd"
    />
  </div>
</template>

<script setup>
import { computed, onMounted, watchEffect } from 'vue'
import { useElementSize } from '@vueuse/core'
import { STORAGE_NAME } from '@/utils/constants'
import Output from './Output.vue'
import Input from './Input.vue'
import { useDesktopTerminalStore } from '@/store/components/desktopUI/desktopTerminal.store'
import { delay, TASKS, TASKS_NAMES } from '@/utils/constants'
import { setMapStoreSuffix } from 'pinia'
const store = useDesktopTerminalStore()

const termWrap = ref(null)
const termOutput = ref(null)
const termInput = ref(null)
const outMaxSize = ref(null)


async function onRunCmd(e) {
  await store.processInput(e)
}

// const outputEl = computed(() => termOutput.value)
watch(store.history, (nH, oH) => {
  const el = termOutput.value.el
  const scrollVal = [...el.children].reduce((_, e) => _ + e.offsetHeight, 0)

  el && (el.scrollTo({
    top: scrollVal
  }))
})

onMounted(() => {
  !store.welcomeShown && store.runTask(TASKS_NAMES.WELCOME)
  store.setWelcomeShown()
})
</script>
