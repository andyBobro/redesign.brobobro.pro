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
    list-style-type: square;
    list-style-position: inside;
  }
}
</style>
