<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="addData">add</button>
    <button @click="addDataBulk">addDataBulk</button>
    <button @click="fetchData">fetchData</button>
    <button @click="update">update</button>
    <button @click="updateBulk">updateBulk</button>
    <button @click="importFile">importFile</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import db from '@/db.js'

import fs from 'fs'
import path from 'path'
import { remote } from 'electron'
import xlsx from 'node-xlsx'

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  created() {},
  methods: {
    addData() {
      alert('addData')

      //写入一些数据
      db.t_user.put({ id: 2, name: '小明2', age: 18 })
    },
    async addDataBulk() {
      await db.t_user.bulkAdd([
        { name: 'Foo', age: 31 },
        { name: 'Bar', age: 32 },
      ])
    },
    update() {
      db.t_user.update(2, { name: '小明22', age: 18 })
    },
    async updateBulk() {
      await db.t_user.bulkPut([
        { id: 3, name: 'Foo2', age: 34 },
        { id: 4, name: 'Bar2', age: 44 },
      ])
    },
    async fetchData() {
      const arr = await db.t_user.toArray()
      console.log(arr)
    },
    importFile() {
      console.log(remote)
      remote.dialog
        .showOpenDialog({
          properties: ['openFile'],
          buttonLabel: '开启新世界大门!',

          filters: [
            { name: 'Excel files', extensions: ['.xls', '.xlsx'] },
            { name: 'All Files', extensions: ['*'] },
          ],
        })
        .then(async (result) => {
          if (!result.canceled) {
            const title = path.parse(result.filePaths[0]).name
            const content = fs.readFileSync(result.filePaths[0]).toString()
            const fileData = xlsx.parse(result.filePaths[0])
            console.log(fileData[0].data)
          }
        })
        .catch((err) => {
          console.error(err)
        })
    },
  },
}
</script>
