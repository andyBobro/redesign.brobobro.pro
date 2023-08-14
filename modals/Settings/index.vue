<template>
  <WindowModal :type="WindowPages.settings">
    <h1>Settings</h1>
  </WindowModal>
</template>

<script setup>
import WindowModal from '@/components/shared/WindowModal/index.vue'
// import Settings from '@/components/settings/Settings/index.vue'
import { WindowPages } from '@/enums/pagesNames'
</script>
