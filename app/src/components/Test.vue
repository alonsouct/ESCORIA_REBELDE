
<template>
  <div>
    <input type="button" @click="tryme" value="Clickeame">
  </div>
</template>

<script>

export default {
  name: 'Test',
  data(){
    return {
      results: ''
    }
  },
  methods:{
    tryme() {
      fetch('http://mcfly.tk:3000/archetype')
        .then(res=>res.json())
        .then(res => {
        this.results = res;
        console.log(this.results);
      });
    }
  }
}
</script>