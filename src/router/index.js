import Vue from 'vue'
import Router from 'vue-router'
import Vueresource from "vue-resource"
import Common from '@/views/Common'
import Home from '@/views/Home'
import Action from '@/views/Action'
import Register from '@/views/Register'
import member from '@/views/member'
import goods from '@/widgets/shopping/goods'
import myorder from '@/widgets/member/myOrder'
import evaluation from '@/widgets/member/evaluation'
import uevaluation from '@/widgets/member/uevaluation'
import setaccount from '@/widgets/member/setaccount'
import Listpage from '@/views/Listpage'
import Products from '@/views/Products'
import shoplist from '@/views/shoplist'
import shopfront from '@/views/shopfront'
import shopping from '@/views/shopping'
import form from '@/views/form'
import us from '@/views/us'
import payerror from '@/views/payerror'
import paysuccess from '@/views/paysuccess'
import login from '@/views/Login'
import forget from '@/views/forget'
import Pagelist from '@/views/Pagelist'


Vue.use(Router)

export default new Router({

    routes: [{
            path: '/',
            name: 'Common',
            component: Common,
            children: [{
                    path: 'home',
                    name: 'Home',
                    alias: '',
                    component: Home
                },
                {
                    path: "shoplist",
                    name: "shoplist",
                    component: shoplist,
                },
                {
                    path: "shopfront",
                    name: "shopfront",
                    component: shopfront
                },
                {
                    path: 'listpage',  //商品列表
                    name: 'Listpage',
                    component: Listpage,
                },
                {
                    path: 'pagelist',  //商品列表
                    name: 'Pagelist',
                    component: Pagelist,
                },
                {
                    path: 'products/:productId',  //商品详情
                    name: 'Products',
                    component: Products,
                },
                {
                    path: 'shopping', //购物车
                    name: 'shopping',
                    component: shopping,
                },
                {
                    path: 'form', //支付
                    name: 'form',
                    component: form,
                },
                {
                    path: "paysuccess",
                    name: "paysuccess",
                    component: paysuccess
                },
                {
                    path: "payerror",
                    name: "payerror",
                    component: payerror
                },
                {
                    path: 'us',
                    name: 'us',
                    component: us,
                },
                {
                    path: 'member',//会员
                    name: 'member',
                    component: member,
                    children: [
                    {
                        path: 'myorder',
                        alias:'',
                        name: 'myorder',
                        component: myorder
                    },
                    {
                        path: 'evaluation',
                        name: 'evaluation',
                        component: evaluation
                    },
                    {
                        path: 'uevaluation',
                        name: 'uevaluation',
                        component: uevaluation
                    },
                    {
                        path: 'setaccount',
                        name: 'setaccount',
                        component: setaccount
                    },
                ]

            }
            ]
        },
        {
            path: '/action',
            name: 'Action',
            component: Action,
            children: [{
                path: 'register',
                name: 'register',
                component: Register //enroll
            },
            {
                path: 'login',
                name: 'login',
                component: login 
            },
            {
                path: 'forget',
                name: 'forget',
                component: forget 
            }]
        }
    ]
});

