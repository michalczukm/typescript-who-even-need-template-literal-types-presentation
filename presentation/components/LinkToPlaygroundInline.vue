<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
  },
});
</script>

<template>
  <a class="icon-btn !border-none" target="_blank" :href="props.href">
    <carbon-code-reference /> TS sandbox
  </a>
</template>
