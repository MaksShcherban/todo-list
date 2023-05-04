import { createRouter, createWebHistory } from 'vue-router'
import MyMain from '../views/MyMain.vue'

const routes = [
  {
    path: '/',
    name: 'MyMain',
    component: MyMain
  }
]

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
