/* eslint-disable vue/require-v-for-key */ /* eslint-disable
vue/require-v-for-key */
<template>
  <div>
    <button @click="setModel('edit')">编辑状态</button>
    <button @click="setModel('readonly')">只读状态（模型展示使用）</button>
    <button @click="add">新增</button>
    当前元素： X：<input type="number" v-model="currentItem.x" />
    <div
      style="height: 500px; width: 100%; border: 1px solid red; position: relative;"
      :grid="[20, 20]"
    >
      <vdr
        v-for="(item, index) in items"
        :key="index"
        :w="item.width"
        :h="item.height"
        :x="item.x"
        :y="item.y"
        :parent="true"
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
          X: {{ item.x }} / Y: {{ item.y }} - Width: {{ item.width }} / Height:
          {{ item.height }}
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
    <div>数据：
      {{items}}
    </div>
  </div>
</template>

<script>
// 参考 https://github.com/gorkys/vue-draggable-resizable-gorkys
// https://tingtas.com/vue-draggable-resizable-gorkys/?path=/story/%E5%9F%BA%E6%9C%AC--%E5%9F%BA%E6%9C%AC%E7%BB%84%E4%BB%B6
import vdr from "vue-draggable-resizable-gorkys";
import "vue-draggable-resizable-gorkys/dist/VueDraggableResizable.css";
export default {
  components: { vdr },
  data: function() {
    return {
      modelName: "edit",
      vLine: [],
      hLine: [],
      currentItem: { x: 0 },
      items: [
        {
          width: 100,
          height: 100,
          x: 0,
          y: 0,
        },
        {
          width: 100,
          height: 100,
          x: 876,
          y: 10,
        }
      ]
    };
  },
  methods: {
    onResize: function(x, y, width, height) {
      this.currentItem.x = x;
      this.currentItem.y = y;
      this.currentItem.width = width;
      this.currentItem.height = height;
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
        width: 100,
        height: 100,
        x: 120,
        y: 10,
        active: true
      });
    }
  }
};
</script>
<style>
.handle {
  border-radius: 10px;
}
</style>
