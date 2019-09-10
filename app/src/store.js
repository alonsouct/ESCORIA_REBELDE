import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arq: {
      "id": "",
      "title": ""
    }
  },
  mutations: {
    constructArquetype: function(state, pl){
      this.state.arq = { "id": pl.id, "title": pl.title}
    }
  },
  actions: {

  }
})
