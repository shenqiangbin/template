<template>
  <div class="about">
    <h1>This is user Mgr page</h1>
    <div style="width: 70%; margin: 0 auto">
      <a-table
        :columns="columns"
        :row-key="(record) => record.id"
        :dataSource="tableData"
        :pagination="pagination"
        :loading="loading"
        @change="handleTableChange"
      >
        <template slot="stuClass" slot-scope="stuClass">{{
          stuClass
        }}</template>
        <template slot="name" slot-scope="name">{{ name }}</template>
        <template slot="age" slot-scope="age">{{ age }}</template>
      </a-table>
    </div>
  </div>
</template>

<script>
import {
  message,
  Input,
  Button,
  Icon,
  Form,
  Select,
  Col,
  Row,
  Table,
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

import Vue from 'vue'
import userService from '@/api/UserService.js'

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    sorter: true,
    //width: '20%',
  },
  {
    title: '班级',
    dataIndex: 'stuClass',
    sorter: true,
    //width: '20%',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    sorter: true,
    //width: '20%',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    sorter: true,

    //width: '20%',
  },
]

export default {
  data() {
    return {
      tableData: [],
      pagination: {
        pageSize: 2,
        current: 1,
        total: 0,
      },
      loading: false,
      columns: columns,
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      let query = {}
      query.pageSize = this.pagination.pageSize
      query.pageIndex = this.pagination.current

      const userResult = userService.getUserList(query)

      var _this = this
      _this.loading = true
      _this.loading = false
      _this.tableData = userResult.list
      _this.pagination.total = userResult.count
    },
    handleTableChange(pagination, filters, sorter) {
      console.log('change')
      let query = {}
      query.pageSize = pagination.pageSize
      query.pageIndex = pagination.current
      query.sortField = sorter.field
      query.sort = sorter.order

      const userResult = userService.getUserList(query)

      var _this = this
      _this.loading = true
      _this.loading = false
      _this.tableData = userResult.list
      _this.pagination.total = userResult.count
      _this.pagination.current = query.pageIndex
    },
  },
}
</script>

<style>
body {
  /* background-color: gray; */
}
</style>
