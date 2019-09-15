<template>
  <div>
    <div class="loginBox" @keyup.enter="login">
      <h2>XXX系统</h2>
      <a-input placeholder="用户名" v-model="userName" ref="userNameInput">
        <a-icon slot="prefix" type="user" />
      </a-input>
      <div style="margin:5px 0;"></div>
      <a-input placeholder="密码" v-model="password" type="password">
        <a-icon slot="prefix" type="lock" />
      </a-input>

      <div style="margin:15px 0;"></div>
      <a-button type="primary" @click="login" style="width:100%">登录</a-button>
    </div>

    <!-- <button @click='login'>点我登录成功</button>
    <button @click='fetch'>获取资源</button>
    <button @click='logout'>退出</button>-->
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import loginService from "../api/loginService";
import { message, Input, Button, Icon } from "ant-design-vue";

Vue.prototype.$message = message;
Vue.use(Input);
Vue.use(Button);
Vue.use(Icon);

export default {
  name: "login",
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  created(){
    var _this = this
    setTimeout(function(){
      _this.$refs.userNameInput.focus()
    },100);
    
  },
  methods: {
    login() {
      var username = this.userName;
      var password = this.password;

      var _this = this;

      loginService
        .login(username, password)
        .then(response => {
          if (response.status == 200) {            
            _this.$router.push({ path: "/" });
          } else {
            _this.$message.error("登录失败");
          }
        })
        .catch(function() {
          _this.$message.error("登录失败");
        });

      // var instance = axios.create({
      //     baseURL: '/api',
      //     timeout: 1000,
      //     headers: {'X-Requested-With':'XMLHttpRequest','authorization':'Basic ' + btoa('user:e95607c7-bea7-4194-b1de-f9dd6c57d406')},
      //     //responseType: 'json',
      //     // xsrfCookieName: 'XSRF-TOKEN',
      //     // xsrfHeaderName: 'X-XSRF-TOKEN',
      // });

      // instance.request({
      //     url: '/user',
      //     method: 'get'
      // }).then(function(response) {
      //     console.log(response);
      // }).catch(function(error){
      //     console.log(error);
      // });
    },
    fetch() {
      var instance = axios.create({
        baseURL: "/api",
        timeout: 1000,
        headers: { "X-Requested-With": "XMLHttpRequest" }
      });
      var _this = this;
      instance
        .request({
          url: "/resource?" + new Date(),
          method: "get"
        })
        .then(function(response) {
          _this.$message.success(response);
        })
        .catch(function(error) {
          _this.$message.error(error);
        });
    },
    logout() {
      var _this = this;
      var instance = axios.create({
        baseURL: "/api",
        timeout: 1000,
        headers: { "X-Requested-With": "XMLHttpRequest" }
      });
      instance
        .request({
          url: "/logout",
          method: "post"
        })
        .then(function(response) {
          _this.$message.success(response);
        })
        .catch(function(error) {
          _this.$message.error(error);
        });
    }
  }
};
</script>

<style scoped>
.loginBox {
  width: 300px;
  margin: 10px auto;
  margin-top: 100px;
}
</style>
