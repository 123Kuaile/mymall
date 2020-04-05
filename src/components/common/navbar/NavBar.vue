<template>
  <div class="nav-bar ignore">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="centre">
      <slot name="centre"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.nav-bar {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 44px;
  box-shadow: 0 1px 2px rgba(100, 100, 100, 0.1);
  text-align: center;
  line-height: 44px;
  background-color: #fe8096;
}
.left,
.right {
  width: 55px;
}
.centre {
  flex: 1;
}
</style>