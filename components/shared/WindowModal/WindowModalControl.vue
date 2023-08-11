<template>
  <button
    class="flex items-center justify-center"
    :class="[
      sizeClass,
    ]"
    @click="clickHandler(props.type)"
  >
    {{ controlContent[type] }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import {
  WindowControlTypes,
  WindowControlSizes,
  EventsNames,
} from '@/enums/windowModal'

interface Props {
  size?: WindowControlSizes,
  type: WindowControlTypes,
}

const props = withDefaults(defineProps<Props>(), {
  size: WindowControlSizes.SM,
})

const sizeClass = computed(() => {
  switch (props.size) {
    case WindowControlSizes.SM:
      return 'w-32 h-32'
    case WindowControlSizes.MD:
      return 'w-40 h-40'
    case WindowControlSizes.LG:
      return 'w-48 h-48'
    
    default:
      return 'w-32 h-32'
  }
})

const controlContent = {
  [WindowControlTypes.Fullscreen]: 'max',
  [WindowControlTypes.Close]: '✕',
  [WindowControlTypes.Minimize]: 'min'
}

const emit = defineEmits([EventsNames.Action])

function clickHandler (type: WindowControlTypes) {
  emit(EventsNames.Action, type)
}
</script>
