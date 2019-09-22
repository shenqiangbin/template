<template>
  <div>
    <a-row>
      <a-col :span="8" :offset="8" style="margin-top:50px">
        <a-form :form="form" @submit="handleSubmit" style="border:0px solid red">
          <a-form-item label="旧密码" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
            <a-input
              type="password"
              v-decorator="[
                            'oldPwd',
                            {rules: [{ required: true, message: '请输入旧密码!' }]}
                          ]"
            />
          </a-form-item>
          <a-form-item label="密码" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
            <a-input
              type="password"
              v-decorator="[
                          'newPwd',
                          {rules: [{ required: true, message: '请输入新密码!' }]}
                        ]"
            />
          </a-form-item>
          <a-form-item label="确认密码" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
            <a-input
              type="password"
              v-decorator="[
                'configrmPwd',
                {rules: [{ required: true, message: '请输入确认密码!' }, { validator: compareToFirstPassword,}]}
              ]"
            />
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 8, offset: 4 }">
            <a-button type="primary" html-type="submit">确定</a-button>
          </a-form-item>
        </a-form>
      </a-col>
    </a-row>
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
  name: 'changepwd',
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this)
    }
  },
  created() {},
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      //必须有 validateFields 前端才会验证
      this.form.validateFields((err, values) => {
        if (!err) {
          // eslint-disable-next-line
          console.log('Received values of form: ', values)
        }
      })
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form
      if (value && value !== form.getFieldValue('newPwd')) {
        callback('两次密码输入的不一致')
      } else {
        callback()
      }
    }
  }
}
</script>

<style scoped>
</style>
