<template>
  <div class="nav-control" :class="{activeNav:navControlShow}">
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
    },
    navControlShow: {
      type: Boolean,
      default() {
        return false;
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
      this.$emit("tableClick", index);
    }
  }
};
</script>

<style scoped>
.nav-control {
  display: flex;
  text-align: center;
  box-shadow: 7px 0 2px rgba(100, 100, 100, 0.1);
  padding: 8px 5px;
  background: #fff;
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
.activeNav {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 99;
}
</style>