<template>
  <scroll class="warrp">
    <div class="left-nav">
      <div
        :class="{active: index === currentIndex}"
        v-for="(item,index) in leftData"
        :key="index"
        @click="leftClick(index)"
      >{{item.title}}</div>
    </div>
  </scroll>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";

export default {
  name: "LeftNav",
  props: {
    leftData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isActive: true, //判断active类的flag
      currentIndex: 0 //当前索引
    };
  },
  methods: {
    //事件监听处理
    leftClick(index) {
      this.currentIndex = index;
      this.$emit("leftNavClick", this.leftData[index].maitKey);
    }
  },
  components: {
    Scroll
  }
};
</script>
<style scoped>
.left-nav {
  display: flex;
  width: 130px;
  flex-wrap: wrap;
  overflow: hidden;
  background: #f6f6f6;
}
.left-nav > div {
  width: 100%;
  padding: 15px 6px;
  color: #000;
  font-weight: 500;
  text-align: center;
}
.left-nav > .active {
  border-left: 3px solid #f15e7b;
  color: #e9778e;
  font-weight: bold;
  background-color: #fff;
}
.warrp {
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
</style>