<template>
  <div class="fixed bottom-0 bg-secondary w-screen text-xs">
    <div class="max-w-screen-xl mx-auto py-0 px-0 text-textcolor">
      <ul class="flex">
        <router-link
          to="/"
          exact-active-class="text-primary bg-secondary-dd"
          class="text-center block flex-1 py-4"
          href="#"
        >
          <li>
            <icon-base
              width="24"
              height="24"
              icon-name="home"
              maincolor="transparent"
              ><icon-home
            /></icon-base>
          </li>
        </router-link>
        <router-link
          to="/about"
          active-class="text-primary bg-secondary-dd"
          class="text-center block flex-1 py-4"
          href="#"
        >
          <li>
            <icon-base
              width="24"
              height="24"
              icon-name="home"
              maincolor="transparent"
              ><icon-book
            /></icon-base></li
        ></router-link>
        <router-link
          to="/bla"
          active-class="text-primary bg-secondary-dd"
          class="text-center block flex-1 py-4"
          href="#"
        >
          <li>
            <icon-base
              width="24"
              height="24"
              icon-name="home"
              maincolor="transparent"
              ><icon-layout
            /></icon-base>
          </li>
        </router-link>
        <router-link
          to="/bli"
          active-class="text-primary bg-secondary-dd"
          class="text-center block flex-1 py-4"
          href="#"
        >
          <li>
            <icon-base
              width="24"
              height="24"
              icon-name="home"
              maincolor="transparent"
              ><icon-award
            /></icon-base></li
        ></router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      user: {},
      session: {},
      groups: ["Front"]
    };
  },
  methods: {
    toggleTheme() {
      this.$store.dispatch("toggleTheme");
    },
    signout() {
      this.$Amplify.Auth.signOut().then(() => {
        this.$router.push("signin");
      });
    }
  },
  mounted() {
    this.$Amplify.Auth.currentAuthenticatedUser().then(user => {
      this.user = user;
    }),
      this.$Amplify.Auth.currentSession().then(s => {
        this.session = s;
        this.groups = s.accessToken.payload["cognito:groups"] || ["no group"];
      });
  }
};
</script>
