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
import serviceProducts from '@/widgets/shopfront/serviceProducts'
import customService from '@/widgets/shopfront/customService'
import certification from '@/widgets/shopfront/certification'
import secondproduct from '@/views/secondproduct'



import iview from '@/views/myiView' //iview 样式用
import logged from '@/widgets/member/logged'
import logout from '@/widgets/member/logout'



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
                    path: "shopfront/:shopfrontID",
                    alias: '',
                    name: "shopfront",
                    component: shopfront,
                    children: [{
                            path: "serviceProducts",
                            alias: '',
                            name: "serviceProducts",
                            component: serviceProducts,
                        }, {
                            path: "customService",
                            name: "customService",
                            component: customService,
                        }, {
                            path: "certification",
                            name: "certification",
                            component: certification,
                        }

                    ]
                },
                {
                    path: 'listpage', //商品列表
                    name: 'Listpage',
                    component: Listpage,
                },
                {
                    path: 'pagelist', //商品列表
                    name: 'Pagelist',
                    component: Pagelist,
                },
                {
                    path: 'products/:productId', //商品详情
                    name: 'Products',
                    component: Products,
                },
                {
                    path: 'secondproduct/:productId', //商品详情2
                    name: 'secondproduct',
                    component: secondproduct,
                },
                {
                    path: 'shopping', //购物车
                    name: 'shopping',
                    component: shopping,
                },
                {
                    path: 'form:order', //支付
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
                    path: 'member', //会员
                    name: 'member',
                    component: member,
                    children: [{
                            path: 'myorder',
                            alias: '',
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
                        {
                            path: 'logged',
                            name: 'logged',
                            component: logged
                        },
                        {
                            path: 'logout',
                            name: 'logout',
                            component: logout
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
                }
            ]
        },
        {
            path: '/iview',
            name: 'iview',
            component: iview
        }
    ]
});