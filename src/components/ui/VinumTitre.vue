<template>
  <h1 class="text-6xl font-display text-center">
    {{ compdata.text }}
  </h1>
</template>

<script>
export default {
  props: {
    compdata: {
      type: Object,
      default() {
        return { text: "" };
      }
    }
  }
};
</script>
