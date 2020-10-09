<template>
  <div
    id="app"
    :class="theme"
    class="content-wrapper bg-secondary-ll text-textcolor"
  >
    <yb-seat-number
      v-if="$store.state.seatNumber === null"
      class="z-40 fixed h-sceen w-screen bg-secondary-ll"
    />
    <default-layout v-else />
  </div>
</template>

<script>
import YbSeatNumber from "@/components/YbSeatNumber.vue";
import DefaultLayout from "@/layout/default.vue";
import { mapState } from "vuex";

export default {
  created() {
    this.$store.dispatch("setSeatNumber", localStorage.getItem("seatNumber"));
    this.$store.dispatch(
      "setTheme",
      localStorage.getItem("theme") || "theme-dark"
    );
  },
  components: {
    YbSeatNumber,
    DefaultLayout
  },
  // name: "App",
  computed: mapState(["theme"])
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(-250px);
}
</style>
