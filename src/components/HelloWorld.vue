<template>
  <div>
    <div style="float:left;text-align:left">
      <h2>画布设置：</h2>
      <br />
      宽度：<input type="number" v-model.lazy="config.w" /> <br />
      高度：<input type="number" v-model.lazy="config.h" /> <br />
      自适应：<input type="checkbox" v-model="config.fit" />
      <br />
      <br />
      <button @click="preview()">预览</button>
      <br />
      <button @click="setModel('edit')">测试-编辑状态</button>
      <br />
      <button @click="setModel('readonly')">
        测试-只读状态（模型展示使用）
      </button>
      <br>
      问题：不能看见全局的效果，需要缩放。
    </div>

    <div
      style="margin-left:200px;border:0px solid black;padding:20px;text-align:left"
    >
      <button @click="add">新增元素</button>
      当前元素： X：<input type="number" v-model="currentItem.x" />
      <div style="margin-bottom:20px"></div>
      <div class="container">
        <div :style="style">
          <vdr
            v-for="(item, index) in items"
            :key="index"
            :w="item.w"
            :h="item.h"
            :x="item.x"
            :y="item.y"
            :parent="false"
            :grid="[5, 5]"
            :snap="true"
            :snap-tolerance="4"
            @activated="onActivated(item)"
            v-on:dragging="onDrag"
            v-on:resizing="onResize"
            :draggable="modelName == 'edit'"
            :resizable="modelName == 'edit'"
            @refLineParams="getRefLineParams"
          >
            <p>
              {{ index }} - {{ item.active }}<br />
              X: {{ item.x }} / Y: {{ item.y }} - Width: {{ item.w }} / Height:
              {{ item.h }}
              <div style="position:relative;width:200px;height:300px">
                <EchartDemo/>
              </div>
            </p>
          </vdr>
          <span
            class="ref-line v-line"
            v-for="(item, index) in vLine"
            :key="index + 12"
            v-show="item.display"
            :style="{
              left: item.position,
              top: item.origin,
              height: item.lineLength
            }"
          />
          <span
            class="ref-line h-line"
            v-for="(item, index) in hLine"
            :key="index + 12"
            v-show="item.display"
            :style="{
              top: item.position,
              left: item.origin,
              width: item.lineLength
            }"
          />
        </div>
      </div>
      <div>
        数据：
        {{ items }}
      </div>
    </div>
  </div>
</template>

<script>
// 参考 https://github.com/gorkys/vue-draggable-resizable-gorkys
// https://tingtas.com/vue-draggable-resizable-gorkys/?path=/story/%E5%9F%BA%E6%9C%AC--%E5%9F%BA%E6%9C%AC%E7%BB%84%E4%BB%B6
import vdr from "vue-draggable-resizable-gorkys";
import "vue-draggable-resizable-gorkys/dist/VueDraggableResizable.css";

import EchartDemo from '@/views/Echart/Demo01.vue'

export default {
  components: { vdr, EchartDemo },
  data: function() {
    return {
      config: { fit: true, w: 500, h: 500 },
      modelName: "edit",
      vLine: [],
      hLine: [],
      currentItem: { x: 0 },
      items: [
        { w: 260, h: 320, x: 0, y: 0 },
        { w: 240, h: 120, x: 260, y: 0 }
      ]
    };
  },
  computed: {
    style() {
      return {
        height: this.config.h + "px",
        width: this.config.w + "px",
        border: "1px solid red",
        position: "relative",
        margin: "50px"
      };
    }
  },
  methods: {
    onResize: function(x, y, width, height) {
      this.currentItem.x = x;
      this.currentItem.y = y;
      this.currentItem.w = width;
      this.currentItem.h = height;
    },
    onDrag: function(x, y) {
      this.currentItem.x = x;
      this.currentItem.y = y;
    },
    onActivated(item) {
      this.currentItem = item;
    },
    getRefLineParams(params) {
      const { vLine, hLine } = params;
      this.vLine = vLine;
      this.hLine = hLine;
    },
    setModel(modelName) {
      this.modelName = modelName;
    },
    add() {
      this.items.push({
        w: 100,
        h: 100,
        x: 120,
        y: 10,
        active: true
      });
    },
    preview() {
      var json = {
        items: this.items,
        config: this.config
      };
      // this.$router.push({
      //   path: "/showtest",
      //   query: {
      //     json: JSON.stringify(json)
      //   }
      // });
      window.open("/showtest?json=" + JSON.stringify(json));
    }
  }
};
</script>
<style>
.handle {
  border-radius: 10px;
}
button {
  margin-bottom: 10px;
}
.container {
  border: 1px solid black;
  overflow-x: scroll;
}
</style>
