<template>
  <div class="home">

    <div @click="logout">退出</div>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

     <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Vue from "vue";
import loginService from "@/api/loginService"
import { message, Input, Button, Icon } from "ant-design-vue";

Vue.prototype.$message = message;
Vue.use(Input);
Vue.use(Button);
Vue.use(Icon);

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    logout() {
      var _this = this;
      loginService
        .logout()
        .then(response => {
          _this.$router.push({ path: "/" });
        })
        .catch(function() {
          _this.$router.push({ path: "/" });
        });
    }
  }
  
}
</script>
