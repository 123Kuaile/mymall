<template>
  <div id="table-bar" class="ignore">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TableBar"
};
</script>

<style>
#table-bar {
  display: flex;
  height: 49px;
  background: #f6f6f6 no-repeat;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 2px rgba(100, 100, 100, 0.2);
}
</style>
