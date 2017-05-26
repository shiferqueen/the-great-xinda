import Vue from 'vue'
import Router from 'vue-router'
import Vueresource from "vue-resource"
import Common from '@/views/Common'
import Home from '@/views/Home'
import Action from '@/views/Action'
import Register from '@/views/Register'
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
                    path: 'listpage',
                    name: 'Listpage',
                    component: Listpage,
                },
                {
                    path: 'products',
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
        },
    ]
});

