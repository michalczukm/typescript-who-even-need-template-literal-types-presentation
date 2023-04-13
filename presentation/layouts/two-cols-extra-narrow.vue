<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
})
</script>

<template>
  <div class="slidev-layout two-columns w-full h-full grid gap-4 grid-cols-3">
    <div class="col-left" :class="props.class">
      <slot />
    </div>
    <div class="col-right col-span-3" :class="props.class">
      <slot name="right" />
    </div>
  </div>
</template>