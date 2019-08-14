<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    

    <a-locale-provider :locale="locale">
      <App />
      <a-button type="primary">Button></a-button>
    </a-locale-provider>

  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'ant-design-vue'
import zhCN from 'ant-design-vue/lib/locale-provider/en_GB'

Vue.use(Button)

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      local:zhCN
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
