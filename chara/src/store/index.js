import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    body: require("../assets/body.png"),
    frontHair: require("../assets/frontHair.png"),
    backHair: require("../assets/backHair.png"),
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
// test