<template>
  <div
    v-if="opened"
    ref="el"
    :style="style" 
    class="flex flex-col"
    :class="{
      'fixed': opened && !minimized,
      'static': minimized && opened,
      'min-w-[480px] min-h-[240px]': opened && !minimized,
    }"
  >
    <div
      class="flex items-center justify-between bg-neutral-50 text-gray-950 p-4"
      :class="{
        'border-dotted border-b-2 border-gray-950': minimized,
      }"
    >
      <div
        class="flex items-center flex-grow select-none"
        @click="maximizeWindow"
      >
        {{ type.toUpperCase() }}
      </div>

      <div
        v-if="!minimized"
        class="flex"
      >
        <WindowModalControl
          v-for="control in controls"
          :key="control"
          :type="control"
          @action="onControlAction"
        />
      </div>
    </div>
    <div
      v-show="!minimized"
      class="flex flex-col flex-grow border-x-2 border-neutral-50 border-b-2 p-[2px]"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import WindowModalControl from './WindowModalControl.vue'
import { useWindowModalsStore } from '@/store/components/shared/windowModal.store'
import { useDraggable } from '@vueuse/core'
import { WindowPages } from '@/enums/pagesNames'
import {
  WindowControlTypes,
} from '@/enums/windowModal'


interface Props {
  type: WindowPage,
}

type WindowPage = WindowPages.terminal | WindowPages.about

const route = useRoute()
const props = defineProps<Props>()
const store = useWindowModalsStore()
const controls: Array<WindowControlTypes> = Object.values(WindowControlTypes)
const el = ref<HTMLElement | null>(null)
const state = computed(() => store.getModalById(props.type))
const opened = computed(() => {
  return state.value?.opened
})
// const routed = route.params
const minimized = computed(() => {
  return state.value ? state.value.minimized : false
})
const { x, y, isDragging, ...rest } = useDraggable(el, {
  initialValue: { x: 100, y: 100 },
})

watchEffect(() => {
  if (isDragging.value) {
    store.setModalState(props.type, {
      x: x.value,
      y: y.value,
    })
  }
})

const style :ComputedRef<string> = computed(() => {
  return `
    left: ${x.value}px;
    top: ${y.value}px;
  `
})

function onControlAction(controlActionType: WindowControlTypes): void {
  switch (controlActionType) {
    case WindowControlTypes.Close:
      store.setModalState(props.type, {
        opened: false,
      })
      break;

    case WindowControlTypes.Minimize:
      store.setModalState(props.type, {
        minimized: true,
      });
      break;

    case WindowControlTypes.Fullscreen:
      console.log(WindowControlTypes.Fullscreen);
      break;

    default:
      break;
  }
}

function maximizeWindow () {
  if (minimized.value) {
    store.setModalState(props.type, {
      minimized: false,
    })
  }
}

onMounted(() => {
  store.initModalState(props.type)
})
</script>
