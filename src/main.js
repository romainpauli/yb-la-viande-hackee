import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueLazyload from "vue-lazyload";

import Amplify, * as AmplifyModules from "aws-amplify";
import { AmplifyPlugin } from "aws-amplify-vue";
const awsconfig = {
  aws_project_region: process.env.AWSREGION || "",
  aws_cognito_identity_pool_id: process.env.AWSCOGNITOPOOLID || "",
  aws_cognito_region: process.env.AWSREGION || "",
  aws_user_pools_id: process.env.AWSUSERPOOLID || "",
  aws_user_pools_web_client_id: process.env.AWSUSERPOOLCLIENTID || "",
  oauth: {},
  aws_user_files_s3_bucket: process.env.AWSS3BUCKET || "",
  aws_user_files_s3_bucket_region: process.env.AWSREGION || "",
  s3: {
    region: process.env.AWSREGION || "",
    bucket: process.env.AWSS3BUCKET || ""
  }
};

import "./assets/tailwind.css";
Amplify.configure(awsconfig);

Vue.use(AmplifyPlugin, AmplifyModules);

Vue.config.productionTip = false;

Vue.use(VueLazyload);

import icons from "./components/icons";

icons.forEach(component => {
  Vue.component(component.name, component);
});

import ui from "./components/ui";
import i18n from "./i18n";

ui.forEach(component => {
  Vue.component(component.name, component);
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
