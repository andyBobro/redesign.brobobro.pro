<template>
  <DesktopLink
    class="inline-flex flex-col items-center"
    v-bind="{...$props}"
  >
    <div class="w-32 h-32 bg-stone-200 rounded-full mb-8" />
    <div>
      <slot />
    </div>
  </DesktopLink>
</template>

<script lang="ts" setup>
import DesktopLink from '@/components/desktopUI/DesktopLink/index.vue'
</script>
