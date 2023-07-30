<template>
  <div class="flex h-screen w-screen items-center justify-center pt-80">
    <PressToStart v-if="!state.started" @start="onStart" />
    <Entry v-else />
  </div>
</template>

<script lang="ts" setup>
import PressToStart from '@/components/index/PressToStart'
import Entry from '@/components/index/Entry'

const name :string = ''

const state = reactive({
  started: false,
})

const onStart = (e) => {
  console.log(e)
  state.started = e.started
}

// const entryCookie = useCookie('entry')
// const router = useRouter()

// console.log(router)

// if (entryCookie.value) {
//   router.replace(`/${entryCookie.value}`)
// }

// function setMode(mode) {
//   entryCookie.value = mode
//   push(`/${entryCookie.value}`)
// }
</script>
