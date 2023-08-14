<template>
  <div
    class="h-40 items-center flex border-t-2 border-dotted py-8 cursor-text"
    @click="onCaretClick"
  >
    <div :class="['mr-4', {}]">
      {{ prefix }}
    </div>

    <input
      ref="realInput"
      :value="rawCmd"
      type="text"
      class="input text-black"
      :class="{
        'h-0 w-0': true,
      }"
      autofocus="autofocus"
      @input="onRealInputInput"
      @keypress="onRealInputKeypress"
      @keyup="onRealInputKeyup"
      @change="onRealInputChange"
    >

    <pre
      class="font-mono"
      ref="displayedOutputBefore"
      v-html="displayedCmd.before"
    />

    <pre
      ref="displayedOutputCaret"
      class="caret h-full min-w-[2px] min-h-[32px] bg-white text-black"
      @click="onCaretClick"
      v-html="displayedCmd.inner"
    />

    <pre
      class="font-mono"
      ref="displayedOutputAfter"
      v-html="displayedCmd.after"
    />
  </div>
</template>

<script setup>
import { useDesktopTerminalStore } from '@/store/components/desktopUI/desktopTerminal.store'
import { computed, onMounted } from 'vue'

const termStore = useDesktopTerminalStore()
const realInput = ref(null)
const rawCmd = ref('')
const realInputData = reactive({
  selStart: 0,
  selEnd: 0,
  rawValueLength: 0,
})
const emit = defineEmits(['run'])
const { prefix } = defineProps({
  prefix: {
    type: String,
    default: '$:',
  },
})

const displayedCmd = computed(() => {
  const raw = rawCmd.value

  return {
    before: raw.slice(0, realInputData.value?.selStart),
    inner: raw.slice(
      realInputData.value?.selStart,
      realInputData.value?.selEnd
    ),
    after: raw.slice(realInputData.value?.selEnd),
  }
})

// Event Listeners

function onCaretClick() {
  focusInput()
}

function focusInput() {
  realInput.value.focus()
}

function onRealInputKeypress(e) {
  if (e.key === 'Enter') {
    e.preventDefault()
    !!rawCmd.value && emit('run', parseInput(rawCmd.value))
    rawCmd.value = ''
  }

  setInputData()
}

function onRealInputKeyup(e) {
  setInputData()
}

function onRealInputChange(e) {
  setInputData()
}

function onRealInputInput(e) {
  if (e.key === ' ') rawCmd.value += '&nbsp;&nbsp;&nbsp;'
  rawCmd.value = e.target.value
  setInputData()
}

// Utils

function parseInput(input) {
  const queue = input.split(' && ')
  return {
    rawInput: input,
    tasks: queue,
  }
}

function getInputData(el) {
  const rawValue = el.value
  const rawValueLength = rawValue.length
  const selStart = el.selectionStart
  const selEnd = el.selectionEnd

  return {
    rawValueLength,
    selStart,
    selEnd,
  }
}

function setInputData() {
  const inputData = getInputData(realInput.value)
  const newData = {
    ...realInputData.value,
    ...inputData,
  }

  realInputData.value = newData
}

// LifeCycle Hooks

onMounted(() => {
  focusInput()
  setInputData()
  termStore.setEl('realInput', realInput.value)
})
</script>

<style lang="postcss" scoped>
.input {
  caret-shape: block;
}
.caret {
  animation: cursor 0.42s linear infinite;
}

pre {
  font-family: "VT323" !important;
}
</style>
