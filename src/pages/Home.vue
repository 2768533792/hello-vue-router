<template>
  <div>
    <Header></Header>
    <router-view style="top: 46px;position:relative;"></router-view>
    <foot-menus></foot-menus>
  </div>
</template>

<script>
import Header from '@/components/Header'
import FootMenus from '@/components/FootMenus'

export default {
  data () {
    return {
    }
  },
  components: {
    Header,
    FootMenus,
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
