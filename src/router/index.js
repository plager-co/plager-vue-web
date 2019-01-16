import Vue from 'vue'
import Router from 'vue-router'

import { routes } from './routes.js'
import {store} from "../store";

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior: function(to, from) {
    return { x: 0, y: 0 }
  },
  routes
});

router.beforeEach((to, from, next) => {
  if (!store.getters.isAuthenticated) {
    store.commit('userLogout');
  }
  next();
});

export default router
