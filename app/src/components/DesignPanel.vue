<template>
<b-col md="9">
    <div id="jsmind_container">
        
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

export default {
  name: 'DesignPanel',
  computed: {
    ...mapState(['arrayNodes']),
    ...mapState(['arqdata']),
    ...mapState(['metadata'])
  }
}
</script>