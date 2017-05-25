import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        careName: 0,
    },
    mutations: {
        SETCARTNUM({ state }, num) {
            state.num = num;
        }
    },
    actions: {
        setCartNum({ commit }, num) {
            commit('SETCARTNUM', num)
        }
    },
    getters: {
        getCartNum(state) {
            return state.catNum
        }
    }
})