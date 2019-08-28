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

        // loginService.login().then(response => {
        //     console.log(response);
        // });

        // var instance = axios.create({
        //     baseURL: '/api',
        //     timeout: 1000,
        //     //headers: {'X-Custom-Header': 'foobar'},
        //     responseType: 'json',
        //     // xsrfCookieName: 'XSRF-TOKEN',
        //     // xsrfHeaderName: 'X-XSRF-TOKEN',
        // });
        // instance.request({
        //     url: '/account/captcha',
        //     method: 'get', 
        //     params: {
        //         ID: 12345
        //     },
        //     // data: {
        //     //     firstName: 'Fred'
        //     // },
        // }).then(function(response) {
        //     console.log(response.data);
        //     console.log(response.status);
        //     console.log(response.statusText);
        //     console.log(response.headers);
        //     console.log(response.config);
        // }).catch(function(error){
        //     console.log(error);
        // });


        var instance = axios.create({
            baseURL: '/api',
            timeout: 1000,
            headers: {'X-Requested-With':'XMLHttpRequest','authorization':'Basic ' + btoa('user:e95607c7-bea7-4194-b1de-f9dd6c57d406')},
            //responseType: 'json',
            // xsrfCookieName: 'XSRF-TOKEN',
            // xsrfHeaderName: 'X-XSRF-TOKEN',
        });
        // instance.request({
        //     url: '/login',
        //     method: 'post', 
        //     data: {
        //         name: 'admin',
        //         password: 'admin'
        //     }
        // }).then(function(response) {
        //     console.log(response.data);
        //     console.log(response.status);
        //     console.log(response.statusText);
        //     console.log(response.headers);
        //     console.log(response.config);
        // }).catch(function(error){
        //     console.log(error);
        // });

        instance.request({
            url: '/user',
            method: 'get'
        }).then(function(response) {
            console.log(response);
        }).catch(function(error){
            console.log(error);
        });

      },
      fetch(){
        var instance = axios.create({
            baseURL: '/api',
            timeout: 1000,
            headers: {'X-Requested-With':'XMLHttpRequest'},
            //responseType: 'json',
            // xsrfCookieName: 'XSRF-TOKEN',
            // xsrfHeaderName: 'X-XSRF-TOKEN',
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
            //responseType: 'json',
            // xsrfCookieName: 'XSRF-TOKEN',
            // xsrfHeaderName: 'X-XSRF-TOKEN',
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
