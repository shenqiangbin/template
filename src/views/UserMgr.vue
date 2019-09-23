<template>
  <div>用户管理</div>
</template>       

<script>
import Vue from 'vue'
import userService from '@/api/userService'
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
