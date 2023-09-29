<template>
  <div class="flex flex-col">
    <div
      class="flex"
      :class="[props.class, {
        'border-b-2 border-solid border-neutral-50': !haveSubheading
      }]"
      v-bind="{ ...$props }"
    >
      <component
        :is="tag"
        class="relative inline-block desktop-heading bg-neutral-50 text-gray-700 pt-[0.16em] px-[0.16em] leading-[1em]"
      >
        <slot />
      </component>
    </div>
    <span
      v-if="haveSubheading"
      class=" px-[0.16em] bg-neutral-50 text-gray-600"
    >
      <slot name="subheading" />
    </span>
  </div>
</template>

<script lang="ts">
export const Tags = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  strong: 'strong',
  small: 'small',
  p: 'p',
} as const;

type Tag = keyof typeof Tags;

interface Props {
  tag?: Tag,
  class?: string,
}
</script>

<script setup lang="ts">
import type { Slots } from 'vue';
import { computed, useSlots } from 'vue'

const props :Props = withDefaults(defineProps<Props>(), {
  tag: Tags.h1,
  class: '',
})

const slots :Slots = useSlots()

const haveSubheading :ComputedRef<boolean> = computed(() :boolean => {
  return !!slots.subheading
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
          border-[0.6em] 
          border-transparent 
          border-l-neutral-50 
          border-b-neutral-50;
  }
}
</style>
