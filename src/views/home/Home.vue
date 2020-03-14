<template>
  <div id="home">
    <navbar class="nav-bar">
      <div slot="centre">购物街</div>
    </navbar>
    <swiper :banner="banner"></swiper>
    <recom :recom="recommends"></recom>
    <the-flag></the-flag>
    <nav-control :conten="['流行','新款','热门']" class="nav-control"></nav-control>
    <product :product="product.pop.list"></product>
    <ul>
      <li>内容1</li>
      <li>内容2</li>
      <li>内容3</li>
      <li>内容4</li>
      <li>内容5</li>
      <li>内容6</li>
      <li>内容7</li>
      <li>内容8</li>
      <li>内容9</li>
      <li>内容10</li>
      <li>内容11</li>
      <li>内容12</li>
      <li>内容13</li>
      <li>内容14</li>
      <li>内容15</li>
      <li>内容16</li>
      <li>内容17</li>
      <li>内容18</li>
      <li>内容19</li>
      <li>内容20</li>
      <li>内容21</li>
      <li>内容22</li>
      <li>内容23</li>
      <li>内容24</li>
      <li>内容25</li>
      <li>内容26</li>
      <li>内容27</li>
      <li>内容28</li>
      <li>内容29</li>
      <li>内容30</li>
      <li>内容31</li>
      <li>内容32</li>
      <li>内容33</li>
      <li>内容34</li>
      <li>内容35</li>
      <li>内容36</li>
      <li>内容37</li>
      <li>内容38</li>
      <li>内容39</li>
      <li>内容40</li>
      <li>内容41</li>
      <li>内容42</li>
      <li>内容43</li>
      <li>内容44</li>
      <li>内容45</li>
      <li>内容46</li>
      <li>内容47</li>
      <li>内容48</li>
      <li>内容49</li>
      <li>内容50</li>
    </ul>
  </div>
</template>

<script>
//公共组件部分
import navbar from "@/components/common/navbar/NavBar";
import Swiper from "./childrenCom/chilSwiper";

//本次项目相关组件
import Recom from "./childrenCom/Recom";
import TheFlag from "./childrenCom/TheFlag";
import NavControl from "@/components/conten/NavControl";
import Product from "@/components/conten/Product";

//导入的数据 方法
import { getHomeSwiper, getHomeProduct } from "@/network/home";

export default {
  name: "Home",
  components: {
    navbar,
    Swiper,
    Recom,
    TheFlag,
    NavControl,
    Product
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
      }
    };
  },
  created() {
    this.getHomeSwiperRequeset();

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
        console.log(res.data.list);
        this.product[type].list.push(...res.data.list);
        setTimeout(() => {
          console.log(this.product[type].list);
        }, 2000);
      });
    }
  }
};
</script>

<style scope>
#home {
  padding-top: 44px;
}
.nav-bar {
  width: 100%;
  background: pink;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
}
.nav-control {
  position: sticky;
  top: 44px;
  background: #fff;
  padding: 10px 0;
}
</style>
