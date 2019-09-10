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
import Elements from '@/components/Elements.vue'
import DesignPanel from '@/components/DesignPanel.vue'

export default {
  name: 'home',
  components: {
    Elements,
    DesignPanel
  }
}
</script>