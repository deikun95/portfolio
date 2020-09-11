import Vue from "vue";
import Vuex from "vuex";
import about from "./about";
import review from "./review";
import work from "./work";
import axios from "axios"

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    about,
    review,
    work,
  },
});
