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
import type { AppModalState } from '@/store/components/desktopUI/desktopAppModal.store'
import { useDesktopAppModalsStore } from '@/store/components/desktopUI/desktopAppModal.store'

interface Props {
  modal: AppModalState
}

const props = defineProps<Props>()
const store = useDesktopAppModalsStore()

async function toggleMin() :void {
  if (!props.modal.minimized) {
    return await store.setActive(props.modal.name)
  }

  await store.setActive(props.modal.name)
  await store.setModalState(props.modal.name, {
    minimized: !props.modal.minimized
  })
}
</script>
store/components/desktopUI/desktopAppModal.storestore/components/desktopUI/desktopAppModal.store
store/components/desktopUI/desktopAppModal.storestore/components/desktopUI/desktopAppModal.store
