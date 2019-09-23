<template>
  <div>
    <a-layout>
      <!-- 左侧的导航为了左侧的灰度线延长的下面。只能高度100%，且使用绝对定位，而右侧内容只能 margin-left 一定距离 -->
      <a-layout-sider
        style="width:190px;height:calc(100% - 60px);position:absolute;border-right:1px solid #f0f2f5"
      >
        <a-menu
          mode="inline"
          :style="{ height: '100%', borderRight: 0 }"
          v-model="currentMenu"
          @click="menuClick"
        >
          <a-menu-item v-for="item in menus" :key="item.url">{{item.name}}</a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-content
          style="margin-left:200px;min-height:580px;padding:24px;background-color:white;"
        >
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>       

<script>
import Vue from 'vue'
import {
  message,
  Input,
  Button,
  Icon,
  Form,
  Select,
  Col,
  Row
} from 'ant-design-vue'

Vue.prototype.$message = message
Vue.use(Input)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Form)
Vue.use(Select)
Vue.use(Col)
Vue.use(Row)

export default {
  name: 'sysmgr',
  data() {
    return {
      currentMenu: '/sysmgr/usermgr',
      menus: [
        { name: '用户管理', url: '/sysmgr/usermgr' },
        { name: '角色管理', url: '/sysmgr/rolemgr' },
        { name: '菜单管理', url: '/sysmgr/menumgr' }
      ]
    }
  },
  created() {},
  methods: {
    menuClick(e) {
      this.$router.push(e.key)
    }
  }
}
</script>

<style scoped>
</style>
