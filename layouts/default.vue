<template>
  <div
    class="default-layout relative flex h-full w-full flex-shrink-0 flex-grow flex-col"
  >
    <div class="relative z-[1] min-h-full">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Default',
  components: {},
}
</script>

<style lang="postcss" scoped>
.default-layout {
  &:after {
    @apply absolute top-0 left-0 z-0 h-full w-full content-[''];
    background-image: linear-gradient(
        rgba(18, 16, 16, 0) 50%,
        rgba(0, 0, 0, 0.25) 50%
      ),
      linear-gradient(
        90deg,
        rgba(255, 0, 0, 0.06),
        rgba(0, 255, 0, 0.02),
        rgba(0, 0, 255, 0.06)
      );
    background-size: 100% 2px, 3px 100%;
  }
}
</style>
