<template>
  <div class="bar">
    <div class="bar-left" @click="checkAll">
      <check-btn class="img" :isActive="allActive"></check-btn>全选
    </div>
    <div class="bar-centre">总计:￥{{totalSum}}</div>
    <div class="bar-right">去付款({{taotalCount}})</div>
  </div>
</template>

<script>
import CheckBtn from "./CheckBtn";

export default {
  name: "TotalBar",
  components: {
    CheckBtn
  },
  computed: {
    totalSum() {
      //总价计算
      return this.$store.state.cartData
        .filter(item => {
          return item.checked;
        })
        .reduce((pre, item) => {
          var price = item.price.slice(1);
          return pre + price * item.count;
        }, 0);
    },
    taotalCount() {
      return this.$store.state.cartData.filter(item => {
        return item.checked;
      }).length;
    },
    allActive() {
      if (this.$store.state.cartData.length === 0) return false;
      return !this.$store.state.cartData.filter(item => {
        return !item.checked;
      }).length;
    }
  },
  methods: {
    checkAll() {
      if (this.allActive) {
        this.$store.state.cartData.forEach(item => {
          item.checked = false;
        });
      } else {
        this.$store.state.cartData.forEach(item => {
          item.checked = true;
        });
      }
    }
  }
};
</script>
<style scoped>
.bar {
  display: flex;
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  height: 40px;
  align-items: center;
  background: #eee;
  z-index: 99;
}
.bar-left {
  display: flex;
  margin-left: 10px;
  width: 60px;
}
.bar-centre {
  margin-left: 30px;
  flex: 1;
  text-align: left;
  color: black;
  font-weight: 500;
  font-size: 16px;
}
.img {
  margin-right: 5px;
}
.bar-right {
  width: 100px;
  background: pink;
  line-height: 40px;
  text-align: center;
  height: 100%;
}
</style>