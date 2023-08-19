<template>
  <div>
    <strong class="block font-bold">
      {{ props.item.company }} - {{ props.item.position }}
    </strong>
    <small class="block mt-4">
      {{ props.item.from }} - {{ props.item.to }}
    </small>
    <DesktopList>
      <DesktopListItem
        v-for="task in props.item.done"
        :key="task"
      >
        {{ task }}
      </DesktopListItem>
    </DesktopList>
  </div>
</template>

<script setup lang="ts">
import DesktopList from '@/components/desktopUI/DesktopList/index.vue'
import DesktopListItem from '@/components/desktopUI/DesktopListItem/index.vue'

interface Item {
  company: string,
  position: string,
  location: string,
  from: string,
  to: string,
  done: Array<string>,
}

interface Props {
  item: Item
}

const props = defineProps<Props>()
</script>
