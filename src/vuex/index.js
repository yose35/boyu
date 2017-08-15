import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)


// 创建 store 实例
export default new Vuex.Store({
    actions,
    modules:{
    	mutations
    } 
})