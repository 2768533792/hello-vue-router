import Vue from 'vue'
import Router from 'vue-router'

import Wrap from '@/pages/wrap'
import Index from '@/pages/index'
import Login from '@/pages/login'
import Register from '@/pages/register'
import MemberIndex from '@/pages/member/member'
import GoodsList from '@/pages/goods/goodsList'
import GoodsDetail from '@/pages/goods/goodsDetail'
import Category from '@/pages/category'
import Cart from '@/pages/cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'wrap',
      component: Wrap,
      children: [{
        path: '/',
        name: 'index',
        component: Index
      },
      {
        path: '/category',
        name: 'category',
        component: Category
      },
      {
        path: '/cart',
        name: 'cart',
        component: Cart
      },
      {
        path: '/member',
        name: 'memberindex',
        component: MemberIndex
      }
    ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/goodslist',
      name: 'goodslist',
      component: GoodsList
    },
    {
      path: '/goodsdetail',
      name: 'goodsdetail',
      component: GoodsDetail
    }
  ]
})
