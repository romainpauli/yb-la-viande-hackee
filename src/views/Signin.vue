<template>
  <div
    class="bg-local bg-no-repeat w-full h-screen z-40"
    :style="`background-image:url(${publicPath}${bgimage}.svg)`"
  >
    <div>
      <div
        class="min-h-full flex items-center justify-center pb-12 lg:pt-64 md:pt-12 px-4 sm:px-6 lg:px-8"
      >
        <div class="max-w-md w-full p-8 bg-vinum-bg1 shadow">
          <div>
            <img
              class="mx-auto h-12 w-auto"
              src="/logovinum.svg"
              alt="Workflow"
            />
            <h2
              class="mt-6 text-center text-3xl leading-9 font-extrabold text-vinum-tx2"
            >
              Entrez vos identifiants
            </h2>
            <p class="mt-2 text-center text-sm leading-5 text-vinum-tx1">
              Espace équipe Vinum
            </p>
          </div>
          <form class="mt-8">
            <input type="hidden" name="remember" value="true" />
            <div class="rounded-md shadow-sm">
              <div>
                <input
                  aria-label="Email address"
                  v-model="loginEmail"
                  name="email"
                  type="email"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-pink focus:border-vinum-primary focus:z-10 sm:text-sm sm:leading-5 bg-vinum-bg3 focus:bg-vinum-bg1"
                  placeholder="Email address"
                />
              </div>
              <div class="-mt-px">
                <input
                  aria-label="Password"
                  name="password"
                  v-model="loginPassword"
                  type="password"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-pink focus:border-vinum-primary focus:z-10 sm:text-sm sm:leading-5 bg-vinum-bg3 focus:bg-vinum-bg1"
                  placeholder="Password"
                />
              </div>
            </div>

            <!--            <div class="mt-6 flex items-center justify-between">
              <div></div>
              <div class="text-sm leading-5">
                <a
                  href="#"
                  class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  Forgot your password?
                </a>
              </div>
            </div>-->

            <div class="mt-6">
              <button
                @click.prevent="signin"
                type="submit"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-vinum-primary hover:bg-vinum-tx1 focus:outline-none focus:border-vinum-primary focus:shadow-outline-pink active:bg-vinum-bg3 transition duration-150 ease-in-out"
              >
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    class="h-5 w-5 text-vinum-tx1 group-hover:text-vinum-primary transition ease-in-out duration-150"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span v-if="!loading">Connexion</span>
                <div v-else class="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginEmail: "",
      loginPassword: "",
      loading: false,
      erreur: {},
      publicPath: process.env.BASE_URL
    };
  },
  computed: {
    theme() {
      return this.$store.state.theme;
    },
    bgimage() {
      return this.theme === "theme-light" ? "bganimelight" : "bganimedark";
    }
  },
  methods: {
    signin() {
      this.loading = true;
      this.$Amplify.Auth.signIn({
        username: this.loginEmail,
        password: this.loginPassword
      })
        .then(user => {
          this.$store.dispatch("setUser", user);
          if (this.$route.query.redirect) {
            this.loading = false;
            this.$router.push(this.$route.query.redirect);
          } else {
            this.loading = false;
            this.$router.push("/");
          }
        })
        .catch(err => {
          this.erreur = err;
          alert(err);
        });
    }
  }
};
</script>

<style>
.lds-ring {
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 16px;
  height: 16px;
  margin: 2px;
  border: 2px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
