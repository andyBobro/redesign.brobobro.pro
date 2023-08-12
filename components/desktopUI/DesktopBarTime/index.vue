<template>
  <div>
    {{ time }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTimestamp } from '@vueuse/core'

const timestamp = useTimestamp({ offset: 0 })

const time = computed(() => {
  const now = new Date(timestamp.value)
  const day = now.getDate()
  const month = now.getMonth()
  const year = now.getFullYear()
  const hour = now.getHours()
  const minute = now.getMinutes()
  const seconds = now.getSeconds()
  return `${hour}:${minute}:${seconds} ${day}.${month}.${year}`
})
</script>
