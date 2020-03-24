<template>
  <nav-bar class="nav">
    <div slot="left" class="back" @click="backClick">
      <img src="@/assets/images/conten/back.svg" alt />
    </div>
    <div slot="centre" class="title">
      <div class="title-item" v-for="(item,index) in title" :key="index" @click="titleClick(index)">
        <span :class="{active:currentIndex === index}">{{item}}</span>
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "detailNavBar",
  data() {
    return {
      title: ["商品", "详情", "参数", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("navClick", index);
    },
    backClick() {
      this.$router.back();
      this.$bus.$emit("changeIsShow");
    }
  }
};
</script>
<style scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
  font-size: 14px;
}
.nav {
  background: #fff;
}
.back {
  margin-top: 6px;
}
span {
  padding: 8px;
}
.active {
  color: hotpink;
  border-bottom: 2px solid pink;
}
</style>