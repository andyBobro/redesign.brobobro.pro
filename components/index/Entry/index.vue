<template>
  <div
    ref="entryWrapper"
    class="relative flex items-start"
  >
    <div class="relative h-[190px] w-[190px]">
      <h1
        ref="entryGridLetter"
        class="absolute h-full w-full p-12 opacity-0 [font-size:190px] [line-height:1]"
      >
        b
      </h1>
      <div
        ref="entryGrid"
        class="entry relative grid w-[190]"
        :style="`
        --entry-cols: ${state.cols};
        --entry-rows: ${state.rows};
        --entry-gap: ${state.gap}px;
        --entry-pixel-width: ${state.pixelWidth}
      `"
      >
        <div
          v-for="(row, i) in state.grid"
          :key="`block_${i}`"
          class="entry__item relative flex aspect-square h-4 w-4 items-center justify-center"
        >
          <div
            ref="pixelsRefs"
            class="relative -z-10 h-full w-full scale-0 transition-all"
            :class="{
              'bg-white': !state.grid[i].active,
              'bg-black': state.grid[i].active,
            }"
          />
        </div>
      </div>
    </div>

    <h1
      ref="entryGridSign"
      class="mt-[12px] h-320 max-w-0 overflow-hidden whitespace-nowrap [font-size:190px] [line-height:1]"
    >
      <span class="whitespace-nowrap"> ro OS </span>
    </h1>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useElementBounding } from '@vueuse/core'
import { countourIds, filledIds } from './data/gridIds'
import { turnOn } from '@/utils/keyframes/turnOnOff'

const { $lodash, $anime } = useNuxtApp()
const entryWrapper = ref(null)
const entryGrid = ref(null)
const entryGridLetter = ref(null)
const entryGridSign = ref(null)
const pixelsRefs = ref([])

// const { x, y, top, right, bottom, left, width, height } = useElementBounding(entryGrid)

// ADD PROPS INSTEAD SOME REACTIVES

const state = reactive({
  grid: new Array(Math.pow(32, 2))
    .fill(null)
    .map((item, i) => ({ id: i, active: false })),
  letter: new Set([]),
  cols: 32,
  rows: 32,
  gap: 2,
  pixelWidth: '4px',
  center: {
    x: 0,
    y: 0,
  },
  countourRefs: [],
  filledRefs: [],
})

const { x: gridX, y: gridY } = useElementBounding(entryGrid)

const emit = defineEmits(['finish'])

// OPTIMIZE COMPUTED

// const refs = computed(() => {
//   const countourFillMap = {
//     countour: countourIds,
//     filled: filledIds,
//   }
//   const countourFillRefs = state.grid.reduce(
//     (_, { id }, i) => {
//       Object.entries(countourFillMap).forEach(([_field, ids]) => {
//         if (ids.includes(id)) {
//           _[_field].push({
//             id,
//             ref: pixelsRefs[id],
//           })
//         }
//       })

//       return _
//     },
//     {
//       countour: [],
//       filled: [],
//     }
//   )

//   return {
//     countour: countourFillRefs.countour,
//     filled: countourFillRefs.filled,
//   }
// })

const countourRefs = computed(() =>
  countourIds.map((id) => pixelsRefs.value[id] && pixelsRefs.value[id])
)
const filledRefs = computed(() =>
  filledIds.map((id) => pixelsRefs.value[id] && pixelsRefs.value[id])
)

const innersRefs = computed(() => {
  return filledIds.reduce((_, id) => {
    if (!countourIds.includes(id)) _.push(pixelsRefs.value[id])

    return _
  }, [])
})

const outerRefs = computed(() => {
  const refs = state.grid.reduce((_, { id }) => {
    if (!filledIds.includes(id)) {
      _.push(pixelsRefs.value[id])
    }

    return _
  }, [])

  return refs
})

onMounted(async () => {
  state.center = {
    x: gridX.value + entryGrid.value.offsetWidth / 2,
    y: gridY.value + entryGrid.value.offsetHeight / 2,
  }

  $anime({
    targets: entryWrapper.value,
    duration: 300,
    keyframes: turnOn,
  }).finished

  const introJingle = new Audio('/sounds/effects/entry-intro.mp3')

  introJingle.play()

  await Promise.all(
    outerRefs.value.map((ref) => {
      const elRect = ref.getBoundingClientRect()
      const diff = getTranslatesDiff(elRect, state.center)

      return $anime({
        targets: ref,
        translateX: diff.x,
        translateY: diff.y,
        scale: 1,
        opacity: '1',
        delay: Math.random() * 1000,
        duration: 1300,
        direction: 'reverse',
      }).finished
    })
  )

  Promise.all(
    filledRefs.value.map((ref) => {
      const elRect = ref.getBoundingClientRect()
      const diff = getTranslatesDiff(elRect, state.center)

      return $anime({
        targets: ref,
        opacity: '1',
        delay: Math.random() * 1000,
        duration: 1000,
        easing: 'linear',
        direction: 'reverse',
        loop: 1,
      }).finished
    })
  )

  await Promise.all([
    ...outerRefs.value.map((ref) => {
      const elRect = ref.getBoundingClientRect()
      const diff = getTranslatesDiff(elRect, state.center)

      return $anime({
        targets: ref,
        translateX: -diff.x,
        translateY: -diff.y,
        scale: 0,
        opacity: '0',
        delay: Math.random() * 1000,
        duration: 1000,
      }).finished
    }),
    ...filledRefs.value.map((ref) => {
      const elRect = ref.getBoundingClientRect()
      const diff = getTranslatesDiff(elRect, state.center)

      return $anime({
        targets: ref,
        translateX: 0,
        translateY: 0,
        scale: 1,
        opacity: '1',
        delay: Math.random() * 1000,
        duration: 1000,
      }).finished
    }),
  ])

  await $anime({
    targets: entryGridLetter.value,
    opacity: '1',
    duration: 1000,
  }).finished

  await $anime({
    targets: entryGridSign.value,
    maxWidth: '1280px',
    duration: 1400,
  }).finished

  setTimeout(() => {
    emit('finish')
  }, 2000)

  // CREATE GRID TYPE

  // await $anime({
  //   targets: appWrapper.value,
  //   duration: 1000,
  //   keyframes: turnOn,
  // }).finished
  // $anime({
  //   targets: appWrapper.value,
  //   duration: 250,
  //   loop: true,
  //   keyframes: flicker,
  //   easing: 'easeOutElastic(1, .8)',
  // })
  // await $anime({
  //   targets: countourRefs.value,
  //   duration: 333,
  //   keyframes: blinkKeyframes,
  //   loop: 3,
  //   easing: 'easeOutElastic(1, .8)',
  // }).finished
  // await $anime({
  //   targets: filledRefs.value,
  //   duration: 333,
  //   keyframes: [
  //     ...blinkKeyframes,
  //     // {
  //     //   opacity: '0',
  //     // },
  //   ],
  //   loop: 3,
  //   easing: 'easeOutElastic(1, .8)',
  // }).finished
  // await $anime({
  //   targets: innersRefs.value,
  //   duration: 333,
  //   keyframes: blinkKeyframes,
  //   loop: 3,
  //   easing: 'easeOutElastic(1, .8)',
  // }).finished
  // await $anime({
  //   targets: outerRefs.value,
  //   duration: 666,
  //   keyframes: [
  //     ...blinkKeyframes,
  //     {
  //       opacity: '0',
  //     },
  //     {
  //       opacity: '0',
  //     },
  //     {
  //       opacity: '0',
  //     },
  //   ],
  //   loop: 3,
  //   easing: 'easeOutElastic(1, .8)',
  // }).finished
  // getDiagonalIds(innersRefs).forEach(async (ref, i) => {
  //   await $anime({
  //     delay: i * 50,
  //     targets: ref,
  //     translateX: 6,
  //   }).finished
  // })
})

function calcCenter(bounding) {}

function getDiagonalIds(refs) {
  return $lodash.chunk(refs.value, 32).reduce((_, row, i, arr) => {
    const x = row.slice(i, row.length)
    const y = arr.map((r, n) => n && r[i])
    _.unshift([...x, ...y])
    return _
  }, [])
}

function getTranslatesDiff(elRect, centerRect) {
  // console.log({ elRect, centerRect })

  return {
    x: elRect.x - centerRect.x,
    y: elRect.y - centerRect.y,
  }
}

function getTranslatesDiff1(elRect, centerRect) {
  // console.log({ elRect, centerRect })

  return {
    x: -(centerRect.x - elRect.x),
    y: -(centerRect.y - elRect.y),
  }
}
// function check(id) {
// state.grid[id].active ? state.letter.delete(id) : state.letter.add(id)
// state.grid[id].active = !state.grid[id].active
// }
</script>

<style lang="postcss" scoped>
.entry {
  grid-template-columns: repeat(
    var(--entry-cols),
    minmax(0, var(--entry-pixel-width))
  );
  grid-template-rows: repeat(
    var(--entry-rows),
    minmax(0, var(--entry-pixel-width))
  );
  row-gap: var(--entry-gap);
  column-gap: var(--entry-gap);
  &__item {
  }
}
</style>
