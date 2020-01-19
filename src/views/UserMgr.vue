<template>
  <div>
    用户管理
    <a-table
      :columns="columns"
      :rowKey="record => record.login.uuid"
      :dataSource="data"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
    >
      <template slot="name" slot-scope="name">{{name.first}} {{name.last}}</template>
    </a-table>
  </div>
</template>       

<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' }
    ],
    width: '20%'
  },
  {
    title: 'Email',
    dataIndex: 'email'
  }
]

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
  Row,
  Table
} from 'ant-design-vue'

Vue.prototype.$message = message
Vue.use(Input)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Form)
Vue.use(Select)
Vue.use(Col)
Vue.use(Row)
Vue.use(Table)

export default {
  name: 'sysmgr',
  mounted() {
    this.fetch()
  },
  data() {
    return {
      currentMenu: '/sysmgr/usermgr',
      menus: [
        { name: '用户管理', url: '/sysmgr/usermgr' },
        { name: '角色管理', url: '/sysmgr/rolemgr' },
        { name: '菜单管理', url: '/sysmgr/menumgr' }
      ],
      data: [],
      pagination: {},
      loading: false,
      columns: columns
    }
  },
  created() {},
  methods: {
    menuClick(e) {
      this.$router.push(e.key)
    },
    fetch(params = {}) {
      var _this = this
      console.log('params:', params)
      this.loading = true

      userService
        .getUserFake()
        .then(response => {
          console.log(response)

          const pagination = { ..._this.pagination }
          // Read total count from server
          // pagination.total = data.totalCount;
          pagination.total = 200
          _this.loading = false
          _this.data = response.data.results
          _this.pagination = pagination
        })
        .catch(() => {
          _this.$message.error('用户信息获取失败')
        })
    },
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination)
      const pager = { ...this.pagination }
      pager.current = pagination.current
      this.pagination = pager
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters
      })
    }
  }
}
</script>

<style scoped>
</style>
