import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Foo from '@/components/foo'
import Bar from '@/components/bar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo
    },
    {
      path: '/bar',
      name: 'Bar',
      component: Bar
    }
  ]
})
