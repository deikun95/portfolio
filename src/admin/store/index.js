import Vue from "vue";
import Vuex from "vuex";
import review from "./review";
import work from "./work";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    review,
    work,
  },
});
