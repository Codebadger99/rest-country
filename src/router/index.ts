import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import CountryView from '../views/country/Country.vue'
import CountryDetail from '../views/country/CountryDetail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: CountryView
  },
  {
    path: '/:name',
    name: 'homeDetail',
    component: CountryDetail,
    props: true
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
