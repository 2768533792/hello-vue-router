import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import HomeContent from '@/pages/HomeContent'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import GoodsList from '@/pages/goods/goodsList'
import GoodsDetail from '@/pages/goods/goodsDetail'
import Category from '@/pages/Category'
import Cart from '@/pages/Cart'
import MemberIndex from '@/pages/member/member'
import Orders from '@/pages/member/Orders'
import UserInfo from '@/pages/member/UserInfo'
import Setting from '@/pages/member/Setting'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: HomeContent
        },
        {
          path: 'category',
          name: 'category',
          component: Category
        },{
          path: '/cart',
          component: Cart
        },
        {
          path: '/member',
          component: MemberIndex
        },
      ]
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
      path: '/goodslist',
      component: GoodsList
    },
    {
      path: '/goodsdetail',
      component: GoodsDetail
    },
    {
      path: '/orders',
      component: Orders
    },
    {
      path: '/userinfo',
      component: UserInfo
    },
    {
      path: '/setting',
      component: Setting
    }
  ]
})
