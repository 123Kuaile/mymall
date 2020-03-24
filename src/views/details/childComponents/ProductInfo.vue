<template>
  <div class="big-div" v-if="Object.keys(info).length != 0">
    <div class="title">{{info.title}}</div>
    <div>
      <span class="n-price">{{info.newPrice}}</span>
      <span class="o-price">{{info.oldPrice}}</span>
      <sup class="discount" v-if="info.discount && true">{{info.discount}}</sup>
    </div>
    <div class="info">
      <span>{{info.sales}}</span>
      <span class="center-info">{{info.collect}}</span>
      <span class="only-text">{{info.consignment}}</span>
    </div>
    <div class="kuaidi-info">
      <div>
        <img :src="info.express[0].icon" alt />
        <span>{{info.express[0].name}}</span>
      </div>
      <div class="center-info">
        <img :src="info.express[1].icon" alt />
        <span>{{info.express[1].name}}</span>
      </div>
      <div class="only-text">
        <img :src="info.express[2].icon" alt />
        <span>{{info.express[2].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductInfo",
  props: {
    info: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style scoped>
.big-div {
  padding: 15px 5px;
}
.title {
  font-size: 20px;
  font-weight: 500;
  color: #000;
  margin-bottom: 10px;
  text-indent: 6px;
}
.n-price {
  color: #dd7081;
  font-size: 24px;
  margin-right: 5px;
}
.o-price {
  text-decoration: line-through;
}
.info {
  margin-top: 15px;
  padding: 8px 0;
  display: flex;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
}
.info span {
  flex: 1;
}
.only-text {
  text-align: right;
}
.center-info {
  text-align: center;
}
.discount {
  margin-left: 5px;
  border-radius: 30%;
  padding: 3px 5px;
  background: #dd7081;
  color: #fff;
  font-size: 12px;
}
.kuaidi-info {
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.3);
  display: flex;
  padding: 10px 0 20px 0;
  margin-top: 10px;
  font-size: 14px;
  overflow: hidden;
  font-weight: bold;
}
.kuaidi-info div {
  flex: 1;
}

.kuaidi-info div img {
  height: 15px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>