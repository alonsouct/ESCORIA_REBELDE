import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import conn from './connectdb' // importa elemento "conn" del script connectdb.js

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'     // Importa estilo para Vue + Bootstrap
import 'bootstrap-vue/dist/bootstrap-vue.css' //
import 'jsmind/style/jsmind.css'              // Importa estilo para libreria de MindMaps

Vue.config.productionTip = false

new Vue({
  router,
  store,
  conn,                   // importa "conn" a aplicacion
  render: h => h(App)
}).$mount('#app')
