<template>
  <div class="relative bg-vinum-bg1 shadow text-vinum-tx2">
    <transition name="fade">
      <div
        v-if="loading"
        class="absolute w-full h-full bg-vinum-bg2"
        :style="
          `background-image:url(${publicPath}loader-${$store.state.theme}.svg)`
        "
      ></div>
    </transition>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "vinum-card",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  props: {
    loading: {
      type: Boolean(),
      default: false
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
