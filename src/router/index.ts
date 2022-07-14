import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomePage from '../views/HomePage.vue'
import MyTask from '../views/MyTask.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '',
    component: HomeView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: HomePage,
    children: [
      {
        path: 'mytask',
        name: 'mytask',
        component: MyTask,
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/LoginView.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
