<template>
  <h2 class="text-2xl font-display font-bold mt-6">
    {{ compdata.text }}
  </h2>
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
