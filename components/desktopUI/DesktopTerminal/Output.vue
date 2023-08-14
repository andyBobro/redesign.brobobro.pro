<template>
  <div
    ref="output"
    class="h-256 flex flex-col flex-grow overflow-y-auto"
  >
    <div class="flex-grow" />
    <Line
      v-for="(block, i) in store.history"
      :key="i"
      :line="block"
    />
  </div>
</template>

<script setup>
import { ref, defineExpose } from 'vue'
import Line from './Line.vue'
import { useDesktopTerminalStore } from '@/store/components/desktopUI/desktopTerminal.store'

const output = ref(null)
const store = useDesktopTerminalStore() 

defineExpose({
  el: output
})
</script>
store/components/desktopUI/desktopTerminal.store
