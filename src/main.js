import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import { BootstrapVue } from "bootstrap-vue";
Vue.use(BootstrapVue);

import "./plugin/font-awesome";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("fa-icon", FontAwesomeIcon);

import VueMeta from "vue-meta";
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true,
});

import "./assets/scss/_index.scss";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
