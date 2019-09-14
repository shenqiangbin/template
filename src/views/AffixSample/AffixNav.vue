<template>
  <div class="home">
    <a-affix>
      <div class="fixContent">
        <h2>首页</h2>
        <h2>新闻</h2>
        <h2>视频</h2>
      </div>
    </a-affix>
    <div>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
      <h2>This is title</h2>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Layout, Collapse, Menu, Icon, Affix } from "ant-design-vue";

Vue.use(Layout);
Vue.use(Collapse);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Affix);

export default {
  name: "AffixDemo",
  components: {},
  data() {
    return {
      collapsed: false
    };
  }
};
</script>

<style scoped>
.fixContent {
  background-color: red;
}
.fixContent h2{
  display: inline-block;
  margin:10px 20px;
}
</style>
