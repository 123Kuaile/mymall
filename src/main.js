import Vue from 'vue'
import App from './App.vue'
import Router from './router/index.js'
import store from './store'


Vue.prototype.$bus = new Vue(); //事件总线 ---
Vue.config.productionTip = false;

new Vue({
  router: Router,
  render: h => h(App),
  store
}).$mount('#app')
