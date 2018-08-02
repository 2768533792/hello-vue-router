<template>
  <div id="app" style="height:100%">
    <view-box>
      <router-view/>
    </view-box>
  </div>
</template>

<script>
import {ViewBox} from 'vux'
export default {
  name: 'App',
  data(){
    return {
    }
  },
  components: {
    ViewBox
  },
  methods: {
  }
}
</script>

<style>
  @import 'assets/styles/common.min.css';
</style>
