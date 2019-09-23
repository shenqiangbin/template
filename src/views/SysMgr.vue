<template>
  <div>系统管理</div>
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
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style scoped>
</style>
