<template>
  <div>
    <yb-bottom-menu v-if="$store.state.seatNumber !== null" class="z-40" />
    <div class="h-screen flex overflow-hidden pb-16" :class="theme">
      <div class="flex flex-col w-0 flex-1 overflow-hidden">
        <main
          class="flex-1 relative z-0 overflow-y-auto focus:outline-none"
          tabindex="0"
        >
          <div>
            <Transition name="fade" mode="out-in">
              <router-view />
            </Transition>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import YbBottomMenu from "@/components/YbBottomMenu.vue";
import { mapState } from "vuex";

export default {
  components: {
    YbBottomMenu
  },
  name: "App",
  computed: mapState(["theme"]),
  methods: {
    toggleTheme() {
      this.$store.dispatch("toggleTheme");
    }
  },
  created() {
    this.$store.dispatch("setSeatNumber", localStorage.getItem("seatNumber"));
    this.$store.dispatch(
      "setTheme",
      localStorage.getItem("theme") || "theme-light"
    );
    this.toggleTheme();
    this.timer = setInterval(this.toggleTheme, 60000);
  },
  data() {
    return {
      timer: null
    };
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>
