<template>
  <WindowModal :type="WindowPages.terminal">
    <!-- lol -->
    <BroTerm />
  </WindowModal>
</template>

<script>
export default {
  name: 'TerminalWindow'
}
</script>

<script setup>
import WindowModal from '@/components/shared/WindowModal/index.vue'
import BroTerm from '@/components/shared/BroTerm/index.vue'
import { WindowPages } from '@/enums/pagesNames'
import { useWindowModalsStore } from '@/store/components/shared/windowModal.store'
const store = useWindowModalsStore()
</script>
