<template>
  <div class="item" @click="productItemClick">
    <img :src="showImg" alt @load="loadImg" />
    <p>{{itemData.title}}</p>
    <div class="pri-cf">
      <span class="price">{{showPrice}}</span>
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
  },
  computed: {
    showImg() {
      return this.itemData.image || this.itemData.show.img;
    },
    showPrice() {
      return this.itemData.orgPrice || "￥" + this.itemData.price;
    }
  },
  methods: {
    loadImg() {
      //this.$store.commit("changeIsScroll"); //vuex版本处理
      this.$bus.$emit("changeIsScroll");
    },
    productItemClick() {
      this.$router.push("/detail/" + this.itemData.iid);
      this.$bus.$emit("setIsShow");
    }
  }
};
</script>

<style>
.item {
  width: 48%;
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
  min-height: 290px;
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
.pri-cf img {
  height: 90%;
  width: 15px;
}
</style>