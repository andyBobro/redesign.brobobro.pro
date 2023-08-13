<template>
  <li>
    <button
      class="h-full px-8 py-4 border-4 border-solid bg-neutral-50 transition"
      :class="{
        'border-t-gray-400 border-l-gray-400 border-r-gray-600 border-b-gray-600': props.modal.minimized,
        'border-b-gray-400 border-r-gray-400 border-l-gray-600 border-t-gray-600': !props.modal.minimized,
      }"
      @click="toggleMin"
    >
      {{ props.modal.name }}
    </button>
  </li>
</template>

<script setup lang="ts">
import type { WindowModalState } from '@/store/components/shared/windowModal.store'
import { useWindowModalsStore } from '@/store/components/shared/windowModal.store'

interface Props {
  modal: WindowModalState
}

const props = defineProps<Props>()
const store = useWindowModalsStore()

async function toggleMin() :void {
  if (props.modal.minimized) {
    await store.setActive(props.modal.name)
  }
  
  await store.setModalState(props.modal.name, {
    minimized: !props.modal.minimized
  })
}
</script>
