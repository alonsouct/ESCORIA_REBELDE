import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arrayNodes: [],
    metadata: {
      "name":"demo",
      "author":"hizzgdev@163.com",
      "version":"0.2",
    },
    arqdata: [{}]
  },
  mutations: {
    constructArray: function(state, pl){
      this.state.arrayNodes.push(pl.inf)
    },
    constructArquetype: function(state, pl){
      this.state.arqdata = [{ "id": pl.id, "isroot": true, "topic": pl.topic}]
    }
  },
  actions: {

  }
})
