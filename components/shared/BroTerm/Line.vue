<template>
  <div ref="outputLine">
    {{ parseLine(props.line).content }}
  </div>  
</template>

<script setup>
  
  import { SUBTASKS_NAMES } from '@/utils/constants'

  const outputLine = ref()

  const props = defineProps({
    line: {
      required: true,
    }
  })

  

  function parseLine (rawLine) {
    switch (rawLine.name) {
      case SUBTASKS_NAMES.WRITE:
        return {
          content: rawLine.payload.text
        }
    
      default:
        break;
    }
  } 
</script>
