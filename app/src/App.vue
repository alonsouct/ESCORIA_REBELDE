<template>
  <div id="app">
    <Navbar/>                                    <!-- Llamado de componente Navbar, barra presente en todas las vistas -->
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'      // importacion de componentes

export default {
  name: 'app',
  components: {
    Navbar                                        // Activacion de componentes para ser llamado en template
  }
}
</script>