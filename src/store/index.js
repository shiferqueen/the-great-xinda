import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);

export default new Vuex.Store({
    //状态集合
    state:{
        //购物车数量
        cartNum:0
    },
   //突变集合---用来操作状态集合
    mutations:{
        SETCARTNUM(state,num){
            state.cartNum = num;
        }
    },
    //动作集合
    actions:{
        setCartNum({commit},num){
            commit('SETCARTNUM',num);
        }
    },
    //显示集合
    getters:{
        getCartNum(state){
            return state.cartNum
        }
    }
});