<template>
  <div class="home">
    <a-layout>
      <a-layout-header class="header">
        <img class="logo" src="../assets/logo.png" />
        <!--userbox 要放在 menu 的前面，否则会有问题。因为 menu 有 clear:both，就是始终会换行。-->
        <div class="userbox">
          <a-dropdown :trigger="['click']">
            <a class="ant-dropdown-link" href="#">
              你好，{{name}}
              <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item key="0">
                <a href="http://www.alipay.com/">个人中心</a>
              </a-menu-item>
              <a-menu-item key="1">
                <a href="http://www.taobao.com/">修改密码</a>
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item key="3">退出</a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
        <a-menu
          theme="dark"
          mode="horizontal"
          :defaultSelectedKeys="['2']"
          style="line-height:64px;border:0px solid red;text-align:left;"
        >
          <a-menu-item key="1">首页</a-menu-item>
          <a-menu-item key="2">驾驶舱管理</a-menu-item>
          <a-menu-item key="3">系统管理</a-menu-item>
        </a-menu>
      </a-layout-header>
    </a-layout>

    <div v-if="name">
      你好，{{name}}
      <span @click="logout" style="cursor:pointer">退出</span>
    </div>

    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import loginService from "@/api/loginService";
import {
  message,
  Input,
  Button,
  Icon,
  Layout,
  Menu,
  Dropdown
} from "ant-design-vue";

Vue.prototype.$message = message;
Vue.use(Input);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Dropdown);

export default {
  name: "layout",
  data() {
    return {
      name: ""
    };
  },
  components: {},
  created() {
    this.getUser();
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
    getUser() {
      loginService
        .login(null, null)
        .then(response => {
          if (response.status == 200) {
            var name = response.data.name;
            this.name = name;
          } else {
            this.$message("登录名获取失败");
          }
        })
        .catch(function() {
          this.$message("登录名获取失败");
        });
    }
  }
};
</script>

<style scoped>
.logo {
  width: 51px;
  float: left;
  height: 48px;
  margin-top: 10px;
  margin-right: 36px;
}
.userbox {
  float: right;
  border: 0px solid royalblue;
}
</style>