<template>
  <DesktopUI>
    <template #topBar>
      <DesktopTopBar />
    </template>
    <template #links>
      <DesktopLink
        :to="{
          name: 'desktop-win',
          params: {
            win: PagesNames.terminal
          }
        }"
      >
        {{ PagesNames.terminal }}
      </DesktopLink>
    </template>
    <template #modals>
      <div class="layout-slot">
        <slot />
      </div>
    </template>
    <template #bottomBar>
      <DesktopBottomBar />
    </template>
  </DesktopUI>
</template>

<script setup lang="ts">
import DesktopUI from '@/components/desktop/DesktopUI/index.vue';
import DesktopTopBar from '@/components/desktop/DesktopTopBar/index.vue';
import DesktopBottomBar from '@/components/desktop/DesktopBottomBar/index.vue';
import DesktopLink from '@/components/desktop/DesktopLink/index.vue';
import { PagesNames, WindowPages } from '@/enums/pagesNames'
import { useWindowModalsStore } from '@/store/components/shared/windowModal.store'
</script>
