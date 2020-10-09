import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import { AmplifyEventBus } from "aws-amplify-vue";
import * as AmplifyModules from "aws-amplify";
import { AmplifyPlugin } from "aws-amplify-vue";
import AmplifyStore from "../store/index";

Vue.use(VueRouter);
Vue.use(AmplifyPlugin, AmplifyModules);

let user;

getUser().then(user => {
  if (user) {
    router.push({ path: "/" });
  }
});

AmplifyEventBus.$on("authState", async state => {
  if (state === "signedOut") {
    user = null;
    AmplifyStore.commit("setUser", null);
    router.push({ path: "/auth" });
  } else if (state === "signedIn") {
    user = await getUser();
    router.push({ path: "/" });
  }
});

function getUser() {
  return Vue.prototype.$Amplify.Auth.currentAuthenticatedUser()
    .then(data => {
      if (data && data.signInUserSession) {
        AmplifyStore.commit("setUser", data);
        return data;
      }
    })
    .catch(e => {
      console.log(e);
      AmplifyStore.commit("setUser", null);
      return null;
    });
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/bli",
    name: "Bli",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Bli.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/signin",
    name: "Signin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/Signin.vue")
  }
];

const router = new VueRouter({
  routes
});

router.beforeResolve(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    user = await getUser();
    if (!user) {
      return next({
        path: "/signin",
        query: {
          redirect: to.fullPath
        }
      });
    }
    return next();
  }
  return next();
});

export default router;
