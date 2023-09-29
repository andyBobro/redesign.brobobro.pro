<template>
  <component
    :is="linkComponent"
    v-bind="{...$props}"
    @click="onClick"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { RouteLocation } from 'vue-router';
import { computed } from 'vue';
import { WindowPages } from '@/enums/pagesNames'
import { useDesktopAppModalsStore } from '@/store/components/desktopUI/desktopAppModal.store'
// import { NuxtLinkProps, DefineComponent } from 'nuxt';
// import type { DefineComponent, NuxtLinkProps } from 'nuxt'

interface Props {
  to?: RouteLocation,
  href?: string,
}

interface Emits {
  (e: 'click', event: Event) :void
}

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

const route :RouteLocation = useRoute()

const router = useRouter()

const modalStore = useDesktopAppModalsStore()

const isAppLink = computed(() :boolean => !!WindowPages[props.to?.params?.app])

type LinkComponent = ReturnType<typeof defineNuxtLink> | 'button'

const linkComponent = computed(() :LinkComponent => {
  const { to, href } = props

  if (isAppLink.value) {
    return 'button'
  }
  
  if (to || href) {
    return  defineNuxtLink({})
  }

  return 'button'
})

function onClick (e :Event) :void {
  if (isAppLink.value) {
    appHandler()
    return
  }

  emit('click', e)
}

function appHandler () {
  const { to } = props
  const currentAppsSet = new Set(route.params.app?.split(',') || [])
  const toApp = to.params?.app
  const isToAppCurrent = currentAppsSet.has(toApp) // implement diff
  let newAppsString = ''

  if (isToAppCurrent) {
    const isMinimized = modalStore.getById[toApp].minimized

    modalStore.setModalState(toApp, {
      minimized: !isMinimized
    })
  } else {
    currentAppsSet.add(toApp)
    console.log(currentAppsSet);
    
    newAppsString = [...currentAppsSet].join(',')
    router.push({
      name: 'desktop-app',
      params: {
        app: newAppsString
      }
    })
  }
}
</script>
