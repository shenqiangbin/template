<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/userMgr">学生管理</router-link>|
      <router-link to="/about">关于</router-link>|
      <router-link to="/test">测试</router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
}
</script>

<style>
#nav a {
  font-size: 20px;
  margin: 0 10px;
}
</style>
