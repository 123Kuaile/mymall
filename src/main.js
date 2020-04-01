import Vue from 'vue'
import App from './App.vue'
import Router from './router/index.js'
import store from './store'
import FastClick from 'fastclick'

Vue.prototype.$bus = new Vue(); //事件总线 ---
Vue.config.productionTip = false;

FastClick.attach(document.body); //使用fastclick组件

new Vue({
  router: Router,
  render: h => h(App),
  store
}).$mount('#app')
