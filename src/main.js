import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { getCookie } from './api/token'

Vue.config.productionTip = false

var isIgnore = function(toPath){
  var ignorePaths = ['/login','/about'];
  return ignorePaths.indexOf(toPath) >= 0;
}

router.beforeEach((to, from, next) => {

  var toPath = to.path;
  console.log(toPath);

  if(isIgnore(toPath)){
    next()
  }else{
    var isLogin = false;    
    var cookieVal = getCookie();
    if(cookieVal)
      isLogin = true;

    if(!isLogin)
      next("/login")

    next();
  }

})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
