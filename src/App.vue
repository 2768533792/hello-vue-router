<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      msg: '我来自首页'
    }
  },
  methods: {
  }
}
</script>

<style>
  @import 'assets/styles/style.css'
</style>
