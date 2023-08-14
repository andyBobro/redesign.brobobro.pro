<template>
  <div class="relative flex justify-between p-4 md:p-8 bg-neutral-50 text-gray-950">
    <DesktopBarLogo />
    <DesktopBarTime />
  </div>
</template>

<script setup lang="ts">
import DesktopBarTime from '@/components/desktopUI/DesktopBarTime/index.vue'
import DesktopBarLogo from '@/components/desktopUI/DesktopBarLogo/index.vue'

</script>
