<template>
  <table-bar>
    <table-item path="/home" useColor="red">
      <img src="@/assets/images/tablebar/index.svg" alt="主页" slot="table-img" />
      <img src="@/assets/images/tablebar/index_active.svg" alt="主页" slot="table-active" />
      <span slot="table-text">首页</span>
    </table-item>
    <table-item path="/apply" useColor="red">
      <img src="@/assets/images/tablebar/apply.svg" alt="应用" slot="table-img" />
      <img src="@/assets/images/tablebar/apply_active.svg" alt="应用" slot="table-active" />
      <span slot="table-text">应用</span>
    </table-item>
    <table-item path="/shop" useColor="red">
      <img src="@/assets/images/tablebar/shop.svg" alt="购物" slot="table-img" />
      <img src="@/assets/images/tablebar/shop_active.svg" alt="购物" slot="table-active" />
      <span slot="table-text">购物</span>
    </table-item>
    <table-item path="/my" useColor="red">
      <img src="@/assets/images/tablebar/my.svg" alt="我的" slot="table-img" />
      <img src="@/assets/images/tablebar/my_active.svg" alt="我的" slot="table-active" />
      <span slot="table-text">我的</span>
    </table-item>
  </table-bar>
</template>

<script>
import TableBar from "@/components/common/tablebar/TableBar.vue";
import TableItem from "@/components/common/tablebar/TableBarItems.vue";

export default {
  name: "MainTable",
  components: {
    TableBar,
    TableItem
  }
};
</script>

<style>
</style>
