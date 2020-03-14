<template>
  <div class="nav-control">
    <div v-for="(item,index) in conten" :key="index" @click="clickIndex(index)">
      <span :class="{active: index === currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavControl",
  props: {
    conten: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    clickIndex(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style>
.nav-control {
  display: flex;
  text-align: center;
  box-shadow: 7px 0 2px rgba(100, 100, 100, 0.1);
}
.nav-control div {
  flex: 1;
  padding: 5px;
}
.nav-control span {
  padding: 5px;
}
.active {
  color: red;
  border-bottom: 2px solid pink;
}
</style>