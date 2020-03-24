<template>
  <div id="home">
    <navbar class="nav-bar">
      <div slot="centre">购物街</div>
    </navbar>
    <nav-control
      :conten="['流行','新款','热门']"
      @tableClick="tableClick"
      :navControlShow="activeNavControl "
      v-show="activeNavControl"
      ref="navControl1"
    ></nav-control>
    <scroll
      ref="warp"
      class="warp"
      :probe-type="3"
      @scroll="backShow"
      @pullingUp="pullingUp"
      :pull-up-load="true"
    >
      <swiper :banner="banner" @loadImg.once="loadImg"></swiper>
      <recom :recom="recommends"></recom>
      <the-flag></the-flag>
      <nav-control
        v-show="!activeNavControl"
        :conten="['流行','新款','热门']"
        @tableClick="tableClick"
        ref="NavControl"
      ></nav-control>
      <product :product="showCurrentType"></product>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBack"></back-top>
  </div>
</template>

<script>
//公共组件部分
import navbar from "@/components/common/navbar/NavBar";
import Swiper from "./childrenCom/chilSwiper";
import Scroll from "@/components/common/scroll/Scroll";

//本次项目相关组件
import Recom from "./childrenCom/Recom";
import TheFlag from "./childrenCom/TheFlag";
import NavControl from "@/components/conten/NavControl";
import Product from "@/components/conten/Product";
import BackTop from "@/components/conten/backtop/BackTop";

//导入的数据 方法
import { getHomeSwiper, getHomeProduct } from "@/network/home";
import { antiShake } from "@/components/common/stopShake/antiShake";

export default {
  name: "Home",
  components: {
    navbar,
    Swiper,
    Recom,
    TheFlag,
    NavControl,
    Product,
    Scroll,
    BackTop
  },
  computed: {
    showCurrentType() {
      return this.product[this.currentTableControl].list;
    }
    /*  vuex版本解决better-scroll滑动卡顿需要的属性!
    isImgRefrsh() {
      return this.$store.state.isScrollHeight;
    } */
  },
  data() {
    return {
      banner: [],
      recommends: [],
      product: {
        pop: {
          list: [],
          page: 0
        },
        new: {
          list: [],
          page: 0
        },
        sell: {
          list: [],
          page: 0
        }
      },
      currentTableControl: "pop",
      isShowBack: false,
      offsetTopNavControl: 0,
      activeNavControl: false,
      savaY: 0
    };
  },
  activated() {
    this.$refs.warp.refresh();
    this.$refs.warp.scrollTo(0, this.savaY, 0);
  },
  deactivated() {
    this.savaY = this.$refs.warp.getScroolY();
  },
  mounted() {
    //调用防抖函数
    let doRefrsh = antiShake(this.$refs.warp.refresh, 200);
    //监听事件总线里的方法
    this.$bus.$on("changeIsScroll", () => {
      //调用防抖函数，如果是向后台发送请求可以减轻服务器压力
      doRefrsh();
      //console.log(this.$refs.warp.scroll.scrollerHeight); 就是为了重新计算可拉动区域的高度就不会发生卡顿行为了
    });
  },
  created() {
    //请求数据部分 --轮播图数据
    this.getHomeSwiperRequeset();
    //请求数据部分 --商品列表
    this.getHomeProductRequest("pop");
    this.getHomeProductRequest("new");
    this.getHomeProductRequest("sell");
  },
  methods: {
    //请求轮播图内商品信息
    getHomeSwiperRequeset() {
      getHomeSwiper().then(res => {
        this.banner = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    //请求商品信息
    getHomeProductRequest(type) {
      const page = this.product[type].page + 1;
      getHomeProduct(type, page).then(res => {
        this.product[type].list.push(...res.data.list);
      });
    },
    //事件监听相关的方法
    tableClick(index) {
      //判断nav-control栏用户选择的是哪一项
      let arr = ["pop", "new", "sell"];
      switch (index) {
        case 0:
          this.currentTableControl = "pop";
          break;
        case 1:
          this.currentTableControl = "new";
          break;
        case 2:
          this.currentTableControl = "sell";
          break;
      }
      this.$refs.navControl1.currentIndex = index;
      this.$refs.NavControl.currentIndex = index;
    },
    backClick() {
      this.$refs.warp.scrollTo(0, 0);
    },
    backShow(p) {
      //返回顶部的按钮是否显示的判断
      if (-p.y > 1000) {
        this.isShowBack = true;
      } else {
        this.isShowBack = false;
      }

      //nav控制条的定位格式
      if (-p.y > this.offsetTopNavControl) {
        this.activeNavControl = true;
      } else {
        this.activeNavControl = false;
      }
    },
    pullingUp() {
      //上拉加载更多数据
      this.getHomeProductRequest(this.currentTableControl);
    },
    loadImg() {
      this.offsetTopNavControl = this.$refs.NavControl.$el.offsetTop;
    }
  }
  /*  //监听 --vuex版本处理better-scroll滑动卡顿
  watch: {
    isImgRefrsh(newValue, oldValue) {
      this.$refs.warp.refresh();
      console.log(5);
    }
  } */
};
</script>

<style scope>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.nav-bar {
  width: 100%;
  background: pink;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
}
.warp {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0px;
  right: 0px;
}
</style>
