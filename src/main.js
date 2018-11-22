// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import VueCarousel from 'vue-carousel'
import Meta from 'vue-meta'

Vue.use(VueCarousel)
Vue.use(Meta)
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
