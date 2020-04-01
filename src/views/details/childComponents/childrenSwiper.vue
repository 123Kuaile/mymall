<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item,index) in banner" :key="index">
      <img :src="'http:'+ item" alt />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper/index";

export default {
  name: "childrenSwiper",
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped>
.detail-swiper {
  height: 400px;
  overflow: hidden;
}
</style>