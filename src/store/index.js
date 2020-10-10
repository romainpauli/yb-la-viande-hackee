import Vue from "vue";
import Vuex from "vuex";
import ApiService from "@/services/ApiService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    seatNumber: null,
    seatNumberForApi: null,
    sector: null,
    block: null,
    theme: "theme-dark",
    imagerdy: false,
    qtimes: null,
    gametitle: null,
    gameinprogress: null,
    lastupdate: null
  },
  mutations: {
    setSeatNumber(state, seatNumber) {
      if (seatNumber === null) {
        state.seatNumber = null;
        localStorage.removeItem("seatNumber");
      } else {
        state.seatNumber = seatNumber;
        state.seatNumberForApi = seatNumber.replace(".", "-").replace("R", "");
        state.block = seatNumber.split(".")[0];
        state.sector = seatNumber[0];
        localStorage.setItem("seatNumber", seatNumber);
        ApiService.seatMap(seatNumber.replace(".", "-").replace("R", "")).then(
          () => {
            state.imagerdy = true;
          }
        );
      }
    },
    setTheme(state, theme) {
      state.theme = theme;
      localStorage.setItem("theme", theme);
    },
    setQTimes(state, times, d) {
      state.gameinprogress = times.response;
      state.gametitle = times.GameTitle;
      state.qtimes = times.time;
      state.lastupdate = d
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
    fetchWaitingTimes({ commit }) {
      const d = new Date()
      const datestring = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+'T'+ (d.getHours() < 10 ? '0' : '') +d.getHours()+':' + (d.getMinutes() < 10 ? '0' : '') +d.getMinutes()
      ApiService.getWaitingTime(datestring).then(res => {
        commit("setQTimes", JSON.parse(res.data.body), d);
      });
    },
    setTheme({ commit }, theme) {
      commit("setTheme", theme);
    }
  }
});
