import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: { DatainJs: {},outputdata:{},lanused:null },
  mutations: {
    STORETHEOUTPUT (state, value) {
      state.outputdata=value
  }
},
  actions: {},
  modules: {},
})
