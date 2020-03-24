<template>
  <div class="bottom-bar">
    <div class="left-conten">
      <div>
        <img src="@/assets/images/bottomBar/people.svg" alt />
        <div>客服</div>
      </div>
      <div>
        <img src="@/assets/images/bottomBar/shop.svg" alt />
        <div>店铺</div>
      </div>
      <div>
        <img src="@/assets/images/bottomBar/collect.svg" alt />
        <div>收藏</div>
      </div>
    </div>
    <div class="right-conten">
      <div class="add" @click="addClick">加入购物车</div>
      <div class="shopping">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottomBar",
  methods: {
    addClick() {
      this.$emit("addCart");
    }
  }
};
</script>
<style scoped>
.bottom-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 49px;
  background: #fff;
  padding: 0 5px 5px;
}
.left-conten {
  padding-top: 5px;
  margin-left: -10px;
  text-align: center;
  width: 50%;
  display: inline-flex;
}
.left-conten > div {
  font-size: 14px;
  flex: 1;
}
.left-conten > div > img {
  width: 20px;
  height: 20px;
  margin-bottom: 2px;
}
.right-conten {
  flex: 1;
  display: inline-flex;
  width: 50%;
  height: 49px;
  line-height: 49px;
  text-align: center;
}
.add {
  flex: 6;
  background: yellow;
}
.shopping {
  flex: 4;
  background: hotpink;
  color: #fff;
}
</style>