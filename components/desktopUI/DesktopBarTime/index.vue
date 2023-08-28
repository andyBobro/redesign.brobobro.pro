<template>
  <div>
    {{ time }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTimestamp } from '@vueuse/core'
import type { UseTimestampReturn } from '@vueuse/core'

const timestamp :UseTimestampReturn | Ref<number> = useTimestamp({ offset: 0 })

const time :ComputedRef<string> = computed(() :string => {
  const now :Date = new Date(timestamp.value)
  const day :number = now.getDate()
  const month :number = now.getMonth()
  const year :number = now.getFullYear()
  const hour :number = now.getHours()
  const minute :number = now.getMinutes()
  const seconds :number = now.getSeconds()
  return `${hour}:${minute}:${seconds} ${day}.${month}.${year}`
})
</script>
