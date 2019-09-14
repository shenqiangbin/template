<template>
  <div class="home">
    <div>可以用到导航上面，固定导航始终在上面。</div>

    <a-affix>
      <div class="fixContent">This is content</div>
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
</style>
