<template>
  <div>
    登录页面

    <button @click='login'>点我登录成功</button>
    <button @click='fetch'>获取资源</button>
    <button @click='logout'>退出</button>
    <button @click='showMsg'>test msg</button>
  </div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import loginService from '../api/loginService'
import { message } from 'ant-design-vue'

Vue.prototype.$message = message;

export default {
  name: 'login',
  components: {
    
  },
  methods:{
      login(){

        var username = 'user';
        var password = '123';  
        
        var _this = this;

        loginService.login(username,password).then(response => {
            if(response.status == 200){
                _this.$message.success("登录成功");
            }else{
                _this.$message.error("登录失败");
            }
        }).catch(function(error){
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
      fetch(){
        var instance = axios.create({
            baseURL: '/api',
            timeout: 1000,
            headers: {'X-Requested-With':'XMLHttpRequest'},
        });

         instance.request({
            url: '/resource?'+new Date(),
            method: 'get'
        }).then(function(response) {
            console.log(response);
        }).catch(function(error){
            console.log(error);
        });
      },
      logout(){
        var instance = axios.create({
            baseURL: '/api',
            timeout: 1000,
            headers: {'X-Requested-With':'XMLHttpRequest'},           
        });
        instance.request({
            url: '/logout',
            method: 'post'
        }).then(function(response) {
            console.log(response);
        }).catch(function(error){
            console.log(error);
        });
      },
      showMsg(){
          this.$message.success("success");
          this.$message.error("fail");
      }
  }
}
</script>
