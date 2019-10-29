<template>
  <div>
    <input v-model="search" type="search">
    <input type="button" @click="doSearch" value="Search">
  </div>
</template>

<script>
//import router from '../api/connection'

export default {
  name: 'Test',
  data:{
    search:'',
    books:[],
    relatedBooks:[],
    searching:false,
    selectedBook:null
  },
  methods:{
    doSearch() {
      if(this.search === '') return;
      this.searching = true;
      this.books = [];
      this.relatedBooks = [];
      console.log('search for '+this.search);
      fetch(`https://openwhisk.ng.bluemix.net/api/v1/web/rcamden%40us.ibm.com_My%20Space/goodreads/search.json?search=${encodeURIComponent(this.search)}`)
      .then(res=>res.json())
      .then(res => {
        this.searching = false;
        this.books = res.result;
        console.log(this.books);
      });
    },
    findSimilar(book) {
      this.selectedBook = book;
      this.relatedBooks = [];
      console.log('find books similar to '+book.id);
      fetch(`https://openwhisk.ng.bluemix.net/api/v1/web/rcamden%40us.ibm.com_My%20Space/goodreads/findSimilar.json?id=${encodeURIComponent(book.id)}`)
      .then(res=>res.json())
      .then(res => {
        this.relatedBooks = res.result;
      });

    }
  }
}
</script>