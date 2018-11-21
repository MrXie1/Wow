import Vue from 'vue'
import Router from 'vue-router'

import Index from '../components/index'
import Category from '../components/category'
import Cart from '../components/cart'
import User from '../components/user'
import Detail from '../components/detail'
import Message from '../components/message'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: Index
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/message',
      component: Message
    },
    {
      path: '/item/:productid',
      component: Detail
    },
    {
	    path:'*',
	    redirect:'/index'
    }
  ]
})
