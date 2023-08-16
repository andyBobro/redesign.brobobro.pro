<template>
  <div class="flex border-solid border-b-[0.4em] border-neutral-50">
    <component
      class="relative inline-block desktop-heading bg-neutral-50 text-gray-700 pt-[0.16em] px-[0.16em] leading-[1em]"
      :is="headingComponent"
      v-bind="{ ...$props }"
    >
      <slot />
    </component>
  </div>
  
</template>

<script setup lang="ts">
import { computed } from 'vue'

enum HeadingSizes {
  H1 = 1,
  H2,
  H3,
  H4,
  H5,
  H6,
}

interface Props {
  size?: HeadingSizes
}

const props = withDefaults(defineProps<Props>(), {
  size: HeadingSizes.H1
})

const headingComponent = computed(() => {
  return `h${props.size}`
})
</script>

<style scoped lang="postcss">
.desktop-heading {
  &::after {
    @apply content-[''] 
          absolute 
          left-full 
          top-0 
          bottom-0 
          border-solid 
          border-[0.58em] 
          border-transparent 
          border-l-neutral-50 
          border-b-neutral-50;
  }
}
</style>
