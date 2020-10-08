<template>
  <div
    id="app"
    :class="theme"
    class="content-wrapper bg-secondary-ll text-textcolor"
  >
    <vinum-side-menu class="z-50" />
    <div
      class="h-screen flex overflow-hidden"
      :class="theme"
      @keydown.escape="sidebarOpen = !sidebarOpen"
    >
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
  </div>
</template>

<script>
import VinumSideMenu from "@/components/VinumSideMenu.vue";
import { mapState } from "vuex";

export default {
  created() {
    this.$store.dispatch(
      "setTheme",
      localStorage.getItem("theme") || "theme-light"
    );
  },
  components: {
    VinumSideMenu
  },
  name: "App",
  data() {
    return {
      sidebarOpen: true
    };
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
