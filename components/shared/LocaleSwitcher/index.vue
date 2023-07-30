<template>
  <div class="flex gap-8">
    <ToggleButton
      v-for="l in $i18n.availableLocales"
      :key="l"
      :active="locale === l"
      @click="setLocale(l)"
    >
      {{ l.toLowerCase() }}
    </ToggleButton>
  </div>
</template>

<script>
import ToggleButton from '@/components/shared/ToggleButton'
export default {
  name: 'LocaleSwitcher',
  components: {
    ToggleButton,
  },
  computed: {
    allLocales() {
      return this.$i18n.availableLocales
    },
    locale() {
      return this.$i18n.locale
    },
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
    },
  },
}
</script>
