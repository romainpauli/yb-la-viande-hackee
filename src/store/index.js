import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    seatNumber: null,
    sector: null,
    block: null,
    theme: "theme-dark"
  },
  mutations: {
    setSeatNumber(state, seatNumber) {
      if (seatNumber === null) {
        state.seatNumber = null;
        localStorage.removeItem("seatNumber");
      } else {
        state.seatNumber = seatNumber;
        state.block = seatNumber.split(".")[0];
        state.sector = seatNumber[0];
        localStorage.setItem("seatNumber", seatNumber);
      }
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
