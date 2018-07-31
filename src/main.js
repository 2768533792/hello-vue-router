// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {XHeader, ViewBox, Tabbar, TabbarItem, Tab } from 'vux'

// Vue.use(XHeader).use(ViewBox).use(Tabbar).use(TabbarItem);

Vue.component('x-header', XHeader)
Vue.component('view-box', ViewBox)
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { 
    App
  },
  template: '<App/>'
})
