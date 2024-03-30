<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
})
</script>

<template>
  <div class="slidev-layout two-columns w-full h-full gap-4 grid grid-cols-2">
    <div class="col-left overflow-auto" :class="props.class">
      <slot />
    </div>
    <div class="col-right overflow-auto" :class="props.class">
      <slot name="right" />
    </div>
  </div>
</template>