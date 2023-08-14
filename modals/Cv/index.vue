<template>
  <DesktopAppModal :type="WindowPages.cv">
    <h1>cv</h1>
  </DesktopAppModal>
</template>

<script setup>
import AppModal from '@/components/desktopUI/DesktopAppModal/index.vue'
// import Settings from '@/components/settings/Settings/index.vue'
import { WindowPages } from '@/enums/pagesNames'
</script>
