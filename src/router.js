import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/Layout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: 'home',
      children: [
        {
          path: 'home',
          component: () =>
            import(/* webpackChunkName: "about" */ './views/Home.vue'),
        },
        {
          path: 'about',
          component: () =>
            import(/* webpackChunkName: "about" */ './views/About.vue'),
        },
        {
          path: 'test',
          component: () =>
            import(/* webpackChunkName: "test" */ './views/Test.vue'),
        },
        {
          path: 'userMgr',
          component: () =>
            import(/* webpackChunkName: "user" */ './views/UserMgr.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "login" */ './views/Login.vue'),
    },
  ],
})
