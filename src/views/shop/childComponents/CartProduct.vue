<template>
  <div class="product-shop">
    <div class="item-bar" v-for="(item,index) in info" :key="index" :class="{mask:item.mask}">
      <check-btn class="i-left" :isActive="item.checked" @click.native="checkClick(item)"></check-btn>
      <div class="i-centre">
        <img :src="item.image" alt />
      </div>
      <div class="i-title">
        <div class="tit">{{item.title}}</div>
        <div class="price">{{item.price}}</div>
        <div class="count">×{{item.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBtn from "./CheckBtn";

export default {
  name: "CartProduct",
  props: {
    info: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    CheckBtn
  },
  methods: {
    checkClick(item) {
      item.checked = !item.checked;
      item.mask = !item.mask;
    }
  }
};
</script>
<style scoped>
.item-bar {
  display: flex;
  width: 100%;
  background: #fff;
  height: 150px;
  border-bottom: 1px solid #eee;
  padding: 5px 0;
  margin-bottom: 2px;
}
.item-bar img {
  width: 90%;
  height: 100%;
}
.i-left {
  text-align: center;
  margin-right: 10px;
}
.i-left input {
  margin-top: 7vh;
  border-radius: 50%;
  border: 1px solid red;
}
.i-centre {
  flex: 4;
}
.i-title {
  padding: 5px;
  text-align: left;
  flex: 5;
  color: black;
  font-weight: 500;
  position: relative;
}
.count {
  position: absolute;
  right: 25px;
  bottom: 30px;
}
.price {
  position: absolute;
  bottom: 30px;
  left: 5px;
  color: #e06c75;
  font-size: 18px;
}
.mask {
  background: rgba(237, 237, 237, 0.4);
}
</style>