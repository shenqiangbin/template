<template>
  <div>
    登录页面

    <button @click='login'>点我登录成功</button>
    <button @click='fetch'>获取资源</button>
    <button @click='logout'>退出</button>
  </div>
</template>

<script>

import axios from 'axios'
import loginService from '../api/loginService'

export default {
  name: 'login',
  components: {
    
  },
  methods:{
      login(){

        var username = '';
        var password = '';  

        loginService.login(username,password).then(response => {
            if(response.data.status == 200){
                console.log("登录成功");
            }else{
                console.error("登录失败");
            }
        }).catch(function(error){
            console.log(error);
            console.error("登录失败");
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
      }
  }
}
</script>
