<template>
  <div class="check-centent">
    <div class="check-btn" :class="{active:isActive}">
      <img src="@/assets/images/cart/tick.svg" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckBtn",
  props: {
    isActive: {
      type: Boolean,
      default() {
        return true;
      }
    }
  }
};
</script>
<style scoped>
.check-centent {
  display: flex;
  align-items: center;
}

.check-btn {
  border: 2px solid #eee;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
}
.check-btn img {
  width: 20px;
  height: 20px;
}
.active {
  border: red;
  background: red;
}
</style>