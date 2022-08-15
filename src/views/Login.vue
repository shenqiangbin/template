<template>
  <div>登录页面</div>
</template>

<script>
// import db from '../sql'

export default {
  name: 'login',
  components: {},
  created() {
    this.dbTest()
  },
  methods: {
    dbTest() {
      alert('ok')
    },
  },
}
</script>
