<template>
  <div class="nav-bar">
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
  height: 44px;
  display: flex;
  box-shadow: 0 1px 2px rgba(100, 100, 100, 0.1);
  text-align: center;
  line-height: 44px;
}
.left,
.right {
  width: 55px;
}
.centre {
  flex: 1;
}
</style>