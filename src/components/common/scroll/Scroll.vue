<template>
  <div class="warp" ref="warp">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      }
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.warp, {
      probeType: this.probeType,
      click: true, //一定要加这个属性，否则内部的元素无法触发原生的点击事件，除botton外
      pullUpLoad: this.pullUpLoad
    });
    this.scroll.on("scroll", p => {
      //better-scroll滚动事件监听
      this.$emit("scroll", p);
    });
    this.scroll.on("pullingUp", () => {
      //better-scroll上拉事件监听
      this.$emit("pullingUp");
      this.finishPullUp();
    });
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      //这个方法为了上拉回调完成一次后必须调用这个方法不然没法进行下次上拉回调
      this.scroll.finishPullUp();
    },
    refresh() {
      //重新计算可拉动区域的高度
      this.scroll.refresh();
    },
    getScroolY() {
      return this.scroll.y;
    }
  }
};
</script>

<style scope>
</style>