import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const firstPage = () => import('../views/firstPage/firstPage')
const Path = () => import('../views/searchByPath/Path')
const Station = () => import('../views/searchByStation/Station')
const sortAndDelete = () => import('../views/sortAndDelete/sortAndDelete')
const Statistics = () => import('../views/statistics/Statistics')

const routes = [
  {
    path:'',
    redirect:'/firstPage'
  },
  {
    path:'/firstPage',
    component: firstPage
  },
  {
    path:'/searchByPath',
    component:Path
  },
  {
    path:'/searchByStation',
    component:Station
  },
  {
    path:'/sortAndDelete',
    component:sortAndDelete
  },
  {
    path:'/Statistics',
    component:Statistics
  },
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
