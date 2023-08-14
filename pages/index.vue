<template>
  <div class="flex h-screen w-screen items-center justify-center pt-80">
    <Login v-if="!state.started" @start="onStart" />
    <Entry @finish="$router.push({name: 'desktop'})" v-else />
  </div>
</template>

<script lang="ts" setup>
import Login from '@/components/index/Login/index.vue'
import Entry from '@/components/index/Entry/index.vue'

const name :string = ''

const state = reactive({
  started: false,
})

const onStart = () => {
  state.started = true
}
</script>
