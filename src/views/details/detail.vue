<template>
  <div class="detail">
    <detail-nav class="detail-top" ref="nav" @navClick="navClick"></detail-nav>
    <scroll class="detail-scroll" ref="scroll" :probeType="3" @scroll="scrollBetter">
      <div>{{$store.state.isShow}}</div>
      <swiper :banner="detailBanner"></swiper>
      <product-info :info="productInfo"></product-info>
      <restaurant-info :shop="restaurantData"></restaurant-info>
      <details-picture
        :imgSrc="detailsPicture"
        @pictLoad="imgLoad"
        ref="detailPict"
        @allImgLoad="allImgLoad"
      ></details-picture>
      <parameter-info :param-info="parameterInfo" ref="parameInfo"></parameter-info>
      <product :product="recommend" ref="recommend"></product>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBack"></back-top>
    <bottom-bar @addCart="addCart"></bottom-bar>
    <toast :info="tosatInfo" :show="isToast"></toast>
  </div>
</template>

<script>
//公共组件
import Scroll from "./childComponents/Scroll";
import Toast from "@/components/common/toast/Toast";
//页面相关组件
import DetailNav from "./childComponents/detailNavBar";
import Swiper from "./childComponents/childrenSwiper";
import ProductInfo from "./childComponents/ProductInfo";
import RestaurantInfo from "./childComponents/RestaurantInfo";
import DetailsPicture from "./childComponents/DetailsPicture";
import ParameterInfo from "./childComponents/ParameterInfo";
import Product from "@/components/conten/Product";
import BackTop from "@/components/conten/backtop/BackTop";
import BottomBar from "./childComponents/bottomBar";

import { antiShake } from "@/components/common/stopShake/antiShake";

import {
  getDetailData,
  CProductInfo,
  Restaurant,
  GoodsParam,
  getRecommend
} from "@/network/detail";

export default {
  name: "detail",
  data() {
    return {
      detailBanner: [], //存放轮播图数据
      productInfo: {}, //存放商品简介信息
      restaurantData: {}, //存放店家信息
      detailsPicture: [], //存放商品详情图片数据
      parameterInfo: {}, //存放商品参数信息
      pictInfo: 0, //存放详情图片的位置
      paramsHeight: 0, //存放参数的位置
      navFlag: true, //记录nav的节流阀开关
      recommend: [], //推荐部分的数据
      recommendNav: 0, //记录推荐部分的offsetTop
      stopShake: null, //防抖函数
      isShowBack: false, //backTop显示开关
      isToast: false, //弹窗的开关
      tosatInfo: "" //弹窗的文字
    };
  },
  components: {
    Scroll,
    Toast,
    DetailNav,
    Swiper,
    ProductInfo,
    RestaurantInfo,
    DetailsPicture,
    ParameterInfo,
    Product,
    BackTop,
    BottomBar
  },
  mounted() {
    let timer = antiShake(this.$refs.scroll.refresh, 300);
    this.$bus.$on("changeIsScroll", () => {
      timer();
    });
  },
  created() {
    getDetailData(this.$route.params.id).then(res => {
      console.log(res);
      this.detailBanner = res.result.itemInfo.topImages;
      //商品标题价格点赞快递之类的数据获取
      this.productInfo = new CProductInfo(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo
      );
      //获取商品参数信息
      this.parameterInfo = new GoodsParam(
        res.result.itemParams.info,
        res.result.itemParams.rule
      );
      //获取店家信息数据
      this.restaurantData = new Restaurant(res.result.shopInfo);

      //获取详情图片数据
      this.detailsPicture = this.detailBanner;
    });
    //获取推荐页的数据
    getRecommend().then(res => {
      this.recommend = res.data.list;
    });

    //注册防抖函数
    this.stopShake = antiShake(() => {
      this.$refs.scroll.refresh;
    }, 300);
  },
  methods: {
    imgLoad() {
      this.stopShake(); //计算高度
    },
    allImgLoad() {
      //当全部图片加载完进行计算这两个组件里面的元素和页面的offsetTop
      this.pictInfo = this.$refs.detailPict.$el.offsetTop;
      this.paramsHeight = this.$refs.parameInfo.$el.offsetTop;
      this.recommendNav = this.$refs.recommend.$el.offsetTop;
    },
    scrollBetter(position) {
      this.backShow(position);
      if (this.navFlag) {
        if (-position.y >= this.pictInfo && -position.y < this.paramsHeight) {
          this.$refs.nav.currentIndex = 1;
        } else if (
          -position.y >= this.paramsHeight &&
          -position.y < this.recommendNav
        ) {
          this.$refs.nav.currentIndex = 2;
        } else if (-position.y >= this.recommendNav) {
          this.$refs.nav.currentIndex = 3;
        } else {
          this.$refs.nav.currentIndex = 0;
        }
      }
    },
    navClick(i) {
      //navBar的点击事件处理
      this.navFlag = false;
      let arr = [0, -this.pictInfo, -this.paramsHeight, -this.recommendNav];
      this.$refs.scroll.scrollTo(0, arr[i], 500, () => {
        this.navFlag = true;
      });
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    backShow(p) {
      //返回顶部的按钮是否显示的判断
      if (-p.y > 1000) {
        this.isShowBack = true;
      } else {
        this.isShowBack = false;
      }
    },
    addCart() {
      //添加到购物车
      const paroductObj = {};
      paroductObj.image = this.detailBanner[0];
      paroductObj.title = this.productInfo.title;
      //paroductObj.desc = this.productInfo.desc;
      paroductObj.price = this.productInfo.oldPrice;
      paroductObj.iid = this.$route.params.id;
      this.$store.dispatch("AaddToCart", paroductObj).then(resolve => {
        //利用promise进行弹窗提示
        this.isToast = true;
        this.tosatInfo = resolve;
        setTimeout(() => {
          this.isToast = false;
          this.tosatInfo = resolve;
        }, 1600);
      });
    }
  }
};
</script>


<style scoped>
.detail {
  position: relative;
  z-index: 8;
  background: #fff;
}
.detail-top {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
}
.detail-scroll {
  height: calc(100vh - 44px - 49px);
}
</style>