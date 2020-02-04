<template>
  <div class="root" @mousemove="move">
    <draggable
      :data="'希望drop组件接收到的数据'"
      @dragstart="onSourceDragStart"
      @dragsend="onSourceDragEnd"
    >
      <div class="drag-content">拖动我</div>
    </draggable>

    <droppable
      class="drop-box"
      @dragstart="onDragStart"
      @dragend="onDragEnd"
      @drop="onDrop"
      @dragenter="onDragEnter"
      @dragover="onDragOver"
      @dragleave="onDragLeave"
    >
      <div style='border:1px solid gray;position:relative'>
        被拖动的东西可以在这里放下
        <div :style="itemStyle">item</div>
      </div>
    </droppable>
  </div>
</template>

<script>
import Draggable from "@/components/draggable"; // form后面的地址根据实际情况而定
import Droppable from "@/components/droppable"; // form后面的地址根据实际情况而定
export default {
  components: {
    Draggable,
    Droppable
  },
  data() {
    return {
      itemStyle: {
        color: 'red',
        width:'120px',
        height:'50px',
        border:'1px solid blue',
        position:'absolute',
        top:'0px',
        left:'0px'
      }
    };
  },
  methods: {
    // 当鼠标移动时触发
    move(e) {
      console.log("touchmove");
      console.log(e);
      console.log(e.x);
      console.log(e.y);
    },
    onSourceDragStart(params) {
      console.log("被拖动元素监听到拖动开始");
    },
    onSourceDragEnd(params) {
      console.log("被拖动元素监听到拖动结束");
    },
    onDragStart(params) {
      console.log("监听到拖动开始");
    },
    onDragEnd(params) {
      console.log("监听到拖动结束");
      console.log(window.event);
      this.itemStyle.top = window.event.x + 'px'
    },
    onDrop(params, evt) {
      console.log("监听到被拖动元素放下");
      console.log(params);
    },
    onDragEnter(params) {
      console.log("监听到被拖动元素进入当前范围");
    },
    onDragOver(params) {
      // console.log('监听到被拖动元素在上方移动, 这个调用调多次就不打印了')
    },
    onDragLeave(params) {
      console.log("监听到被拖动元素离开当前范围");
    }
  }
};
</script>

<style>
.drop-box {
  width: 400px;
  height: 400px;
  border: 1px solid blue;
}
.drag-content {
  border: 1px solid red;
  width: 100px;
  height: 100px;
}
</style>
