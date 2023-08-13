<template>
  <div class="flex flex-col w-full h-full overflow-hidden">
    <slot name="topBar" />
    <div class="relative flex-grow">
      <div class="absolute w-full h-full top-0 left-0 pb-64">
        <div class="p-16 grid grid-cols-2">
          <slot name="links" />
        </div>
        <slot />
      </div>
    </div>
    <slot name="bottomBar" />
  </div>
</template>
