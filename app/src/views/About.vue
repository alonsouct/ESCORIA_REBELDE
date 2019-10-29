<template>
  <div class="about">
    <b-container class="mt-4">
      <b-row>
        <Test/>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Test from '@/components/Test.vue'

export default {
  name: 'home',
  components: {
    Test
  },
}
</script>