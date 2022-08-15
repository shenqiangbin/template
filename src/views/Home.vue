<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import sqlite3 from 'sqlite3'

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  created() {
    alert('ok')
    const sqlite =
      process.env.NODE_ENV === 'development' ? sqlite3.verbose() : sqlite3
    const db_path = 'store'
    const callback = {}
    const db = new sqlite.Database(db_path, callback)
    console.log(db)
  },
  methods: {},
}
</script>
