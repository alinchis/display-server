import Vue from 'vue'
import Router from 'vue-router'
import AppProject from '@/components/app-project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppProject',
      component: AppProject
    }
  ]
})
