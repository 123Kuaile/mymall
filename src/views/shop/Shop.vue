<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="centre">购物车({{cartLength}})</div>
    </nav-bar>
    <total-bar></total-bar>
    <scroll class="scroll">
      <cart-product :info="getCartData"></cart-product>
    </scroll>
  </div>
</template>

<script>
//公共组件
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";

//页面相关组件
import CartProduct from "./childComponents/CartProduct";
import TotalBar from "./childComponents/TotalBar";

//数据处理
import { mapGetters } from "vuex";

export default {
  name: "Shop",
  components: {
    NavBar,
    CartProduct,
    TotalBar,
    Scroll
  },
  computed: {
    cartLength() {
      return this.$store.state.cartData.length;
    },
    ...mapGetters(["getCartData"])
  }
};
</script>

<style scoped>
.nav-bar {
  background-color: #fe8096;
  color: #fff;
}
.scroll {
  height: calc(100vh - 44px - 49px - 40px);
}
</style>
