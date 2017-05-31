import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


export default new Vuex.Store({

    //状态集合
    state: {
        //购物车数量,
        cartNum: 0,
        storeid: '',
        username: '',

    },
    //突变集合---用来操作状态集合
    mutations: {
        SETCARTNUM(state, num) {
            state.cartNum = num;

        },
        SETSTOREID(state, id) {
            state.storeid = id;
        },
        SETUSER(state, num) {
            state.username = num;
        }
    },
    //动作集合---用来操作突变集合的
    actions: {
        refCartNum({ commit }) {
            axios.post("/xinda-api/cart/cart-num").then(function(res) {
                var num = res.data.data.cartNum;
                commit('SETCARTNUM', num);
            })
        },
        user({ commit }, come_user) {
            axios.post("/xinda-api/sso/login-info").then(function(res) {
                if (res.data.data != null) {
                    var num = res.data.data.name;
                    commit('SETUSER', num);
                } else {
                    var num = '';
                    commit('SETUSER', num);
                }
            })
        },
        setstoreid({ commit }, id) {
            commit('SETSTOREID', id);

        }
    },
    //显示集合
    getters: {
        getCartNum(state) {
            return state.cartNum
        },
        getstoreid(state) {
            return state.storeid
        },
        getuser(state) {
            return state.username
        },
    }
});