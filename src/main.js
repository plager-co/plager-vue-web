// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
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
import vueCustomElement from 'vue-custom-element'
import 'document-register-element/build/document-register-element';

Vue.use(vueCustomElement);
Vue.use(VueAxios, axios)

Vue.use(VueClipboard)
Vue.use(VueCarousel)
Vue.use(Meta)
Vue.use(VueAuthenticate, {
  baseUrl: 'http://127.0.0.1:8083', // Your API domain
  tokenName: 'code',
  providers: {
    instagram: {
      clientId: 'd350de41c32e4c47b97061fa9747d367',
      redirectUri: 'http://127.0.0.1:8080/instagram-redirect', // Your client app URL
    requiredUrlParams: ['scope'],
      scope: ['basic','public_content'],
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
