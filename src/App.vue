<template>
  <div id="app">
    <router-view></router-view>
    <main-table></main-table>
  </div>
</template>

<script>
import MainTable from "./components/MainTable.vue";
import { Request } from "./network/request";

export default {
  name: "App",
  components: {
    MainTable
  },
  created() {
    Request({
      //这里面是config参数
      url: "/app/mock/244101/example/1581391353229",
      params: {
        //这里面是get方法请求时后面要拼接的参数可以写在这个对象里面
      },
      data: {
        //这里面时post方法请求要的参数，要定义在这个对象里面
      },
      method: "get" //默认是get，post需要在这里设置
    })
      .then(res => {
        //请求成功数据回来以后的回调函数
        console.log(res);
      })
      .catch(err => {
        //数据请求错误回来以后的错误回调函数
        console.log(err);
      });
  }
};
</script>

<style>
@import url("assets/css/base.css");
</style>
