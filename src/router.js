import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [{
      path: '/',
      name: 'home',
      component: () => import('@/pages/home.vue').then(m => m.default || m)
    }],
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {
          x: 0,
          y: 0
        }
      }
    }
  })
}
