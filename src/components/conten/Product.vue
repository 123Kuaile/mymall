<template>
  <div class="product">
    <product-item v-for="item in product" :itemData="item" :key="item.title"></product-item>
  </div>
</template>

<script>
import ProductItem from "./ProductItem";

export default {
  name: "Product",
  props: {
    product: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    ProductItem
  }
};
</script>

<style>
.product {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>