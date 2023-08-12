<template>
  <div class="flex flex-col w-full h-full overflow-hidden">
    <slot name="topBar" />
    <div class="relative flex-grow p-16">
      <div class="grid grid-cols-2">
        <slot name="links" />
      </div>
      <div>
        <slot />
      </div>
      <div class="absolute flex bottom-0 left-0 right-0">
        <slot name="modals" />
      </div>
    </div>
    <slot name="bottomBar" />
  </div>
</template>
