import Vue from 'vue'
import Router from 'vue-router'

import Common from '@/views/Common'
import Home from '@/views/Home'
import Action from '@/views/Action'
import Register from '@/views/Register'
import member from '@/views/member'
import shopping from '@/views/shopping'
import goods from '@/widgets/shopping/goods'
import myorder from '@/widgets/member/myOrder'
import evaluation from '@/widgets/member/evaluation'
import uevaluation from '@/widgets/member/uevaluation'
import setaccount from '@/widgets/member/setaccount'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Common',
        component: Common,
        children: [
            {
                path: 'Home',
                name: 'Home',
                component: Home
            },
            {
                path: 'member',
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
        }]
    },
    {
        path: '/shopping',
        name: 'shopping',
        component: shopping,
    }
    ]
})