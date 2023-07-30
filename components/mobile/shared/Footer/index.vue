<template>
  <footer class="w-full">
    <div class="mx-auto flex max-w-7xl items-center justify-between p-16">
      <div>
        <code class="text-footnote">
          brobobro, {{ new Date().getFullYear() }}
        </code>
      </div>
      <div>
        <LocaleSwitcher />
      </div>
    </div>
  </footer>
</template>

<script>
import LocaleSwitcher from '@/components/shared/LocaleSwitcher'
export default {
  name: 'Footer',
  components: {
    LocaleSwitcher,
  },
}
</script>
