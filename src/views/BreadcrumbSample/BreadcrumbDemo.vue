<template>
  <div class="home">
    <a-breadcrumb>
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item><a href="/user">User</a></a-breadcrumb-item>
      <a-breadcrumb-item>User List</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>
import Vue from "vue";
import { Layout, Collapse, Menu, Icon, Breadcrumb } from "ant-design-vue";

Vue.use(Layout);
Vue.use(Collapse);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Breadcrumb);

export default {
  name: "BreadcrumbDemo",
  components: {},
  data() {
    return {
      collapsed: false
    };
  }
};
</script>

<style scoped>
</style>
