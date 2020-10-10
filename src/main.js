import Vue from "vue";
import App from "./App.vue";
import VueI18n from "vue-i18n";
import router from "./router";
import store from "./store";
import VueLazyload from "vue-lazyload";

import "./assets/tailwind.css";

Vue.config.productionTip = false;

Vue.use(VueLazyload);

import icons from "./components/icons";

icons.forEach(component => {
  Vue.component(component.name, component);
});

import ui from "./components/ui";
// import i18n from "./i18n";
import en from "./locales/en.js";
import fr from "./locales/fr.js";
import de from "./locales/de.js";
import it from "./locales/it.js";

const messages = { en, fr, de, it };

Vue.use(VueI18n);
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: "en", // set locale
  messages // set locale messages
});

ui.forEach(component => {
  Vue.component(component.name, component);
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
