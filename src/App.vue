<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/button-demo">Button 演示</router-link>
      <router-link to="/grid-demo">Grid 演示</router-link>
      <router-link to="/layout-demo">Layout 演示</router-link>
      <router-link to="/affix-demo">Affix 演示</router-link>
      <router-link to="/affix-nav">----Affix 导航</router-link>
      <router-link to="/breadcrumb-demo">Breadcrumb 面包屑</router-link>
      <router-link to="/menu-demo">Menu 导航菜单</router-link>
      <router-link to="/dropdown-demo">Dropdown 下拉菜单</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  text-align: left;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  display: block;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
