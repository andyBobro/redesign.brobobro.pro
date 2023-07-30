<template>
  <button
    :aria-pressed="ariaPressed"
    :class="[
      'burger-button relative text-neutral-50 [--color-hamburger:currentColor]',
      { 'burger-button--active': active },
    ]"
    @click="toggle"
  >
    <div class="burger-button__inner">
      <span class="burger-button__line burger-button__line--top"></span>
      <span class="burger-button__line burger-button__line--middle"></span>
      <span class="burger-button__line burger-button__line--bottom"></span>
    </div>
  </button>
</template>

<script>
export default {
  name: 'HeaderHamburger',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    ariaPressed: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggle() {
      this.$emit('toggle', !this.active)
    },
  },
}
</script>

<style lang="postcss" scoped>
.burger-button {
  @apply flex h-32 w-32 shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-neutral-50;
  &--active {
    .burger-button__line {
      &--top {
        @apply top-1/2 -mt-[1px] rotate-45 transform;
      }

      &--middle {
        @apply opacity-0;
      }

      &--bottom {
        @apply bottom-1/2 -mb-[1px] -rotate-45 transform;
      }
    }
  }

  &__inner {
    @apply relative h-16 w-24;
  }

  &__line {
    @apply absolute -ml-12 h-[2px] w-full border-t-2 border-current transition-all;

    &--top {
      @apply top-0;
    }

    &--middle {
      @apply top-1/2 -mt-[1px];
    }

    &--bottom {
      @apply bottom-0;
    }
  }
}
</style>
