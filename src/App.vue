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
    <template v-else>
      <yb-bottom-menu v-if="$store.state.seatNumber !== null" class="z-40" />
      <div class="h-screen flex overflow-hidden pb-16" :class="theme">
        <div class="flex flex-col w-0 flex-1 overflow-hidden">
          <main
            class="flex-1 relative z-0 overflow-y-auto focus:outline-none"
            tabindex="0"
          >
            <!-- Replace with your content -->
            <div :class="$route.name !== 'Signin' ? 'p-0' : ''">
              <Transition name="fade" mode="out-in">
                <router-view />
              </Transition>
            </div>
            <!-- /End replace -->
          </main>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import YbBottomMenu from "@/components/YbBottomMenu.vue";
import YbSeatNumber from "@/components/YbSeatNumber.vue";
import { mapState } from "vuex";

export default {
  created() {
    this.$store.dispatch(
      "setTheme",
      localStorage.getItem("theme") || "theme-dark"
    );
  },
  components: {
    YbBottomMenu,
    YbSeatNumber
  },
  name: "App",
  data() {
    return {
      sidebarOpen: true
    };
  },
  mounted() {
    this.$18n.locale = "de";
  },
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
