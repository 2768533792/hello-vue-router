<template>
  <div>
    <router-view></router-view>
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
    FootMenus
  }
}
</script>
