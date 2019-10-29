import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'     // Importa estilo para Vue + Bootstrap
import 'bootstrap-vue/dist/bootstrap-vue.css' //
import 'jsmind/style/jsmind.css'              // Importa estilo para libreria de MindMaps

import axios from 'axios'
Vue.prototype.$http = axios


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
