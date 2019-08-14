<template>
  <div class="home">
    
    <a-row>
      <a-col :span="12" class='one'>col-12</a-col>
      <a-col :span="12" class='two'>col-12</a-col>
    </a-row>

    <a-row>
      <a-col :span="8">col-8</a-col>
      <a-col :span="8">col-8</a-col>
      <a-col :span="8">col-8</a-col>
    </a-row>
    <a-row>
      <a-col :span="6">col-6</a-col>
      <a-col :span="6">col-6</a-col>
      <a-col :span="6">col-6</a-col>
      <a-col :span="6">col-6</a-col>
    </a-row>

    <h2> flex 模式下可以调整 水平对齐 和 垂直对齐 方式 </h2>

    <a-row type="flex" justify="center" align="middle" style='background-color:gray;height:300px;'>
      <a-col :span="24">这里是内容</a-col>
    </a-row>

    <h2></h2>

    <a-row type="flex" justify="space-around" align="middle" style='background-color:gray;height:300px;'>
      <a-col :span="4" style='background-color:red;'>这里是内容</a-col>
      <a-col :span="4" style='background-color:red;'>这里是内容</a-col>
      <a-col :span="4" style='background-color:red;'>这里是内容</a-col>
      <a-col :span="4" style='background-color:red;'>这里是内容</a-col>
    </a-row>

    <h2></h2>

    <a-row type="flex" justify="space-between" align="middle" style='background-color:gray;height:300px;'>
      <a-col :span="4" style='background-color:red;'>这里是内容</a-col>
      <a-col :span="4" style='background-color:red;'>这里是内容</a-col>
      <a-col :span="4" style='background-color:red;'>这里是内容</a-col>
      <a-col :span="4" style='background-color:red;'>这里是内容</a-col>
      <a-col :span="4" style='background-color:red;'>这里是内容</a-col>
    </a-row>

    <h2>间隔</h2>
    <div class="gutter-example">
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </a-col>
    </a-row>
  </div>

  <h2>向右偏移（可实现居中）</h2>
    <a-row>
      <a-col :span="12" :offset="6">col-12 col-offset-6</a-col>
    </a-row>

  </div>
</template>

<script>

import Vue from 'vue'
import { Col, Row } from 'ant-design-vue'

Vue.use(Col)
Vue.use(Row)

export default {
  name: 'buttonDemo',
  components: {
    
  }
}
</script>

<style scoped>

.one{
  background-color: blue;
  color:white;
}
.two{
  background-color: red;
  color:white;
}

.gutter-example >>> .ant-row > div {
  background: transparent;
  border: 0;
}
.gutter-box {
  background: #00A0E9;
  padding: 5px 0;
}
</style>
