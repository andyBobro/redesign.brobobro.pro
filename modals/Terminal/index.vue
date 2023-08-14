<template>
  <WindowModal :type="WindowPages.terminal">
    <BroTerm />
  </WindowModal>
</template>

<script>
export default {
  name: 'TerminalWindow'
}
</script>

<script setup>
import { watchEffect } from 'vue'
import WindowModal from '@/components/shared/WindowModal/index.vue'
import BroTerm from '@/components/shared/BroTerm/index.vue'
import { WindowPages } from '@/enums/pagesNames'
import { useBroTermStore } from '@/store/components/shared/broTerm.store'
import { useWindowModalsStore } from '@/store/components/shared/windowModal.store'


const termStore = useBroTermStore()
const modalStore = useWindowModalsStore()

watchEffect(() => {
  if (modalStore.isActive(WindowPages.terminal)) {
    termStore.focusInput()
  }
})
</script>
