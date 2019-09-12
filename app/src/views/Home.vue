<template>
  <div class="home">
    <b-container class="mt-4">
      <b-row>
        <Elements/>
        <DesignPanel/>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Elements from '@/components/Elements.vue'        // Importacion componente "elements"
import DesignPanel from '@/components/DesignPanel.vue'  // Importacion componente "designpanel"

export default {
  name: 'home',
  components: {
    Elements,                                           // Activacion de componente elements (Barra lateral)
    DesignPanel                                         // Activacion de componente designpanel (Contenedor central)
  }
}
</script>