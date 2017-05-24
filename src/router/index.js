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

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Common',
            component: Common,
            children: [{
                path: 'Home',
                name: 'Home',
                alias: '',
                component: Home
            }]
        },
        {
            path: '/action',
            name: 'Action',
            component: Action,
            children: [{
                path: '/register',
                name: 'register',
                component: Register //enroll
            }]
        },
        {
            path: '/listpage',
            name: 'Listpage',
            component: Listpage,
        },
        {
            path: '/products',
            name: 'Products',
            component: Products,
        },
        {
            path: '/shopping',
            name: 'shopping',
            component: shopping,
        },
        {
            path: '/form',
            name: 'form',
            component: form,
        },
        {
            path: "/shoplist",
            name: "shoplist",
            component: shoplist[{
                path: "/shopfront",
                name: "shopfront",
                component: shopfront
            }]
        },

    ],
});