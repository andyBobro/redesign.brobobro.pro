<template>
  <ul :class="[props.type]">
    <slot />
  </ul>
</template>

<script lang="ts">
export const ListTypes = {
  regular: 'regular',
  square: 'square'
} as const

interface Props {
  type?: keyof typeof ListTypes;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<Props>(), {
  type: ListTypes.square
})
</script>

<style lang="postcss" scoped>
ul {
  &.square {
    @apply pl-16;
    list-style-type: square;
    list-style-position: outside;

    :deep(li) {
      @apply first:mt-0 mt-8;
    }
  }
}
</style>
