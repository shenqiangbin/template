<template>
  <div class="home">
    <a-dropdown :trigger="['click']">
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item key="1">
          <a-icon type="user" />1st menu item
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="user" />2nd menu item
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="user" />3rd item
        </a-menu-item>
      </a-menu>
      <a class="ant-dropdown-link" href="#">
        管理员
        <a-icon type="down" />
      </a>
    </a-dropdown>
  </div>
</template>

<script>
import Vue from "vue";
import { Layout, Collapse, Menu, Icon, Dropdown } from "ant-design-vue";

Vue.use(Layout);
Vue.use(Collapse);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Dropdown);

export default {
  name: "BreadcrumbDemo",
  components: {},
  data() {
    return {
      collapsed: false
    };
  },
  methods: {
    handleMenuClick(e) {
      // eslint-disable-next-line
      console.log(e);
    }
  }
};
</script>

<style scoped>
</style>
