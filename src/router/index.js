import Vue from 'vue'
import Router from 'vue-router'

import Common from '@/views/Common'
import Home from '@/views/Home'
import Action from '@/views/Action'
import Register from '@/views/Register'
import shoplist from '@/views/shoplist'
import shopfront from '@/views/shopfront'
import shopping from '@/views/shopping'
import goods from '@/widgets/shopping/goods'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Common',
        component: Common,
        children: [{
                path: 'Home',
                name: 'Home',
                component: Home
            },
            {
                path: "shoplist",
                name: "shoplist",
                component: shoplist
            },
            {
                path: "shopfront",
                name: "shopfront",
                component: shopfront
            }
        ]

    }]

}, {
    path: '/action',
    name: 'Action',
    component: Action,
    children: [{
        path: 'register',
        name: 'register',
        component: Register //enroll
    }]
}, {
    path: '/shopping',
    name: 'shopping',
    component: shopping,

})