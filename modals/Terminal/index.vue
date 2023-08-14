<template>
  <DesktopAppModal :type="WindowPages.terminal">
    <BroTerm />
  </DesktopAppModal>
</template>

<script>
export default {
  name: 'TerminalWindow'
}
</script>

<script setup>
import { watchEffect } from 'vue'
import AppModal from '@/components/desktopUI/DesktopAppModal/index.vue'
import BroTerm from '@/components/shared/BroTerm/index.vue'
import { WindowPages } from '@/enums/pagesNames'
import { useBroTermStore } from '@/store/components/shared/broTerm.store'
import { useDesktopAppModalsStore } from '@/store/components/desktopUI/desktopAppModal.store'


const termStore = useBroTermStore()
const modalStore = useDesktopAppModalsStore()

watchEffect(() => {
  if (modalStore.isActive(WindowPages.terminal)) {
    termStore.focusInput()
  }
})
</script>
