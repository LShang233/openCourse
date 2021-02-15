import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout/Layout'
import HomePage from '@/views/HomePage/HomePage'
import ClassResources from '@/views/ClassResources/ClassResources'
import AboutUs from '@/views/AboutUs/AboutUs'
import Login from '@/views/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name: 'Layout',
      component: Layout,
      redirect: 'HomePage',
      children:[
        {
          path:'HomePage',
          name:'HomePage',
          component: HomePage
        },
        {
          path:'ClassResources',
          name:'ClassResources',
          component: ClassResources
        },
        {
          path:'AboutUs',
          name:'AboutUs',
          component: AboutUs
        }
      ]
    },
    {
      path:'/Login',
      name: 'Login',
      component: Login
    }
  ]
})
