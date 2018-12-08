// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import VueCarousel from 'vue-carousel'
import Meta from 'vue-meta'
import VueClipboard from 'vue-clipboard2'
import VueAuthenticate from 'vue-authenticate'
import VueAxios from 'vue-axios'
import axios from 'axios';

Vue.use(VueAxios, axios)

Vue.use(VueClipboard)
Vue.use(VueCarousel)
Vue.use(Meta)
Vue.use(VueAuthenticate, {
  baseUrl: 'http://127.0.0.1:8083', // Your API domain

  providers: {
    instagram: {
      clientId: '04754f7c54714cc59143d57665eaa235',
      redirectUri: 'http://127.0.0.1:8080/influencer-my-page' // Your client app URL
    }
  }
})
Vue.config.productionTip = false

import inViewportDirective from 'vue-in-viewport-directive'
inViewportDirective.defaults.top = -100
Vue.directive('in-viewport', inViewportDirective)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
