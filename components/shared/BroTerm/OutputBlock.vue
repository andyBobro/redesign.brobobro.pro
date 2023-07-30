<template>
  <div>
    <Line v-for="line in block.subtasks" :key="JSON.stringify(line)" :line="line" />
  </div>  
</template>

<script setup>
import Line from './Line.vue'

const { block } = defineProps({
  block: {
    type: Array,
  },
})
</script>
