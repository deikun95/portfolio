import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import { store } from "./store";
import SimpleVueValidation from "simple-vue-validator";
import axios from "axios";

Vue.prototype.$axios = axios;

Vue.use(SimpleVueValidation, { mode: "manual" });

new Vue({
  el: "#app-root",
  router,
  store,
  render: (h) => h(App),
});
