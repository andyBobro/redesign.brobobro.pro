<template>
  <ul class="flex gap-16">
    <DesktopBarTaskPanelItem
      v-for="modal in store.openedModals"
      :key="modal.name"
      :modal="modal"
    />
  </ul>
</template>

<script setup lang="ts">
import DesktopBarTaskPanelItem from './DesktopBarTaskPanelItem.vue'
import { useDesktopAppModalsStore } from '@/store/components/desktopUI/desktopAppModal.store'

const store = useDesktopAppModalsStore()
</script>
