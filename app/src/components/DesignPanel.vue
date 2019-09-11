<template>
<b-col md="9">
    <div id="jsmind_container">
        
    </div>
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