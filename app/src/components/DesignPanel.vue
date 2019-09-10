<template>
<b-col md="9">
    <div class="border h-100">
        <h1>{{ arq }}</h1>
    </div>
</b-col>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'DesignPanel',
  computed: {
    ...mapState(['arq'])
  }
}
</script>