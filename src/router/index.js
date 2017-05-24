import Vue from 'vue'
import Router from 'vue-router'

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
import payerror from '@/views/payerror'
import paysuccess from '@/views/paysuccess'


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
                    path: 'shopping',//购物车
                    name: 'shopping',
                    component: shopping,
                },
                {
                    path: 'form',//支付
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
                }]
            },
            {
                path: '/action',
                name: 'Action',
                component: Action,
                children: [{
                    path: 'register',
                    name: 'register',
                    component: Register //enroll
                }]
            }]          
});

