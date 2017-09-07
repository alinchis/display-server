import Vue from 'vue'
import Router from 'vue-router'
import AppWelcome from '@/components/app-welcome'
import AppProject from '@/components/app-project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppWelcome',
      component: AppWelcome
    },
    {
      path: '/project/:id',
      name: 'AppProject',
      component: AppProject
    }
  ]
})
