<template>
<b-col md="9">
    <div 
      id="jsmind_container"
      class="board"
      @dragover.prevent
      @drop.prevent="drop"
    >
        
    </div>
    <!-- las llaves permiten instanciar variables o estados de la store
         siempre y cuando estas sean "mapeadas" como se muestra mas abajo
         para mas informacion revisar States, Mutations y Actions de Vuex
         en conjunto con el ciclo de vida de aplicacion. Los "..." CREO que
         son para instanciarlos como texto porque si se llama como mapState
         simplemente se debe acceder a este como un objeto. De igual forma
         es solo para revisar y controlar los estados en ejecucion -->
    <div> {{ arrayNodes }} </div>
</b-col>
</template>

<script>
import { mapState } from 'vuex'
import Elements from "./Elements"

export default {
  name: 'DesignPanel',
  methods: {
      drop: e => {
          const card_id = e.dataTransfer.getData('card_id');
          const card = document.getElementById(card_id);

          nodeHandler("card.name xD");
      }
  },
  computed: {
    ...mapState(['arrayNodes']),
    ...mapState(['arqdata']),
    ...mapState(['metadata'])
  }
}
</script>