import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arrayNodes: [],         // Arreglo para ver que elementos han sido creados
    // Parametro de metadata para creacion de mindmap
    metadata: {
      "name":"demo",
      "author":"NDEA",
      "version":"0.1",
    },
    // Parametro vacio de arreglo JSON donde se guarda la estructura del arquetipo creado
    // Revisar ejemplos de libreria JsMind para ver estructura "arraynode"
    arqdata: [{}]
  },
  mutations: {
    // Agrega al arreglo los elementos creados
    constructArray: function(state, pl){
      this.state.arrayNodes.push(pl.inf)
    },
    // Construye el nodo "root" o base para creacion de arquetipos respecto a la estructura "arraynode"
    // que establece la libreria JsMind
    constructArquetype: function(state, pl){
      this.state.arqdata = [{ "id": "root", "isroot": true, "topic": pl.topic}]
    }
  },
  actions: {

  }
})
