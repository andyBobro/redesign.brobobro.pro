<template>
  <DesktopAppModal :type="WindowPages.cv">
    <div class="cv-app">
      <DesktopHeading :size="6">
        {{ heading }}
      </DesktopHeading>

      <DesktopText>
        {{ t('cv.about_text') }}
      </DesktopText>
    </div>
  </DesktopAppModal>
</template>

<script setup>
import { computed } from 'vue';
import DesktopHeading from '@/components/desktopUI/DesktopHeading/index.vue'
import DesktopText from '@/components/desktopUI/DesktopText/index.vue'
import DesktopAppModal from '@/components/desktopUI/DesktopAppModal/index.vue'
import { WindowPages } from '@/enums/pagesNames'
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const heading = computed(() => {
  return `${t('main.me.official_name')} - ${t('cv.position')}`
})
</script>

<style lang="postcss" scoped>
  .cv-app {
    @apply max-w-sm;
  }
</style>
