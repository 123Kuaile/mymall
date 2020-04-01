<template>
  <div id="my">
    <nav-bar class="nav">
      <span slot="centre">我的个人中心</span>
    </nav-bar>
    <my-info class="my-info"></my-info>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

import MyInfo from "./childrenCom/myInfo";
export default {
  name: "My",
  components: {
    NavBar,
    MyInfo
  }
};
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
}
.my-info {
  margin-top: 44px;
}
</style>
