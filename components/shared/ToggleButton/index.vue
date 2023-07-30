<template>
  <button
    :class="[
      'flex items-center justify-center border-2 py-4 px-8 text-body  transition-all',
      {
        'border-b-50 border-x-transparent border-t-transparent text-neutral-50':
          !active,
        'border-neutral-50 bg-neutral-50 text-gray-800': active,
      },
    ]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ToggleButton',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
