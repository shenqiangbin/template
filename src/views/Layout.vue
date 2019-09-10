<template>
  <div class="home">
    <div v-if="name">你好，{{name}}  <span @click="logout" style='cursor:pointer'>退出</span></div>    
    

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

     <router-view/>
  </div>
</template>

<script>
import Vue from "vue";
import loginService from "@/api/loginService"
import { message, Input, Button, Icon } from "ant-design-vue";

Vue.prototype.$message = message;
Vue.use(Input);
Vue.use(Button);
Vue.use(Icon);

export default {
  name: 'layout',
  data(){
    return {
      name: ''
    }
  },
  components: {
    
  },
  created(){
    this.getUser()
  },
  methods: {
    logout() {
      var _this = this;
      loginService
        .logout()
        .then(() => {
          _this.$router.push({ path: "/login" });
        })
        .catch(function() {
          _this.$router.push({ path: "/login" });
        });
    },
    getUser(){
      loginService
        .login(null, null)
        .then(response => {
          if (response.status == 200) {            
            var name = response.data.name
            this.name = name
          } else{
            this.$message("登录名获取失败")
          }
        })
        .catch(function() {
          this.$message("登录名获取失败")
        });
    }
  }
  
}
</script>
