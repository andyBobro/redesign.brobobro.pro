<template>
  <div class="flex h-screen w-screen items-center justify-center">
    <client-only>
      <Intro :text="'BRO'"/>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import Intro from '@/components/index/Intro/index.vue'
</script>
