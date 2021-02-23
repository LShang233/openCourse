import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout/Layout'
import HomePage from '@/views/HomePage/HomePage'
import ClassResources from '@/views/ClassResources/ClassResources'
import AboutUs from '@/views/AboutUs/AboutUs'
import Login from '@/views/Login/Login'
import Notice from '@/views/ClassResources/Notice/Notice'
import ClassSum from '@/views/ClassResources/ClassSum/ClassSum'
import VideoLearn from '@/views/ClassResources/VideoLearn/VideoLearn'
import ResourceDownload from '@/views/ClassResources/ResourceDownload/ResourceDownload'
import ExtraStudy from '@/views/ClassResources/ExtraStudy/ExtraStudy'
import Discuss from '@/views/ClassResources/Discuss/Discuss'
import ClassAssess from '@/views/ClassResources/ClassAssess/ClassAssess'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: 'ClassResources',
      children: [
        {
          path: 'HomePage',
          name: 'HomePage',
          component: HomePage
        },
        {
          path: 'ClassResources',
          name: 'ClassResources',
          component: ClassResources,
          redirect: 'ClassResources/Notice',
          children: [
            {
              name: 'Notice',
              path: 'Notice',
              component: Notice
            },
            {
              name: 'ClassSum',
              path: 'ClassSum',
              component: ClassSum
            },
            {
              name: 'VideoLearn',
              path: 'VideoLearn',
              component: VideoLearn
            },
            {
              name: 'ResourceDownload',
              path: 'ResourceDownload',
              component: ResourceDownload
            },
            {
              name: 'ExtraStudy',
              path: 'ExtraStudy',
              component: ExtraStudy
            },
            {
              name: 'Discuss',
              path: 'Discuss',
              component: Discuss
            },
            {
              name: 'ClassAssess',
              path: 'ClassAssess',
              component: ClassAssess
            },
          ]
        },
        {
          path: 'AboutUs',
          name: 'AboutUs',
          component: AboutUs
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
