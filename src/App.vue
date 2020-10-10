<template>
  <div
    id="app"
    :class="theme"
    class="content-wrapper bg-secondary-ll text-textcolor"
  >
    <div
      class="z-50 fixed h-full w-full bg-primary text-textcolor-ad text-4xl font-black italic text-center pt-48"
      v-if="
        $store.state.gameinprogress !== 'good' &&
          $store.state.gameinprogress !== null
      "
    >
      {{ $store.state.gameinprogress }}
    </div>
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
    this.$i18n.locale = navigator.language.substring(0, 2);
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
