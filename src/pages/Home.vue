<template>
  <div>
    <router-view style="top: 46px;position:relative;"></router-view>
    <foot-menus></foot-menus>
  </div>
</template>

<script>
import FootMenus from '@/components/FootMenus'

export default {
  data () {
    return {
    }
  },
  components: {
    FootMenus,
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
