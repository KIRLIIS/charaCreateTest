import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    body: require("../assets/body.png"),
    frontHair: require("../assets/frontHair.png"),
    backHair: require("../assets/backHair.png"),
    hairColor: '#ffffff'
  },
  getters: {
    getHairColor( state ){
      return state.hairColor
    }
  },
  mutations: {
    changeHairColor(state, payload){
      state.hairColor = payload.changeColor
    }
  },
  actions: {
    changeHairColorAction({commit}, payload){
      commit('changeHairColor', payload)
    }
  },
  modules: {
  }
})
// test