import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    theme: "theme-light"
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setTheme(state, theme) {
      state.theme = theme;
      localStorage.setItem("theme", theme);
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("setUser", user);
    },
    toggleTheme({ commit, state }) {
      commit(
        "setTheme",
        state.theme === "theme-light" ? "theme-dark" : "theme-light"
      );
    },
    setTheme({ commit }, theme) {
      commit("setTheme", theme);
    }
  }
});
