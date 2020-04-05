<template>
  <scroll class="right-scroll">
    <div class="right-img">
      <div class="right-son" v-for="(item,index) in  imgData" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt />
        </a>
        <div class="title">{{item.title}}</div>
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";

export default {
  name: "rightImg",
  props: {
    imgData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Scroll
  }
};
</script>
<style scoped>
.right-scroll {
  width: calc(100vw - 140px);
  margin-left: 140px;
}
.right-img {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.right-son {
  width: 32%;
  padding: 5px;
}
.title {
  text-align: center;
  font-weight: 500;
  margin-top: 15px;
}
.right-son img {
  width: 100%;
}
.right-scroll {
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
</style>