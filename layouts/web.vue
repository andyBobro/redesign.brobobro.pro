<template>
  <div
    class="relative flex h-full flex-shrink-0 flex-grow flex-col [--header-width:48px]"
  >
    <Header />
    <Content>
      <slot />
    </Content>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/mobile/shared/Header'
import Content from '@/components/mobile/shared/Content'
import Footer from '@/components/mobile/shared/Footer'

export default {
  name: 'Web',
  components: {
    Header,
    Content,
    Footer,
  },
}
</script>
