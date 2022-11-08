<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
  },
});
</script>

<template>
  <div class="m-0 flex flex-col items-center">
    <img class="max-h-full w-200 max-w-full" :src="props.image" />
    <slot />
  </div>
</template>
