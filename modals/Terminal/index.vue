<template>
  <DesktopAppModal :type="WindowPages.terminal">
    <DesktopTerminal />
  </DesktopAppModal>
</template>

<script>
export default {
  name: 'TerminalWindow'
}
</script>

<script setup>
import { watchEffect } from 'vue'
import DesktopAppModal from '@/components/desktopUI/DesktopAppModal/index.vue'
import DesktopTerminal from '@/components/desktopUI/DesktopTerminal/index.vue'
import { WindowPages } from '@/enums/pagesNames'
import { useDesktopTerminalStore } from '@/store/components/desktopUI/desktopTerminal.store'
import { useDesktopAppModalsStore } from '@/store/components/desktopUI/desktopAppModal.store'


const termStore = useDesktopTerminalStore()
const modalStore = useDesktopAppModalsStore()

watchEffect(() => {
  if (modalStore.isActive(WindowPages.terminal)) {
    termStore.focusInput()
  }
})
</script>
