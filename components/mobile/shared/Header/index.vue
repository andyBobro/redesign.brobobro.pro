<template>
  <header class="top-o absolute left-0 right-0 w-full">
    <div
      class="mx-auto flex h-[var(--header-width)] max-w-7xl items-center px-16"
    >
      <h2 class="relative z-20 text-heading-5 font-extrabold">
        <NuxtLink to="/"> BRO BOBRO </NuxtLink>
      </h2>
      <HeaderNav />
    </div>
  </header>
</template>

<script>
import HeaderNav from '@/components/mobile/shared/HeaderNav'

export default {
  name: 'Header',
  components: {
    HeaderNav,
  },
}
</script>
