import Vue from 'vue'
import Router from 'vue-router'

import Common from '@/views/Common'
import Home from '@/views/Home'
import Action from '@/views/Action'
import Register from '@/views/Register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Common',
      component: Common,
      children:[
        {
          path:'home',
          alias:'',
          name:'Home',
          component:Home
        }
      ]
    },
    {
      path: '/action',
      name: 'Action',
      component: Action,
      children:[
        {
          path:'register/:test',
          name:'register',
          component:Register//enroll
        }
      ]
    },
  ]
})
