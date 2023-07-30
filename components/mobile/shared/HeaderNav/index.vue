<template>
  <div class="shrink-0 flex-grow">
    <BurgerButton
      class="z-20 ml-auto"
      :active="mobileNavActive"
      @toggle="toggleMobileNav"
    ></BurgerButton>
    <HeaderNavMenu :active="mobileNavActive" @redirect="toggleMobileNav" />
  </div>
</template>

<script>
import HeaderNavMenu from './HeaderNavMenu.vue'
import BurgerButton from '@/components/mobile/shared/BurgerButton'

export default {
  name: 'HeaderNav',
  components: {
    BurgerButton,
    HeaderNavMenu,
  },
  data() {
    return {
      mobileNavActive: false,
    }
  },
  methods: {
    toggleMobileNav() {
      this.mobileNavActive = !this.mobileNavActive
    },
  },
}
</script>
