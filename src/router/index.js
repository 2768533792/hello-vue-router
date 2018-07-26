import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import UserSettings from '@/pages/UserSettings'
import UserEmailsSubscriptions from '@/components/UserEmailsSubscriptions'
import UserProfile from '@/components/UserProfile'
import UserProfilePreview from '@/components/UserProfilePreview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/settings',
      component: UserSettings,
      children: [
        {
          path: 'emails',
          component: UserEmailsSubscriptions
        },
        {
          path: 'profile',
          components: {
            default: UserProfile,
            helper: UserProfilePreview
          }
        }
      ]
    }
  ]
})
