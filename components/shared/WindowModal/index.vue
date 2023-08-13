<template>
  <transition name="modal">
    <div
      v-if="opened && !minimized"
      ref="el"
      :style="style" 
      class="flex flex-col"
      :class="{
        'fixed': (opened && !minimized) && !pageStore.isOnlyTouchDevice,
        'absolute w-full top-0 bottom-56': pageStore.isOnlyTouchDevice,
        'static': false && minimized && opened,
        'min-w-[480px] min-h-[240px]': opened && !minimized  && !pageStore.isOnlyTouchDevice,
        'z-40': isActive
      }"
      @click="setActive"
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
        class="flex flex-col flex-grow border-x-2 border-neutral-50 border-b-2 p-[2px] bg-gray-700"
      >
        <slot />
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import WindowModalControl from './WindowModalControl.vue'
import { useWindowModalsStore } from '@/store/components/shared/windowModal.store'
import { useDraggable } from '@vueuse/core'
import { removeAppFromAppsString } from '@/utils/desktopUI/apps'
import { WindowPages } from '@/enums/pagesNames'
import {
  WindowControlTypes,
} from '@/enums/windowModal'
import { usePageStore } from '@/store/page.store'


interface Props {
  type: WindowPage,
}

type WindowPage = WindowPages.terminal | WindowPages.about

const route = useRoute()
const router = useRouter()
const props = defineProps<Props>()
const modalStore = useWindowModalsStore()
const pageStore = usePageStore()
const controls: Array<WindowControlTypes> = Object.values(WindowControlTypes)
const el = ref<HTMLElement | null>(null)
const state = computed(() => modalStore.getModalById(props.type))
const opened = computed(() => {
  return state.value?.opened
})
// const routed = route.params
const minimized = computed(() => {
  return state.value ? state.value.minimized : false
})

const { x, y, isDragging } = useDraggable(el, {
  initialValue: {
    x: modalStore.getById?.[props.type]?.x || 100, 
    y: modalStore.getById?.[props.type]?.y || 100 
  },
})

watchEffect(() => {
  if (isDragging.value) {
    modalStore.setModalState(props.type, {
      x: x.value,
      y: y.value,
    })
  }
})

const style :ComputedRef<string | boolean> = computed(() => {
  return !pageStore.isOnlyTouchDevice ? `
    left: ${x.value}px;
    top: ${y.value}px;
  ` : ''
})

const isActive = computed(() => {
  console.log(modalStore.isActive(props.type));
  
  return modalStore.isActive(props.type)
})

async function onControlAction(controlActionType: WindowControlTypes): void {
  switch (controlActionType) {
    case WindowControlTypes.Close:
      const newApps = removeAppFromAppsString(route.params.win, props.type)
      console.log('newApps', newApps);
      
      const newRoute = newApps ? {
          name: route.name,
          params: {
            win: newApps 
          }
        } : {
          name: 'desktop',
        }
      
        console.log('newRoute', newRoute);
        
      await modalStore.setModalState(props.type, {
        opened: false,
      })
      router.push(newRoute)
      break;

    case WindowControlTypes.Minimize:
      modalStore.setModalState(props.type, {
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

function setActive(type: WindowPages) {
  modalStore.setActive(props.type)
}

function maximizeWindow () {
  if (minimized.value) {
    modalStore.setModalState(props.type, {
      minimized: false,
    })
  }
}

onMounted(() => {
  modalStore.initModalState(props.type)
})
</script>
