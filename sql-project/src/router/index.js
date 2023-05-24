import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/loginPage',
      name: 'home',
      component: HomeView
    },
    {
      path: '/requests',
      name: 'requests',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CreateRequestsView.vue')
    },
    {
      path: '/requestlog',
      name: 'request logs',
      component: () => import('../views/RequestLogView.vue')
    },
    {
      path: '/signupPage',
      name: 'signupPage',
      component: () => import('../views/SignupView.vue')
    }
  ]
})

export default router
