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
        //订单号
        ordernum: '',
        //店铺id
        shopid: '',
        //当前商店详情
        currentShop: {},
        //银联支付中转内容
        transUnionPay: '123',
        //弹出框
        popups: {},
        //首页类型
        indexnum: '',
        bodywidth: document.body.clientWidth,
        myurl: ''
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
        },
        SETORDER(state, number) {
            state.ordernum = number;
        },
        //店铺
        SETSHOPID(state, id) {
            state.shopid = id;
        },
        CURRENTSHOP(state, shop) {
            state.currentShop = shop;
        },
        SETUNIONPAY(state, content) {
            state.transUnionPay = content;
        },
        SETPOPUPS(state, popup) {
            state.popups = popup;
        },
        SETINDEXNUM(state, indexnum) {
            state.indexnum = indexnum;
        },
        CLOSEPOPUPS(state) {
            state.popups = {};
        },
        SETBODYWIDTH(state, width) {
            state.bodywidth = width;
        },
        SETMYURL(state,url) {
            state.myurl = url;
        }
    },
    //动作集合---用来操作突变集合的
    actions: {
        refCartNum({ commit }) {
            axios.post("/xinda-api/cart/cart-num").then(function (res) {
                var num = res.data.data.cartNum;
                commit('SETCARTNUM', num);
            })
        },
        user({ commit }, come_user) {
            axios.post("/xinda-api/sso/login-info").then(function (res) {
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
        },
        setorder({ commit }, number) {
            commit('SETORDER', number)
        },
        setgoshop({ commit }, id) {
            commit('SETSHOPID', id)
        }, //currentShop
        currentShop({ commit }, shop) {
            commit('CURRENTSHOP', shop)
        },
        setUnionPay({ commit }, content) {
            commit('SETUNIONPAY', content)
        },
        setindexnum({ commit }, indexnum) {
            commit('SETINDEXNUM', indexnum)
        },

        popups({ commit }, popup) {
            popup.status = true;
            if (popup.ok) {
                popup.confirm = function () {
                    popup.ok();
                    commit('CLOSEPOPUPS');
                }
            }
            let defaultSetting = {
                headers: '提示信息',
                content: '',
                conbtn: '确定',
                cancelbtn: '取消'
            };
            commit('SETPOPUPS', Object.assign(defaultSetting, popup))
        },
        closePopups({ commit }) {
            commit('CLOSEPOPUPS')
        },
        setbodywidth({ commit }, width) {
            commit('SETBODYWIDTH', width)
        },
        setmyurl({ commit }, url) {
            commit('SETMYURL', url)
        }
    },
    //显示集合
    getters: {
        getCartNum(state) {
            return state.cartNum //购物车总数量
        },
        getstoreid(state) {
            return state.storeid //商品ID
        },
        getuser(state) {
            return state.username //获取用户名（手机号）
        },
        getorder(state) {
            return state.ordernum //订单号
        },
        getshopid(state) {
            return state.shopid //店铺
        },
        getShop(state) {
            return state.currentShop //店铺
        },
        getUnionPay(state) {
            return state.transUnionPay
        },
        getpopups(state) {
            return state.popups
        },
        getpopupstatus(state) {
            return state.popupstatus
        },
        getindexnum(state) {
            return state.indexnum
        },
        getbodywidth(state) {
            return state.bodywidth
        },
        getmyurl(state){
            return state.myurl
        }
    }
});