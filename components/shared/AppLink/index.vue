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
import { computed, defineEmits } from 'vue';
import { WindowPages } from '@/enums/pagesNames'
import { useWindowModalsStore } from '@/store/components/shared/windowModal.store'

interface Props {
  to?: RouteLocation,
  href?: string,
}

const props = defineProps<Props>()

const emit = defineEmits(['click', 'appClick'])

const route = useRoute()

const router = useRouter()

const modalStore = useWindowModalsStore()

const isAppLink = computed(() => !!WindowPages[props.to?.params?.win])

const linkComponent = computed(() => {
  const { to, href } = props

  if (isAppLink.value) {
    return 'button'
  }
  
  if (to || href) {
    return  defineNuxtLink({})
  }

  return 'button'
})

function onClick (e) {
  console.log(e);
  
  if (isAppLink.value) {
    appHandler()
    return
  }

  emit('click', e)
}

function appHandler () {
  console.log(props);
  
  const { to } = props
  const currentAppsSet = new Set(route.params.win?.split(',') || [])
  const toApp = to.params?.win
  const isToAppCurrent = currentAppsSet.has(toApp)
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
      name: 'desktop-win',
      params: {
        win: newAppsString
      }
    })
  }
}
</script>
