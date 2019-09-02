import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { getCookie } from './api/token'
import loginService from '@/api/loginService'

Vue.config.productionTip = false

var isIgnore = function (toPath) {
  var ignorePaths = ['/login', '/about'];
  return ignorePaths.indexOf(toPath) >= 0;
}

router.beforeEach((to, from, next) => {

  var toPath = to.path;

  if (isIgnore(toPath)) {
    next()
  } else {
    var isLogin = false;
    var cookieVal = getCookie();

    loginService.authenticate(()=>{
      next();
    },()=>{
      next("/login")
    });
    
    // if (isLogin)
    //   isLogin = true;

    // if (!isLogin)
    //   next("/login")

    // next();
  }

})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
