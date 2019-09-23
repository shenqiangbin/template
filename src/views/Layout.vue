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
                <a href="/changepwd">修改密码</a>
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item key="3" @click="logout">退出</a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
        <a-menu
          theme="dark"
          mode="horizontal"
          :defaultSelectedKeys="['1']"
          style="line-height:64px;border:0px solid red;text-align:left;"
        >
          <a-menu-item key="1">
            <a href="/">首页</a>
          </a-menu-item>
          <a-menu-item key="2">驾驶舱管理</a-menu-item>
          <a-menu-item key="3">系统管理</a-menu-item>
          <a-menu-item key="4">
            <a href="/about">关于</a>
          </a-menu-item>
        </a-menu>
      </a-layout-header>
    </a-layout>

    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import loginService from '@/api/loginService'
import {
  message,
  Input,
  Button,
  Icon,
  Layout,
  Menu,
  Dropdown
} from 'ant-design-vue'

Vue.prototype.$message = message
Vue.use(Input)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Dropdown)

export default {
  name: 'layout',
  data() {
    return {
      name: ''
    }
  },
  components: {},
  created() {
    this.getUser()
  },
  methods: {
    logout() {
      var _this = this
      loginService
        .logout()
        .then(() => {
          _this.$router.push({ path: '/login' })
        })
        .catch(function() {
          _this.$router.push({ path: '/login' })
        })
    },
    getUser() {
      loginService
        .login(null, null)
        .then(response => {
          if (response.status == 200) {
            var name = response.data.name
            name = response.data.principal.realName || name
            this.name = name
          } else {
            this.$message('登录名获取失败')
          }
        })
        .catch(function() {
          this.$message('登录名获取失败')
        })
    }
  }
}
</script>

<style scoped>
.logo {
  width: 64px;
  float: left;
  margin-right: 36px;
  margin-left: -26px;
}
.userbox {
  float: right;
  border: 0px solid royalblue;
}
</style>