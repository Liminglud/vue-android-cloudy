import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    history:[],
    clip:[],
    group:[{gid:'000001',gname:'ITM Group'}],
    people:["ThisRabbit","Liminglud","MLG","Tim"]
  },
  mutations: {
    // 设置vuex的token
    settoken(state,token){
      state.token=token
    },
    setHistory(state,newHistory){
        state.history.push(newHistory)
    },
    setClip(state,newHistory){
        state.clip.push(newHistory)
    },
  },
  actions: {
    //异步
  },
  modules: {
  }
})
