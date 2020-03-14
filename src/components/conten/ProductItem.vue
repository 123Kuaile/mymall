<template>
  <div class="item">
    <img :src="itemData.show.img" alt />
    <p>{{itemData.title}}</p>
    <div class="pri-cf">
      <span class="price">{{itemData.orgPrice}}</span>
      <span class="cfav">{{itemData.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    itemData: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style>
.item {
  width: 48%;
  margin-right: 5px;
  font-size: 14px;
  margin-bottom: 5px;
  text-align: center;
}
.item p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item img {
  width: 100%;
  min-height: 270px;
}
.price {
  float: left;
  color: red;
}
.cfav {
  float: right;
}
.pri-cf {
  width: 65%;
  display: inline-block;
  padding: 5px 0;
}
</style>