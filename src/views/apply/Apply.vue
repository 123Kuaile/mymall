<template>
  <div id="apply">
    <nav-bar class="nav">
      <span slot="centre">商品分类</span>
    </nav-bar>
    <left-nav :leftData="leftData" class="left-nav" @leftNavClick="leftNavClick"></left-nav>
    <right-img :imgData="rightData"></right-img>
  </div>
</template>

<script>
//公共组件
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";

import LeftNav from "./childrenCom/LeftNav";
import rightImg from "./childrenCom/rightImg";

import {
  getCategory,
  getSubcategory,
  getCategoryDetail
} from "@/network/category";

export default {
  name: "Apply",
  data() {
    return {
      leftData: [],
      rightData: []
    };
  },
  components: {
    LeftNav,
    NavBar,
    rightImg,
    Scroll
  },
  created() {
    //获取左边导航文字标题部分
    getCategory()
      .then(result => {
        this.leftData = result.data.category.list;
        console.log(this.leftData);
      })
      .catch(err => {});

    //获取右侧导航图片部分
    getSubcategory(3627)
      .then(res => {
        this.rightData = res.data.list;
        console.log(this.rightData);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    leftNavClick(payload) {
      getSubcategory(payload)
        .then(res => {
          this.rightData = res.data.list;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
#apply {
  padding-top: 44px;
}
.nav {
  color: #fff;
  background-color: #fe8096;
}
.left-nav {
  position: fixed;
  left: 0;
  top: 44px;
  bottom: 49px;
  border: 0;
}
.scroll {
  height: calc(100vh - 44px - 49px);
}
</style>
