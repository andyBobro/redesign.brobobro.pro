<template>
  <div class="flex h-full w-full flex-col text-heading-5">
    <div class="flex flex-grow flex-col overflow-auto pb-8">
      <div class="flex-grow"></div>
      <Output />
    </div>
    <Input @run="onRunCmd" />
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import { STORAGE_NAME } from '@/utils/constants'
import Output from './Output.vue'
import Input from './Input.vue'
import { useBroTermStore } from '@/store/components/shared/broTerm.store'
const store = useBroTermStore()


// call the action as a method of the store

function onRunCmd(e) {
  store.processInput(e)
}

onMounted(() => {
  // const broTermStorage = useLocalStorage(STORAGE_NAME, )

  // console.log(broTermStorage.value)
})
</script>
