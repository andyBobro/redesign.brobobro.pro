<template>
  <canvas ref="canvas" />
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted } from 'vue'
import { useWindowSize } from '@vueuse/core'

// const ff = true ? '"Press Start 2P"' :'"VT323"'
const { width, height }: { width: Ref<number>, height: Ref<number> } = useWindowSize()

interface Props {
  text: string
}

type Nullable<T> = T | null

const props: Props = withDefaults(defineProps<Props>(), {
  text: 'BRO'
})

const canvas: Ref<Nullable<HTMLCanvasElement>> = ref(null)
const ctx: Ref<Nullable<CanvasRenderingContext2D>> = ref(null)

// watchSyncEffect(() => {
//   if (canvas.value) {
//     canvas.value.width = width.value
//     canvas.value.height = height.value
//   }
// })
onBeforeMount(() => {
  
})

onMounted(() => {
  if (canvas.value) {
    initCanvas(canvas.value)
    writeText(ctx.value, props.text, 64, 64)
  }
})

function initCanvas(canvas: HTMLCanvasElement): void {
  canvas.width = width.value
  canvas.height = height.value
  ctx.value = canvas.getContext('2d', { alpha: false })
}

function writeText(ctx: Nullable<CanvasRenderingContext2D>, ...drawParams: [string, number, number, number?]): void {
    ctx.font = `64px "Press Start 2P"`
    console.log(ctx);
    ctx.fillStyle = 'white'
    // ctx.strokeStyle = 'aliceblue'
    ctx.fillText(...drawParams)
    // ctx.strokeText(...drawParams)
}



// function drawLine(ctx :HTMLCanvasElement, ...rest :) {
//   return ctx.drawLine
// }
</script>

