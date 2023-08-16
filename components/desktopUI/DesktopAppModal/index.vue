<template>
  <transition name="modal">
    <div
      v-if="opened && !minimized"
      :style="style" 
      class="desktop-app-modal-wrapper flex flex-col"
      :class="{
        'desktop-app-modal-wrapper--fullscreen': fullscreen,

        'fixed': (opened && !minimized) && !fullscreen,
        'absolute w-full top-0 bottom-56': fullscreen,
        'static': false && minimized && opened,
        'z-40 shadow-sm shadow-neutral-600': isActive
      }"
      @click="setActive"
    >
      <div class="flex flex-col h-full">
        <div
          ref="el"
          v-dbl-click="toggleFullscreenApp"
          class="flex items-center justify-between bg-neutral-50 text-gray-950 p-4"
          :class="{
            'border-dotted border-b-2 border-gray-950': minimized,
            'cursor-move': !fullscreen,
          }"
        >
          <div
            class="flex items-center flex-grow select-none"
          >
            {{ type.toUpperCase() }}
          </div>

          <div
            v-if="!minimized"
            class="flex"
          >
            <DesktopAppModalControl
              v-for="control in controls"
              :key="control"
              :type="control"
              @action="onControlAction"
            />
          </div>
        </div>

        <DesktopAppModalResize
          class="desktop-app-modal-resize"
          @isDraggingRow="onResizerPress"
          @isDraggingCol="onResizerPress"
          @draggingRow="resizing"
          @draggingCol="resizing"
        >
          <div
            v-show="!minimized"
            class="h-full flex flex-col flex-grow border-x-2 border-neutral-50 border-b-2 p-[2px] bg-gray-700"
          >
            <slot />
          </div>
        </DesktopAppModalResize>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import DesktopAppModalResize from './DesktopAppModalResize.vue'
import DesktopAppModalControl from './DesktopAppModalControl.vue'
import { useDesktopAppModalsStore } from '@/store/components/desktopUI/desktopAppModal.store'
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
const modalStore = useDesktopAppModalsStore()
const pageStore = usePageStore()
const controls: Array<WindowControlTypes> = Object.values(WindowControlTypes)
const el = ref<HTMLElement | null>(null)
const resizePressed = ref(false)
const state = computed(() => modalStore.getModalById(props.type))
const opened = computed(() => {
  return state.value?.opened
})
const minimized = computed(() => {
  return state.value ? state.value.minimized : false
})
const fullscreen = computed(() => {
  return pageStore.isOnlyTouchDevice || state.value.fullscreen
})
const style: ComputedRef<string | boolean> = computed(() => {
  if (fullscreen.value) {
    return ''
  }

  if (resizePressed.value) {
    return `
      left: ${modalStore.getById?.[props.type]?.x}px;
      top: ${modalStore.getById?.[props.type]?.y}px;
    `
  }

  return `
    left: ${x.value}px;
    top: ${y.value}px;
  `
})
// const style = ref('')
const isActive = computed(() => {
  console.log(modalStore.isActive(props.type));

  return modalStore.isActive(props.type)
})

const { x, y, isDragging } = useDraggable(el, {
  initialValue: {
    x: modalStore.getById?.[props.type]?.x || 100, 
    y: modalStore.getById?.[props.type]?.y || 100 
  },
})

watchEffect(() => {
  if (!resizePressed.value && isDragging.value) {
    modalStore.setModalState(props.type, {
      x: x.value,
      y: y.value,
    })
  }
})

async function onControlAction(controlActionType: WindowControlTypes): void {
  switch (controlActionType) {
    case WindowControlTypes.Close:
      const newApps = removeAppFromAppsString(route.params.app, props.type)
      console.log('newApps', newApps);
      
      const newRoute = newApps ? {
          name: route.name,
          params: {
            app: newApps 
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
      toggleFullscreenApp()
      break;

    default:
      break;
  }
}

function setActive(type: WindowPages) {
  modalStore.setActive(props.type)
}

function toggleFullscreenApp () {
  modalStore.setModalState(props.type, {
    fullscreen: !state.value.fullscreen,
  })
}

function onResizerPress (e) {
  resizePressed.value = e
}

function resizing (e) {
  console.log('resizing', e);
  
}

onMounted(() => {
  modalStore.initModalState(props.type)
})
</script>

<style lang="postcss" scoped>
.desktop-app-modal-wrapper {
  &--fullscreen {
    .desktop-app-modal-resize {
      @apply !w-full !h-full;
    }
  }
}
</style>
