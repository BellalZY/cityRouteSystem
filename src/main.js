import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/styles/font.scss'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$axios = axios;
Vue.use(VueAxios,axios)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
