<template>
  <div class="big-pict">
    <img v-for="(item,index) in imgSrc" :key="index" :src="'http:' +item" @load="pictLoad" />
  </div>
</template>

<script>
export default {
  name: "DetailsPicture",
  props: {
    imgSrc: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    pictLoad() {
      this.$emit("pictLoad");
      if (this.count === this.imgSrc.length) {
        this.$emit("allImgLoad");
      }
    }
  },
  watch: {
    imgSrc(n) {
      this.count = n.length;
    }
  }
};
</script>
<style scoped>
.big-pict {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 8px;
  margin-top: -10px;
}
.big-pict img {
  width: 100%;
  height: 400px;
  flex: 1;
  margin-top: 10px;
}
</style>