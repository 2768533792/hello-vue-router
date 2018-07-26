<template>
  <div id="app">
    {{msg}}
    <header><a href="javascript:;" @click="goBack">返回</a></header>
    <ul>
      <li>
        <router-link to="/foo">第一个页面</router-link>
      </li>
      <li>
        <router-link to="/bar">第二个页面</router-link>        
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
import Foo from '@/components/foo'
import Bar from '@/components/bar'
export default {
  name: 'App',
  data(){
    return {
      msg: '我来自首页'
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
