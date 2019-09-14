import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/button-demo',
      name: 'button-demo',
      component: () => import(/* webpackChunkName: "button" */ './views/ButtonDemo.vue')
    },
    {
      path: '/grid-demo',
      name: 'grid-demo',
      component: () => import(/* webpackChunkName: "button" */ './views/GridDemo.vue')
    },
    {
      path: '/layout-demo',
      name: 'layout-demo',
      component: () => import(/* webpackChunkName: "button" */ './views/LayoutDemo.vue')
    },
    {
      path: '/affix-demo',
      name: 'affix-demo',
      component: () => import(/* webpackChunkName: "button" */ './views/AffixSample/AffixDemo.vue')
    },
    {
      path: '/affix-nav',
      name: 'affix-nav',
      component: () => import(/* webpackChunkName: "button" */ './views/AffixSample/AffixNav.vue')
    },
    {
      path: '/breadcrumb-demo',
      name: 'breadcrumb-demo',
      component: () => import(/* webpackChunkName: "button" */ './views/BreadcrumbSample/BreadcrumbDemo.vue')
    }
  ]
})
