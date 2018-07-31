<template>
  <div style="height: 100%">
    <view-box>
      <router-view />
      <tabbar slot="bottom" style="position: fixed;">
        <tabbar-item icon-class="icon-home" selected link="/">
          <img slot="icon" :src="iconHome" />
          <img slot="icon-active" :src="iconHomeOn" />
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item show-dot link="/category">
          <img slot="icon" :src="iconCategory" />
          <img slot="icon-active" :src="iconCategoryOn" />
          <span slot="label">分类</span>
        </tabbar-item>
        <tabbar-item badge="2" link="cart">
          <img slot="icon" :src="iconCart" />
          <img slot="icon-active" :src="iconCartOn" />
          <span slot="label">购物车</span>
        </tabbar-item>
        <tabbar-item link="member">
          <img slot="icon" :src="iconUser" />
          <img slot="icon-active" :src="iconUserOn" />
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
import {XHeader, ViewBox, Tabbar, TabbarItem,} from 'vux'

export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      iconHome: require('@/assets/img/icon-home.png'),
      iconHomeOn: require('@/assets/img/icon-home-on.png'),
      iconCategory: require('@/assets/img/icon-category.png'),
      iconCategoryOn: require('@/assets/img/icon-category-on.png'),
      iconCart: require('@/assets/img/icon-cart.png'),
      iconCartOn: require('@/assets/img/icon-cart-on.png'),
      iconUser: require('@/assets/img/icon-user.png'),
      iconUserOn: require('@/assets/img/icon-user-on.png')
    }
  },
  components: {
    XHeader,
    ViewBox,
    Tabbar,
    TabbarItem
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
