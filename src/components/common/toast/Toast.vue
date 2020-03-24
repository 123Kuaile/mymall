<template>
  <div class="toast" v-show="show">
    <div>{{info}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    info: {
      type: String,
      default() {
        return "";
      }
    },
    show: {
      type: Boolean,
      default() {
        return false;
      }
    }
  }
};
</script>
<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;

  color: #fff;
  background: rgba(0, 0, 0, 0.8);
}
</style>