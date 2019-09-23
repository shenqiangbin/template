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
            import(/* webpackChunkName: "about" */ './views/Home.vue')
        },
        {
          path: 'about',
          component: () =>
            import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
          path: '/changepwd',
          name: 'changepwd',
          component: () =>
            import(/* webpackChunkName: "login" */ './views/ChangePwd.vue')
        },
        {
          path: '/sysmgr',
          name: 'sysmgr',
          component: () =>
            import(/* webpackChunkName: "sysmgr" */ './views/SysMgr.vue'),
          children: [
            {
              path: 'usermgr',
              component: () =>
                import(/* webpackChunkName: "sysmgr" */ './views/UserMgr.vue')
            },
            {
              path: 'rolemgr',
              component: () =>
                import(/* webpackChunkName: "sysmgr" */ './views/RoleMgr.vue')
            },
            {
              path: 'menumgr',
              component: () =>
                import(/* webpackChunkName: "sysmgr" */ './views/MenuMgr.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "login" */ './views/Login.vue')
    }
  ]
})
