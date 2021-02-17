import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout/Layout'
import HomePage from '@/views/HomePage/HomePage'
import ClassResources from '@/views/ClassResources/ClassResources'
import AboutUs from '@/views/AboutUs/AboutUs'
import TeacherGroup from '@/views/AboutUs/TeacherGroup/TeacherGroup'
import ReformAndResearch from '@/views/AboutUs/ReformAndResearch/ReformAndResearch'
import Awards from '@/views/AboutUs/Awards/Awards'
import TeacherStyle from '@/views/AboutUs/TeacherStyle/TeacherStyle'
import ActivitySilhouette from '@/views/AboutUs/ActivitySilhouette/ActivitySilhouette'
import NotificationForm from '@/views/AboutUs/NotificationForm/NotificationForm'
import UniversityAlliance from '@/views/AboutUs/UniversityAlliance/UniversityAlliance'
import Login from '@/views/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: 'HomePage',
      children: [
        {
          path: 'HomePage',
          name: 'HomePage',
          component: HomePage
        },
        {
          path: 'ClassResources',
          name: 'ClassResources',
          component: ClassResources
        },
        {
          path: 'AboutUs',
          name: 'AboutUs',
          component: AboutUs,
          redirect: '/TeacherGroup',
          children: [
            {
              path: '/TeacherGroup',
              name: 'TeacherGroup',
              component: TeacherGroup
            },
            {
              path: '/ReformAndResearch',
              name: 'ReformAndResearch',
              component: ReformAndResearch
            },
            {
              path: '/Awards',
              name: 'Awards',
              component: Awards
            },
            {
              path: '/TeacherStyle',
              name: 'TeacherStyle',
              component: TeacherStyle
            },
            {
              path: '/ActivitySilhouette',
              name: 'ActivitySilhouette',
              component: ActivitySilhouette
            },
            {
              path: '/NotificationForm',
              name: 'NotificationForm',
              component: NotificationForm
            },
            {
              path: '/UniversityAlliance',
              name: 'UniversityAlliance',
              component: UniversityAlliance
            },
          ]
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
