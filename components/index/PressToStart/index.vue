<template>
  <div class="border-2 border-dotted border-white p-4">
    <div
      class="flex flex-col items-center justify-center border-4 border-solid border-white p-64 text-center text-heading-5 text-white"
    >
      <h1 class="mb-32 text-heading-2">Welcome!</h1>
      Press any key or click the button to start:
      <button
        class="mt-32 border-2 border-solid border-white px-16 py-8 text-heading-5 text-body transition-all hover:bg-white hover:text-white hover:text-black"
        @click="onStart"
      >
        Start
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PressToStart',
  // methods: {
  //   onStart() {
  //     this.$emit('foo', {
  //       started: true,
  //     })
  //   },
  // },
  emits: ['start'],
  setup(props, context) {
    const onStart = () => {
      const v = {
        started: true,
      }

      console.log(context, v)

      context.emit('start', v)
    }
    return {
      onStart,
    }
  },
}
</script>
