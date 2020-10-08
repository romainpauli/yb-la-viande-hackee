<template>
  <div>
    <div
      class="h-screen overflow-hidden bg-secondary-ll text-textcolor"
      :class="theme"
    >
      <div class="flex flex-col w-0 flex-1 overflow-hidden">
        <main
          class="flex-1 relative z-0 overflow-y-auto focus:outline-none"
          tabindex="0"
        >
          <!-- Replace with your content -->
          <div :class="$route.name !== 'Signin' ? '' : ''">
            <slot></slot>
          </div>
          <!-- /End replace -->
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  created() {
    this.$store.dispatch(
      "setTheme",
      localStorage.getItem("theme") || "theme-light"
    );
  },
  name: "App",
  data() {
    return {
      sidebarOpen: true
    };
  },
  computed: mapState(["theme"]),
  methods: {
    signout() {
      this.$Amplify.Auth.signOut().then(() => {
        this.$router.push("signin");
      });
    },
    toggleTheme() {
      this.$store.dispatch("toggleTheme");
    }
  }
};
</script>
