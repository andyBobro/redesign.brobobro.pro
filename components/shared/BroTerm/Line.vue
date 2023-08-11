<template>
  <div ref="outputLine">
    {{parseLine(line)[0].content}}
  </div>  
</template>

<script setup>
  
  import { SUBTASKS_NAMES } from '@/utils/constants'

  const outputLine = ref()

  const {line} = defineProps({
    line: {
      required: true,
    }
  })

  

  function parseLine (rawLine) {
    switch (rawLine.name) {
      case SUBTASKS_NAMES.WRITE:
        return [
          {
            content: rawLine.payload
          }
        ]
    
      default:
        break;
    }
  } 
</script>
