<template>
  <AppLink
    class="inline-flex flex-col items-center"
    v-bind="{...$props}"
  >
    <div class="w-32 h-32 bg-stone-200 rounded-full mb-8" />
    <div>
      <slot />
    </div>
  </AppLink>
</template>

<script lang="ts" setup>
import AppLink from '@/components/DesktopUI/DesktopLink/index.vue'
</script>
