import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    seatNumber: null,
    theme: "theme-dark"
  },
  mutations: {
    setSeatNumber(state, seatNumber) {
      state.seatNumber = seatNumber;
    },
    setTheme(state, theme) {
      state.theme = theme;
      localStorage.setItem("theme", theme);
    }
  },
  actions: {
    setSeatNumber({ commit }, seatNumber) {
      commit("setSeatNumber", seatNumber);
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
