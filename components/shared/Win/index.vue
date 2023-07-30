<template>
  <div class="max-h-full border-2 border-solid border-white">
    <div class="bg-white px-8 pt-10 pb-12 text-black">
      <slot name="header" />
    </div>
    <div class="bg-black p-16">
      <slot name="content" />
    </div>
  </div>
</template>
 
