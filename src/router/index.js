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

<<<<<<< HEAD
                        {
                            path: "/shoplist",
                            name: "shoplist",
                            component: shoplist,
                            children: [{
                                path: "/shopfront",
                                name: "shopfront",
                                component: shopfront
                            }]
                        },
=======
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
>>>>>>> 15c5c2c8db7a1b3838952aa91b8b9906c3dec86d

                }, {

<<<<<<< HEAD
                            },
                        ]
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
                        path: "/shoplist",
                        name: "shoplist",
                        component: shoplist,
                        children: [{
                            path: "/shopfront",
                            name: "shopfront",
                            component: shopfront
                        }]
                    },

                ],
            });
=======
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
                    component: shoplist,
                    children: [{
                        path: "/shopfront",
                        name: "shopfront",
                        component: shopfront
                    }]

                }
            ]
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
    ],
});
>>>>>>> 15c5c2c8db7a1b3838952aa91b8b9906c3dec86d
