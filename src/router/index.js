import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Field from '@/components/Field'
import Display from '@/components/Display'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/field',
      name: 'Field',
      component: Field
    },
    {
      path: '/display',
      name: 'Display',
      component: Display
    }
  ]
})
