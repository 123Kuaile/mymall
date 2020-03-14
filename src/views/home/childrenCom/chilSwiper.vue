<template>
  <swiper>
    <swiper-item v-for="item in banner" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" alt />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper/index";

export default {
  name: "ChilSwiper",
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

<style>
</style>