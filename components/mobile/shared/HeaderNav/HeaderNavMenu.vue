<template>
  <div
    class="fixed top-0 left-0 h-screen w-screen bg-black transition-all"
    :class="{
      'invisible z-0 opacity-0': !active,
      'visible z-10 opacity-100': active,
    }"
  >
    <div
      class="flex h-full max-h-full w-full max-w-full flex-col items-center justify-center overflow-y-auto"
    >
      <div class="flex flex-col">
        <NuxtLink class="mb-8 last:mb-0" :to="'/'" @click="$emit('redirect')"
          >Main</NuxtLink
        >
        <NuxtLink
          class="mb-8 last:mb-0"
          :to="'/about'"
          @click="$emit('redirect')"
          >About</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderNavMenu',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    console.log(this)
  },
}
</script>
