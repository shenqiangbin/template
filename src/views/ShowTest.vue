<template>
  <div :style="boxStyle">
    <vdr
      v-for="(item, index) in items"
      :key="index"
      :w="item.w"
      :h="item.h"
      :x="item.x"
      :y="item.y"
      :parent="true"
      :grid="[5, 5]"
      :snap="true"
      :snap-tolerance="4"
      :draggable="false"
      :resizable="false"
    >
      <p>
        {{ index }} - {{ item.active }}<br />
        X: {{ item.x }} / Y: {{ item.y }} - Width: {{ item.w }} / Height:
        {{ item.h }}
      </p>
    </vdr>
  </div>
</template>

<script>
import vdr from "vue-draggable-resizable-gorkys";
import "vue-draggable-resizable-gorkys/dist/VueDraggableResizable.css";

export default {
  name: "show",
  components: { vdr },
  data: function() {
    return {
      boxStyle: null,
      items: null
    };
  },
  methods: {},
  mounted: function() {
    var itemsData = [
      {
        w: 100,
        h: 100,
        x: 0,
        y: 0
      },
      {
        w: 100,
        h: 100,
        x: 100,
        y: 0
      },
      {
        w: 100,
        h: 100,
        x: 200,
        y: 0
      },
      {
        w: 100,
        h: 100,
        x: 300,
        y: 0
      },
      {
        w: 100,
        h: 100,
        x: 400,
        y: 0
      },

      {
        w: 100,
        h: 100,
        x: 0,
        y: 100
      },
      {
        w: 100,
        h: 100,
        x: 0,
        y: 200
      },
      {
        w: 100,
        h: 100,
        x: 0,
        y: 300
      },
      {
        w: 100,
        h: 100,
        x: 0,
        y: 400
      }
    ];
    var config = { fit: true, w: 500, h: 500 };

    // 通过 参数 重新赋值
    console.log(this.$route.query.json)
    var json = this.$route.query.json;
    var jsonData = JSON.parse(json)
    itemsData = jsonData.items;
    config = jsonData.config;

    if (!config.fit) {
      console.log("如果不自适应");
      this.boxStyle = {
        height: config.h + "px",
        width: config.w + "px",
        border: "0px solid red",
        position: "relative"
      };
      this.items = itemsData;
    } else {
      console.log("如果自适应");

      let availHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      let availWidth =
        document.documentElement.clientWidth || document.body.clientHeight;

      this.boxStyle = {
        height: availHeight + "px",
        width: availWidth + "px",
        border: "0px solid red",
        position: "relative"
      };

      this.$nextTick(function() {
        //垂直自适应
        // DOM 现在更新了

        let height = config.h;
        let width = config.w;

        itemsData.forEach(item => {
          item.w = (availWidth * item.w) / width;
          item.x = (availWidth * item.x) / width;
        });

        itemsData.forEach(item => {
          item.h = (availHeight * item.h) / height;
          item.y = (availHeight * item.y) / height;
        });

        this.items = itemsData;
      });
    }
  }
};
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
}
</style>
