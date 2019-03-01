// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faMagic, faCog } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedIn,
  faTwitch
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add({
  faTwitter,
  faTwitch,
  faEnvelope,
  faMagic,
  faCog
});

Vue.component("icon", FontAwesomeIcon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
