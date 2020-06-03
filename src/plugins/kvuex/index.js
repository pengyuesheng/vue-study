import Vue from 'vue'
import Vuex from './k-vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state) {
      state.count += 1;
    }
  },
  actions: {
    asyncAdd({commit}) {
      setTimeout(function(){
        commit("add");
      }, 2000)
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  },
  modules: {
  }
})
