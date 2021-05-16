<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <uploader 
          :options="options" 
          :file-status-text="statusText" 
          class="uploader-example" 
          ref="uploader"
          @file-complete="fileComplete" 
          @complete="complete">
          <uploader-unsupport></uploader-unsupport>
          <uploader-drop>
            <!-- <p>Drop files here to upload or</p> -->
            <uploader-btn>选择压缩包</uploader-btn>
            <!-- <uploader-btn :attrs="attrs">select images</uploader-btn> -->
            <!-- <uploader-btn :directory="true">select folder</uploader-btn> -->
          </uploader-drop>
          <uploader-list>
            <div class="file-panel" slot-scope="props">
                    <ul class="file-list">
                        <li v-for="file in props.fileList" :key="file.id">
                            <uploader-file :class="'file_' + file.id" ref="files" :file="file" :list="true"></uploader-file>
                        </li>
                        <div class="no-file" v-if="!props.fileList.length"><i class="iconfont icon-empty-file"></i> 暂无待上传文件</div>
                    </ul>
                </div>
          </uploader-list>
    </uploader>

  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import uploader from 'vue-simple-uploader'
import axios from 'axios'
import qs from 'qs'
import { getCookie } from '@/api/token'
import $ from 'jquery'

Vue.use(uploader)

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
      return {
        options: {
          target: '/api/uploader/chunk',
          testChunks: true,
          simultaneousUploads: 1,
          chunkSize: 10 * 1024 * 1024,
          withCredentials: true,
          headers:{
            'X-XSRF-TOKEN': getCookie('XSRF-TOKEN')
          }
        },
        attrs: {
          accept: 'image/*'
        },
        statusText: {
          success: '成功了',
          error: '出错了',
          uploading: '上传中',
          paused: '暂停中',
          waiting: '等待中'
        }
      }
    },
    methods:{
      complete() {        
        console.log('complete', arguments)
      },
      // 一个根文件（文件夹）成功上传完成。
      fileComplete(rootFile) {
        console.log('file complete', arguments)

        const file = arguments[0].file;      
        let uploader = this.$refs.uploader.uploader;
        this.statusSet(rootFile.id, 'merging');
        var _this = this;
        axios.post('/api/uploader/mergeFile', qs.stringify({
          filename: file.name,
          identifier: arguments[0].uniqueIdentifier,
          totalSize: file.size,
          type: file.type
        })).then(function (response) {
          if(response.data.code == 200){
            _this.statusRemove(rootFile.id);
          }else{
            _this.setStatusText(rootFile.id,"报错了....")
          }          
          console.log(response);
        }).catch(function (error) {
          console.log(error);          
        });
      },
      /**
       * 新增的自定义的状态: 'md5'、'transcoding'、'failed'
       * @param id
       * @param status
       */
      statusSet(id, status) {
          let statusMap = {
              md5: {
                  text: '校验MD5',
                  bgc: '#fff'
              },
              merging: {
                  text: '合并中',
                  bgc: '#e2eeff'
              },
              transcoding: {
                  text: '转码中',
                  bgc: '#e2eeff'
              },
              failed: {
                  text: '上传失败',
                  bgc: '#e2eeff'
              }
          }
          this.$nextTick(() => {
              $('<p class="myStatus_' + id + '"></p>').appendTo('.file_' + id + ' .uploader-file-status').css({
                  'position': 'absolute',
                  'top': '0',
                  'left': '0',
                  'right': '0',
                  'bottom': '0',
                  'zIndex': '1',
                  'backgroundColor': statusMap[status].bgc
              }).text(statusMap[status].text);
          })
      },
      statusRemove(id) {
          this.$nextTick(() => {
              $('.myStatus_' + id).remove();
          })
      },
      setStatusText(id,content){
          this.$nextTick(() => {
              $(`.myStatus_${id}`).text(content);
          })
      }
    }
}
</script>
