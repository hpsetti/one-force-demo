import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VueCookies from "vue-cookies"


Vue.use(VueRouter)
Vue.use(VueCookies);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/form',
    name: 'form',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FormView.vue'),
    meta: {
      requiresAuth : true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
      if (Vue.$cookies.get('userLoggedIn') === 'true') {
          next();
      } else {
          alert('You must be logged in to see this page');
          next({
              path: '/',
          });
      }
  } else {
      next();
  }
});

export default router
