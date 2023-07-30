<template>
  <div>
    {{parseLine(line)[0].content}}
  </div>  
</template>

<script setup>
  import {defineProps} from 'vue';
  import { SUBTASKS_NAMES } from '@/utils/constants'

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
