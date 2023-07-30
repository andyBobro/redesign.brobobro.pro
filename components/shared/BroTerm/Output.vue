<template>
  <div>
    <Line v-for="(block, i) in store.history" :line="block" :key="i" />
  </div>
</template>

<script setup>
import Line from './Line.vue'
import { useBroTermStore } from '@/store/components/shared/broTerm.store'
const store = useBroTermStore()

console.log(store);
</script>
