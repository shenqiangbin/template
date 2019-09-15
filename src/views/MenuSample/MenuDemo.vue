<template>
  <div class="home">
    Menu demo
    <div>
      Menu 菜单
      <h2>元素</h2>涉及到的元素其实就是 a-menu 和 a-menu-item  a-menu-item-group a-sub-menu
      a-menu-item 里面其实就是 HTML
      可以放 a 标签
      <h2>设定显示指定的标签页</h2>v-model 就可以指定要显示的 key（显示tab的key）
    </div>

    <a-menu mode="horizontal" v-model="current" theme="dark" @click="menuClick">
      <a-menu-item key="nav1">nav 1</a-menu-item>
      <a-menu-item key="nav2">nav 2</a-menu-item>
      <a-menu-item key="nav3">nav 3</a-menu-item>
      <a-menu-item key="nav4">
        <a
          href="https://ant.design"
          target="_blank"
          rel="noopener noreferrer"
        >Navigation Four - Link</a>
      </a-menu-item>
      <a-sub-menu>
        <span slot="title">Navigation Three - Submenu</span>
        <a-menu-item key="setting:1">Option 1</a-menu-item>
        <a-menu-item key="setting:2">Option 2</a-menu-item>
      </a-sub-menu>
    </a-menu>

    <a-menu mode="horizontal" v-model="current" @click="menuClick">
      <a-menu-item key="nav1">nav 1</a-menu-item>
      <a-menu-item key="nav2">nav 2</a-menu-item>
      <a-menu-item key="nav3">nav 3</a-menu-item>
      <a-menu-item key="nav4">
        <a
          href="https://ant.design"
          target="_blank"
          rel="noopener noreferrer"
        >Navigation Four - Link</a>
      </a-menu-item>
    </a-menu>

    <a-menu mode="inline" v-model="current" @click="menuClick" style='width:200px;'>
      <a-menu-item key="nav1">nav 1</a-menu-item>
      <a-menu-item key="nav2">nav 2</a-menu-item>
      <a-menu-item key="nav3">nav 3</a-menu-item>
      <a-menu-item key="nav4">
        <a
          href="https://ant.design"
          target="_blank"
          rel="noopener noreferrer"
        >Navigation Four - Link</a>
      </a-menu-item>
      <a-sub-menu>
        <span slot="title">Navigation Three - Submenu</span>
        <a-menu-item key="setting:1">Option 1</a-menu-item>
        <a-menu-item key="setting:2">Option 2</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import Vue from "vue";
import { Layout, Collapse, Menu } from "ant-design-vue";

Vue.use(Layout);
Vue.use(Collapse);
Vue.use(Menu);

export default {
  name: "BreadcrumbDemo",
  components: {},
  data() {
    return {
      current: ["nav2"]
    };
  },
  methods: {
    menuClick(e) {
      // eslint-disable-next-line
      console.log(e);
    }
  }
};
</script>

<style scoped>
</style>
