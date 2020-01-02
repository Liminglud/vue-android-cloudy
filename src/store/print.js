import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        history:[]
    },
    mutations: {

        setHistory(state,history){
            state.history=history
        }
    },
    actions: {
        //异步
    },
    modules: {
    }
})
