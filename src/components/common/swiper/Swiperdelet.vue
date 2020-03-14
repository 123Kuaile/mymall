/**
 错误代码
 */
<template>
  <div id="hy-swiper">
    <div class="swiper">
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount>1">
        <div
          v-for="(item, index) in slideCount"
          class="indi-item"
          :class="{active: index === currentIndex-1}"
          :key="index"
        ></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    interval: {
      //几秒播放下一张由使用者传递不传默认3秒
      type: Number,
      default: 3000
    },
    animDuration: {
      //这个是用户传递的trans
      type: Number,
      default: 300
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data: function() {
    return {
      slideCount: 0, // 用来保存元素个数
      totalWidth: 0, // 用来保存swiper的宽度
      swiperStyle: {}, // 用来保存swiper样式
      currentIndex: 1, // 当前的index
      scrolling: false // 是否正在滚动
    };
  },
  mounted: function() {
    // 1.操作DOM, 在前后添加Slide
    setTimeout(() => {
      this.initEls();
      // 2.开启定时器
      this.starTime();
    }, 2000);
  },
  methods: {
    //初始化元素列表
    initEls() {
      let SwpEl = document.querySelector(".swiper");
      let SldEls = SwpEl.children;
      //把获取到的元素个数赋值给变量
      this.slideCount = SldEls.length;
      if (this.slideCount > 1) {
        //只有图片个数大于1时才要生成前后的图片形成无缝滚动
        let cloneFir = SldEls[0].cloneNode(true);
        let cloneLast = SldEls[this.slideCount - 1].cloneNode(true);
        SwpEl.insertBefore(cloneLast, SldEls[0]);
        SwpEl.appendChild(cloneFir);
        this.totalWidth = SwpEl.style.width;
        this.swiperStyle = SwpEl.style;
        console.log(this.swiperStyle);
        this.totalWidth = SwpEl.offsetWidth;
      }
      //由于添加了前后的图片克隆了。如果不设置translate就会显示克隆的那张
      this.setTransform(-this.totalWidth);
    },
    setTransform(position) {
      //设置移动的样式
      this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
      this.swiperStyle[
        "-webkit-transform"
      ] = `translate3d(${position}px), 0, 0`;
      this.swiperStyle["-ms-transform"] = `translate3d(${position}px), 0, 0`;
    },
    //开启定时器
    starTime() {
      this.playTime = window.setInterval(() => {
        this.nextPict();
      }, 2000);
    },
    //下一张
    nextPict() {
      this.currentIndex++;
      this.swiperStyle.transition = "transform" + this.animDuration + "ms";
      this.setTransform(-this.currentIndex * this.totalWidth);
    }
  }
};
</script>

<style scoped>
#hy-swiper {
  overflow: hidden;
  position: relative;
}
.swiper {
  display: flex;
}
.indicator {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 8px;
}
.indi-item {
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #fff;
  line-height: 8px;
  text-align: center;
  font-size: 12px;
  margin: 0 5px;
}
.indi-item.active {
  background-color: rgba(212, 62, 46, 1);
}
</style>