import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // isScrollHeight: false  //处理better-scroll滑动卡顿的代码
    cartData: [] //存放购物车信息
  },
  getters: {
    getCartData(state) {
      return state.cartData;
    }
  },
  actions: {
    //操作过多在这里进行不要再mutations里
    AaddToCart(context, payload) {
      return new Promise((resolve, reject) => {
        let oldItem = null
        let arr = context.state.cartData;
        for (let item of arr) {
          if (item.iid === payload.iid) {
            oldItem = item;
          }
        }
        if (oldItem) {
          context.commit('addCount', oldItem);
          resolve('当前的商品数量+1')
        } else {
          payload.count = 1;
          context.commit('addTocart', payload);
          resolve('商品已成功加入购物车');
        }
        console.log(context.state.cartData);
      })
    }

  },
  mutations: {
    /* //处理better-scroll滑动卡顿的代码
    changeIsScroll() {
      this.isScrollHeight = !this.isScrollHeight;
      console.log(this.isScrollHeight);
    } */
    addCount(state, payload) {
      payload.count += 1;
    },
    addTocart(state, payload) {
      payload.checked = true;
      payload.mask = true;
      state.cartData.push(payload);
    }
  },
  modules: {

  }
});


export default store;