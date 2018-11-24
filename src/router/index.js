import Vue from 'vue'
import Router from 'vue-router'

import Index from '../components/index'
import Category from '../components/category'
import List from '../components/list'
import Cart from '../components/cart'
import User from '../components/user'
import Detail from '../components/detail'
import Message from '../components/message'
import Login from '../components/login'
import Register from '../components/register'
import More from '../components/more'
import Mine from '../components/mine'
import Brand from '../components/brand'

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
      path: '/list',
      component: List
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
      path: '/mine',
      component: Mine
    },
    {
      path: '/message',
      component: Message
    },
    {
      path: '/more',
      component: More
    },
    {
      path: '/brand/:brandid',
      component: Brand
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/item/:ylyid',
      component: Detail
    },
    {
	    path:'*',
	    redirect:'/index'
    }
  ]
})
