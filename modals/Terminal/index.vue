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
import WindowModal from '@/components/shared/WindowModal/index.vue'
import BroTerm from '@/components/shared/BroTerm/index.vue'
import { WindowPages } from '@/enums/pagesNames'
</script>
