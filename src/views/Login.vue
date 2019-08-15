<template>
  <div>
    登录页面

    <button @click='login'>点我登录成功</button>
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

        loginService.login().then(response => {
            console.log(response);
        });

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
      }
  }
}
</script>
