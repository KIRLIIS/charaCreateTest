import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    body: require("../assets/newbody.png"),
    frontHair: require("../assets/newFrontHair.png"),
    sideHair: require("../assets/newSideHair01.png"),
    backHair: require("../assets/newBackHair01.png"),
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