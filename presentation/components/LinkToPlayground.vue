<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
  },
});
</script>

<template>
  <div class="abs-tr m-5">
    <a class="icon-btn !border-none" target="_blank" :href="props.href">
      <carbon-code-reference /> TS sandbox
    </a>
  </div>
</template>
