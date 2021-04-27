import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex'
import store from './store'
import VueRouter from 'vue-router'
import { ValidationProvider, ValidationObserver, extend, Validator } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import Toast from 'vue-toastification'
import Loading from 'vue-loading-overlay'
// Import the CSS or use your own!
import "vue-toastification/dist/index.css"
import 'vue-loading-overlay/dist/vue-loading.css'

Vue.use(Toast)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Loading, {
  opacity: 0.9,
  blur: '5px',
  color: '#07aeeb',
  backgroundColor: '#eee',
})
// register globally
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
extend('required', required)

// axios config
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*' // for all requests

extend('required', {
  ...required,
  message: () => {
    return `Further details required`
  }
});

const routes = []

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
