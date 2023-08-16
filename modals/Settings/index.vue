<template>
  <DesktopAppModal :type="WindowPages.settings">
    <h1>Settings</h1>
  </DesktopAppModal>
</template>

<script setup>
import DesktopAppModal from '@/components/desktopUI/DesktopAppModal/index.vue'
// import Settings from '@/components/settings/Settings/index.vue'
import { WindowPages } from '@/enums/pagesNames'
</script>
