<template>
  <div>登录页面</div>
</template>

<script>
import db from '../sql'

export default {
  name: 'login',
  components: {},
  created() {
    this.dbTest()
  },
  methods: {
    dbTest() {
      db.serialize(function () {
        db.run('CREATE TABLE lorem (info TEXT)')
        var stmt = db.prepare('INSERT INTO lorem VALUES (?)')
        for (var i = 0; i < 10; i++) {
          stmt.run('Ipsum ' + i)
        }
        stmt.finalize()

        db.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
          console.log(row.id + ': ' + row.info)
        })
      })
    },
  },
}
</script>
