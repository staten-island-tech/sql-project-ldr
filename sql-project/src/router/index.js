import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
    /* {
      path: '/signupPage',
      name: 'signup paage',
      component: () => import('../views/SignupView.vue')
    }, */
    {
      path: '/loginPage',
      name: 'login page',
      component: () => import('../views/HomeView.vue')
    }
  ]
})

export default router
