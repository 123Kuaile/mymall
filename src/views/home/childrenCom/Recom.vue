<template>
  <div class="row">
    <div v-for="(item,index) in recom" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt />
      </a>
      <h2>{{item.title}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recom",
  props: {
    recom: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.row {
  display: flex;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 30px;
  border-bottom: 8px solid #eee;
}
.row div {
  flex: 1;
}
.row img {
  width: 65px;
  height: 65px;
}
.row h2 {
  padding-top: 4px;
  font-size: 14px;
}
</style>