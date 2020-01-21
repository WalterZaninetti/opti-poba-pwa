import Vue from "vue";
import Vuex from "vuex";
import {players} from "./players.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  	players: players,
  },
  getters : {
  	players : state => state.players
  },
  mutations: {},
  actions: {},
  modules: {}
});
