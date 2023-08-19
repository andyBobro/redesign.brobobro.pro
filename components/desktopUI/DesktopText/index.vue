<template>
  <p v-bind="{...$props, ...$attrs}">
    <slot />
  </p>
</template>
